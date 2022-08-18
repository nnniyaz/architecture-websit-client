import s from './Office.module.scss'
import office from '../../../assets/images/office.jpg'

const Office = () => {
    return (
      <div className={s.office}>
        <h2>OFFICE</h2>

        <div className={s.content}>
          <div>
            <img src={office} alt="office" />
          </div>

          <div className={s.info}>
                <h3>Gaudi Studio</h3>
                <p>Lorem, ipsum dolor.</p>
                <p>1004 lorem</p>
                <p>lorem/ipsum</p>

                <div className={s.contact}>
                    <span>+41 21 624 44 44</span>
                    <span>test.site@gmail.com</span>
                </div>
          </div>
        </div>
      </div>
    );
}

export default Office;