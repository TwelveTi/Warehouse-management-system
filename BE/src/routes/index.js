const authRouter = require('./authRoute')
const userRouter = require('./userRoute')
const productRouter =require('./productRoute')
const warehouseRouter = require('./wareHouseRoute')
const transactionRouter = require('./transactionRoute')
const inventoryRouter = require('./inventoryRoute')
function route(app) {
app.use("/auth",authRouter)
app.use("/users",userRouter)
app.use("/products",productRouter)
app.use("/warehouses",warehouseRouter)
app.use("/transactions",transactionRouter)
app.use("/inventories",inventoryRouter)
}

module.exports = route;