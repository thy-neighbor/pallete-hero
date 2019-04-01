const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let paletteSchema = new Schema({
    userId:String,
    userName:String,
    name:String,
    colorArray:Number,
    private:Boolean
    
});

module.exports = mongoose.model('PALETTE',paletteSchema);