import { Router } from 'express'
import { createUserController } from './application/useCases/User/Create'

export const router = Router()

router.post('/register', async (request, response) => {
  return createUserController.handle(request, response)
})
