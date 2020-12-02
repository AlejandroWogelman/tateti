function start() {
	document
		.getElementById('uno')
		.addEventListener('click', () => cambios('uno'));
	document
		.getElementById('dos')
		.addEventListener('click', () => cambios('dos'));
	document
		.getElementById('tres')
		.addEventListener('click', () => cambios('tres'));

	document
		.getElementById('cuatro')
		.addEventListener('click', () => cambios('cuatro'));
	document
		.getElementById('cinco')
		.addEventListener('click', () => cambios('cinco'));
	document
		.getElementById('seis')
		.addEventListener('click', () => cambios('seis'));

	document
		.getElementById('siete')
		.addEventListener('click', () => cambios('siete'));
	document
		.getElementById('ocho')
		.addEventListener('click', () => cambios('ocho'));
	document
		.getElementById('nueve')
		.addEventListener('click', () => cambios('nueve'));
}

let valor = 'X';

const cambios = (id) => {
	let boton = document.getElementById(id);
	boton.value = valor;
	console.log(boton.value);
	boton.innerHTML = valor;
	boton.disabled = true;
	ganador();
	if (valor === 'X') {
		valor = 'Y';
	} else {
		valor = 'X';
	}
};

const ganador = () => {
	let uno = document.getElementById('uno').value;
	let dos = document.getElementById('dos').value;
	let tres = document.getElementById('tres').value;
	let cuatro = document.getElementById('cuatro').value;
	let cinco = document.getElementById('cinco').value;
	let seis = document.getElementById('seis').value;
	let siete = document.getElementById('siete').value;
	let ocho = document.getElementById('ocho').value;
	let nueve = document.getElementById('nueve').value;

	if (uno === dos && uno === tres) {
		alert(`El ganador ${uno}`);
	} else if (uno === cuatro && uno == siete) {
		alert(`El ganador ${uno}`);
	} else if (uno === cinco && uno == nueve) {
		alert(`El ganador ${uno}`);
	} else if (cuatro === cinco && cuatro == seis) {
		alert(`El ganador ${cuatro}`);
	} else if (siete === ocho && siete == nueve) {
		alert(`El ganador ${siete}`);
	} else if (siete === cinco && siete == tres) {
		alert(`El ganador ${siete}`);
	} else if (dos === cinco && dos == ocho) {
		alert(`El ganador ${dos}`);
	} else if (tres === seis && tres == nueve) {
		alert(`El ganador ${tres}`);
	}
};

window.onload = start;
