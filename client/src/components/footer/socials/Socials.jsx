import s from './Socials.module.scss'
import twitter from '../../../assets/images/socials/twitter.png'
import instagram from '../../../assets/images/socials/instagram.png'

const Socials = () => {
  return (
    <div className={s.socials}>
      <a href="#" target="_blank">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="#" target="_blank">
        <img src={instagram} alt="instagram" />
      </a>
    </div>
  );
}

export default Socials