import * as SQLite from "expo-sqlite";

let db = null;

export async function getDatabase() {
  if (!db) {
    db = await SQLite.openDatabaseAsync("database.sqlite");
  }
  return db;
}