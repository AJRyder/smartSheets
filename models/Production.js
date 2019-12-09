const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const productionSchema = new Schema({
    info: {
        title: String, 
        mediaType: String, 
        logo: String 
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
    callSheetList: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CallSheets'
    }]
})

const Production = mongoose.model('Productions', productionSchema)
module.exports = Production; 