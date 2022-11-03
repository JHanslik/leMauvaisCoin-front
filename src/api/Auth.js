const signup = async (user) => {
    const request = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    const response = await request.json()
    console.log(response)
    return response
}

const login = async (user) => {
    const request = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })

    const response = await request.json()
    // console.log(response)
    return response
}

export { login, signup }
