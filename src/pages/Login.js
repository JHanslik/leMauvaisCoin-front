import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../api/Auth'
import { UserContext } from '../contexts/User'
import Button from '../components/Button'

const Login = () => {
    const navigate = useNavigate()
    const { setToken } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
            email: 'email@email.fr',
            password: 'minimum8',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Your email is required (test)')
                .email('Your email is invalid'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'password trop court')
                .max(15),
        }),
        onSubmit: async (values) => {
            const { token } = await login(values)
            setToken(token)
            if (token) {
                navigate('/')
            }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                type="email"
                name="email"
                placeholder="email"
                value={formik.values.email}
                handleChange={formik.handleChange}
                error={formik.errors.email}
            />
            <Input
                type="password"
                name="password"
                placeholder="password"
                value={formik.values.password}
                handleChange={formik.handleChange}
                error={formik.errors.password}
            />
            <Button text="Envoyer" type="submit" />
        </form>
    )
}
export default Login
