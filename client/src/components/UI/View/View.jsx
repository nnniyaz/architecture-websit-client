import classes from './View.module.css';
import arrow from '../../../assets/svgs/arrow.svg';

const View = ({ text }) => {
    return (
      <div className={classes.view}>
        <div className={classes.innerview}>
          <div className={classes.viewText}>{text}</div>
          <img className={classes.icon} src={arrow} alt="icon" />
        </div>
      </div>
    );
}

export default View;