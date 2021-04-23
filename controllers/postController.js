const {Post, sequelize} = require('../models');
const { Op } = require('sequelize');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll({
            include:['usuario', 'comentarios', 'curtiu' ]
        });
        return res.render('index',{listarPosts: posts});
    },
    create: async (req, res) =>{
        let {texto, usuario_id, post_id} = req.body;
        let novoPost =  await Usuario.create({
            texto,
            usuario_id,
            post_id
        })
        return res.json(novoPost);
        
    }, 
    update: async (req, res) => {
        let {id} = req.params;
        let {texto} = req.body;
        let atualiza = await Post.update({
            texto
        }, {
            where: { id }
        })
        return res.json(atualiza);
    },
    delete: async (req, res) =>{
        let {id} = req.params;
      let deletaPost = await Post.destroy({
    where: { id }
})

return res.json(deletaPost);
    },
    show: async(req,res) =>{
        const {id} = req.params;
        let mostrarTudo = await Post.findAll({
            where: {
                usuarios_id: id
            }
        })
        return res.json(mostrarTudo)
   
    
    }

}

module.exports = postsController;

