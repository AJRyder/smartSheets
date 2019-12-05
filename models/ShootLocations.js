const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const shootLocationSchema = new Schema({
    name: String, 
    address: String, 
    phoneNum: String, 
    parking: String, 
    parkingNotes: String, 
    nearestHospital: { 
        name: String, 
        address: String, 
        phoneNum: String, 
    }

})

const ShootLocation = mongoose.model('ShootLocations', shootLocationSchema)
module.exports = ShootLocation; 