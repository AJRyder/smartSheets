const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const talentSchema = new Schema({
    talentId: Number, 
    contact: { 
        name: String,
        phoneNum: String, 
        email: String, 
    }, 
    avatar: String, 
    role: String, 
    callTimes: { 
        pickUp: String, 
        call: String, 
        onSet: String, 
    }, 
    isBackground: Boolean
})

const Talent = mongoose.model('Talents', talentSchema)
module.exports = Talent; 