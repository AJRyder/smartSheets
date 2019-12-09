const express       = require('express')
const app           = express()
const bodyParser    = require('body-parser')
const cors          = require('cors')
const mongoose      = require('mongoose')
const path          = require('path')

const PORT          = process.env.PORT || 8000

require('./config/db')

const userController        = require('./controllers/users')
const callSheetController   = require('./controllers/CallSheets')
const productionController  = require('./controllers/Productions')

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/auth', userController)
app.use('/auth', callSheetController)
app.use('/auth', productionController)

app.get('/hello', (req, res) => { 
    res.json({ message: 'World' })
})

app.get('/*', (req,res) => { 
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => { 
    console.log(`Running on port ${PORT}`)
})