let mongoose = require('mongoose');

let dataSchema = new mongoose.Schema({
    program: { type: Number, default:'1'},
    data: {
        type: Object,
        color:{
            type: Object, 
            r: {type: Number},
            g: {type: Number},
            b: {type: Number}
        },
        temp:{type: Number},
        text: { type: String, default: 'hihi'}
    }
});

var Data = mongoose.model('Data', dataSchema,'datas');

module.exports = Data;
