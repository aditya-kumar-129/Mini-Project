const mongoose = require('mongoose')

const MedSchema = new mongoose.Schema({
    name:{
        type: String,
        required: false
    },
    type:{
        type: String,
        required: false
    }
})

mongoose.model("Med", MedSchema)
