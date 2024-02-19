import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = reactive([]);



  function addUser(user) {
    users.push(user)
  };

  function updateUser(user) {
    const index = users.findIndex((u) => u.id === user.id)
    if (index !== -1) {
      users[index] = user
    }
  };

  function deleteUser(id) {
    const index = users.findIndex((u) => u.id === id)
    if (index !== -1) {
      users.splice(index, 1)
    }
  };

  return { users, addUser, updateUser, deleteUser }
})
