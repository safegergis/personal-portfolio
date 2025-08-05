export const useTheme = () => {
  const isDark = useCookie('theme-dark', {
    default: () => false,
    serializer: {
      read: (value: string) => value === 'true',
      write: (value: boolean) => value.toString()
    }
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const setTheme = (dark: boolean) => {
    isDark.value = dark
  }

  // Auto-detect system preference on client-side only if no preference is stored
  onMounted(() => {
    if (!process.server && !useCookie('theme-dark').value) {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  })

  return {
    isDark: readonly(isDark),
    toggleTheme,
    setTheme
  }
}