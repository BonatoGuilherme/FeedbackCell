const db = require('../database/db');
const login = (req, res) => {
    console.log(req.body)
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
        // Login bem-sucedido, retorna resposta de sucesso
        res.json({ success: true, message: 'Login realizado com sucesso.' });
    });
}
module.exports = { login };
