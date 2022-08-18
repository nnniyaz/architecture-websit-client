import Logo from '../UI/logo/Logo'
import s from './Header.module.scss'
import Nav from './nav/Nav'

const Header = () => {
    return (
        <header className={s.header}>
            <Logo color={'#fff'} />
            <Nav />
        </header>
    )
}

export default Header