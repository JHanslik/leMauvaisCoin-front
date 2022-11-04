import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

import { useParams } from 'react-router-dom'
import { oneProduct } from '../api/Product'

import { createMessage } from '../api/Message'

import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../contexts/User'
import Button from '../components/Button'

const Product = () => {
    const navigate = useNavigate()
    const { user, token } = useContext(UserContext)
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [user])

    const fetchProduct = async () => {
        const request = await oneProduct(id)
        setProduct(request)
    }

    const formik = useFormik({
        initialValues: {
            title: 'Test Title',
            content:
                'minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Your title is required (test)'),
            content: Yup.string()
                .required('Content is required')
                .min(50, 'Content trop court'),
        }),
        onSubmit: (values) => {
            const data = {
                title: values.title,
                content: values.content,
                receiverId: product?.UserId,
            }
            createMessage(data, product.id, token)
        },
    })

    if (!product) {
        return <p>loading</p>
    }
    return (
        <>
            <h2 className="text-center">
                Send a message to ask about : {product.title}
            </h2>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={formik.values.title}
                    handleChange={formik.handleChange}
                    error={formik.errors.title}
                />
                <Textarea
                    type="textarea"
                    name="content"
                    placeholder="content"
                    value={formik.values.content}
                    handleChange={formik.handleChange}
                    error={formik.errors.content}
                    row="10"
                />

                <Button text="Envoyer" type="submit" />
            </form>
        </>
    )
}
export default Product
