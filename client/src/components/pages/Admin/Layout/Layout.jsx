import { NavLink, Outlet } from 'react-router-dom';
import classes from './Layout.module.css';
import { useState } from 'react';
import useLogout from '../../../../hooks/useLogout';

const Layout = () => {
    const setActive = ({ isActive }) => isActive ? 'activeLink' : '';

    const logout = useLogout();
    const [isShown, setIsShown] = useState(false);

    const signout = async () => {
        await logout();
    }

    return (
        <div className={classes.main}>
            <div className={classes.menubtn} onClick={() => setIsShown(!isShown)}>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
            </div>
            <div
                className={classes.sidebar}
                style={{ display: isShown ? 'none' : '' }}
            >
                <div className={classes.sidenavbar}>
                    <NavLink
                        className={classes.link}
                        to='admin/main'
                        style={({ isActive }) => ({
                            color: isActive ? 'rgb(0, 6, 184)' : '',
                            backgroundColor: isActive ? 'rgba(241, 241, 241, 0.8)' : ''
                        })}
                    >
                        Main
                    </NavLink>
                    <NavLink
                        className={classes.link}
                        to='admin/users'
                        style={({ isActive }) => ({
                            color: isActive ? 'rgb(0, 6, 184)' : '',
                            backgroundColor: isActive ? 'rgba(241, 241, 241, 0.8)' : ''
                        })}
                    >
                        Users
                    </NavLink>
                    <NavLink
                        className={classes.link}
                        to='admin/projects'
                        style={({ isActive }) => ({
                            color: isActive ? 'rgb(0, 6, 184)' : '',
                            backgroundColor: isActive ? 'rgba(241, 241, 241, 0.8)' : ''
                        })}
                    >
                        Projects
                    </NavLink>
                    <div className={classes.link} onClick={signout}>Logout</div>
                    <div className={classes.footer}>
                        Developed by <a href="#">Init.kz</a>
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <Outlet />
            </div>
        </div >
    );
}

export default Layout;