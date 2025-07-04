// Importa o framework Express para criar o servidor web
const express = require('express');
// Importa o middleware de sessão para gerenciar sessões de usuário
const session = require('express-session');
// Importa o body-parser para tratar dados enviados via POST
const bodyParser = require('body-parser');
// Importa o path para manipular caminhos de arquivos e diretórios
const path = require('path');
// Carrega variáveis de ambiente do arquivo .env
require('dotenv').config();

// Conexão com o banco de dados
const db = require('./database/db');
// Cria a aplicação Express
const app = express();
// Define a porta do servidor
const PORT = 3000;

// Middlewares
// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Serve arquivos estáticos da subpasta 'public/src'
app.use(express.static(path.join(__dirname, 'public/src')));
// Configura o body-parser para receber dados de formulários (urlencoded)
app.use(bodyParser.urlencoded({ extended: false }));
// Configura o body-parser para receber dados em JSON
app.use(bodyParser.json());
// Permite que o Express trate dados urlencoded
app.use(express.urlencoded({ extended: false }));
// Permite que o Express trate dados em JSON
app.use(express.json());

// Configura a sessão para autenticação e controle de usuário
app.use(session({
    secret: 'feedbackcell_secret', // Chave secreta para assinar a sessão
    resave: false, // Não salva a sessão se nada mudou
    saveUninitialized: false, // Não cria sessão até que algo seja salvo
}));
// Rota raiz para exibir a página de login (página inicial)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
// Usa as rotas definidas no arquivo 'routes/celulares.js' para o caminho '/celulares'
app.use('/celulares', require('./routes/celulares'));
// Usa as rotas definidas no arquivo 'routes/celulares.js' para o caminho '/celulares'
app.use('/usuarios', require('./routes/usuarios'));

// Rota para listar celulares com caminho completo das imagens (API)
app.get('/celulares', (req, res) => {
    db.query('SELECT * FROM celulares', (err, results) => {
        if (err) {
            console.error('Erro ao buscar celulares: ', err);
            return res.status(500).json({ erro: 'Erro ao buscar celulares!' });
        }

        // Adiciona o caminho correto das imagens para o front-end
        const celularesComImagens = results.map(celular => ({
            ...celular,
            imagem: `/src/IMG/celulares/${celular.imagem}`
        }));

        res.json(celularesComImagens);
    });
});
// Rota para página principal (index)
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
// Rota para página principal (index.html)
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
// Rota para página de comentários
app.get('/comment.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'comment.html'));
});
// Rota para página de login
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'))
});
// Inicia o servidor na porta definida e exibe mensagem no console
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
