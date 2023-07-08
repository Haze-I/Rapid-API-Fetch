const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countrySchema = new Schema({
    code: {
        type: String,
        
        unique: true
    },
    callingCode: {
        type: String,
     
        unique: true
    }, 
    name: {
        type: String,
       
    }, 
    numRegions: {
        type: Number,
        required: false
    }

})

module.exports = mongoose.model('Country', countrySchema)