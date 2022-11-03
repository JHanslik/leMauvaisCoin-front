const createProduct = async (user) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}products`, {
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

export { createProduct}
