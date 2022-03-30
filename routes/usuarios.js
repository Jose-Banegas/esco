const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn,logAdmin,logCaja} = require('../middleware');
const Producto = require('../models/productos');
const User = require('../models/usuario');


const passport = require('passport');
// crear usuario
 router.get('/registro', catchAsync(async (req, res) => {
  const user = new User({ funcion: 'CAJA', username: 'caja' })
  // const nuevoUser = await User.register(user, '123456')
  console.log(user)
  
  res.send('registrado')
}))

router.get('/ingresar', (req, res) => {
  res.render('home');
})

router.post('/ingresar', passport.authenticate('local', { failureFlash: true, failureRedirect: '/ingresar' }),  (req, res) => {
if(req.user.funcion){
  const role = req.user.funcion;
  switch( role) {
      case 'ADMINISTRADOR': 
        // code block
        const redirectUrl = req.session.returnTo || '/administrador';

        console.log('Haz iniciado como', role)
        delete req.session.returnTo;

        res.redirect(redirectUrl)
        break;
      case 'CAJA':
          console.log('Haz iniciado como', role)
          const redirectUrl2 = req.session.returnTo || '/caja';
          delete req.session.returnTo;

          return res.redirect(redirectUrl2);       
                break;

  }
  
} else{
  
  return res.redirect('/ingresar');       


}

})


router.get('/cerrar-sesion', (req,res)=>{
  req.logOut();
  req.flash('success','Sesión cerrada correctamente')
  res.redirect('/ingresar')
})



module.exports = router;