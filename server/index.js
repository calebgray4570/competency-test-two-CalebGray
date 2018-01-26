const express = require('express')
      bodyParser = require('body-parser')
      cors = require('cors')
      massive = require('massive')
require('dotenv').config()

const contact_controller = require('./contact_controller')

const app = express() // 74C
app.use(bodyParser.json() )
app.use(cors())
// 70C
massive(process.env.DB_CONNECTION).then( db => { 
    app.set( 'db', db)
})


app.get('/getContact', contact_controller.getContact)
app.get('/getContact/:contactName', contact_controller.getSingleContact )
app.post('/addContact', contact_controller.addContact)
app.put('/editContact/:contactName', contact_controller.editContact)
app.delete('/deleteContact/:contactName', contact_controller.deleteContact)in

app.listen( process.env.SERVER_PORT, () => {console.log('listening on port 3005')})