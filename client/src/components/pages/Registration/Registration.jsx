import { useContext } from "react";
import axios from "../../../api/axios";
import AuthContext from "../../../context/auth-provider";
import { useState } from "react"
import { Link } from 'react-router-dom';
import classes from "./Registration.module.css"
import mail from '../../../assets/svgs/mail-black.svg'
import key from '../../../assets/svgs/key.svg'
import nameIcon from '../../../assets/svgs/user.svg'
import surnameIcon from '../../../assets/svgs/users.svg'

const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isShown, setIsShown] = useState(false);

    const { setAuth } = useContext(AuthContext);

    const handleRegistration = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('/api/user/registration',
                {
                    name: name,
                    surname: surname,
                    email: email,
                    password: password
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            setIsLoading(false);
            setIsShown(true);
            setAuth({ email, password, name, surname, accessToken })
        } catch (error) {
            if (!error?.response) {
                alert('No server response');
            } else if (error.response?.status === 400) {
                alert('Validation Error')
            } else if (error.response?.status === 401) {
                alert('Unauthorized');
            } else {
                alert('Login Failed');
            }
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>Registration</div>
                <form className={classes.form}>
                    <label className={classes.inputbar}>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={classes.input}
                            type="text"
                            placeholder='Name' />
                        <img className={classes.icon} src={nameIcon} alt="icon" />
                    </label>
                    <label className={classes.inputbar}>
                        <input
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            className={classes.input}
                            type="text"
                            placeholder='Surname' />
                        <img className={classes.icon} src={surnameIcon} alt="icon" />
                    </label>
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
                    <button onClick={handleRegistration} className={classes.btn}>
                        Sign up
                    </button>
                </form>
                <div>
                    Or you can <Link to='/admin'>sign in</Link>
                </div>
                {
                    isLoading && (
                        <div className={classes.loading}>
                            Loading...wait a few seconds...
                        </div>
                    )
                }
                {
                    isShown && (
                        <div className={classes.success}>
                            Activation link was sent to your email.
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

export default Registration;