

function start(){
    document.getElementById("uno").addEventListener("click",()=> cambios("uno"));
    document.getElementById("dos").addEventListener("click",()=> cambios("dos"));
    document.getElementById("tres").addEventListener("click",()=> cambios("tres"));

    document.getElementById("cuatro").addEventListener("click",()=> cambios("cuatro"));
    document.getElementById("cinco").addEventListener("click",()=> cambios("cinco"));
    document.getElementById("seis").addEventListener("click",()=> cambios("seis"));

    document.getElementById("siete").addEventListener("click",()=> cambios("siete"));
    document.getElementById("ocho").addEventListener("click",()=> cambios("ocho"));
    document.getElementById("nueve").addEventListener("click",()=> cambios("nueve"));
}


let valor= "X"; 

const cambios=(id)=>{
   let boton = document.getElementById(id) 
   boton.value=valor 
   console.log(boton.value)
    boton.innerHTML=valor
    boton.disabled=true
    ganador()
    if(valor === "X"){
        valor="Y"
    }else{
        valor = "X"
    }
}

const ganador=()=>{
    let uno =document.getElementById("uno")
    let dos=document.getElementById("dos")
    let tres =document.getElementById("tres")
    let cuatro=document.getElementById("cuatro")
    let cinco=document.getElementById("cinco")
    let seis=document.getElementById("seis")
    let siete=document.getElementById("siete")
    let ocho= document.getElementById("ocho")
    let nueve= document.getElementById("nueve")




    if( uno.value === (dos.value || tres.value)){
         (tres.value===dos.value)?alert(`El ganador ${uno.value}`):null
    
    }else if (uno.value === (cuatro.value || siete.value)){
        (cuatro.value===siete.value)?alert(`El ganador ${uno.value}`):null
    
    }else if (uno.value === (cinco.value || nueve.value)){
        (cinco.value===nueve.value)?alert(`El ganador ${uno.value}`):null
    
    }else if (cuatro.value === (cinco.value || seis.value)){
        (cinco.value=== seis.value)?alert(`El ganador ${cuatro.value}`):null
    
    }else if (siete.value === (ocho.value || nueve.value)){
        ocho.value=== nueve.value?alert(`El ganador ${siete.value}`):null

    }else if (siete.value === (cinco.value || tres.value)){
        cinco.value=== tres.value?alert(`El ganador ${siete.value}`):null

    }else if (dos.value === (cinco.value || ocho.value)){
        (cinco.value=== ocho.value)?alert(`El ganador ${dos.value}`):null

    }else if (tres.value === (seis.value || nueve.value)){
        (seis.value=== nueve.value)?alert(`El ganador ${tres.value}`):null

    }

}
















window.onload=start;