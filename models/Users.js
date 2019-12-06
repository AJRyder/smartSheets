const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    displayName: String, 
    username: { String, unique=true }, 
    email: { String, unique=true },
    password: String, 
    avatar: String, 
    productionsList: [{
                        type:mongoose.Schema.Types.ObjectId, 
                        ref: 'Productions'
                        }] 

})

const User = mongoose.model('User', userSchema)
module.exports = User; 