const mongoose = require('mongoose')

const Schema = mongoose.Schema

const countrySchema = new Schema({
    capital: {
        type: String,
        //required: true
    },
    callingCode: {
        type: String,
        unique: true,
        //required: true
    
    }, 
    name: {
        type: String,
        //required: true,
    }, 
    numRegions: {
        type: Number,
        //required: false
    }

})

module.exports = mongoose.model('Country', countrySchema)