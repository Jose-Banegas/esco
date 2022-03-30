module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req.user, 'req.user....');
    // console.log(req.session)

    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl  
        req.flash('error', ' Tiene que estar logeado antes');
        return res.redirect('/ingresar');
    }
    next();
}


module.exports.isAdmin = (role)=>{
   return (req, res, next) => {
        if ( req.user.funcion !== role) {
            req.flash('error', 'Tiene que ingresar como administrador');
            return res.redirect(`/ingresar`);
        }
        next();
    }
    
    
} 

module.exports.isCaja = (role)=>{
    return (req, res, next) => {
         if ( req.user.funcion !== role) {
             req.flash('error', 'Tiene que ingresar como cajer@');
             return res.redirect(`/ingresar`);
         }
         next();
     }
     
     
 } 


module.exports.checkearRole = (req, res, next)=>{
        if(!req.user.funcion){
            req.flash('error', 'Tiene que ingresar con algun ROL');
            return res.redirect(`/ingresar`);
        }


        next();
}

module.exports.logCaja = (req, res, next)=>{


    if(req.user.funcion == "CAJA"){
        console.log('Haz inicio como', req.user.funcion)

        req.flash('sucess', 'Bienvenido a la sesión Cajer@');
        return res.redirect(`/caja`);   
     }  
    next()
}
