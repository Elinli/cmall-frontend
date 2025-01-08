// src/types/member.ts

export interface MemberType {
  id: string | undefined
  username: string | null
  roles?: number[]
  createTime: string
  updateTime: string
  avatar?: string
  deptId?: number
  email?: string
  phone?: string
  status?: string
  password?: string
}

export type MemberRequest = Partial<
  Pick<MemberType, 'username' | 'email' | 'status'>
>

export type MemberResponse = Partial<MemberType>

export interface MemberResponseType {
  body: MemberResponse[]
  total: number
}

// create member request
export type CreateMemberRequest = Omit<
  MemberType,
  'id' | 'createTime' | 'updateTime'
>

// update member request
export type UpdateMemberRequest = Omit<
  MemberType,
  'createTime' | 'updateTime' | 'password'
>
