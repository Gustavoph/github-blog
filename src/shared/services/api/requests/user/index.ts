import { User } from '@/shared/dtos/user'
import { api } from '../..'

export const getUser = () => api.get<User>('/users/gustavoph')
