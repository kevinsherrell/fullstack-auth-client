import {useAuth} from "../Hooks/auth";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const LoginPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState(
        ''
    );
    return (
        <div>
            <h1>Fullstack Auth Login Page</h1>
            <label htmlFor="">Email: </label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password: </label>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={async () => {
                const loginResult = await auth.login(email, password);
                if (loginResult.success) {
                    navigate('/');
                } else {
                    setLoginMessage(loginResult.message);
                }
            }}>Login
            </button>
        </div>
    )
}
export default LoginPage;