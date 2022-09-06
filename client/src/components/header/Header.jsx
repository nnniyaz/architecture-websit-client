import { useEffect, useState } from 'react';
import Logo from '../UI/logo/Logo'
import s from './Header.module.scss'
import Nav from './nav/Nav'

function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const Header = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={s.header}>
            <Logo color={'#fff'} />
            {
                windowSize.innerWidth <= 900
                    ?
                    <div onClick={() => setIsOpen(true)} className={s.burger}>
                        <div className={s.slice}></div>
                        <div className={s.slice}></div>
                        <div className={s.slice}></div>
                    </div>
                    :
                    <Nav />
            }
        </header>
    )
}

export default Header