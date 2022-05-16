import { User } from './../../../../domain/entities/User'
import { UserRepository } from './../../../repositories/UserRepository'
import { CreateUserRequestDTO } from './CreateUserDTO'

export class CreateUser {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userRepository: UserRepository
  ) {}

  async execute ({ name, email, password }: CreateUserRequestDTO) {
    console.log(name, email, password)
    if (!email.trim()) {
      throw new Error('Email is required')
    }

    const userAlreadyExsists = await this.userRepository.findByEmailOrId({ email })

    console.log(userAlreadyExsists)

    if (userAlreadyExsists) {
      throw new Error('User already exsists')
    }

    if (!password.trim()) {
      throw new Error('Password is required')
    }

    const user = User.create({
      name,
      email,
      password
    })

    this.userRepository.save(user)

    user.props.password = undefined

    return user
  }
}
