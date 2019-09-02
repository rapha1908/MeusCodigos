var buscaBotao = document.querySelector("#busca-paciente");
buscaBotao.addEventListener("click", function () {
  console.log("botao clicado");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
	
	  var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
	  erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabala(paciente);
      });


    } else {
		
		console.log(xhr.status);
		erroAjax.classList.remove("invisivel");

    }


  });


  xhr.send();

});