import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUsersFromRequest } from "../services/users.service.js";

export const useUsersStore = defineStore('users', () => {
    const users = ref( undefined )

    const updateUsersLists = async () => {
        users.value = await getUsersFromRequest()
    }

    return {
        users,
        updateUsersLists,
    }
})
