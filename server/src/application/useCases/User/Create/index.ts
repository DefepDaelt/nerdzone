import { PrismaUserRepository } from './../../../repositories/implements/prisma/PrismaUserRepository'
import { CreateUser } from './CreateUser'
import { CreateUserController } from './CreateUserController'

const userRepository = new PrismaUserRepository()

export const createUser = new CreateUser(
  userRepository
)

export const createUserController = new CreateUserController(
  createUser
)
