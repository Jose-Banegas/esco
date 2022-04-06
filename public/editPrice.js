const subnav = document.getElementsByClassName("subnav");
const body = document.getElementsByTagName("body");
body[0].style.backgroundColor = "#fff"
subnav[0].style.display = "none"

const aumentoPorMin = document.getElementById("aumentoPorMin")
const aumentoManMin = document.getElementById("aumentoManMin")
const minResultado= document.getElementById("minResultado")

aumentoPorMin.addEventListener("input", e => {
	aumentoManMin.value = ""
	minResultado.value = e.target.value
	
})

aumentoManMin.addEventListener("input", e => {
	aumentoPorMin.value = ""
	minResultado.value = e.target.value
	
})
