//Module Pattern
var ConnectionFactory = (function(){
	const stores = ['negociacoes'];
	const version = 6;
	const dbName = 'aluraframe';

	var connection = null; 
	var close = null; 

	return class ConnectionFactory{

		constructor() {

			throw new Error('Não é possível criar instâncias de ConnectionFactory');
		}

		static getConnection(){
			return new Promise((resolve, reject) =>{
				let openRequest = window.indexedDB.open(dbName, version);

				openRequest.onupgradeneeded = e => {
				console.log('Cria ou altera um banco já existente');
				ConnectionFactory._createStores(e.target.result);
				}			

				openRequest.onsuccess = e => {
					if(!connection) {
						connection = e.target.result
						//Antes de sobscrever o metodo, guardar o método original em uma variavel
						close = connection.close.bind(connection);
						//Monkey Patch - subscrevo o método original
						connection.close = function(){
							throw new Error("Você não pode fechar a conexão diretamente");
						}
						
						
					} 
					resolve(connection);				

				}			

				openRequest.onerror = e => {
					reject(e.target.error.name);			
				}
			});
		}

		static _createStores(connection){
			stores.forEach(store => {
				if(connection.objectStoreNames.contains(store))
					connection.deleteObjectStore(store)

				connection.createObjectStore(store, {autoIncrement: true});
			});
		}
			
		//Criando uma função que só permeta fechar a conexão atravez da função
		static closeConnection(){
			if(connection){
				close();
				connection = null;
			}
		}
	}
	
})();


