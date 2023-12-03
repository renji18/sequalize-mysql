const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("mysql_sequalize", "renji", "Mittals21@2110", {
  host: "localhost",
  dialect: "mysql",
})

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database successfully")
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err)
  })

module.exports = sequelize
