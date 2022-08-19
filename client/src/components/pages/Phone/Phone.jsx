import classes from './Phone.module.css'

const Phone = ({ data }) => {
    return (
        <div className={classes.number}>{data.number}</div>
    );
}

export default Phone;