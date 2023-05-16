import * as Yup from 'yup';

 export  const signUpSchema = Yup.object({

    name: Yup.string().min(3,'Name must be atleast 3 characters long').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6,'Password must be atleast 8 characters long').required('Password is required'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'),null],'Passwords must match').required('Passwords must match')
 })