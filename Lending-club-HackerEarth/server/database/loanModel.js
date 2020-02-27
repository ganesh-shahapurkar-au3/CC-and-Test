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