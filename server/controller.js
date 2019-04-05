module.exports = {
  getAllHouses: (req, res) => {
    let db = req.app.get("db")
    db.get_all_houses()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log("Tenemos Problemas....", err)
        res.status(500).send(err)
      })
  },

  addNewHouse: (req, res) => {
    let db = req.app.get("db")
    let { name, address, city, state, zip } = req.body.newCasa
    db.add_new_house([name, address, city, state, zip])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log("Tenemos Problemas....", err)
        res.status(500).send(err)
      })
  },

  deleteHouse: (req, res) => {
    let db = req.app.get("db")
    let { id } = req.params
    db.delete_house(id)
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log("Tenemos Problemas....", err)
        res.status(500).send(err)
      })
  }
}
