const authRouter = require('./Auth.route')

function route(app) {
app.use("/auth",authRouter)

}

module.exports = route;