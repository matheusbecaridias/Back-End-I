const mysql = require('mysql2/promise');

// Configuração de conexão com o banco de dados
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'escola',
    database: process.env.DB_NAME || 'mynode',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

// Criar pool de conexões
let pool;

// Função para inicializar o pool
async function initializePool() {
    try {
        pool = mysql.createPool(dbConfig);
        console.log('✓ Pool de conexões criado com sucesso');
        return pool;
    } catch (error) {
        console.error('✗ Erro ao criar pool de conexões:', error);
        throw error;
    }
}

// Função para obter uma conexão do pool
async function getConnection() {
    try {
        if (!pool) {
            await initializePool();
        }
        const connection = await pool.getConnection();
        console.log('✓ Conexão obtida do pool');
        return connection;
    } catch (error) {
        console.error('✗ Erro ao obter conexão:', error);
        throw error;
    }
}

// Função para executar queries
async function query(sql, values = []) {
    let connection;
    try {
        connection = await getConnection();
        const [results] = await connection.execute(sql, values);
        return results;
    } catch (error) {
        console.error('✗ Erro ao executar query:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.release();
        }
    }
}

// Função para fechar o pool
async function closePool() {
    try {
        if (pool) {
            await pool.end();
            console.log('✓ Pool de conexões fechado');
        }
    } catch (error) {
        console.error('✗ Erro ao fechar pool:', error);
        throw error;
    }
}

// Exportar funções
module.exports = {
    initializePool,
    getConnection,
    query,
    closePool,
    pool: () => pool
};
