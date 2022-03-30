const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn } = require('../middleware');
const Producto = require('../models/productos');
const User = require('../models/usuario');


const passport = require('passport');



// READ PRODUCT {

router.get('/', (req, res) => {

    res.render('stock/listado');
})

router.post('/', catchAsync(async (req , res) => {
    const search_query = req.body;

    console.log(codigo);
    try {

        const productos = await Producto.find({  nombre : search_query ,marca: search_query} );
        res.json(productos);

    } catch (error) {
        res.send('error')
    }
    // const producto = await Producto.find({codigo: codigo});
    // console.log(producto);
}));



// router.get('/query', async(req,res)=>{
  
//     const {query} = req.query;
//     console.log(query)
// res.render('stock/listado')
// })




router.post('/compra-efectuada', catchAsync( async (req,res )=>{
    const compraEfectuada = req.body;
    
}))
module.exports = router
