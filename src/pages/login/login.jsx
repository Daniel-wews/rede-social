import { Link } from "react-router-dom";
import './login.scss'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
export default function Login(){

    const {login} = useContext(AuthContext);
    const handleLogin = () => {
        login();
    }

    return(
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <h1>Hello Word.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
                    <span>Don´t you have an account?</span>
                    <Link to="/register">
                    <button>register</button>
                    </Link>
                    
                </div>
                <div className='right'>
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder='UserName' />
                        <input type="password" placeholder='Password' />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}