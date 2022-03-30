
/* VARIABLES GLOBALES */

let precioMinoristaActual = 119; //Por defecto 119
let resultadoMinoristaActual = 119 //Por defecto 119

let precioMayoristaActual = 119; 
let resultadoMayoristaActual = 119; 

let precioCostoActual = 119; 
let resultadoCostoActual = 119





/* DOM */


const body = document.getElementsByTagName("body");
const llamador = document.getElementById("cambiarPrecio"); //Elemento que lo llama desde html


const block = document.createElement("div");
const ventana = document.createElement("div");
const ventanaHeader = document.createElement("div");
const ventanaHeaderTituloContainer = document.createElement("div");

const cerrarVentana = document.createElement("p");

const ventanaHeaderTitulo = document.createElement("p");

const ventanaBodyVisible = document.createElement("div");

const divMinorista = document.createElement("div");

let precios = true;

//Utilidades


//Pantalla oscura
block.style.backgroundColor = "rgba(0, 0, 0, .9)";
block.style.display = "flex";
block.style.alignItems = "center";
block.style.justifyContent = "center";
block.style.width = "100%"
block.style.height = "100%";
block.style.position = "absolute";
block.style.top = "0";
block.style.left = "0";

//Root de ventana
ventana.style.zIndex = "200";
ventana.style.backgroundColor = "#ffffff";
ventana.style.width = "380px";
ventana.style.height = "580px";
ventana.style.zIndex = "300";

//Header de ventana

cerrarVentana.innerHTML = "X";
cerrarVentana.style.backgroundColor = "yellow";
cerrarVentana.style.borderRadius = "5px";

ventanaHeader.style.width = "100%";
ventanaHeader.style.height = "83px";
ventanaHeader.style.backgroundColor = "#1B4EA3";
ventanaHeader.style.display = "flex";
ventanaHeader.style.justifyContent = "center"
ventanaHeader.style.alignItems = "center"


ventanaHeaderTitulo.innerHTML = "Editar precios";
ventanaHeaderTitulo.style.color = "#ffffff";


ventanaHeaderTitulo.style.display = "flex";
ventanaHeaderTitulo.style.justifyContent = "center"
ventanaHeaderTitulo.style.alignItems = "center"


ventanaHeaderTituloContainer.style.width = "200px";

ventanaHeaderTituloContainer.style.height = "34px";

ventanaHeaderTituloContainer.style.backgroundColor = "#CE6B00";
ventanaHeaderTituloContainer.style.border = "solid 2px #FB982E";
ventanaHeaderTituloContainer.style.borderRadius = "10px"; 

ventanaHeaderTitulo.onclick = () => {
	if (precios == true) {
		precios = false;
		ventanaHeaderTituloContainer.style.backgroundColor = "#1B4EA3"
		modoGlobal()
		return
	} 

	if (precios == false) {
		precios = true;
		ventanaHeaderTituloContainer.style.backgroundColor = "#CE6B00"

	}
}

const modoGlobal = () => {
	ventanaBodyVisible.innerHTML = ""
	
}


/* Body */

//Body visible

//Minorista

const flexMinorista = document.createElement("div");
flexMinorista.style.display = "flex";
flexMinorista.style.marginBottom = "1rem";
const flexMinorista2 = document.createElement("div");
flexMinorista2.style.display = "flex";
flexMinorista2.style.marginBottom = "1rem";

const flexMinorista3 = document.createElement("div");
flexMinorista3.style.display = "flex";
flexMinorista3.style.marginBottom = "2rem";


const lMinoristaActual = document.createElement("label");
lMinoristaActual.innerHTML = "Precio <b>minorista</b> actual: "
const boxMinoristaActual = document.createElement("p");

boxMinoristaActual.style.color = "grey"
boxMinoristaActual.style.border = "solid 1px"
boxMinoristaActual.style.padding = "0 70px"

flexMinorista.appendChild(lMinoristaActual)
flexMinorista.appendChild(boxMinoristaActual)


const aumentoEnMinorista = document.createElement("label");
aumentoEnMinorista.innerHTML = "Aumento en %"
const inputPorcMin = document.createElement("input");
inputPorcMin.type = "text";
inputPorcMin.style.width = "53px";




const aumentoEnMinManual = document.createElement("label");
aumentoEnMinManual.innerHTML = "Aumento manual"


const inputManualMin = document.createElement("input");
inputManualMin.type = "text";
inputManualMin.style.width = "70px";


flexMinorista2.appendChild(aumentoEnMinorista);
flexMinorista2.appendChild(inputPorcMin);
flexMinorista2.appendChild(aumentoEnMinManual);
flexMinorista2.appendChild(inputManualMin);

