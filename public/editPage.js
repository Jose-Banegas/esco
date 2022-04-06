//Se oculta el subnav
const subnav = document.getElementsByClassName("subnav");
const body = document.getElementsByTagName("body");
const form = document.getElementById("formEdit")
const codigo = document.getElementById("codigoProducto")
const nombre = document.getElementById("nombreProducto")
const cantidad = document.getElementById("cantidadProducto");
const marca = document.getElementById("marcaProducto")
const precioMinorista = document.getElementById("precioMinorista")
const precioMayorista = document.getElementById("precioMayorista")
const precioCosto = document.getElementById("precioCosto")
const categoriaInterna = document.getElementById("categoriaInterna")
const hide = document.getElementById("hide")
const mostrar = document.getElementById("mostrar")
hide.style.display = "none"
const id = document.getElementById("id")
const peso = document.getElementById("peso")
const fechaDeVencimiento = document.getElementById("fechaDeVencimiento")
const impuesto = document.getElementById("impuesto")
let oculto = true;


mostrar.addEventListener("click", e => {
	e.preventDefault();
	if ( oculto == true ) {
		oculto = false;
		console.log(oculto)
		hide.style.display = "block"
		mostrar.innerHTML = "Ocultar opciones no obligatorias"
		return
	}

	if (oculto == false) {
		oculto = true;
		console.log(oculto)
		hide.style.display = "none"
		mostrar.innerHTML = "Mostrar opciones no obligatorias"
	
		return
	}
})



body[0].style.backgroundColor = "#fff"
subnav[0].style.display = "none"
console.log(id.textContent)
form.addEventListener("submit", async e => {
	e.preventDefault()
	alert(nombre.value)
	try {	
		axios.put(`/administrador/productos/${id.textContent}`, {codigo: codigo.value, nombre: nombre.value, cantidad: cantidad.value, marca: marca.value, precioMinorista: precioMinorista.value, precioMayorista: precioMayorista.value, precioCosto: precioCosto.value, categoria: categoriaInterna.value, peso: peso.value, fechaDeVencimiento: fechaDeVencimiento.value})
	} catch (error) {
		console.log(error)
	}
})
