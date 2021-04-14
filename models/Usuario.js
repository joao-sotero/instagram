module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        'Usuario', {
            nome:DataTypes.STRING,
            email:DataTypes.STRING,
            senha:DataTypes.STRING
        },{
            tableName: "usuarios",
            timestamps: false
        }
    );
Usuario.associate = (models) =>{
    //relação 1-n
    Usuario.hasMany(models.Post, {as:"posts", foreignKey: 'usuarios_id'});
    // relação n:m (usuario curte varios posts)
    Usuario.belongsToMany(models.Post, {
        as: "curtiu", 
        through: "curtidas", // tabela intermediaria que estou chamando
        foreignKey: "usuarios_id",
        otherKeys: "posts_id",
        timestamps: false    
    })

}
    return Usuario
}

