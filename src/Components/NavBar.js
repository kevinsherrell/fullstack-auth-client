import {Link} from "react-router-dom";
import {useAuth} from '../Hooks/auth';

const NavBar = () => {
    const auth = useAuth();
    return (
        <nav>
            <h3>{auth.userEmail && auth.userEmail}</h3>
            <Link to={'/'}>Home</Link>
            <Link to={'/registration'}>Registration</Link>
            <Link to={'/login'}>Login</Link>
            <button onClick={()=>auth.logout()}>Logout</button>
        </nav>
    )
}
export default NavBar;