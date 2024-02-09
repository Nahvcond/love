
const negativo = document.querySelector("#negativo");

negativo.onclick= function1;
let cont=0
function function1() {
  if (cont==0) {
    negativo.innerText= "¿Estas segura?"
    cont = cont +1
  }else if (cont==1) {
    negativo.innerText= "¿MUY SEGURA?"
    cont++
    
  }else if (cont==2) {
    negativo.innerText= "¿MUY MUY SEGURA?"
    cont++
    
  }else if (cont==3) {
    negativo.innerText= "Bueno no me importa >:("
    cont++
  }else if (cont==4) {
  negativo.innerText= "Este boton ya no anda jiji dale a si uwu"
  cont++
}
  
}

