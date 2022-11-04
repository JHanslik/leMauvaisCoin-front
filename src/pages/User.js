import { UserContext } from '../contexts/User'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allProduct } from '../api/Product'
import ProductsCard from '../components/ProductsCard'
import Button from '../components/Button'

const User = () => {
    const [products, setProducts] = useState()

    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [user])
    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line
    }, [])

    const fetchProduct = async () => {
        const request = await allProduct()
        setProducts(request)
    }

    if (!products) {
        return <p>loading</p>
    }

    return (
        <>
            <section>
                <h2 className="text-center">Username : {user.pseudo}</h2>
                <p className="text-center">Email : {user.email}</p>
                <Link to={`/user/message-sent`}>
                    <Button text="Message sent" type="button" />
                </Link>
            </section>
            <section>
                {products
                    .filter((product) => product.UserId === user.id)
                    ?.map((product) => {
                        return (
                            <ProductsCard key={product.id} product={product} />
                        )
                    })}
            </section>
        </>
    )
}

export default User
