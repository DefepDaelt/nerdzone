import { hash } from 'bcrypt'
import { Entity } from './../../core/domain/Entity'

type UserProps = {
  name: string
  email: string
  password: string
  createdAt?: Date
}

export class User extends Entity<UserProps> {
  // eslint-disable-next-line no-useless-constructor
  private constructor (props: UserProps, id?: string) {
    super(props, id)
  }

  static async create (props: UserProps, id?: string) {
    const user = new User({
      ...props,
      password: await hash(props.password, 10),
      createdAt: props.createdAt ?? new Date()
    }, id)

    return user
  }
}
