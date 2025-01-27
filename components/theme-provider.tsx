"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type Theme = "dark" | "light" | "system"
type Attribute = "class" | "data-theme" | "data-mode"

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: Attribute | Attribute[]
  defaultTheme?: Theme
  enableSystem?: boolean
  storageKey?: string
  forcedTheme?: Theme
  disableTransitionOnChange?: boolean
  themes?: Theme[]
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 