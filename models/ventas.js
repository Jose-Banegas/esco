const mongoose = require('mongoose');
const {Schema} = mongoose;
const Usuario = require('./usuario')
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
        type: Boolean,
        

    },

    cantidadDeProductosTotales: {
       type: Number
    },
    usuarioEnCaja:[
        {
            type: Schema.Types.ObjectId,
            ref: Usuario
        }
    ]

});     

const Venta = mongoose.model('Venta', ventasEfectuadasSchema);

module.exports = Venta