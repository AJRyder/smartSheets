const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    displayName: String, 
    email: String,
    
    productionsList: [{
                        type:mongoose.Schema.Types.ObjectId, 
                        ref: 'Productions'
                        }] 

})

const User = mongoose.model('User', userSchema)
module.exports = User; 