const { User } = require('../DB/db-Config');
const { Expanse } = require('../DB/db-Config')

async function readUsersData() {
    try {
        const results = await User.findAll();
        console.log("success", results)
        return results;
    }
    catch (e) {
        console.log(e)
        return [];
    }
}

async function verifyLogin(data) {
    console.log("data==>>", data)
    const { username, password } = data;
    try {
        const result = await User.findOne({
            where: { username: username }
        })
        console.log(result.password + "&" + password)
        if (!result) {
            return false;
        } else if (result.password === password) {
            return result
        }
    }
    catch (err) {
        console.log("error" + err)
        return false
    }
}

async function adduser(data) {
    console.log(data)
    try {
        await User.create({
            username: data.username,
            firstname: data.firstname,
            lastname: data.lastname,
            password: data.password,

        })
        return true
    }
    catch (e) {
        console.log("err", e)
        return false;
    }
}

module.exports = { readUsersData, adduser, verifyLogin }