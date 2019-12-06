const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const callSheetSchema = new Schema({
    crew: { 
        department: String, 
        position: String,

        contact: { 
            name: String, 
            phoneNum: String, 
            email: String, 
        },
    },

    client: { 
        agency: String, 
        name: String, 
        phoneNum: String
    }, 

    talent: {
        talentId: Number, 
        avatar: String, 
        role: String, 
        isBgTalent: Boolean,

        callTimes: { 
            pickUp: String, 
            call: String, 
            onSet: String, 
        },

        contact: { 
            name: String,
            phoneNum: String, 
            email: String, 
        }
    },

    schedule: { 
        callTime: String, 
        time: String, 
        sceneNum: String, 
        description: String, 
        DorN: String,  
    },
    
    shootLocations: { 
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
    }
})

const CallSheet = mongoose.model('Crews', callSheetSchema)
module.exports = CallSheet; 