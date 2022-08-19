import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../api/axios';
import classes from './Restore.module.css'

const Restore = () => {
    const [email, setEmail] = useState('');
    const [isShown, setIsShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async (email) => {
        setIsLoading(true);
        await axios.post('/api/forgot', { email: email }).then(() => {
            try {
                setIsLoading(false);
                setIsShown(true)
            } catch (error) {
                console.log(error)
            }
        });
        setEmail('');
    }

    return (
        <div className={classes.main}>
            <Link to='/login' className={classes.goback}>{'<- Go back'}</Link>
            <div className={classes.container}>
                <div className={classes.title}>Enter your email</div>
                <form className={classes.form}>
                    <label className={classes.inputbar}>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={classes.input}
                            type="text"
                            placeholder='Email' />
                    </label>
                    <button className={classes.btn} onClick={(e) => {
                        e.preventDefault();
                        sendEmail(email);
                    }}>Restore</button>
                    {
                        isLoading && (
                            <div style={{ textAlign: 'center' }}>Loading...wait a few seconds...</div>
                        )
                    }
                    {
                        isShown && (
                            <div className={classes.sent}>
                                Link for password reset was sent to your email. Please, check your email.
                            </div>
                        )
                    }
                </form>
            </div>
            <div className={classes.footer}>Developed by <a href="https://init.kz">Init.kz</a></div>
        </div>
    );
}

export default Restore;