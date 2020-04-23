import { store } from "../redux/store/store"


function addNewuser(data) {
    // console.log("data", data)

    fetch('http://localhost:5000/user/signup', {
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

function verifyUser(data, props) {
    fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .then(response => {
            console.log("response", response)
            if (response.success === true) {
                alert("Login Successfully")
                const userDetails = {
                    userID: response.user._id,
                    token: response.token
                }
                localStorage.setItem("userToken", JSON.stringify(userDetails));
                store.dispatch({
                    type: "USER_LOGIN",
                    user: response.user
                })
                return true
            } else {
                alert("Wrong Credintial")
                return false
            }
        })
        .then(() => {
            props.history.push("/app")
        })
        .catch((err) => {
            console.log("error" + err)
        })


}





export { addNewuser, verifyUser }