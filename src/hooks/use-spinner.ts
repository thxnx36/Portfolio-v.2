import { useEffect } from 'react'

export const useSpinner = (timeout = 1000) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      const spinner = document.getElementById('spinner')
      if (spinner) {
        spinner.remove()
        document.body.style.overflow = 'unset'
      }
    }, timeout)
    return () => clearTimeout(timer)
  }, [timeout])
}
