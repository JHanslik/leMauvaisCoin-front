const me = async (token) => {
    console.log(token)
    const request = await fetch('http://localhost:5000/user/me', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
}

export { me }
