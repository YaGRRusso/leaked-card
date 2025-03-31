import { create } from "zustand"
import { persist } from "zustand/middleware"

type ThemeProps = "dark" | "light" | undefined

type ThemeStoreType = {
  theme: ThemeProps
  setTheme: (theme: ThemeProps | ((theme: ThemeProps) => ThemeProps)) => void
  toggleTheme: () => void
}

const useThemeStore = create<ThemeStoreType>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () => set(({ theme }) => ({ theme: theme === "dark" ? "light" : "dark" })),
      setTheme: (theme) =>
        set((state) => ({
          theme: typeof theme === "function" ? theme(state.theme) : theme,
        })),
    }),
    {
      name: "theme",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
)

const changeTheme = (theme: ThemeProps) => {
  if (theme === "dark") {
    document.documentElement.dataset.theme = "dark"
  } else {
    document.documentElement.dataset.theme = "light"
  }
}

useThemeStore.subscribe(({ theme }) => changeTheme(theme))
changeTheme(useThemeStore.getState().theme)

export default useThemeStore
