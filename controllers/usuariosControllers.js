const { Usuario, sequelize } = require('../models');
const { Op } = require('sequelize');


const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll({
            oder:[
                ['id', 'ASC'] // ASC = maior pro menor, DESC = menor pro maior
            ],
            limit: 5, // limita o numero de resulados excelente para paginação
        })
        return res.json(usuarios);
    },
    create: async (req, res) => {
        let { nome, email, senha } = req.body;
        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        })
        return res.json(novoUsuario);
    },
        update: async (req, res) => {
            let { id } = req.params;
            let { nome, email, senha } = req.body;
            let atualiza = await Usuario.update({
                nome,
                email,
                senha
            }, {
                where: { id }
            })
            return res.send(atualiza);
        },
            delete: async (req, res) => {
                let { id } = req.params;
                let deletaUsuario = Usuario.destroy({
                    where: { id }
                })

                return res.json(deletaUsuario);
            },
                filtro: async (req, res) => {
                    const { filtro } = req.params
                    let usuarios = await Usuario.findAll({
                        where: {
                            nome: { [Op.like]: '%' + filtro + '%' } //notLike = pega todos os que não tiver dentro dos parametros
                        }
                    })
                    return res.json(usuarios);
                }
}



module.exports = usuariosController;