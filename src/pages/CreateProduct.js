import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../contexts/User'

const Product = () => {

    const formik = useFormik({
        initialValues: {
            title: 'Test Title',
            content: 'minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8minimum8',
            picture: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Your title is required (test)'),
            content: Yup.string()
                .required('Content is required')
                .min(50, 'Content trop court')
        }),
        onSubmit: async (values) => {

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
              type="file"
              name="picture"
              value={formik.values.picture}
              handleChange={formik.handleChange}
            />
            <button type="submit">Envoyer</button>
        </form>
    )
}
export default Product
