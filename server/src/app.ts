import express from 'express'
import { router as homeRouter } from './router'

export const app = express()

app.use(express.json())

app.use('/auth', homeRouter)
