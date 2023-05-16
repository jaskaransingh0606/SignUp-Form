import React from 'react'
import { useFormik } from 'formik';
import './Form.css';
import { signUpSchema } from '../schema';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: ''
}

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({  //useFormik is a hook that we can use to create a form in react
    initialValues: initialValues,                 //initialValues is an object that contains all the initial values of the form

    validationSchema: signUpSchema,




    onSubmit: (values, action) => {

      console.log(values);

      action.resetForm()   //resetForm is a function that resets the form after submission

    },


  })


  return (
    <div className='form-background'>

      <form className="formElements" onSubmit={handleSubmit}>
        <div className='textField-box'>
          <div className='element'>
            <div><label> Name</label><br></br></div>
            <div><input className='input' type="text" autoComplete='off' name='name' placeholder="Enter your name here"
              value={values.name} onChange={handleChange} onBlur={handleBlur}></input> </div>
            <div className='error'>{errors.name && touched.name ? (<p>{errors.name}</p>) : null}</div>
          </div>


          <div className='element'>
            <div><label> Email</label><br></br></div>
            <div><input className='input' type="email" autoComplete='off' name='email' placeholder="Enter your email here"
              value={values.email} onChange={handleChange} onBlur={handleBlur}></input></div>
            <div className='error'>{errors.email && touched.email ? (<p>{errors.email}</p>) : null}</div>
          </div>


          <div className='element'>
            <div><label> Password</label><br></br></div>
            <div> <input className='input' type="password" autoComplete='off' name='password' placeholder="Password"
              value={values.password} onChange={handleChange} onBlur={handleBlur}></input></div>
            <div className='error'>{errors.password && touched.password ? (<p>{errors.password}</p>) : null}</div>
          </div>


          <div className='element'>
            <div><label> Confirm Password</label><br></br></div>
            <div><input className='input' type="password" autoComplete='off' name='confirm_password' placeholder="Confirm Password"
              value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}></input></div>
            <div className='error'>{errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}</div>
          </div>
        


        <div>
          <button type='submit'>Sign Up</button>
        </div>
        </div>

      </form>
      

    </div>
  )
}

export default Form;