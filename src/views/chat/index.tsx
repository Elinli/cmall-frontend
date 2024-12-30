import { fetchChatList } from '@/apis/chat'
// import { setEventSource } from '@/hooks/useEventSource'
import { ChatResponse } from '@/types/api/chat'
import { useEffect, useState } from 'react'

export default function Chat() {
  useEffect(() => {
    // setEventSource()
  }, [])
  const [chats, setChats] = useState<Array<ChatResponse>>([])
  useEffect(() => {
    fetchChatList()
      .then((res) => {
        setChats(res)
      })
      .catch(() => {
        setChats([])
      })
      .finally(() => {
        // console.log('finally')
      })
  }, [])
  const v = new Array(100).fill(1).map((_, i) => <div key={i}>{i}</div>)
  return (
    <div>
      {v}
      {chats.map((chat) => (
        <div key={chat.id}>
          {chat.id}
          {chat.members}
        </div>
      ))}
    </div>
  )
}
