import { User } from './../../../../domain/entities/User'
import { prisma } from './../../../../utils/prisma'
import { UserRepository, UserRepositoryProps } from './../../UserRepository'

export class PrismaUserRepository implements UserRepository {
  async findByEmailOrId (data: UserRepositoryProps): Promise<User | null> {
    try {
      // eslint-disable-next-line multiline-ternary
      const prismaUser = data.id ? (
        await prisma.user.findFirst({
          where: {
            id: data.id
          }
        })
      ) : (
        await prisma.user.findFirst({
          where: {
            email: data.email
          }
        })
      )

      const user = User.create({
        name: prismaUser.name,
        email: prismaUser.email,
        password: prismaUser.password
      }, prismaUser.id)

      return user
    } catch (error) {
      return null
    }
  }

  async save (user: User): Promise<void> {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.props.name,
        email: user.props.email,
        password: user.props.password,
        createdAt: user.props.createdAt
      }
    })
  }
}
