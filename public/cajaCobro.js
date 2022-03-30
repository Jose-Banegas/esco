//Elementos

const textBuscar = document.getElementById("textBuscar");
const cajaCobroForm = document.getElementById("cajaCobroForm");
const sbBuscar = document.getElementById("sbBuscar");
const tablaCajaCobro = document.getElementById("tablaCajaCobro");
const totalHTML = document.getElementById("total");
const dineroIngresado = document.getElementById("dineroIngresado");
const vuelto = document.getElementById("vuelto");
const imprimirTicketC = document.getElementById("imprimirTicketC");
const cancelarCompra = document.getElementById("cancelarCompra");
const cambiarPrecio = document.getElementById("cambiarPrecio");
const imprimirTicketA = document.getElementById("imprimirTicketA");
const eliminarProductos = document.getElementById("eliminarProductos");
const agregarProducto = document.getElementById("agregarProducto");

//Variables globales

let productosAgregados = [{nombre: "vacio", precio: 0, cantidadAgregada: 1, impuestoPrecio: 0}];
let cantidad;
let index;
let totalGlobal;
let vueltoGlobal; 

//Funciones

const buscarLetras = str => {
  return false;
}

const sumarTotal = () => {
	
	let sum = 0; 

	for (let i = 0; i < productosAgregados.length; i++) {
		 sum +=  productosAgregados[i].precio * productosAgregados[i].cantidadAgregada;

	return sum.toFixed(2);
	
}
}
const sumarConImpuesto = () => {
	let sum = 0.00; 

	for (let i = 0; i < productosAgregados.length; i++) {
		sum = sum + productosAgregados[i].impuestoPrecio * productosAgregados[i].cantidadAgregada;
	
	totalGlobal = sum.toFixed(2);
	totalHTML.innerHTML = "TOTAL: $" + sum.toFixed(2);

}

}

//Eventos

dineroIngresado.addEventListener('keypress', e => {
	if (e.key === "Enter") {
	console.log(e.target.value)
	totalMenosVuelto = e.target.value - totalGlobal;
	vueltoGlobal = totalMenosVuelto.toFixed(2);
	vuelto.innerHTML = "$" + vueltoGlobal;
	
}})

textBuscar.addEventListener("input", () => {
	textBuscar.style.backgroundColor = "#c4c4c4";
})


//Axios

cajaCobroForm.addEventListener('submit', async e => {
	e.preventDefault();
	const codigoactual = textBuscar.value;
	console.log(codigoactual)
	if (buscarLetras(codigoactual) == true) {
		textBuscar.value = "";
		textBuscar.style.backgroundColor = "#ffd6db";
		return;
	}
	try {
		const res = await axios.post('/caja/buscar', {codigo: codigoactual});
		const producto = res.data;
		console.log(producto)

	
		const tr = document.createElement("tr");
		tr.onclick = () => {
			window.sessionStorage.setItem("codigo", producto.codigo)
			
		}
		const thNombre = document.createElement("td");
		thNombre.innerHTML = producto.nombre;
		const thPrecio =  document.createElement("td");
		thPrecio.innerHTML = "$" + producto.precioMinorista;
		const thMarca =  document.createElement("td")
		thMarca.innerHTML = producto.marca;
		const thCantidad =  document.createElement("td");
		const thSubtotal = document.createElement("td");
		thSubtotal.innerHTML = (producto.precioMinorista + producto.impuestoAplicado * producto.precioMinorista / 100).toFixed(2);
		tr.appendChild(thNombre)
		tr.appendChild(thPrecio)
		tr.appendChild(thMarca)
		tr.appendChild(thCantidad)
		tr.appendChild(thSubtotal);
		
		// esta?
		
		let check = false;
		productosAgregados.map(itemProducto => {
			if (itemProducto.nombre == producto.nombre) {
				check = true;
			
				const trEspecifico = document.getElementsByClassName(itemProducto.idArr)
				itemProducto.cantidadAgregada = itemProducto.cantidadAgregada + 1;
				trEspecifico[0].childNodes[3].innerHTML = itemProducto.cantidadAgregada;
				sumarConImpuesto()	
			}
		})

			if (check == false) {
		
				productosAgregados.push({
						nombre: producto.nombre, 
						precio: producto.precioMinorista,
						impuestoPrecio: producto.precioMinorista + producto.impuestoAplicado * producto.precioMinorista / 100,
						marca: producto.marca,
						cantidadAgregada: 1,
						idArr: productosAgregados.length
					})
				thCantidad.innerHTML = 1;
				tablaCajaCobro.appendChild(tr)
				tr.classList.add(productosAgregados.length - 1) 
				sumarConImpuesto()

				

			}	

			productosAgregados.map(productoArray => {
			index = productosAgregados.findIndex(() => productoArray.nombre == producto.nombre);
		})
	
		console.log(productosAgregados)
	

	} catch (error) {
		if(error == "TypeError: producto is null") {
			textBuscar.value = "";
			textBuscar.style.backgroundColor = "#ffd6db";
				}
	}
})

//Botonena

cancelarCompra.onclick = () => {
	textBuscar.style.backgroundColor = "#c4c4c4";
	tablaCajaCobro.innerHTML = "";
	productosAgregados = [{nombre: "vacio", precio: 0, cantidadAgregada: 1, impuestoPrecio: 0}]
	totalGlobal = 0;
	totalHTML.innerHTML = "TOTAL: $"
	vueltoGlobal = 0;
	dineroIngresado.value = "";
	vuelto.innerHTML = "$"
	
}
