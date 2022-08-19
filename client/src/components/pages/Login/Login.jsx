import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from 'react-router-dom';
import classes from "./Login.module.css"
import mail from '../../../assets/svgs/mail-black.svg'
import key from '../../../assets/svgs/key.svg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setAuth, persist, setPersist } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const from = location.state?.from?.pathname || "/admin";

    const [isShown, setIsShown] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPrivate.post('/api/user/login',
                {
                    email: email,
                    password: password
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            const accessToken = response?.data?.accessToken;
            if (!response?.data?.user?.is_activated) {
                setIsShown(true);
            }
            else {
                setAuth({ email, password, accessToken });
                togglePersist();
                navigate(from, { replace: true });
            }
        } catch (error) {
            if (!error?.response) {
                console.log(error)
                alert('No server response');
            } else if (error.response?.status === 400) {
                alert('Incorrect email or password')
            } else if (error.response?.status === 401) {
                alert('Unauthorized');
            } else {
                alert('Login Failed');
            }
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>Login</div>
                <form className={classes.form}>
                    <label className={classes.inputbar}>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={classes.input}
                            type="text"
                            placeholder='Email' />
                        <img className={classes.icon} src={mail} alt="icon" />
                    </label>
                    <label className={classes.inputbar}>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={classes.input}
                            type="text"
                            placeholder='Password' />
                        <img className={classes.icon} src={key} alt="icon" />
                    </label>
                    <button onClick={handleLogin} className={classes.btn}>
                        Sign in
                    </button>
                </form>
                <div>
                    Or you can <Link to='/admin/registration'>sign up</Link>
                </div>
                {
                    isShown && (
                        <div className={classes.fail}>
                            Please activate your account with the link sent to your email.
                        </div>
                    )
                }
            </div>
            <div className={classes.footer}>
                Developed by <a href="https://init.kz">Init.kz</a>
            </div>
        </div>
    );
}

export default Login;