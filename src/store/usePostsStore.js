import { create } from 'zustand'
import { getDataService } from '../service/getDataService'

export const usePostsStore = create(set => ({
  posts: [],
  isPending: true,
  isError: null,
  getData: () => {
    set({ isPending: true, isError: null })
    getDataService('https://jsonplaceholder.typicode.com/posts')
      .then(data => set({ posts: data }))
      .catch(() => set({ isError: 'error' }))
      .finally(() => set({ isPending: false }))
  }
}))
