// Importa a conexão com o banco de dados
const db = require('../database/db');

// Exporta um objeto com os métodos do controller
module.exports = {
    // Função responsável por adicionar um like a um celular
    like: (req, res) => {
        // Extrai o id do celular dos parâmetros da requisição
        const {id} = req.params;
        // Atualiza o número de likes do celular no banco de dados
        db.query(
            'UPDATE celulares SET likes = likes + 1 WHERE id_celular = ?',
            [id],
            err => {
                // Se houver erro na atualização, retorna erro 500
                if (err) return res.status(500).json({error: err});
                // Busca o novo número de likes após a atualização
                db.query(
                    'SELECT likes FROM celulares WHERE id_celular = ?',
                    [id],
                    (err2, rows) => {
                        // Se houver erro na busca, retorna erro 500
                        if (err2) return res.status(500).json({error: err2});
                        // Retorna o número atualizado de likes em formato JSON
                        res.json({likes: rows[0].likes});
                    }
                );
            }
        );
    },

    // Função responsável por adicionar um deslike a um celular
    deslike: (req, res) => {
        // Extrai o id do celular dos parâmetros da requisição
        const {id} = req.params;
        // Atualiza o número de deslikes do celular no banco de dados
        db.query(
            'UPDATE celulares SET deslikes = deslikes + 1 WHERE id_celular = ?',
            [id],
            err => {
                // Se houver erro na atualização, retorna erro 500
                if (err) return res.status(500).json({error: err});
                // Busca o novo número de deslikes após a atualização
                db.query(
                    'SELECT deslikes FROM celulares WHERE id_celular = ?',
                    [id],
                    (err2, rows) => {
                        // Se houver erro na busca, retorna erro 500
                        if (err2) return res.status(500).json({error: err2});
                        // Retorna o número atualizado de deslikes em formato JSON
                        res.json({deslikes: rows[0].deslikes});
                    }
                );
            }
        );
    }
    
};
