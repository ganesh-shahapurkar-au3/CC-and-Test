module.exports = (sequelize, Sequelize) => {

    const loan = sequelize.define('loan', {
        member_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        loan_amnt: {
            type: Sequelize.INTEGER
        },
        funded_amnt_inv: {
            type: Sequelize.DECIMAL
        },
        term: {
            type: Sequelize.STRING
        },
        int_rate: {
            type: Sequelize.DECIMAL
        },
        installment: {
            type: Sequelize.DECIMAL
        },
        grade: {
            type: Sequelize.CHAR
        },
        emp_title: {
            type: Sequelize.STRING
        },
        emp_length: {
            type: Sequelize.STRING
        },
        home_ownership: {
            type: Sequelize.STRING
        },
        annual_inc: {
            type: Sequelize.STRING
        },
        verification_status: {
            type: Sequelize.STRING
        },
        issue_d: {
            type: Sequelize.STRING
        },
        loan_status: {
            type: Sequelize.STRING
        },
        desc: {
            type: Sequelize.TEXT
        },
        purpose: {
            type: Sequelize.TEXT
        },
        title: {
            type: Sequelize.TEXT
        },
        addr_state: {
            type: Sequelize.STRING
        },
        last_pymnt_d: {
            type: Sequelize.STRING
        },
        last_pymnt_amnt: {
            type: Sequelize.STRING
        }
    },
        {
            timestamps: false,

            // I don't want createdAt
            createdAt: false,

            // I want updatedAt to actually be called updateTimestamp
            updatedAt: false,

            // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
            deletedAt: false,
            paranoid: false
        })
    return loan
}


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
                    return JSON.parse(this.getDataValue("rating"));
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


module.exports = (sequelize, Sequelize) => {

    const Ted = sequelize.define('ted', {
        description: {
            type: Sequelize.STRING,
        },
        event: {
            type: Sequelize.STRING
        },
        main_speaker: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.TEXT
        },
        published_date: {
            type: Sequelize.INTEGER
        },
        ratings: {
            type: Sequelize.JSONB
        },
        related_talks: {
            type: Sequelize.JSONB
        },
        speaker_occupation: {
            type: Sequelize.STRING
        },
        tags: {
            type: Sequelize.JSONB
        },
        url: {
            type: Sequelize.TEXT
        },
        views: {
            type: Sequelize.INTEGER
        },
        verification_status: {
            type: Sequelize.STRING
        }
    },
        {
            defaultPrimaryKey: false,
            timestamps: false,

            // I don't want createdAt
            createdAt: false,

            // I want updatedAt to actually be called updateTimestamp
            updatedAt: false,

            // And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
            deletedAt: false,
            paranoid: false
        })
    return Ted
}