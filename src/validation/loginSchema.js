import * as yup from 'yup'

export default yup.object().shape({
    username: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be 3 characters long'),
    password: yup
    .string()
    .required('Password is required')
    .min(3, 'Password must be 3 characters long')
})