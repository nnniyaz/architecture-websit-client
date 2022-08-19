import { useState } from 'react';
import classes from './Row.module.css'
import cog from '../../../../assets/svgs/cog.svg'
import trash from '../../../../assets/svgs/trash.svg'


const Row = ({ data, process, remove }) => {
    const [checked, setChecked] = useState(false);

    const handleClick = (e) => {
        setChecked(!checked);
    }

    return (
        <div className={classes.row}>
            <div className={classes.cell}>{data.number}</div>
            <div className={classes.cell}>{data.date}</div>
            <div className={classes.cell}>{data.status}</div>
            <div className={classes.cell}>
                <div className={classes.iconbar}>
                    <img className={classes.icon} src={cog} alt="icon" onClick={() => process(data)} />
                </div>
            </div>
            <div className={classes.cell}>
                <div className={classes.iconbar}>
                    <img className={classes.icon} src={trash} alt="icon" onClick={() => remove(data)} />
                </div>
            </div>
        </div>
    );
}

export default Row;