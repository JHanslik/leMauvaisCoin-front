
const createMessage = async (user) => {
    const request = await fetch(
        `${process.env.REACT_APP_API_URL}/products/1/messages`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(user),
        }
    )

    const response = await request.json()
    console.log(response)
    return response
}

export { createMessage }
