import { Minus, MoonStars, Plus, Sun } from "@phosphor-icons/react"
import { createFileRoute } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { Title } from "@/components/title"
import useThemeStore from "@/stores/useTheme"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { t, i18n } = useTranslation()
  const [state, setState] = useState(0)
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-32">
      <label className="toggle text-base-content toggle-lg">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(ev) => setTheme(ev.target.checked ? "dark" : "light")}
        />
        <Sun />
        <MoonStars />
      </label>

      <Title>{t("hello")}</Title>

      <div className="flex items-center gap-2">
        <button className="btn btn-circle rounded-full btn-ghost btn-sm" onClick={() => setState((old) => old - 1)}>
          <Minus />
        </button>
        <span>{state}</span>
        <button className="btn btn-circle rounded-full btn-ghost btn-sm" onClick={() => setState((old) => old + 1)}>
          <Plus />
        </button>
      </div>

      <select className="select" onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
        <option disabled selected>
          Select a language
        </option>
        <option value="pt">Português (PT)</option>
        <option value="en">English ( EN)</option>
      </select>
    </div>
  )
}
