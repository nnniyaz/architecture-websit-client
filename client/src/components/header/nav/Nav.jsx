import s from './Nav.module.scss'
import { Link } from 'react-router-dom'
import MyButton from '../../UI/my-button/MyButton'
import { useDispatch } from 'react-redux'
import { setOpenPopup } from '../../../redux/slices/popup'
import View from '../../UI/View/View'
import AppBtn from '../../UI/app-btn/AppBtn'

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