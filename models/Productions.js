const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const productionsSchema = new Schema({
    production: {
        title: String, 
        type: String, 
        logo: String
    },
    productionCo: { 
        name: String, 
        address: String, 
        phone: String, 
        logo: String
    },
    poc: { 
        name: String, 
        phoneNum: String, 
    },
    days: Number, 
    dayOutOfDays: Number, 
    quickTimes: {
        crewCall: String, 
        shootingCall: String, 
        lunch: String, 
        secondMeal: String, 
        estimatedWrap: String
    },
    collaborators: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    }]

})

const Production = mongoose.model('Productions', productionsSchema)
module.exports = Production; 