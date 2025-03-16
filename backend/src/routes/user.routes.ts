import { Router } from 'express'
import { authMiddleware, checkLoggedOut } from '../middleware/auth.middleware'
import userController from '../controllers/user.controller'

const pageRouter = Router()

pageRouter.post('/signup', userController.addUser)
pageRouter.post('/login', userController.loginUser)
pageRouter.get('/logout', userController.logout)
pageRouter.get('/check-auth', authMiddleware, userController.getUserByUsername)

export default pageRouter