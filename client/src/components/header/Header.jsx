import s from './Header.module.scss'
import Logo from './logo/Logo'
import Nav from './nav/Nav'

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header