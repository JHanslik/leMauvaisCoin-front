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
                <h2>{user.pseudo}</h2>
                <p>{user.email}</p>
                <Link to={`/`}>
                    <Button text="Message send" type="button" />
                </Link>
            </section>
            <section>
                {/* {products.filter((product) => {
                    const filteredProducts = product.UserId === user.id
                    return filteredProducts.map((product) => {
                        return <ProductsCard product={product} />
                    })
                })} */}
            </section>
        </>
    )
}

export default User
