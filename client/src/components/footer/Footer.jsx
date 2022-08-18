import s from './Footer.module.scss'
import Logo from '../UI/logo/Logo'
import Nav from './nav/Nav'
import Socials from './socials/Socials';

const Footer = () => {
    return (
      <footer className={s.footer}>
        <Logo color={"#000"} />
        <div>
          <Nav />
          <Socials />
        </div>
      </footer>
    );
}

export default Footer