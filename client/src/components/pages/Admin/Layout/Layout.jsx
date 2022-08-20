import { NavLink, Outlet } from 'react-router-dom';
import classes from './Layout.module.scss';
import { useState } from 'react';
import useLogout from '../../../../hooks/useLogout';
import Menu from './menu/Menu';

const Layout = () => {
    const setActive = ({ isActive }) => isActive ? 'activeLink' : '';

    const logout = useLogout();

    const signout = async () => {
        await logout();
    }

    return (
        <div className={classes.main}>
            <Menu />

            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;