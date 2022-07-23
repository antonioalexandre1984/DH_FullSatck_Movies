module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
          type: DataTypes.DECIMAL,
        },  
        favorite_movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
        },
    }, {
        timestamps: false,
        TableName: 'genres'
    });

   /*  Actor.associate = function (models) {
        Actor.hasOne(Model.Movie, {
            as: 'favoriteMovie',
            foreignKey: 'id',
            sourceKey: 'favoriteMovieId',
        })
    }; */

    return Actor;
}