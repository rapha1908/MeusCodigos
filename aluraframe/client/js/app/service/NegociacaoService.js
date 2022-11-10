class NegociacaoService {

    constructor() {
        this.http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this.http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana');
                })
        });
    }


    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this.http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana anterior');
                })
        });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this.http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    console.log(negociacoes);
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

                })
                .catch(erro => {
                    console.log(erro);
                    reject('Não foi possível obter as negociações da semana retrasada');
                })
        });
    }
	
	lista(){
		return ConnectionFactory
          .getConnection()
          .then(connection => new NegociacaoDao(connection))
          .then(dao => dao.listaTodos())
          .catch(erro => {
              console.log(erro);
              throw new Error('Não foi possível obter as negociações')
            })		
	}
	apaga(){
		return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .then(() => "Negociações apagadas com sucesso")
		    .catch(erro => {
              console.log(erro);
              throw new Error('Não foi possível obter as negociações');
            })		
	}
	

}