

const userId = function () {
    if (localStorage.getItem("userToken")) {
        return JSON.parse(localStorage.getItem("userToken")).userID
    } else {
        return false;
    }
}

const userToken = function () {
    if (localStorage.getItem("userToken")) {
        return JSON.parse(localStorage.getItem("userToken")).token
    }
    return false;
}
const letterCorrection = (string) => {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const words = string.split(' ').map(capitalize)
    const correct = words.join(' ')
    return correct
}

export { letterCorrection, userToken, userId }