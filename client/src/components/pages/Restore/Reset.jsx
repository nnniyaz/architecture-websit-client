import { useState } from 'react';
import classes from './Restore.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../../../api/axios';

const Reset = () => {
    const [password, setPassword] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const email = useParams().email;
    const id = useParams().id;
    const link = useParams().link

    const navigate = useNavigate();

    const updatePassword = async (password) => {
        await axios.put('/api/update', {
            _id: id,
            email: email,
            password: password,
            resetLink: link
        }).then(() => {
            try {
                setIsLoading(false);
                setIsShown(true)
            } catch (error) {
                console.log(error)
            }
        });
        setPassword('');
        navigate('/login', { replace: true });
    }

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>Enter new password</div>
                <form className={classes.form}>
                    <label className={classes.inputbar}>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={classes.input}
                            type="text"
                            placeholder='Password' />
                    </label>
                    <button className={classes.btn} onClick={(e) => {
                        e.preventDefault()
                        updatePassword(password);
                    }}>Restore</button>
                    {
                        isLoading && (
                            <div style={{ textAlign: 'center' }}>Loading...wait a few seconds...</div>
                        )
                    }
                    {
                        isShown && (
                            <div className={classes.sent}>
                                Password was changed successfuly!
                            </div>
                        )
                    }
                </form>
            </div>
            <div className={classes.footer}>Developed by <a href="https://init.kz">Init.kz</a></div>
        </div>
    );
}

export default Reset;