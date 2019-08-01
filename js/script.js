
function mostrar(){
  for(var i=1; i<10; i++){
    document.getElementById("c"+i).hidden=true; //Ocultar a card
  }
  var obj=event.target.dataset.nome; //Captura todo o elemento
  document.getElementById(obj).hidden=false; //Ocultar o elemento
}

function iniciar(){
  for(var i=1; i<10; i++){
  document.getElementById("c"+i).hidden=true; //Ocultar o card
  }

  document.getElementById("btnc1").addEventListener("click",mostrar);
  document.getElementById("btnc2").addEventListener("click",mostrar);
  document.getElementById("btnc3").addEventListener("click",mostrar);
  document.getElementById("btnc4").addEventListener("click",mostrar);
  document.getElementById("btnc5").addEventListener("click",mostrar);
  document.getElementById("btnc6").addEventListener("click",mostrar);
  document.getElementById("btnc7").addEventListener("click",mostrar);
  document.getElementById("btnc8").addEventListener("click",mostrar);
  document.getElementById("btnc9").addEventListener("click",mostrar);
}

window.addEventListener("load",iniciar);