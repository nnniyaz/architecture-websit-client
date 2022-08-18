import s from './Content.module.scss'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
      <div className={s.content}>
        <div className={s.wrapper}>
          <h4>Residrential</h4>
          <h1>House rectangle in Aguora</h1>
          <Link to="/projects">
            See Project
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path d="m15.667 28.833-1-1L22.5 20l-7.833-7.875 1-1L24.5 20Z" fill='#fff' />
            </svg>
          </Link>
        </div>
      </div>
    );
}

export default Content