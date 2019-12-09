const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const productionSchema = new Schema({
    info: {
        title: String, 
        mediaType: String, 
        logo: String,
        days: String, 
        dOOD: String, 
    },

    productionCo: { 
        name: String, 
        address: String, 
        phoneNum: String, 
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
    callSheetList: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CallSheets'
    }]
})

const Production = mongoose.model('Productions', productionSchema)
module.exports = Production; 