const db = require('../database/db');

module.exports = {
    like: (req, res) => {
        const {id} = req.params;
        db.query(
            'UPDATE celulares SET likes = likes + 1 WHERE id_celular = ?',
            [id],
            err => {
                if (err) return res.status(500).json({error: err});
                db.query(
                    'SELECT likes FROM celulares WHERE id_celular = ?',
                    [id],
                    (err2, rows) => {
                        if (err2) return res.status(500).json({error: err2});
                        res.json({likes: rows[0].likes});
                    }
                );
            }
        );
    },

    deslike: (req, res) => {
        const {id} = req.params;
        db.query(
            'UPDATE celulares SET deslikes = deslikes + 1 WHERE id_celular = ?',
            [id],
            err => {
                if (err) return res.status(500).json({error: err});
                db.query(
                    'SELECT deslikes FROM celulares WHERE id_celular = ?',
                    [id],
                    (err2, rows) => {
                        if (err2) return res.status(500).json({error: err2});
                        res.json({deslikes: rows[0].deslikes});
                    }
                );
            }
        );
    }
    
};
