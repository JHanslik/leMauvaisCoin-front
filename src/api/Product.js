const token = localStorage.getItem('token')

const createProduct = async (value) => {
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

export { createProduct }
