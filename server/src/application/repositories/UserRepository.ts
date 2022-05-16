import { User } from './../../domain/entities/User'

export type UserRepositoryProps = {
  id?: string
  email?: string
}

export interface UserRepository {
  findByEmailOrId(data: UserRepositoryProps): Promise<User | null>
  save(user: User): Promise<void>
}