const lResultado = document.createElement("div");
lResultado.innerHTML = "Resultado"

const pResultado = document.createElement("p");
pResultado.innerHTML = `${resultadoMinoristaActual}`


pResultado.style.border = "solid 1px"
pResultado.style.padding = ".7rem"


const btnMinorista = document.createElement("button");
btnMinorista.innerHTML = "ACEPTAR";

flexMinorista3.appendChild(pResultado);
flexMinorista3.appendChild(btnMinorista);
flexMinorista3.style.alignItems = "center"
flexMinorista3.style.justifyContent = "space-around"


//Mayorista

const divMayorista = document.createElement("div");


const flexMayorista = document.createElement("div");
flexMayorista.style.display = "flex";

const flexMayorista2 = document.createElement("div");
flexMayorista2.style.display = "flex";

const flexMayorista3 = document.createElement("div");
flexMayorista3.style.display = "flex";

const lMayoristaActual = document.createElement("label");
lMayoristaActual.innerHTML = "Precio <b>mayorista</b> actual: "
const boxMayoristaActual = document.createElement("p");
boxMayoristaActual.innerHTML = `${precioMayoristaActual}`
flexMayorista.appendChild(lMayoristaActual)
flexMayorista.appendChild(boxMayoristaActual)



const aumentoEnMayorista = document.createElement("label");
aumentoEnMayorista.innerHTML = "Aumento en %"
const inputPorcMan = document.createElement("input");
inputPorcMan.type = "text";
inputPorcMan.style.width = "53px";

const aumentoEnManManual = document.createElement("label");
aumentoEnManManual.innerHTML = "Aumento manual"


const inputManualMan = document.createElement("input");
inputManualMan.type = "text";
inputManualMan.style.width = "70px";

const lResultadoMayorista = document.createElement("div");
lResultadoMayorista.innerHTML = "Resultado";

const pResultadoMayorista = document.createElement("p");
pResultadoMayorista.innerHTML = `${resultadoMayoristaActual}`
const btnMayorista = document.createElement("button");
btnMayorista.innerHTML = "ACEPTAR";

flexMayorista2.appendChild(aumentoEnMayorista);
flexMayorista2.appendChild(inputPorcMan);
flexMayorista2.appendChild(aumentoEnManManual);
flexMayorista2.appendChild(inputManualMan);
flexMayorista3.appendChild(pResultadoMayorista)
flexMayorista3.appendChild(btnMayorista)




//Costo

const divCosto = document.createElement("div");


const flexCosto = document.createElement("div");
flexCosto.style.display = "flex";

const flexCosto2 = document.createElement("div");
flexCosto2.style.display = "flex";

const flexCosto3 = document.createElement("div");
flexCosto3.style.display = "flex";


const lCostoActual = document.createElement("label");
lCostoActual.innerHTML = "Precio <b>costo</b> actual: "
const boxCostoActual = document.createElement("p");

flexCosto.appendChild(lCostoActual)
flexCosto.appendChild(boxCostoActual)


const aumentoEnCosto = document.createElement("label");
aumentoEnCosto.innerHTML = "Aumento en %"
const inputPorcCos = document.createElement("input");
inputPorcCos.type = "text";
inputPorcCos.style.width = "53px";

const aumentoEnCosManual = document.createElement("label");
aumentoEnCosManual.innerHTML = "Aumento manual"


const inputManualCos = document.createElement("input");
inputManualCos.type = "text";
inputManualCos.style.width = "70px";

flexCosto2.appendChild(aumentoEnCosto);
flexCosto2.appendChild(inputPorcCos);

flexCosto2.appendChild(aumentoEnCosManual);
flexCosto2.appendChild(inputManualCos);

const lResultadoCosto = document.createElement("div");
lResultadoCosto.innerHTML = "Resultado";

const pResultadoCosto = document.createElement("p");
pResultadoCosto.innerHTML = `${resultadoCostoActual}`
const btnCosto = document.createElement("button");
btnCosto.innerHTML = "ACEPTAR";

flexCosto3.appendChild(pResultadoCosto)
flexCosto3.appendChild(btnCosto)


//Bottom

const bottom = document.createElement("div");
bottom.style.display = "flex";
bottom.style.justifyContent = "space-around";
const mostrar = document.createElement("button")
mostrar.innerHTML = "Mostrar opciones no obligatorias"
const guardar = document.createElement("button")
guardar.innerHTML = "Editar"
bottom.appendChild(mostrar)
bottom.appendChild(guardar)


//appendChild

