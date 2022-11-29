import {useEffect, useState} from "react";
import {useAuth} from '../Hooks/auth';

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const HomePage = ()=>{
    const [message, setMessage] = useState('');
    const auth = useAuth();

    useEffect(()=>{
        const fetchMessage = async()=>{
            const response = await fetch(`${urlEndpoint}/users/message`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
                }
            });
            const responseJson = await response.json();
            setMessage(responseJson.message);

        }

        if(auth.userToken !== null){
            fetchMessage();
        }
        if(auth.userToken === null){
            setMessage("");
        }
    })
    return (
        <div>
            <h1>Fullstack Auth Home Page</h1>
        </div>
    )
}
export default HomePage;