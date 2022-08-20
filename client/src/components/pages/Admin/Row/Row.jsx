import { useState } from 'react';
import classes from './Row.module.css';


const Row = ({ data, process, remove }) => {
    const [checked, setChecked] = useState(false);

    const handleClick = (e) => {
        setChecked(!checked);
    }

    return (
        <div className={classes.row}>
            <div className={classes.smallcell}>{data.id}</div>
            <div className={classes.cell}>{data.name}</div>
            <div className={classes.cell}>{data.email}</div>
            <div className={classes.maincell}>{data.message}</div>
        </div>
    );
}

export default Row;