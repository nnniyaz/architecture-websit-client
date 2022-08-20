import s from './Nav.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import login from '../../../assets/svgs/login.svg'
import loginBlack from '../../../assets/svgs/login-black.svg'
import { useState } from 'react'

const Nav = () => {
  const dispatch = useDispatch()

  const [entered, setEntered] = useState(false);

  return (
    <nav className={s.nav}>
      <div className={s.left}>
        <Link to="/projects">Projects</Link>
        <Link to="/news">News</Link>
        <Link to="/store">Store</Link>
      </div>

      <div className={s.right}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link className={s.link} to="/admin/main" onMouseEnter={() => setEntered(true)} onMouseLeave={() => setEntered(false)}>
          <img className={s.icon} src={entered ? loginBlack : login} alt="icon" />
          <div>ЛИЧНЫЙ КАБИНЕТ</div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav