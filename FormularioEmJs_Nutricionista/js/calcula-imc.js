var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

//coloco todos os pacientes na variavel pacientes
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);
  var tdImc = paciente.querySelector(".info-imc");

  // se peso e altura forem invalidos ele muda a variavel para false
  if (!pesoValido) {
    console.log("Peso invalido")
    pesoValido = false;
    tdImc.textContent = "Peso invalido";
    paciente.classList.add("paciente-invalido");
  }
  if (!validaAltura(altura)) {
    console.log("altura invalida")
    alturaValida = false;
    tdImc.textContent = "Altura invalida";
    paciente.classList.add("paciente-invalido");
  }

  // Testa altura e peso para aparecer na tela os dados ou a mensagem de erro

  if (pesoValido && alturaValida) {
    var Imc = calculaImc(peso, altura);
    tdImc.textContent = Imc;
  }


}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }

}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 4.0) {
    return true;
  } else {
    return false;
  }

}

function calculaImc(peso, altura) {

  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
