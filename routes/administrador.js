const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn,isAdmin} = require('../middleware');
const Producto = require('../models/productos');
const User = require('../models/usuario');


const passport = require('passport');


const roleADM = 'ADMINISTRADOR'


// RENDER VER TABLA DE STOCK
router.get('/',isLoggedIn ,isAdmin(roleADM), catchAsync(async (req, res) => {

    console.log(req.user.funcion)
    const productos = await Producto.find({})
  
    res.render('stock/verStock', { productos });
 


}))
// }

//  CREATE {
// RENDER FORMULARIO DE CARGA DE STOCK

router.get('/nuevo', isLoggedIn,isAdmin(roleADM), (req, res) => {
  console.log(req.user, 'req.user....');

  res.render('stock/cargaStock');
})
// ENVIAR DATOS DEL FORMULARIO A LA BBDD

router.post('/',isLoggedIn,isAdmin(roleADM), catchAsync(async (req, res) => {
  const nuevoProducto = new Producto(req.body);
  await nuevoProducto.save();
  req.flash('success', 'Producto cargado correctamente correctamente');

  res.redirect(`/administrador/productos/${nuevoProducto._id}`)
}))

// }


// UPDATE {
// ACTUALIZAR UN PRODUCTO DEL STOCK
// poblate the products with the form and values
router.get('/:id/edit',isLoggedIn, isAdmin(roleADM), catchAsync(async (req, res) => {

  const { id } = req.params;
  const producto = await Producto.findById(id);
  if (!producto) {
    req.flash('error', 'No se puede encontrar la este producto');
    return res.redirect('/administrador/productos');
}
  res.render('stock/stockIndividual', { producto })
}))

// ENVIAR PUT REQUEST

router.put('/:id',isLoggedIn,isAdmin(roleADM), catchAsync(async (req, res) => {
  const { id } = req.params;
  const producto = await Producto.findByIdAndUpdate(id, req.body, { runValidators: true });
  if (!producto) {
    req.flash('error', 'No se puede encontrar editar el producto');
    return res.redirect('/administrador/productos');
}
 
  res.redirect(`/administrador/productos/${producto.id}`)

}))

// }

// RENDER STOCK INDIVIDUAL
router.get('/:id', isLoggedIn,isAdmin(roleADM),catchAsync(async (req, res) => {
  
  const { id } = req.params;
  const producto = await Producto.findById(id)
  if (!producto) {
    req.flash('error', 'No se puede encontrar el producto');
    return res.redirect('/administrador/productos');
}
  res.render('stock/stockIndividual', { producto });
}))


// BORRAR STOCK INDIVIDUAL

router.delete('/:id',isLoggedIn,isAdmin(roleADM), catchAsync(async (req, res) => {
  const { id } = req.params;
  const deletedProducto = await Producto.findByIdAndDelete(id);
  if (!deletedProducto) {
    req.flash('error', 'No se puede eliminar el producto');
    return res.redirect('/administrador/productos');
}
  res.redirect('/administrador/productos');
}))


router.post('/buscar', isLoggedIn,isAdmin(roleADM), async(req,res)=>{
  const query = req.body.buscar;
  console.log(query);
  try {

      const productos = await Producto.find({
         $or:[
           {nombre:{$regex: query}},
           {marca:{$regex: query}},

         ]
           });


           console.log(productos);
           res.json(productos)

  } catch (error) {
      res.send('error')
  }
})







module.exports = router;