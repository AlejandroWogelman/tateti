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

	document
		.getElementById('reiniciar')
		.addEventListener('click',() => reiniciar());

	
		
}




let valor = 'X';


const cambios = (id) => {

	
	let boton = document.getElementById(id);
	boton.value = valor;
	
	boton.innerHTML = valor;
	boton.disabled = true;
	ganador();
	if (valor === 'X') {
		valor = 'O';
	} else {
		valor = 'X';
	}
	document.getElementById("Lactual").innerText=valor
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
		win(uno);
	} else if (uno === cuatro && uno == siete) {
		win(uno);
	} else if (uno === cinco && uno == nueve) {
		win(uno);
	} else if (cuatro === cinco && cuatro == seis) {
		win(cuatro);
	} else if (siete === ocho && siete == nueve) {
		win(siete);
	} else if (siete === cinco && siete == tres) {
		win(siete);
	} else if (dos === cinco && dos == ocho) {
		win(dos);
	} else if (tres === seis && tres == nueve) {
		win(tres);
	}
};

const reiniciar=()=>{

	let uno = document.getElementById('uno')
	uno.disabled=false
	uno.innerHTML="";
	uno.value="uno"
	
	let dos = document.getElementById('dos')
	dos.disabled=false
	dos.innerHTML="";
	dos.value="dos"

	let tres = document.getElementById('tres')
	tres.innerHTML="";
	tres.disabled=false;
	tres.value="tres"

	let cuatro = document.getElementById('cuatro')
	cuatro.disabled=false;
	cuatro.innerHTML="";
	cuatro.value="cuatro"

	let cinco = document.getElementById('cinco')
	cinco.disabled=false;
	cinco.innerHTML="";
	cinco.value="cinco"

	let seis = document.getElementById('seis')
	seis.disabled=false;
	seis.innerHTML="";
	seis.value="seis"

	let siete = document.getElementById('siete')
	siete.disabled=false;
	siete.innerHTML="";
	siete.value="siete"

	let ocho = document.getElementById('ocho')
	ocho.disabled=false;
	ocho.innerHTML="";
	ocho.value="ocho"

	let nueve = document.getElementById('nueve')
	nueve.disabled=false;
	nueve.innerHTML="";
	nueve.value="nueve"

	document.getElementById("Lactual").innerText="X"

	document.getElementById("ganador").innerHTML= "Te-To-Ca <br>👇"
}



const win=(g)=>{

const w = document.getElementById("ganador").innerHTML = `WINNER! ${g} `
	}


window.onload = start;
