const { MongoClient } = require('mongodb')

let dbConnection
let uri ="mongodb+srv://GogoMogo1989:Bp19891207@cluster0.0x4xav2.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}