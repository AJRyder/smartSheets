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
    swfStatus: String, 
    callTimes: { 
        pickUp: String, 
        call: String, 
        onSet: String, 
    }, 
    isBackgroundTalent: Boolean
})

const Talent = mongoose.model('Talents', talentSchema)
module.exports = Talent; 