import s from './Content.module.scss'
import { Link } from 'react-router-dom'
import AppBtn from '../../../UI/app-btn/AppBtn'
import MyButton from '../../../UI/my-button/MyButton'

const Content = () => {
  return (
    <div className={s.content}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <h1>House rectangle</h1>
          <h1>in Aguora</h1>
        </div>
        <div className={s.btns}>
          <div className={s.projectBtn}>
            <MyButton className={s.innerBtn} theme={'light'}>
              <span>See Project {'->'}</span>
            </MyButton>
          </div>
          <MyButton style={{ backgroundColor: 'white', color: 'black' }} theme={'light'}>Оставить заявку</MyButton>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          className={s.arrowBottom}
          onClick={(e) => e.target.scrollIntoView()}
        >
          <path
            d="M20 42.2 1.8 24 20 5.8l1.5 1.5L4.75 24 21.5 40.7Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
}

export default Content