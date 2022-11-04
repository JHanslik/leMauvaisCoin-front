import { useContext, useEffect, useState } from 'react'
import { allMessages } from '../api/Message'
import UserMessages from '../components/UserMessages'
import { UserContext } from '../contexts/User'

const MessagesSent = () => {
    const { token } = useContext(UserContext)
    const [messages, setMessages] = useState(null)

    useEffect(() => {
        if (token) {
            fetchMessages()
        }
        // eslint-disable-next-line
    }, [token])

    const fetchMessages = async () => {
        const request = await allMessages(token)
        setMessages(request)
    }

    if (!messages) {
        ;<p>Loading</p>
    }
    return (
        <>
            {messages?.map((message) => {
                return <UserMessages key={message.id} message={message} />
            })}
        </>
    )
}
export default MessagesSent
