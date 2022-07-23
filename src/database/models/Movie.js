module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER,
        releaseDate: {
            type: DataTypes.DATE,
            field: 'release_date',
        },
        length: DataTypes.INTEGER,
        genreId: {
            type: DataTypes.INTEGER,
            field: 'genre_id',
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
        TableName: 'movies'
    });

    return Movie;
}