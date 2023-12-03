const express = require("express")
const app = express()
const port = 3000
const User = require("./models/user")
const sequelize = require("./database")

app.use(express.json())

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("All models were synchronized successfully")
  })
  .catch((err) => {
    console.log("Errow occurred during model synchronization", err)
  })

app.get("/users", async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

app.post("/users", async (req, res) => {
  const { name, email } = req.body
  const newUser = await User.create({ name, email })
  res.json(newUser)
})

app.put("/users/:id", async (req, res) => {
  const { name, email } = req.body
  const user = await User.findByPk(req.params.id)
  if (user) {
    user.name = name
    user.email = email
    await user.save()
    res.json(user)
  } else {
    res.status(404).send("User not found")
  }
})

app.delete("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id)
  if (user) {
    await user.destroy()
    res.json(user)
  } else {
    res.status(404).send("User not found")
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
