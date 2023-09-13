const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
 name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true
 },   
 email: {
    type: String,
    required: [true, 'Please add a email']
 },  
 password: {
    type: String,
    required: [true, 'Please add a password']
 },   
 zipcode:{
    type: Number,
    required: [true, 'Please add a zipcode'],
    validate:{
        validator: function(val){
            return val.toString().length === 5
        },
        message: val => `${val.value} has to be 5 digits`
    }
 }
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)