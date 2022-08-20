import s from './Card.module.scss'
import location from '../../../../../assets/svgs/location.svg'
import preview from '../../../../../assets/images/project-card.webp'

const Card = ({data}) => {
    return (
      <div className={s.card}>
        <div className={s.wrapper}>
          <img src={preview} alt="preview" />

          <div className={s.info}>
            <h4>{data.name}</h4>
            <p>{data.description}</p>
            <div>
              <div className={s.location}>
                <img src={location} alt="location" />
                <span>{data.location}</span>
              </div>
              <span>{data.year}</span>
            </div>
          </div>

          <div>
            {/* edditing project */}
          </div>
        </div>
      </div>
    );
}

export default Card