const mongoose = require('mongoose');
const {Schema} = mongoose;
// fecha de salida
const ventasEfectuadasSchema = new Schema ({
    dineroIngresado:{
        type:String
    },
    dineroDeSalida: {
        type:String
    },
    codigosDeBarra:{
       type: String
    },
    fechaDeEmision: {
       type: Date
    },
    valorDelProducto: {
        String
    },
    ticket: {
        type: String,
        enum:['Si', 'No']

    },

    cantidadDeProductosTotales: {
       type: Number
    },
    cajera:{
        type: String,
        
    }

});     

const Venta = mongoose.model('Venta', ventasEfectuadasSchema);

module.exports = Venta