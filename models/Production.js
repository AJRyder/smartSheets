const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const productionSchema = new Schema({
    production: {
        title: String, 
        type: String, 
        logo: String,
        days: Number, 
        dayOutOfDays: Number, 
    },

    productionCo: { 
        name: String, 
        address: String, 
        phone: String, 
        logo: String
    },

    pointOfContact: { 
        name: String, 
        phoneNum: String, 
    },

    quickRefTimes: {
        crewCall: String, 
        shootingCall: String, 
        lunch: String, 
        secondMeal: String, 
        estimatedWrap: String
    },

    collaborators: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    }], 

    callSheetList: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CallSheets'
    }]
})

const Production = mongoose.model('Productions', productionSchema)
module.exports = Production; 