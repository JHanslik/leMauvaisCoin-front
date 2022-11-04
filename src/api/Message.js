const createMessage = async (values, id, token) => {
    const request = await fetch(
        `${process.env.REACT_APP_API_URL}products/${id}/messages`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
        }
    )

    const response = await request.json()
    console.log(response)
    return response
}

export { createMessage }
