import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

import { createProduct } from '../api/Product'

import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../contexts/User'

import Button from '../components/Button'


const Product = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [user])

    const formik = useFormik({
        initialValues: {
            title: 'Test Title',
            content:
                'minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8',
            picture: '',
            price: '5',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Your title is required (test)'),
            content: Yup.string()
                .required('Content is required')
                .min(50, 'Content trop court'),
            price: Yup.string().required('Price is required'),
        }),
        onSubmit: async (values) => {
            await createProduct(values)
        },
    })

    return (
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
            <Input
                type="number"
                name="price"
                placeholder="Price"
                value={formik.values.price}
                handleChange={formik.handleChange}
                error={formik.errors.price}
            />
            <Input
                type="file"
                name="picture"
                value={formik.values.picture}
                handleChange={formik.handleChange}
            />
            <Button text="Envoyer" type="submit"/>

        </form>
    )
}
export default Product
