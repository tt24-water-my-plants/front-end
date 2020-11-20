import * as yup from 'yup'

export default yup.object().shape({
    username: yup
        .string()
        .email()
        .required('Your username should be your email'),
    phone_number: yup
        .number()
        .typeError('Please enter a valid phone number')
        .positive('You need positive numbers')
        .integer('A phone number cannot include a decimal point')
        // .min(9, 'Phone number must include area code')
        // .max(10, 'Phone number cannot be more than 10 digits')
        .required('Phone number is required'),
    password: yup
    .string()
    .required('Password is required')
    .min(3, 'Password must be 3 characters long'),
    confirmP: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})