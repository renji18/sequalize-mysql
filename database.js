const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(
  "mysql_sequalize",
  process.env.DB_ID,
  process.env.DB_PWD,
  {
    host: "localhost",
    dialect: "mysql",
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database successfully")
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err)
  })

module.exports = sequelize
