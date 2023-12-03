const express = require("express")
const app = express()
const port = 3000
const User = require("./models/user")

app.use(express.json())

app.get("/users", async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

app.post("/users", async (req, res) => {
  const { name, email } = req.body
  const newUser = await User.create({ name, email })
  res.json(newUser)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