ventana.appendChild(ventanaHeader)
ventanaHeader.appendChild(ventanaHeaderTituloContainer)
ventanaHeaderTituloContainer.appendChild(ventanaHeaderTitulo)
ventanaHeader.appendChild(cerrarVentana)
ventana.appendChild(ventanaBodyVisible);
ventanaBodyVisible.appendChild(divMinorista)
divMinorista.appendChild(flexMinorista)
divMinorista.appendChild(flexMinorista2)
divMinorista.appendChild(lResultado)
divMinorista.appendChild(flexMinorista3)
ventanaBodyVisible.appendChild(divMayorista)
divMayorista.appendChild(flexMayorista)
divMayorista.appendChild(flexMayorista2)
divMayorista.appendChild(lResultadoMayorista)
divMayorista.appendChild(flexMayorista3)
ventanaBodyVisible.appendChild(divCosto)
divCosto.appendChild(flexCosto)
divCosto.appendChild(flexCosto2)

divCosto.appendChild(flexCosto3)
ventana.appendChild(bottom)






// Axios IN

let productoIn = {
	precioMinorista: 0,
	precioMayorista: 0,
	precioCosto: 0
}






llamador.onclick = async () => {
		//Axios Out
		let codigo = sessionStorage.getItem('codigo')
		try {
			const res = await axios.post('/caja/buscar', {codigo: codigo})
			const producto = res.data;
			precioMinoristaActual = producto.precioMinorista
			boxMinoristaActual.innerHTML = `$${precioMinoristaActual}`
			precioMayoristaActual = producto.precioMayorista
			boxMayoristaActual.innerHTML = `$${precioMayoristaActual}`
			precioCostoActual = producto.precioCosto
			boxCostoActual.innerHTML = `$${precioCostoActual}`

			inputManualMin.addEventListener("input", () => {
			resultadoMinoristaActual = parseFloat(inputManualMin.value).toFixed(2);
			inputPorcMin.value = ""	
			pResultado.innerHTML = `$${resultadoMinoristaActual}`

			})



			inputPorcMin.addEventListener("input", () => {
			let porcentaje = inputPorcMin.value * producto.precioMinorista / 100;
			inputManualMin.value = ""
			resultadoMinoristaActual = (porcentaje + producto.precioMinorista).toFixed(2);
			precioMinoristaActual.innerHTML = resultadoMinoristaActual 
			pResultado.innerHTML = `$${resultadoMinoristaActual}`	
			
			})
			
			btnMinorista.onclick = () => {
		
				productoIn.precioMinorista = resultadoMinoristaActual
				console.log(productoIn)
			
			}
			
			inputManualMan.addEventListener("input", () => {
				resultadoMayoristaActual = parseFloat(inputManualMan.value).toFixed(2);
				inputPorcMan.value = "";
				pResultadoMayorista.innerHTML = `$${resultadoMayoristaActual}`
			
			})

			inputPorcMan.addEventListener("input", () => {
				let porcentaje = inputPorcMan.value * producto.precioMayorista / 100;
				inputManualMan.value = "";
				resultadoMayoristaActual = (porcentaje + producto.precioMayorista).toFixed(2);
				precioMayoristaActual.innerHTML = resultadoMayoristaActual
				pResultadoMayorista.innerHTML = `$${resultadoMayoristaActual}`
			})
	
				btnMayorista.onclick = () => {
		
				productoIn.precioMayorista = resultadoMayoristaActual
				console.log(productoIn)
			
			}

			inputManualCos.addEventListener("input", () => {
				resultadoCostoActual = parseFloat(inputManualCos.value).toFixed(2);
				inputPorcCos.value = "";
				pResultadoCosto.innerHTML = `$${resultadoCostoActual}`;
			})

			inputPorcCos.addEventListener("input", () => {
				let porcentaje = inputPorcCos.value * producto.precioCosto / 100;
				inputManualCos.value = "";
				resultadoCostoActual = (porcentaje + producto.precioCosto).toFixed(2);
				precioCostoActual.innerHTML = resultadoCostoActual;
				pResultadoCosto.innerHTML = `$${resultadoCostoActual}`
			})

			btnCosto.onclick = () => {
				productoIn.precioCosto = resultadoCostoActual;
				console.log(productoIn)
			}

			guardar.onclick = () => {
				try {
					axios.post(`/administrador/productos/${producto._id}/edit`, productoIn);	
				} catch(error) {
					console.log(error)
				}
			}

		

		} catch (error) {
			console.log(error)
		}

	body[0].appendChild(block);
	block.appendChild(ventana);
}

cerrarVentana.onclick = () => {
	body[0].removeChild(block);
}






