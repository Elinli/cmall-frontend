// src/types/member.ts

export interface RoleType {
  id: string | undefined
  code: string | null
  name: string | null
  createTime: string
  updateTime: string
  description?: string
  status?: string
}

export type RoleRequest = Partial<Pick<RoleType, 'code' | 'status'>>

export type RoleResponse = Partial<RoleType>

export interface RoleResponseType {
  body: RoleResponse[]
  total: number
}

// create member request
export type CreateRoleRequest = Omit<
  RoleType,
  'id' | 'createTime' | 'updateTime'
>

// update member request
export type UpdateRoleRequest = Omit<
  RoleType,
  'createTime' | 'updateTime' | 'password'
>
