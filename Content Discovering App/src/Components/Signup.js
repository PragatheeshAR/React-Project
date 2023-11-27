// import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import '../Assessts/Signup.css';
const Signup = ()=> {
    useEffect(()=>{
        document.title = 'SignUp';
    })
    const [email,setemail] = useState('');
    const [name,setname] = useState('');
    const [password,setpassword] = useState('');
    const link2 = useNavigate();
    function change(v){
  
        v.preventDefault();
        console.log(email)
        console.log(name)
        console.log(password)
        axios.post('http://localhost:3001/user',{email,name,password})
        .then(res=> toast.success('Successfully Created an Account!',{duration:3000}))
        .catch(err=> console.log(err)   )
        setTimeout(nextpage,800)
    }
    function nextpage()
    {
        link2('/Home')

    }
    return (
        <>
        <div className='signup_body'>
        <div className="signup_Outer">
            <div className='signup_segment1'>
                <p className='signup_text'>Join us today and unlock a world of possibilities</p>
                <br/>
                <p className='signup_text'><center>Sign up now to experience seamless access to exclusive features!</center></p>
            </div>
            <div className='signup_segment2'>
                <form onSubmit={change}>
                    <div className="signup_Inner">
                        <h3>Sign Up</h3>
                        <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'270px'}} value={email} onChange={(event)=>{setemail(event.target.value)}} required/>
                        <TextField id="outlined-basic" label="Username" variant="outlined" sx={{width:'270px'}} value={name} onChange={(event)=>{setname(event.target.value)}} required/>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" sx={{width:'270px'}} onChange={(event)=>{setpassword(event.target.value)}} required/>
                        <label className='signup_read'><input type="checkbox"></input> I read and agree to <span>Terms and Conditions</span></label>
                        {/* <Button variant="contained"  className='button' disableElevation sx={{marginBottom:'5px',backgroundColor:'black','&:hover':{backgroundColor:'black'},width:'150px',height:'40px'}}>Login</Button> */}
                        <button className='signup_button'>Sign Up</button>
                        <label className='signup_already'>Already Have an Account? <span><Link to='/Login'><a href='/' className='signup_already'> sign in</a></Link></span></label>

                    </div>
                </form>
            </div>
        </div>
        </div>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </>
    )
}
export default Signup;