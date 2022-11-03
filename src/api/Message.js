const token = localStorage.getItem('token')

const createMessage = async (user) => {
    const request = await fetch(`${process.env.REACT_APP_API_URL}/:id/messages`, {
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

export { createMessage }
