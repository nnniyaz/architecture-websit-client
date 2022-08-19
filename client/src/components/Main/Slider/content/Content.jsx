import s from './Content.module.scss'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
      <div className={s.content}>
        <div className={s.wrapper}>
          <h1>House rectangle in Aguora</h1>
          <Link to="/projects">
            See Project
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path
                d="m15.667 28.833-1-1L22.5 20l-7.833-7.875 1-1L24.5 20Z"
                fill="#fff"
              />
            </svg>
          </Link>

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
        <div className={s.content}>
          <div className={s.wrapper}>
            <h1>HOUSE RECTANGLE IN AGUORA</h1>
            <Link to="/projects">
              See Project
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path
                  d="m15.667 28.833-1-1L22.5 20l-7.833-7.875 1-1L24.5 20Z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );}

export default Content