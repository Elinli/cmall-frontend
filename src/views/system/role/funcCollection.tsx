import { deleteRole, createRole, updateRole } from '@/apis/role'
import { CreateRoleRequest, UpdateRoleRequest } from '@/types/api/role'

export const funcMapping = (type: string, p: unknown) => {
  if (type === 'delete') {
    return deleteRole(p as string)
  } else if (type === 'create') {
    return createRole(p as CreateRoleRequest)
  } else {
    return updateRole(p as UpdateRoleRequest)
  }
}
