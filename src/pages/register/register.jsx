import { Link } from "react-router-dom";
import './register.scss'
export default function Register(){
    return(
        <div className='register'>
            <div className='card'>
                <div className='left'>
                    <h1>Lama Social.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className='right'>
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" placeholder='UserName' />
                        <input type="Email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="Text" placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}