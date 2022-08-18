import s from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/news">News</Link>
        <Link to="/store">Store</Link>
      </div>

      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
