import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allProduct } from '../api/Product'
import ProductsCards from '../components/ProductsCard'

const Home = () => {
    const [products, setProducts] = useState(null)

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
           {products.map((product) => {
                    return (
                        <ProductsCards
                            key={product.id}
                            product={product}
                        />
                    );
                })}
        </>
    )
}

export default Home
