//vector que pega os dados do formulario
var campos = [
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor")
]

//botao incluir
document.querySelector(".form").addEventListener('submit', function(event){
	event.preventDefault();	
	var tbody = document.querySelector('table tbody');
	var tr = document.createElement('tr');
	
	campos.forEach(function(campo){
		
      var td = document.createElement('td');
      td.textContent = campo.value;
      tr.appendChild(td);
	});

	
	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);
	
	tr.appendChild(tdVolume);
	tbody.appendChild(tr);
	limpaform();
	
	
});


//limpa todos os campos para novos dados.
function limpaform(){
	campos["0"].value= "";
	campos["1"].value = "1";
	campos["2"].value = "0.0";
	
	campos["0"].focus();
	}



/*
var botao = document.querySelector(".btn-primary");
botao.addEventListener('click', function(){
	alert("foi");
});
*/

