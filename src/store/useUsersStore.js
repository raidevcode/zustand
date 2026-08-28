import { create } from 'zustand'
import { getDataService } from '../service/getDataService'

export const useUsersStore = create(set => ({
  users: [],
  isPending: true,
  isError: null,
  getData: () => {
    set({ isPending: true, isError: null })
    getDataService('https://jsonplaceholder.typicode.com/users')
      .then(data => set({ users: data }))
      .catch(() => set({ isError: 'error' }))
      .finally(() => set({ isPending: false }))
  }
}))
