import { Router } from 'express'
import { time } from 'console'
const userRouter = Router()

userRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

userRouter.get('/about', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'hello'
      }
    ]
  })
})

export default userRouter
