import { lessonsSeed } from "./seeds/lessonsSeed";
import { getDatabase } from "./SQLitedatabases";
import * as Crypto from "expo-crypto";

export default class EBRepository {
  db = null;

  async init() {
    if (this.db) return; // evita reinicializar

    this.db = await getDatabase();

    await this.db.execAsync(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );
  `);

    await this.db.execAsync(`
    CREATE TABLE IF NOT EXISTS study_guides (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    );
  `);

    await this.db.execAsync(`
    CREATE TABLE IF NOT EXISTS lessons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      guide_id INTEGER NOT NULL,
      number INTEGER NOT NULL,
      title TEXT NOT NULL,
      introduction TEXT,
      conclusion TEXT,
      FOREIGN KEY (guide_id) REFERENCES study_guides(id)
    );
  `);

    await this.db.execAsync(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lesson_id INTEGER NOT NULL,
      question TEXT NOT NULL,
      verse TEXT NOT NULL,
      option_a TEXT NOT NULL,
      option_b TEXT NOT NULL,
      option_c TEXT NOT NULL,
      option_d TEXT NOT NULL,
      correct_option TEXT NOT NULL,
      FOREIGN KEY (lesson_id) REFERENCES lessons(id)
    );
  `);

    await this.db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'user',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

    await this.db.execAsync(`
    CREATE TABLE IF NOT EXISTS progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      lesson_id INTEGER NOT NULL,
      stars INTEGER NOT NULL,
      grade REAL NOT NULL,
      approved INTEGER NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, lesson_id)
    );
  `);

    // VERIFICA SE JÁ EXISTE CATEGORIA
    const seeded = await this.db.getAllAsync(
      "SELECT id FROM categories LIMIT 1"
    );

    if (!seeded.length) {
      await this.seedCategories();
      await this.seedLessons();
    }
  }



  // =============================
  // SEGURANÇA
  // =============================

  async hashPassword(password) {
    return Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
  }

  // ⭐ NOVO
  async verificaRoleAdmin(userId) {
    const data = await this.db.getAllAsync(
      "SELECT role FROM users WHERE id=?",
      [userId]
    );

    return data.length > 0 && data[0].role === "admin";
  }

  // ⭐ NOVO (helper profissional)
  async assertAdmin(userId) {
    const isAdmin = await this.verificaRoleAdmin(userId);

    if (!isAdmin) {
      throw new Error("Acesso negado");
    }
  }

  // =============================
  // USUÁRIOS
  // =============================

  async registerUser({ firstName, lastName, email, password }) {
    const hash = await this.hashPassword(password);

    const count = await this.db.getAllAsync(
      "SELECT COUNT(*) as total FROM users"
    );

    const role = count[0].total === 0 ? "admin" : "user";

    const result = await this.db.runAsync(
      `INSERT INTO users (first_name, last_name, email, password, role)
       VALUES (?, ?, ?, ?, ?)`,
      [firstName, lastName, email, hash, role]
    );

    return result.lastInsertRowid;
  }

  async login(email, password) {
    const hash = await this.hashPassword(password);

    const data = await this.db.getAllAsync(
      `SELECT id, first_name, last_name, email, role
       FROM users WHERE email=? AND password=?`,
      [email, hash]
    );

    return data.length ? data[0] : null;
  }

  // =============================
  // GERENCIAMENTO DE USUÁRIOS
  // =============================

  async getAllUsers(requestUserId) {
    await this.assertAdmin(requestUserId);

    return this.db.getAllAsync(`
      SELECT id, first_name, last_name, email, role
      FROM users
      ORDER BY first_name
    `);
  }

  async validateAdminPassword(adminId, password) {
    await this.assertAdmin(adminId);

    const hash = await this.hashPassword(password);

    const data = await this.db.getAllAsync(
      `SELECT id FROM users
       WHERE id=? AND password=? AND role='admin'`,
      [adminId, hash]
    );

    if (!data.length) {
      throw new Error("Senha de administrador inválida");
    }

    return true;
  }

  async updateUserSecure(targetUserId, adminId, adminPassword, data) {
    await this.validateAdminPassword(adminId, adminPassword);

    const fields = [];
    const values = [];

    if (data.firstName) {
      fields.push("first_name=?");
      values.push(data.firstName);
    }

    if (data.lastName) {
      fields.push("last_name=?");
      values.push(data.lastName);
    }

    if (data.email) {
      fields.push("email=?");
      values.push(data.email);
    }

    if (data.password) {
      const hash = await this.hashPassword(data.password);
      fields.push("password=?");
      values.push(hash);
    }

    if (!fields.length) return;

    values.push(targetUserId);

    await this.db.runAsync(
      `UPDATE users SET ${fields.join(", ")} WHERE id=?`,
      values
    );
  }

  async deleteUserSecure(targetUserId, adminId, adminPassword) {
    await this.validateAdminPassword(adminId, adminPassword);

    await this.db.runAsync(
      "DELETE FROM progress WHERE user_id=?",
      [targetUserId]
    );

    await this.db.runAsync(
      "DELETE FROM users WHERE id=?",
      [targetUserId]
    );
  }



  // =============================
  // CATEGORIAS
  // =============================
  async getCategories() {
    return this.db.getAllAsync("SELECT * FROM categories ORDER BY name");
  }

  async getCategoryById(id) {
    const data = await this.db.getAllAsync(
      "SELECT * FROM categories WHERE id=?",
      [id]
    );
    return data[0] || null;
  }

  /* 

  async createCategory({ name }) {
    await this.db.runAsync(
      "INSERT INTO categories (name) VALUES (?)",
      [name]
    );
  }

  async updateCategory(id, name) {
    await this.db.runAsync(
      "UPDATE categories SET name=? WHERE id=?",
      [name, id]
    );
  }

  async deleteCategory(id) {
    const guides = await this.getGuidesByCategory(id);
    for (const g of guides) await this.deleteStudyGuide(g.id);
    await this.db.runAsync("DELETE FROM categories WHERE id=?", [id]);
  }
*/
  // =============================
  // GUIAS DE ESTUDO
  // =============================

  async getGuidesByCategory(categoryId) {
    return this.db.getAllAsync(
      `SELECT * FROM study_guides WHERE category_id=? ORDER BY title`,
      [categoryId]
    );
  }

  async getGuideById(id) {
    const data = await this.db.getAllAsync(
      "SELECT * FROM study_guides WHERE id=?",
      [id]
    );
    return data[0] || null;
  }
  /*
  
    async createStudyGuide({ category_id, title, description }) {
      await this.db.runAsync(
        `INSERT INTO study_guides (category_id, title, description)
         VALUES (?, ?, ?)`,
        [category_id, title, description || ""]
      );
    }
  
    async deleteStudyGuide(id) {
      const lessons = await this.getLessonsByGuide(id);
      for (const l of lessons) await this.deleteLesson(l.id);
      await this.db.runAsync("DELETE FROM study_guides WHERE id=?", [id]);
    }
  
    */

  // =============================
  // 🔹 LIÇÕES
  // =============================

  async getLessonsByGuide(guideId) {
    return this.db.getAllAsync(
      `SELECT * FROM lessons WHERE guide_id=? ORDER BY number`,
      [guideId]
    );
  }

  async getLessonById(id) {
    const data = await this.db.getAllAsync(
      "SELECT * FROM lessons WHERE id=?",
      [id]
    );
    return data[0] || null;
  }
  /*

  async createLesson({ guide_id, number, title, introduction, conclusion }) {
    const result = await this.db.runAsync(
      `INSERT INTO lessons (guide_id, number, title, introduction, conclusion)
       VALUES (?, ?, ?, ?, ?)`,
      [guide_id, number, title, introduction || "", conclusion || ""]
    );
    return result.lastInsertRowid;
  }

  async deleteLesson(id) {
    await this.db.runAsync("DELETE FROM questions WHERE lesson_id=?", [id]);
    await this.db.runAsync("DELETE FROM progress WHERE lesson_id=?", [id]);
    await this.db.runAsync("DELETE FROM lessons WHERE id=?", [id]);
  }
*/


  // =============================
  // 🔹 QUESTÕES
  // =============================
  async addQuestion(q) {
    await this.db.runAsync(
      `INSERT INTO questions
      (lesson_id, question, verse, option_a, option_b, option_c, option_d, correct_option)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        q.lesson_id,
        q.question,
        q.verse,
        q.option_a,
        q.option_b,
        q.option_c,
        q.option_d,
        q.correct_option,
      ]
    );
  }

  async getQuestionsByLesson(lessonId) {
    return this.db.getAllAsync(
      "SELECT * FROM questions WHERE lesson_id=?",
      [lessonId]
    );
  }

  // =============================
  // PROGRESSO
  // =============================
  async saveProgress(userId, lessonId, points) {
    const grade = Number(points);

    const stars =
      grade === 10 ? 5 :
        grade >= 8 ? 4 :
          grade >= 7 ? 3 :
            grade >= 5 ? 2 :
              grade > 0 ? 1 : 0;

    const approved = grade >= 7 ? 1 : 0;

    const existing = await this.db.getAllAsync(
      "SELECT stars FROM progress WHERE user_id=? AND lesson_id=?",
      [userId, lessonId]
    );

    if (!existing.length) {
      // Primeiro registro
      await this.db.runAsync(
        `INSERT INTO progress (user_id, lesson_id, grade, stars, approved)
       VALUES (?, ?, ?, ?, ?)`,
        [userId, lessonId, grade, stars, approved]
      );
    } else {
      // Atualiza SEMPRE a nota
      const finalStars = Math.max(stars, existing[0].stars);

      await this.db.runAsync(
        `UPDATE progress
       SET grade=?, stars=?, approved=?, updated_at=CURRENT_TIMESTAMP
       WHERE user_id=? AND lesson_id=?`,
        [grade, finalStars, approved, userId, lessonId]
      );
    }

    return { stars, grade, approved };
  }
  async getLessonProgress(userId, lessonId) {
    const result = await this.db.getFirstAsync(
      `SELECT stars, grade, approved FROM progress 
     WHERE user_id = ? AND lesson_id = ?`,
      [userId, lessonId]
    );

    return result || null;
  }
  async canAccessLesson(userId, lesson) {
    if (lesson.number === 1) return true;

    const prev = await this.db.getAllAsync(
      `SELECT id FROM lessons WHERE guide_id=? AND number=?`,
      [lesson.guide_id, lesson.number - 1]
    );

    if (!prev.length) return true;

    const progress = await this.db.getAllAsync(
      `SELECT approved FROM progress WHERE user_id=? AND lesson_id=?`,
      [userId, prev[0].id]
    );

    return progress.length && progress[0].approved === 1;
  }

  // =============================
  // SEED
  // =============================
  async seedCategories() {
    const cats = ["Fundamentos do Evangelho", "Profecia", "Família", "Missão"];
    for (const name of cats) {
      await this.db.runAsync(
        "INSERT OR IGNORE INTO categories (name) VALUES (?)",
        [name]

      );
    }

  }

  async seedLessons() {
    for (const cat of lessonsSeed) {
      // Buscar categoria
      const categoryRows = await this.db.getAllAsync(
        "SELECT id FROM categories WHERE name=?",
        [cat.category]
      );

      if (!categoryRows.length) continue;

      const categoryId = categoryRows[0].id;

      // Criar ou obter guia
      await this.db.runAsync(
        `
      INSERT OR IGNORE INTO study_guides (category_id, title, description)
      VALUES (?, ?, ?)
      `,
        [categoryId, cat.guide, cat.description || ""]
      );

      const guideRows = await this.db.getAllAsync(
        `
      SELECT id FROM study_guides
      WHERE title=? AND category_id=?
      `,
        [cat.guide, categoryId]
      );

      if (!guideRows.length) {
        console.warn("Guia não encontrado:", cat.guide);
        continue;
      }

      const guideId = guideRows[0].id;

      // Criar lições
      for (const lesson of cat.lessons) {
        const resultLesson = await this.db.runAsync(
          `
        INSERT OR IGNORE INTO lessons
        (guide_id, number, title, introduction, conclusion)
        VALUES (?, ?, ?, ?, ?)
        `,
          [
            guideId,
            lesson.number,
            lesson.title,
            lesson.introduction || "",
            lesson.conclusion || "",
          ]
        );

        // Buscar ID da lição
        const lessonRows = await this.db.getAllAsync(
          `
        SELECT id FROM lessons
        WHERE guide_id=? AND number=?
        `,
          [guideId, lesson.number]
        );

        if (!lessonRows.length) {
          console.warn("Lição não encontrada:", lesson.title);
          continue;
        }

        const lessonId = lessonRows[0].id;

        // Inserir perguntas COM lesson_id
        for (const q of lesson.questions) {
          await this.db.runAsync(
            `
          INSERT OR IGNORE INTO questions
          (
            lesson_id,
            question,
            verse,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_option
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `,
            [
              lessonId,
              q.question,
              q.verse,
              q.option_a,
              q.option_b,
              q.option_c,
              q.option_d,
              q.correct_option,
            ]
          );
        }
      }
    }
  }

}