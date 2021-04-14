const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let { email, nome, senha } = req.body;
    let user = await Usuario.findAll({ where: { email } });
    if (user.length) {
        res.status(400).json({ erro: "Email já cadastrado" });
    } else {
        if (!email || !nome || !senha) {
            res.status(400).json({ erro: "Nome, email ou senha não informados." });
        } else {
            if ((senha.length < 6) || (senha.length > 12)) {
                res.status(400).json({ erro: "A senha precisa ter entre 6 e 12 caracteres." });
            } else {
                next();
            }
        }
    }
}

