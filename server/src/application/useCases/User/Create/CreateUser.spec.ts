import { InMemoryUserRepository } from './../../../../../tests/repositories/inMemoryUserRepository'
import { CreateUser } from './CreateUser'

const userRepository = new InMemoryUserRepository()

const sut = new CreateUser(
  userRepository
)

describe('Create user use case', () => {
  it('should be able to create a new user', async () => {
    const response = await sut.execute({
      name: 'fake-username',
      email: 'fake@email.com',
      password: 'fake-password'
    })

    expect(response)
      .toBeTruthy()

    expect(response)
      .toBe(userRepository.items.find(item => item.id === response.id))
  })

  it('should not be able to create a user without a email', async () => {
    await expect(
      sut.execute({
        name: 'fake-username',
        email: '',
        password: 'fake-password'
      })
    )
      .rejects
      .toThrow()
  })

  it('should not be able to create a user without a password', async () => {
    await expect(
      sut.execute({
        name: 'fake-username',
        email: 'fake@email.com',
        password: ''
      })
    )
      .rejects
      .toThrow()
  })

  it('should not be able to create a user with an email already registered', async () => {
    await expect(
      sut.execute({
        name: 'fake-username',
        email: 'fake@email.com',
        password: 'fake-password'
      })
    )
      .rejects
      .toThrow()
  })
})
