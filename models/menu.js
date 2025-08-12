const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        require : true
    },
    price :{
        type: Number,
        require: true,
    },
    taste:{
        type:String,
        enum:["Spicy","Sweet","Sour"],
        require: true,
    },
    is_drink:{
        type: Boolean,
        default: false,
    },
    ingridients:{
        type: [String],

    },
    num_sales:{
        type :Number,
        default :0,
    }
})

const menu = mongoose.model('menu', menuSchema);

module.exports = menu;