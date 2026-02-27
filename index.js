(async () => {
    const db = require('./db');
    console.log('Iniciando aplicação...');

    console.log("SELECT * FROM Produtos");
    const produtos = await db.query('SELECT * FROM Produtos');
    console.log('produtos:', produtos);
})();


(async () => {
    const db = require('./db');
    console.log('Iniciando aplicação...');

    console.log("SELECT * FROM clientes");
    const clientes = await db.query('SELECT * FROM clientes');
    console.log('clientes:', clientes);
})();

