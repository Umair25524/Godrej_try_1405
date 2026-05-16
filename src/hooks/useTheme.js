import { useEffect, useState } from "react"

export function useTheme() {

  const themes = [
    {
      id: "dark",
      label: "Dark",
      colors: ["#1c2435", "#414b5f", "#b4813b"],
      vars: {
        "--bg": "#1c2435",
        "--panel": "#414b5f",
        "--gold": "#b4813b",
        "--text": "#f7f4ef"
      }
    },
    {
      id: "blue",
      label: "Ocean",
      colors: ["#0f172a", "#1e3a8a", "#60a5fa"],
      vars: {
        "--bg": "#0f172a",
        "--panel": "#1e3a8a",
        "--gold": "#60a5fa",
        "--text": "#e2e8f0"
      }
    },
    {
      id: "gold",
      label: "Luxury",
      colors: ["#2a1a0d", "#b4813b", "#e9c76d"],
      vars: {
        "--bg": "#2a1a0d",
        "--panel": "#5a3b1a",
        "--gold": "#e9c76d",
        "--text": "#fff4d6"
      }
    }
  ]

  const [theme, setThemeState] = useState(
    localStorage.getItem("theme") || "dark"
  )

  const setTheme = (id) => {
    setThemeState(id)
    localStorage.setItem("theme", id)
  }

  useEffect(() => {

    const root = document.documentElement

    const activeTheme = themes.find(t => t.id === theme)

    if (!activeTheme) return

    Object.entries(activeTheme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

  }, [theme])

  return { theme, setTheme, themes }
}