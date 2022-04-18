import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';

const Login = () => {

    const signup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth , email , password).then((userCredentail) => {
            const user = userCredentail.user;
            setUser(user);
            console.log(user.email);
        }).catch((err) => {
            const error = err.message;
        })
        ; 
    }

    const login = () => {
        signInWithEmailAndPassword(auth,loginEmail,loginPassword).
        then ((userCredentail) => {
            const user = userCredentail.user;
            setUser(user);
        })
        .catch((err) => {
            const errorCode = err.code;
            const errMsg = err.message;
        });
    }

    const logout = () => {
        signOut(auth).then(setUser(null)).catch(err => {const error = err.message;})
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState(null);

  return (
    <div>
        <div className='app_signup'>
        <input type="text" name="email" id="" placeholder='Enter Email Id' onChange={(e)=> {setEmail(e.target.value)}}/>
        <input type="password" name="password" id="" placeholder='Enter password' onChange={(e)=> {setPassword(e.target.value)}}/>
        <button onClick={signup}>Signup</button>
        </div>

        <br /><br />

        <div className='app_login'>
        <input type="text" name="email" id="" placeholder='Enter Email Id' onChange={(e)=> {setLoginEmail(e.target.value)}}/>
        <input type="password" name="password" id="" placeholder='Enter password' onChange={(e)=> {setLoginPassword(e.target.value)}}/>
        <button onClick={signup}>Signup</button>
        </div>
    </div>
  )
}

export default Login;