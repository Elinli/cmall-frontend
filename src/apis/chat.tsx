// src/services/userService.ts
import apiClient from '../utils/request'
import { ChatResponse } from '../types/api/chat'

export const fetchChatList = async (): Promise<ChatResponse[]> => {
  const response = await apiClient.get('/api/chats')
  return response.data
}
