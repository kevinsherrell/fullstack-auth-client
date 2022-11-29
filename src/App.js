import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
    const router = createBrowserRouter([{
        path: "/",
        element: <GlobalLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/registration',
                element: <RegistrationPage/>
            }
        ]
    }])
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
