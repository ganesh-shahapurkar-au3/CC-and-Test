
module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("User", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Expanse)
    }

    return User

}