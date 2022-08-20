import { useParams } from 'react-router-dom';
import classes from './ProjectPage.module.css';

const ProjectPage = () => {
    const { id } = useParams();

    return (
        <div className={classes.main}>
            <div className={classes.title}>
                {id}
            </div>
        </div>
    );
}

export default ProjectPage;