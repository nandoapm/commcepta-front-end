var dv1;
var dv2;
var dv3;
var dv4;
var dv5;
var dv6;
var dv7;
var dv8;
var dv9;

window.onload = function() {
  dv1 = document.getElementById("dv1");
  dv2 = document.getElementById("dv2");
  dv3 = document.getElementById("dv3");
  dv4 = document.getElementById("dv4");
  dv5 = document.getElementById("dv5");
  dv6 = document.getElementById("dv6");
  dv7 = document.getElementById("dv7");
  dv8 = document.getElementById("dv8");
  dv9 = document.getElementById("dv9");

  var bt1 = document.getElementById('bt1');
  bt1.onclick = mostrarDv1;
  var bt2 = document.getElementById('bt2');
  bt2.onclick = mostrarDv2;
  var bt3 = document.getElementById('bt3');
  bt3.onclick = mostrarDv3;
  var bt4 = document.getElementById('bt4');
  bt4.onclick = mostrarDv4;
  var bt5 = document.getElementById('bt5');
  bt5.onclick = mostrarDv5;
  var bt6 = document.getElementById('bt6');
  bt6.onclick = mostrarDv6;
  var bt7 = document.getElementById('bt7');
  bt7.onclick = mostrarDv7;
  var bt8 = document.getElementById('bt8');
  bt8.onclick = mostrarDv8;
  var bt9 = document.getElementById('bt9');
  bt9.onclick = mostrarDv9;

  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");
}

function mostrarDv1() {
  dv1.classList.remove("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");
}

function mostrarDv2() {
  dv1.classList.add("ocultar");
  dv2.classList.remove("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");	
}

function mostrarDv3() {
  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.remove("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");;
}

function mostrarDv4() {
  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.remove("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");
}

function mostrarDv5() {
  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.remove("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");
}

function mostrarDv6() {
  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.remove("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");
}

function mostrarDv7() {
  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.remove("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.add("ocultar");
}

function mostrarDv8() {
  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.remove("ocultar");
  dv9.classList.add("ocultar");
}

function mostrarDv9() {
  dv1.classList.add("ocultar");
  dv2.classList.add("ocultar");
  dv3.classList.add("ocultar");
  dv4.classList.add("ocultar");
  dv5.classList.add("ocultar");
  dv6.classList.add("ocultar");
  dv7.classList.add("ocultar");
  dv8.classList.add("ocultar");
  dv9.classList.remove("ocultar");
}