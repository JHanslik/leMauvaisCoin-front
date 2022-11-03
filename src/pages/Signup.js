import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import { signup } from '../api/Auth'

import Button from '../components/Button'


const Signup = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            pseudo: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Your email is required')
                .email('Your email is invalid'),
            pseudo: Yup.string()
                .required('Your pseudo is required')
                .min(5, 'pseudo trop court'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'password trop court')
                .max(15),
        }),
        onSubmit: (values) => {
            signup(values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                type="email"
                name="email"
                placeholder="email"
                // value={formik.values.email}
                handleChange={formik.handleChange}
                error={formik.errors.email}
            />
            <Input
                type="text"
                name="pseudo"
                placeholder="pseudo"
                // value={formik.values.pseudo}
                handleChange={formik.handleChange}
                error={formik.errors.pseudo}
            />
            <Input
                type="password"
                name="password"
                placeholder="password"
                // value={formik.values.password}
                handleChange={formik.handleChange}
                error={formik.errors.password}
            />
            <Button text="Envoyer" type="submit"/>
        </form>
    )
}
export default Signup
