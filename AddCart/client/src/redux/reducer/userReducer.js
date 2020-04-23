const userReducer = (user = [], action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return user = action.user

        default:
            return user
    }
}

export { userReducer }