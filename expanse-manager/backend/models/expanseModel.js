module.exports = (sequelize, Sequelize) => {

    const Expanse = sequelize.define("Expanse", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        categories: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        description: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });

    Expanse.associate = function (models) {
        Expanse.belongsTo(models.User)
    }

    return Expanse

}