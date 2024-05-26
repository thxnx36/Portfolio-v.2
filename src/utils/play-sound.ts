export const playSoundsInChat = (src: string) => {
  const audio = new Audio(src)
  audio.play()
}
