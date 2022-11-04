import { useContext, useEffect, useState } from 'react'
import { allMessages } from '../api/Message'
import UserMessages from '../components/UserMessages'
import { UserContext } from '../contexts/User'
import { useNavigate } from 'react-router-dom'

const MessagesSent = () => {
    const navigate = useNavigate()
    const { token, user } = useContext(UserContext)
    const [messages, setMessages] = useState(null)

    useEffect(() => {
        if (token) {
            fetchMessages()
        }
        // eslint-disable-next-line
    }, [token])

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [user])

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
