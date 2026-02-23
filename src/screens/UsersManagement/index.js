import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EBRepository from "../../database/EBRepository";
import styles from "./style";

export default function UsersManagement() {
  const [repo, setRepo] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loggedUser, setLoggedUser] = useState(null);

  const [editingUserId, setEditingUserId] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [actionType, setActionType] = useState(null);
  const [targetUserId, setTargetUserId] = useState(null);

  // ======================
  // INIT
  // ======================
  useEffect(() => {
    const init = async () => {
      const repository = new EBRepository();
      await repository.init();
      setRepo(repository);

      // 🔹 carrega usuário primeiro
      const storedUser = await AsyncStorage.getItem("user");
      const user = storedUser ? JSON.parse(storedUser) : null;

      if (!user) {
        Alert.alert("Erro", "Usuário não autenticado");
        setLoading(false);
        return;
      }

      setLoggedUser(user);

      // 🔹 agora pode buscar usuários com segurança
      const data = await repository.getAllUsers(user.id);
      setUsers(data);

      setLoading(false);
    };

    init();
  }, []);

  // ======================
  // RELOAD
  // ======================
  const reloadUsers = async () => {
    const data = await repo.getAllUsers(loggedUser.id);
    setUsers(data);
  };

  // ======================
  // EDITAR
  // ======================
  const startEdit = (user) => {
    setEditingUserId(user.id);
    setForm({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      password: "",
    });
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const requestSaveEdit = (userId) => {
    if (!form.firstName || !form.lastName || !form.email) {
      Alert.alert("Atenção", "Campos obrigatórios não preenchidos");
      return;
    }

    if (form.password && form.password.length < 6) {
      Alert.alert("Senha fraca", "Mínimo de 6 caracteres");
      return;
    }

    setActionType("edit");
    setTargetUserId(userId);
    setAdminPassword("");
    setModalVisible(true);
  };

  // ======================
  // EXCLUIR
  // ======================
  const requestDelete = (userId) => {
    if (loggedUser.role !== "admin") {
      Alert.alert(
        "Acesso negado",
        "Somente administradores podem excluir usuários."
      );
      return;
    }

    Alert.alert(
      "Excluir conta",
      "Essa ação é irreversível. Deseja continuar?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Continuar",
          style: "destructive",
          onPress: () => {
            setActionType("delete");
            setTargetUserId(userId);
            setAdminPassword("");
            setModalVisible(true);
          },
        },
      ]
    );
  };

  // ======================
  // CONFIRMAR ADMIN
  // ======================
  const confirmAdminAction = async () => {
    if (!adminPassword) {
      Alert.alert("Atenção", "Informe a senha do administrador");
      return;
    }

    try {
      if (actionType === "edit") {
        await repo.updateUserSecure(
          targetUserId,
          loggedUser.id,
          adminPassword,
          {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password || null,
          }
        );

        cancelEdit();
      }

      if (actionType === "delete") {
        await repo.deleteUserSecure(
          targetUserId,
          loggedUser.id,
          adminPassword
        );
      }

      setModalVisible(false);
      reloadUsers();
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Usuários</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          const isEditing = editingUserId === item.id;

          return (
            <View style={styles.card}>
              {isEditing ? (
                <>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={form.firstName}
                    onChangeText={(v) => setForm({ ...form, firstName: v })}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    value={form.lastName}
                    onChangeText={(v) => setForm({ ...form, lastName: v })}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    value={form.email}
                    onChangeText={(v) => setForm({ ...form, email: v })}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Nova senha (opcional)"
                    secureTextEntry
                    value={form.password}
                    onChangeText={(v) => setForm({ ...form, password: v })}
                  />

                  <View style={styles.cardActions}>
                    <TouchableOpacity onPress={cancelEdit}>
                      <Text style={styles.cancelText}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => requestSaveEdit(item.id)}>
                      <Text style={styles.saveText}>Salvar</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <>
                  <Text style={styles.userName}>
                    {item.first_name} {item.last_name}
                  </Text>

                  <Text style={styles.userEmail}>{item.email}</Text>

                  {/* 🔥 BOTÕES ADMIN RESTAURADOS */}
                  <View style={styles.cardActions}>
                    <TouchableOpacity onPress={() => startEdit(item)}>
                      <Text style={styles.editText}>Editar</Text>
                    </TouchableOpacity>

                    {loggedUser?.role === "admin" &&
                      loggedUser.id !== item.id && (
                        <TouchableOpacity onPress={() => requestDelete(item.id)}>
                          <Text style={styles.deleteText}>Excluir</Text>
                        </TouchableOpacity>
                      )}
                  </View>
                </>
              )}
            </View>
          );
        }}
      />

      {/* MODAL ADMIN */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              Confirme a senha do administrador
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Senha do administrador"
              secureTextEntry
              value={adminPassword}
              onChangeText={setAdminPassword}
            />

            <View style={styles.cardActions}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={confirmAdminAction}>
                <Text style={styles.saveText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}