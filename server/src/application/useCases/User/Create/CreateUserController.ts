import { Request, Response } from 'express'
import { CreateUser } from './CreateUser'

export class CreateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private createUser: CreateUser
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    console.log(request.body)

    try {
      const user = await this.createUser.execute({
        name,
        email,
        password
      })

      console.log(user)

      return response.status(201).send({ user })
    } catch (error) {
      return response.status(400).send({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
