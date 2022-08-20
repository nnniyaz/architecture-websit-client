import { Link } from 'react-router-dom';
import classes from './ProjectsRow.module.css'

const ProjectsRow = ({ data }) => {
    return (
        <Link
            to={`/admin/projects/${data.id}`}
            className={classes.row}
            style={{ borderBottom: '1px solid black' }}
        >
            <div className={classes.smallcell}>{data.id}</div>
            <div className={classes.cell}>{data.name}</div>
            <div className={classes.smallcell}>{data.year}</div>
            <div className={classes.cell}>{data.location}</div>
            <div className={classes.cell}>{data.type}</div>
            <div className={classes.maincell}>{data.description}</div>
        </Link>
    );
}

export default ProjectsRow;