import s from './Nav.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Nav = () => {
  const dispatch = useDispatch()

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
      </div>
    </nav>
  );
}

export default Nav