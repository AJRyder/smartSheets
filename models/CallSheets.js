const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const callSheetSchema = new Schema({
    crew: [{ 
        department: String, 
        position: String,
        callTimes: String, 
        contact: { 
            name: String, 
            phoneNum: String, 
            email: String, 
        },
    }],

    client: { 
        agency: String, 
        name: String, 
        phoneNum: String
    }, 

    talent: [{
        talentId: String, 
        avatar: String, 
        role: String, 
        isBgTalent: String,

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
    }],

    schedule: [{ 
        time: String, 
        sceneNum: String, 
        description: String, 
        DorN: String,  
    }],

    shootLocations: [{ 
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
    }], 

    quickRefTimes: {
        crewCall: String, 
        shootingCall: String, 
        lunch: String, 
        secondMeal: String, 
        estimatedWrap: String
    },
    
    dayCount: {
        totalDays: String, 
        dOOD: String,
    }
})

const CallSheet = mongoose.model('CallSheets', callSheetSchema)
module.exports = CallSheet; 