import express from 'express'
import userRouter from './users.routers'
import databaseService from '../services/database.services'

const app = express()
const port = 3000

app.use('/user', userRouter)

databaseService.connect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
