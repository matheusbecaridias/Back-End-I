// app.js
const db = require('./db');
const query = require('./query');

// Testar conexão ao iniciar
async function main() {
    try {
        // Testar conexão
        const connected = await db.testConnection();
        if (!connected) {
            console.log('❌ Não foi possível conectar ao banco de dados');
            return;
        }

        // Exemplo 1: SELECT simples
        console.log('\n📦 Buscando todos os produtos:');
        const produtos = await query.executeQuery('SELECT * FROM produtos');
        console.log(produtos);

        // Exemplo 2: SELECT com parâmetros
        console.log('\n🔍 Buscando produto específico:');
        const produto = await query.fetchOne(
            'SELECT * FROM produtos WHERE codProduto = ?',
            [2]
        );
        console.log(produto);

       } catch (error) {
        console.error('❌ Erro na aplicação:', error);
    }
}

// Executar a aplicação
main();