var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
  	event.target.parentElement.classList.add("fadeOut");

	
	setTimeout(function(){
		event.target.parentNode.remove();

	},500);	
});
	