const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age :{
        type : Number,
        required: true,
    },
    work :{
        type : String,
        required :true,
        enum : ['manager', 'waiter','chef']
    },
    email:{
        type : String,
        required:true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    },

});
const Person = mongoose.model('Person',personSchema);
module.exports = Person;