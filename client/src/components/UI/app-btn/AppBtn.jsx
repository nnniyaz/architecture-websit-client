import classes from './AppBtn.module.scss'

const View = ({ text }) => {
    return (
      <div className={classes.view}>
        <div className={classes.innerview}>
          <div className={classes.viewText}>{text}</div>
        </div>
      </div>
    );
}

export default View;