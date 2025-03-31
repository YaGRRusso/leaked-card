import { create } from "zustand"
import { persist } from "zustand/middleware"

type UserProps =
  | {
      token: string
      id?: string
      email?: string
      name?: string
      role?: string
    }
  | undefined

type AuthStoreProps = {
  user: UserProps
  setUser: (user: UserProps | ((user: UserProps) => UserProps)) => void
}

const useAuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (user) =>
        set((state) => ({
          user: typeof user === "function" ? user(state.user) : user,
        })),
    }),
    {
      name: "auth",
      partialize: (state) => ({ user: state.user }),
    },
  ),
)

export default useAuthStore
