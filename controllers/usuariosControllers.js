const bcrypt = require('bcryptjs')
const { Usuario, sequelize } = require('../models');

const { Op } = require('sequelize');
const { request } = require('express');


const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        //     oder:[
        //         ['id', 'ASC'] // ASC = maior pro menor, DESC = menor pro maior
        //     ],
        //     limit: 5, // limita o numero de resulados excelente para paginação
        // })
        return res.render('usuarios', { listarUsuarios: usuarios });
    },
    //verifficar
    login: (req, res) => {
        return res.render('login');
    },
    auth: async (req, res) => {
        const { email, senha } = req.body;

        const usuario = await Usuario.findOne({
            where: { email }
        });
        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
            req.session.usuario = usuario //criando atributo usuario logado na session
            return res.redirect('/'); // redirectionando para pagina inicial
        }else{
            return res.redirect('/usuarios/login')
        }
    },
    registro: (request, response) => {
        return response.render('registro');
    },
    create: async (req, res) => {
        let { nome, email, senha } = req.body;

        const senhaCrypt = bcrypt.hashSync(senha, 10);

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCrypt
        })
        return res.render('/usuarios/login');
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
    }
}
        //     },
        //     filtro: async (req, res) => {
        //         const { filtro } = req.params
        //         let usuarios = await Usuario.findAll({
        //             where: {
        //                 nome: { [Op.like]: '%' + filtro + '%' } //notLike = pega todos os que não tiver dentro dos parametros
        //             }
        //         })
        //         return res.json(usuarios);
        //     }
        // }



        module.exports = usuariosController;