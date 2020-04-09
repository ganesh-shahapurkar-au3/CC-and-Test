module.exports = (connection, sequelize) => {
    return connection.define(
        "ted",
        {
            id: {
                type: sequelize.UUID,
                primaryKey: true,
                unique: true,
                defaultValue: sequelize.UUIDV4
            },
            description: {
                type: sequelize.TEXT,
                allowNull: false
            },
            event: {
                type: sequelize.TEXT,
                allowNull: false
            },
            main_speaker: {
                type: sequelize.TEXT,
                allowNull: false
            },
            name: {
                type: sequelize.TEXT,
                allowNull: false
            },
            published_date: {
                type: sequelize.BIGINT,
                allowNull: true
            },
            ratings: {
                type: sequelize.JSONB,
                get: function () {
                    return JSON.parse(this.getDataValue("ratings"));
                },
                set: function (val) {
                    return this.setDataValue("ratings", JSON.stringify(val));
                }
            },
            related_talks: {
                type: sequelize.JSONB,
                get: function () {
                    return JSON.parse(this.getDataValue("related_talks"));
                },
                set: function (val) {
                    return this.setDataValue("related_talks", JSON.stringify(val));
                }
            },
            tags: {
                type: sequelize.JSONB,
                allowNull: false
            },
            title: {
                type: sequelize.STRING,
                allowNull: false
            },
            url: {
                type: sequelize.STRING,
                defaultValue: null,
                validate: {
                    isUrl: {
                        args: true,
                        msg: "Not a Correct Url"
                    }
                }
            },
            views: {
                type: sequelize.BIGINT,
                allowNull: false
            }
        },
        {
            hooks: {
                beforeCreate: ted => {
                    const checkArrayData = field => {
                        if (Array.isArray(field) === false) {
                            field = field.split(",");
                            //   console.log(field);
                        }
                        return field;
                    };
                    ted.tags = checkArrayData(ted.tags);
                }
            }
        }
    );
};