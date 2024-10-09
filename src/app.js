const express = require('express')
const app = express()
const port = 3000

const { specs, swaggerUi } = require('./config/swagger');

const tresuresController = require("./controllers/treasures.controller");
const usersController = require("./controllers/users.controller");


app.use(express.json());
app.use("/treasures", tresuresController)
app.use("/users", usersController)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = {
  app
}