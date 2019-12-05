const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const crewSchema = new Schema({
    department: String, 
    position: String, 
    contact: { 
        name: String, 
        phoneNum: String, 
        email: String, 
    },
    callTime: String, 
})

const Crew = mongoose.model('Crews', crewSchema)
module.exports = Crew; 