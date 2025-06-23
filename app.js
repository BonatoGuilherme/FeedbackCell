const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

//Conexão com o banco de dados
const db = require('./database/db');
const app = express();
const PORT = 3000;

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/src')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/celulares', require('./routes/celulares'));


app.use(session({
    secret: 'feedbackcell_secret',
    resave: false,
    saveUninitialized: false,
}));

// Rota raiz para exibir o catálogo
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//Rota para listar celulares com caminho completo das imagens
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

//Rota página principal (celulares)
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para página de comentários
app.get('/comment.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'comment.html'));
});

//Start do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
