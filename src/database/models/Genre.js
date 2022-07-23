module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking:DataTypes.INTEGER,
        active: DataTypes.BOOLEAN,
    }, {
        timestamps: false,
        TableName: 'genres'
    });

   /*  Genre.associate = function (models) {
        Genre.hasMany(Model.Movies, {
            as: 'movies',
            foreignKey: 'genre_id',
            sourceKey: 'id',
    })
    } */

    return Genre;
}