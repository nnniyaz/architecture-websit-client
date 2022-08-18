import classes from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
    return (
        <div className={classes.page}>
            <div className={classes.head}>
                <div className={classes.title}>PROJECT</div>
                <div className={classes.view}>VIEW ALL</div>
            </div>

            <div className={classes.list}>
                <div className={classes.row}>
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <div className={classes.row}>
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            <div className={classes.footer}>
                <div className={classes.more}>VIEW MORE</div>
            </div>

        </div>
    );
}

export default Projects;