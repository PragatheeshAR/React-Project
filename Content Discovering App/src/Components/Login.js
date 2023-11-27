import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import '../Assessts/Login.css';
export const ContextMessage = React.createContext();
const Login =()=>{
    useEffect(()=>{
        document.title = 'Login'
    })
    const [name,setname] = useState('')
    const [password,setpassword] = useState('')
    const link1 = useNavigate();
    function change(prevent){
        prevent.preventDefault();
        
        console.log(name)
        console.log(password)
        axios.get(`http://localhost:3001/user?name=${name}&password=${password}`)
        .then(res=>{
            if(res.data.length>0){
                toast.success('Login Successfull!',{duration:2000});
                setTimeout(nextpage,500)
            }
            else{
                toast.error("Login Unsuccessful\nInvalid username or password")
            }
        })
        .catch(err=>{console.log(err)})
    }
    function nextpage(){
        link1('/Home')
    }

    return(
        <>
        <div className='login_body'>
        <div style={{display:'flex'}}>
            <form onSubmit={change}>
            <div className="login_div">
                <h1 className="login_Log"><b>Login</b></h1>
                <TextField id="outlined-basic" label="Username" variant="outlined" className='login_un' sx={{marginBottom:'30px',borderRadius:'10px'}} value={name} onChange={(event)=>{setname(event.target.value)}} required/>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" className='login_un' sx={{marginBottom:'30px',borderRadius:'10px'}} value={password} onChange={(event)=>{setpassword(event.target.value)}} required/>
                    <div className="login_remember">
                        <label className="login_checkbox"><input type='checkbox'></input>Remember me</label>
                        <a href='/' className='login_forgot'>Forgot password?</a>
                    </div>
                {/* <Button variant="contained"  className='button' disableElevation sx={{marginBottom:'20px',backgroundColor:'black','&:hover':{backgroundColor:'black'}}}>Login</Button> */}
                <button className='login_button'>Login</button>
                    <div>
                        <label className='login_dont'>Don't have account? </label>
                        <Link to='/SignUp'><a href='/Login  ' className='login_forgot'>Signup</a></Link>
                    </div>
            </div>  
            </form>
            <div style={{marginTop:'50px',marginBottom:'80px',height:'50vh'}}><b style={{fontSize:'40px',color:'#373737'}}>Unlock tailored wonders<br></br>log in for your exclusive experience.</b><br></br><br></br><br></br>
                <div className='login_welcome'>
                    <h1 style={{fontSize:'40px',color:'#373737'}}>Welcome back!</h1>
                </div>
            </div>
        </div>
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <ContextMessage.Provider value={name}>
    </ContextMessage.Provider>
        </>
    )
}
export default Login;