// src/types/chat.ts

enum ChatType {
  Single,
  Group,
  PrivateChannel,
  PublicChannel,
}

export interface ChatResponse {
  id: number | string
  wsId: number | string
  name: string | null
  type: ChatType | string
  createdAt: Date
  members: number[]
}
