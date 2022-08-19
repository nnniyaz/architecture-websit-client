import s from './Nav.module.scss'
import {Link} from 'react-router-dom'
import MyButton from '../../UI/my-button/MyButton'
import { useDispatch } from 'react-redux'
import { setOpenPopup } from '../../../redux/slices/popup'

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
          <MyButton className={s.btn} onClick={() => dispatch(setOpenPopup(true))}>Оставить заявку</MyButton>
        </div>
      </nav>
    );
}

export default Nav