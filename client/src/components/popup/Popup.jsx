import { useDispatch, useSelector } from 'react-redux';
import PopupForm from './popup-form/PopupForm'
import s from './Popup.module.scss'
import { setOpenPopup } from '../../redux/slices/popup'

const Popup = () => {
    const dispatch = useDispatch()
    const { isOpen } = useSelector(state => state.popup)

    return !isOpen ? (
      ""
    ) : (
      <div className={s.popup} onClick={() => dispatch(setOpenPopup(false))}>
        <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
          <div
            className={s.close}
            onClick={() => dispatch(setOpenPopup(false))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
              <path d="m10.542 30.958-1.5-1.5 9.5-9.458-9.5-9.458 1.5-1.5 9.458 9.5 9.458-9.5 1.5 1.5-9.5 9.458 9.5 9.458-1.5 1.5-9.458-9.5Z" />
            </svg>
          </div>
          <h2>Оставить заявку</h2>
          <p>
            Пожалуйста, укажите действительные данные, благодаря им, мы сможем
            связаться с вами.
          </p>
          <PopupForm />
        </div>
      </div>
    );
}

export default Popup