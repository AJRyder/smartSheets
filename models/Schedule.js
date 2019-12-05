const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const scheduleSchema = new Schema({
    time: String, 
    sceneNum: String, 
    description: String, 
    DorN: String, 
    
})

const Schedule = mongoose.model('Schedules', scheduleSchema)
module.exports = Schedule; 