import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCountStore = create(
  persist(
    set => ({
      count: 0,
      inc: () => set(state => ({ count: state.count + 1 })),
      dec: () => set(state => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 })
    }),
    { name: 'count-storage' }
  )
)
