import { useEffect, useState } from 'react';
import axios from '../../../../api/axios';
import useAuth from '../../../../hooks/useAuth';
import classes from './Users.module.css';
import UserRow from '../UserRow/UserRow';

const Users = () => {
    const { auth } = useAuth();
    const [users, setUsers] = useState([]);
    const [isErr, setIsErr] = useState(false);

    // useEffect(() => {
    //     try {
    //         getUsers();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    // const getUsers = async () => {
    //     let config = {
    //         headers: {
    //             "authorization": `Bearer ${auth.accessToken}`
    //         }
    //     }

    //     const response = await axios.get('/api/user/users', config);
    //     setUsers(response.data);
    //     setIsErr(false);
    // }

    return (
        <div className={classes.main}>
            {
                isErr
                    ?
                    <div className={classes.errmsg}>У вас нету права доступа.</div>
                    :
                    <div className={classes.container}>
                        <div className={classes.title}>Все Пользователи</div>
                        <div className={classes.users}>
                            <div className={classes.row}>
                                <div className={[classes.cell, classes.cellId].join(' ')}>ID</div>
                                <div className={classes.cell}>ФИО</div>
                                <div className={classes.cell}>Email</div>
                                <div className={classes.cell}>Роль</div>
                                <div className={classes.cell}>Время</div>
                            </div>
                            {
                                users.map(user =>
                                    <UserRow data={user} key={user.email} />
                                )
                            }
                        </div>
                    </div>
            }
        </div>
    );
}

export default Users;