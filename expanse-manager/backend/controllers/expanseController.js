const { Expanse } = require('../DB/db-Config')


async function addExpanse(data) {
    console.log(data)
    try {
        await Expanse.create({
            userId: data.userId,
            categories: data.categories,
            amount: data.amount,
            description: data.description
        })
        console.log("epxanse addedd successfully")
        return true
    }
    catch (e) {
        console.log("err", e)
        return false;
    }
}

async function getExpanse() {
    try {
        const results = await Expanse.findAll();
        console.log("success", results)
        return results;
    }
    catch (e) {
        console.log(e)
        return [];
    }
}


module.exports = { addExpanse, getExpanse }