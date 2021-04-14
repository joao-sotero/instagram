module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post', {
        texto: DataTypes.STRING,
        img: DataTypes.STRING,
        usuarios_id: DataTypes.INTEGER,
        n_likes: DataTypes.INTEGER
    }, {
        tableName: "posts",
        timestamps: false
    }
    );

    Post.associate = (models) => {
        // relação N:1 (vários posts de 1 usuario)
        Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id" });
        //relação 1-n
        Post.hasMany(models.Comentario, {as:"comentarios", foreignKey: 'posts_id'});
// relação n:m (post tem varios comentarios)
        Post.belongsToMany(models.Usuario, {
            as: "curtiu", 
            through: "curtidas",
            foreignKey: "posts_id",
            otherKeys: "usuarios_id",
            timestamps: false
    })
}
    return Post
}