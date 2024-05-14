export const setStorageValue = (key: string, value: string) =>
  localStorage.setItem(key, value)

export const getStorageValue = (key: string) => localStorage.getItem(key)
