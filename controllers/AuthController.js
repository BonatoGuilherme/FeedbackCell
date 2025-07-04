const db = require('../database/db');
const login = (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ error: 'Preencha todos os campos' });
    }
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (error, results) => {
        if (error) return res.status(500).json({ error: 'Erro no servidor.' });
        if (results.length === 0) return res.status(401).json({ error: 'Usuário não encontrado.' });

        const user = results[0];
        if (user.senha !== senha) {
            return res.status(401).json({ error: 'Senha incorreta.' });
        }
        req.session.user = user;
        // Redireciona para a página principal após login bem-sucedido
        res.redirect('/index');
    });
}
module.exports = { login };
