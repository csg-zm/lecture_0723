import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import RegisterPage from '../pages/RegisterPage';
import CheckPasswordPage from '../pages/CheckPasswodePage';
import CheckEmailPage from '../pages/CheckEmailPage';
import Home from '../pages/Home';
import MessagePage from '../conponents/MessgePage';
import AuthLayouts from '../layout';

const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "register",
            element: <AuthLayouts>
                <RegisterPage/>
            </AuthLayouts>
        },
        {
            path: 'email',
            element: <AuthLayouts>
                <CheckEmailPage/>
            </AuthLayouts>
        },
        {
            path: 'password',
            element: <CheckPasswordPage/>
        },
        {
            path: "",
            element: <Home/>,
            children: [
                {
                    path: ':userId',
                    element: <MessagePage/>
                }
            ]
        }
    ]
}
])

export default router