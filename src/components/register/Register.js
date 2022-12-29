import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Maincontext';
import './register.scss'

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

const handalesubmit = e => {
e.preventDefault()
const email = e.target.email.value 
const password = e.target.password.value 
createUser(email, password)
.then(result => {
    console.log(result)
    toast.success("create account success")
    navigate("/");
})
}
    return (
        <div>
            
            <form className='register' onSubmit={handalesubmit} >
                <span>Name</span><br />
                <input type="text" name='name'/><br />
                <span>Email</span><br />
                <input type="email" name="email" id="" /><br />
                <span>Password</span><br />
                <input type="password" name='password' /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;