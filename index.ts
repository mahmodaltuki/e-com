import { DataSource } from "typeorm"
import express from 'express'

//entities
import { User } from "./entities/user.entity"
import { Order } from "./entities/order.entity"
import { Category } from "./entities/category.entity"
import { Cart } from "./entities/cart.entity"
import { Product } from "./entities/product.entity"

//routers
import { userRouter } from "./routers/user.router"
import { categoryRouter } from "./routers/category.router"

const app = express()

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [Cart, Order, Category, Product, User],
    synchronize: true
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")

    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


app.use(express.json())

app.use(userRouter)
app.use(categoryRouter)

app.listen(8000, () => {
    console.log("server on port 8000")
})