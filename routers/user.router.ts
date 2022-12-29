import express from "express"


import {
    createUser, deleteUser, getAllUser, getUser, updateUser
} from "../controllers/user..controller"

const router = express.Router()

router.post('/api/user', createUser)
    .get('/api/user/:id', getUser)
    .get('/api/user', getAllUser)
    .put('/api/user/:id', updateUser)
    .delete('/api/user/:id',deleteUser)

export { router as userRouter }