import express from "express"


import {
    createCategory, deleteCategory, getAllCategory, getCategory, updateCategory
} from "../controllers/category.controller"


const router = express.Router()

router.post('/api/category', createCategory)
    .get('/api/category/:id', getCategory)
    .get('/api/category', getAllCategory)
    .put('/api/category/:id', updateCategory)
    .delete('/api/category/:id', deleteCategory)

export { router as categoryRouter }