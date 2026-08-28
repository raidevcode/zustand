import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useCountStore = create(
  persist(set => ({
    count: 0,
    increment: () => set(({ count }) => ({ count: count + 1 })),
    decrement: () => set(({ count }) => ({ count: count - 1 })),
    reset: () => set({ count: 0 })
  }), {
    name: 'count',
    storage: createJSONStorage(() => localStorage)
  })
)
