const createProduct = async (value, token) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}products/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(value),
    })

    const response = await request.json()
    console.log(response)
    return response
}

const createProductImage = async (value, token) => {
    console.log('on')
    const request = await fetch(
        `${process.env.REACT_APP_API_URL}products/photos`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(value),
        }
    )
    console.log("m'appel")

    const response = await request.json()
    console.log("l'ovni")
    console.log(response)
    return response
}

const allProduct = async () => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}products/`)
    const response = await request.json()

    return response
}

const oneProduct = async (id) => {
    const request = await fetch(
        `${process.env.REACT_APP_API_URL}products/${id}`
    )
    const response = await request.json()
    return response
}

export { createProduct, oneProduct, allProduct, createProductImage }
