export type ChatContentType = {
  sender: string
  text: string
  status: string
  timestamp: number
}

export type MessageType = {
  sender: string
  text: string
  receiver?: string
  timestamp?: string
  messageId?: string
}

export type UserType = {
  email: string
  user: { messages: MessageType[] }
  userId?: string
}

export type UsersListType = {
  users: UserType[]
}

export type AddMessagePayload = {
  email: string
  message: MessageType
}
