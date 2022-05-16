import { User } from '../../src/domain/entities/User'
import { UserRepository, UserRepositoryProps } from './../../src/application/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = []

  async findByEmailOrId (data: UserRepositoryProps): Promise<User | null> {
    const user = this.items.find(student => (
      [
        data.id ?? student.id === data.id,
        data.email ?? student.props.email === data.email
      ]
    ))

    if (!user) {
      return null
    }

    return user
  }

  async save (user: User): Promise<void> {
    this.items.push(user)
  }
}
