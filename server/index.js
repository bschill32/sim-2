require("dotenv").config()
const express = require("express")
const massive = require("massive")

const c = require("./controller")

const app = express()
app.use(express.json())
const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)
  .then(db => {
    console.log(`They're going to kill us!`)
    app.set("db", db)
  })
  .catch(err => {
    console.error("Tenemos una problema muy grande....", err)
  })

app.get("/api/homes/", c.getAllHouses)
app.post("/api/homes/", c.addNewHouse)
app.delete("/api/homes/:id", c.deleteHouse)

app.listen(SERVER_PORT, () => {
  console.log(`The Red Coats are Coming with ${SERVER_PORT} men.`)
})
