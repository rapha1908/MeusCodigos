$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
	$("#spinner").toggle();
	
    $.get("http://localhost:3000/frases", trocaFraseAleatoria).fail(erro).always(function(){ //sempre escondendo o spinner
        $("#spinner").toggle();
    });
};

function trocaFraseAleatoria(data) {
	var frase = $(".frase");
	
	var numeroAleatorio = Math.floor(Math.random() * data.length);
	frase.text(data[numeroAleatorio].texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);

};

function erro(){
 var erro = $("#erro");
	erro.fadeIn(1000);
	setTimeout(function(){
		erro.fadeOut(1000);
	}, 5000);
$("#spinner").toggle();

	
}

function buscaFrase() {

   $("#spinner").toggle();
    var fraseId = $("#frase-id").val();

    var dados = {id : fraseId}; //criacao do objeto JS que guarda a id

    //passando objeto como segundo parâmetro
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
};


function trocaFrase(data){
	console.log(data);
	
	var frase = $(".frase");
    frase.text(data.texto); 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
};