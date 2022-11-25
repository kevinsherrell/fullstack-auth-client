import {useState} from "react";
import {useAuth} from '../Hooks/auth';
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");

    return (
        <div>
            <h1>Fullstack Auth Registration Page</h1>
            <label htmlFor="">Email: </label>
            <input type="text" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="">Password: </label>
            <input type="text" onChange={(e) => setPassword(e.target.value)}/>

            <label htmlFor="">Verify Password: </label>
            <input type="text" onChange={(e) => setVerify(e.target.value)}/>
            <button onClick={async () => {
                const registerResult = await auth.register(email, password, verify);
                if (registerResult.success) {
                    navigate('/login');
                } else {
                    setRegisterMessage(registerResult.message);
                }
            }}>Sign Up
            </button>
        </div>
    )
}
export default RegistrationPage;