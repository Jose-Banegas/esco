const mongoose = require('mongoose');
const {Schema} = mongoose;
const Producto = require('./productos')
// fecha de salida
const ofertasDeProductosSchema = new Schema ({
   
    tiposDeOferta: {
        type:String,
        enum:['X1','X2','X3','X4','X5','X6']
     },
   fechaDeVigencia:{
       type:String,
       required:true
   },
    precioOferta: {
        Number,
        required:true

    },
    cantidadDeProductosParaOferta: {
        type: Number,
        required:true


    },
  
    productoEnOferta:[
        {
            type: Schema.Types.ObjectId,
            ref: Producto,
            required:true

        }
    ]

});     

const Oferta = mongoose.model('Venta', ofertasDeProductosSchema);

module.exports = Oferta