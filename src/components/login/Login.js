import './login.scss'
import GoogleIcon from '@mui/icons-material/Google';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/Maincontext';
import { toast } from 'react-hot-toast';
const Login = () => {
    const { signin, loading, setLoading, signInWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handalelogin = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value 
signin(email, password)
.then(result => {
    toast.success("login success")
    navigate(from, { replace: true })
})
  }

  const handaleLogin = () => {
    signInWithGoogle()
    .then(result => {
      toast.success("sing In successful")
    })
  }
    return (
        <div>
            
            <form className='register' onSubmit={handalelogin} >
                <span>Email</span><br />
                <input type="email" name="email" id="" /><br />
                <span>Password</span><br />
                <input type="password" name='password' /><br />
                <div className='login'>
                <button type="submit">Login</button>
                <span onClick={handaleLogin}><GoogleIcon/></span>
                </div>
            </form>
        </div>
    );
};

export default Login;