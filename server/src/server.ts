import { app } from './app'

const ENVIRONMENT = process.env.RAILWAY_ENVIRONMENT || 'developmemnt'
const PROTOCOLL = ENVIRONMENT === 'production' ? 'https://' : 'http://'
const HOST = process.env.RAILWAY_STATIC_URL || 'localhost'
const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server is running in ${PROTOCOLL}${HOST}${ENVIRONMENT === 'developmemnt' && `:${PORT}`}`)
})
