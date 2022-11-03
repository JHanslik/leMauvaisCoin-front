import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import {login} from '../api/Auth'

const Login = () => {
    
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .required('Your email is required (test)')
            .email('Your email is invalid'),
          password: Yup.string()
            .required('Password is required')
            .min(8, 'password trop court')
            .max(15)
        }),
        onSubmit: values => {
          console.log('Submit ')
          console.log(values)
        }
      })

    
  return (
    <form onSubmit={formik.handleSubmit}>
    <Input
      type='email'
      name='email'
      placeholder='email'
      value={formik.values.email}
      handleChange={formik.handleChange}
      error={formik.errors.email}
    />
    <Input
      type='password'
      name='password'
      placeholder='password'
      value={formik.values.password}
      handleChange={formik.handleChange}
      error={formik.errors.password}
    />
    <button type='submit'>Envoyer</button>
  </form>
  )
}
export default Login
