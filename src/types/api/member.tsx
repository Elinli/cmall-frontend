// src/types/member.ts

export interface MemberResponse {
  id: string | undefined
  name: string | null
  roles?: number[]
  createdAt: string
  email?: string
}

export interface MemberRequest {
  username?: string
  password?: string
  email?: string
  phone?: string
}
