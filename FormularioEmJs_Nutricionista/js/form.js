//Arquivo JS criado para administrar a função de adicionar paciente na tabela
//conecta o batão do html com o JS
 var botaoAdicionar = document.querySelector("#adicionar-paciente");

//funçao de click
botaoAdicionar.addEventListener('click', function(event){
	
	event.preventDefault(); // desabilita a função padrão do navegador para o click
	
	var form = document.querySelector("#form-adiciona");
	
	//criando uma funçao que gera um Objeto paciente
	//Seleciona os dados do formulario
	var paciente = obtemPacienteFormulario(form);
	
	var erros =validaPaciente(paciente);
	
	if(erros.length > 0){
		exibeMensagemDeErro(erros);
		return;
	}
	adicionaPacienteNaTabala(paciente);
	form.reset();
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

});


function obtemPacienteFormulario(form){
	var paciente = {
			nome:form.nome.value,
			peso:form.peso.value,
			altura:form.altura.value,
    		gordura:form.gordura.value,
			imc: calculaImc(form.peso.value,form.altura.value)
	}
	return paciente;
}

function montaTr(paciente){
	
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");
	
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	
	return pacienteTr;
	
}

function montaTd(dado, nomeClasse){
	var td =  document.createElement("td");
	td.textContent = dado;
	td.classList.add(nomeClasse);
	return td;
	
	
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagemDeErro(erros){
	
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

function adicionaPacienteNaTabala(paciente){
	var pacienteTr = montaTr(paciente);	
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
//13825,84
	
}
