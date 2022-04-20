import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate= useNavigate();
    if(loading){
        return <Loading></Loading>
      }
    const navigateLogin= () =>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;
        if(agree){
            createUserWithEmailAndPassword(email, password);
        }
    }
    return (
        <div className='register-form'>
            <h1 style={{textAlign: 'center'}}>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' id='' placeholder='Your Name' required/>
                <input type='email' name='email' id='' placeholder='Your Email' required/>
                <input type='password' name='password' id='' placeholder='Your Password' required/>
                <input onClick={() => setAgree(!agree)} type='checkbox' name='terms' id='terms' />
                <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor='terms'>Accept Genius Car terms and conditions</label>
                <input disabled={!agree} type='submit' value='Register' />
            </form>
            <p>Already have an account <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;