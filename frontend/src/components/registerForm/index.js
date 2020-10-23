import React from 'react'
import {useFormik} from "formik"

import * as Yup from 'yup';
import "./style.scss";
import {FaEye} from "react-icons/fa";

function togglePass() {
    var x = document.getElementById("password");
    x.type ==="password" ? x.type = "text":  x.type = "password";   
}

const Registro = () => {
    const formik = useFormik({
        initialValues: {email:'',
        password: '',
        firstname:'',
        lastname: ''
    },
    validationSchema:Yup.object({
        email: Yup.string().email("invalid email").min(3,"must be 3 characters").required().label("Email"),
        password: Yup.string().min(8,"must be 8 characters").required().label("Password"),
    })
    ,
    onSubmit:  values => {
        console.log(JSON.stringify(values,null,2))
    },
      
    });
        return(
           <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
            <label htmlFor="email" className="password-label">Work Email:</label>
             <input
             id="email"
             type="email"
             name="email"
             onChange={formik.handleChange}
             value={formik.values.email}
             />
             {formik.touched.email && formik.errors.email ?( <div  className="error-message">{formik.errors.email}</div>): null}  
            </div>
           
             <div className="form-group">
             <label htmlFor="password">Password:</label>
             <input
             id="password"
             type="password"
             name="password"
             onChange={formik.handleChange}
             value={formik.values.password}
             />
              <span className="icon" onClick={togglePass}> <FaEye /> </span>
              {formik.touched.password && formik.errors.password ?( <div className="error-message">{formik.errors.password}</div>): null}
             </div>
             
             <div className="form-group-name">
              <label htmlFor="firstname">First Name:</label>
             <input
             id="firstname"
             type="text"
             name="firstname"
             onChange={formik.handleChange}
             value={formik.values.firstname}
             />
              {formik.touched.firstname && formik.errors.firstname ?( <div  className="error-message-name">{formik.errors.firstname}</div>): null}
              
              
              
              <label htmlFor="lastname">Last Name:</label>
             <input
             id="lastname"
             type="text"
             name="lastname"
             onChange={formik.handleChange}
             value={formik.values.lastname}
             />
              {formik.touched.lastname && formik.errors.lastname ?( <div  className="error-message-name">{formik.errors.lastname}</div>): null}
              </div>
             
             <button type="submit" className="signup-button">Sign up</button>
           </form>
            
           );
           
    
   
};

export default Registro;