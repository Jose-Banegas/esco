const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passportLocalMongoose= require('passport-local-mongoose');

const UserSchema = new Schema({
    funcion:{
        type: String,
        enum:['CAJA', 'STOCK', 'PEDIDOS','ADMINISTRADOR'],
        required:true,
    }
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Usuario', UserSchema)