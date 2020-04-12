function addNewuser(data) {
    console.log("getting data", data)

    fetch('http://localhost:8000/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then(response => {
            console.log("success :", response)
        })
        .catch((err) => {
            console.log('error', err)
        })
}

function addNewExpanse(data) {
    console.log("getting data", data)

    fetch('http://localhost:8000/addExpanse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then(response => {
            console.log("success :", response)
        })
        .catch((err) => {
            console.log('error', err)
        })
}

function checkLogin(data, history) {
    fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then(response => {
            console.log("response", response)
            if (response.success === true) {
                alert("Login Successfully")
                localStorage.setItem("userData", JSON.stringify(response.user));
                return true
            } else {
                alert("Wrong Credintial")
                return false
            }
        })
        .then(() => {
            history.push('/dashboard')
        })
        .catch((err) => {
            console.log("error" + err)
        })
}

function getExpanse() {
    fetch("http://localhost:8000/getExpanse")
        .then((data) => data.json())
        .then((response) => {
            console.log("responese ", response)
        })
        .catch((err) => {
            console.log('error', err)
        })
}

export { addNewuser, addNewExpanse, getExpanse, checkLogin }