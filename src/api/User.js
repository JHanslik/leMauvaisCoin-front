const me = async (token) => {
    console.log(token)
    const request = await fetch(`${process.env.REACT_APP_API_URL}user/me`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })

    const response = await request.json()
    return response
}

export { me }
