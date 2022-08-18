import classes from './ProjectCard.module.css';
import card from '../../../../assets/images/project-card.webp';
import arrow from '../../../../assets/svgs/arrow.svg';

const ProjectCard = ({ data }) => {
    return (
        <div className={classes.cell}>
            <div className={classes.imageBlock}>
                <img className={classes.image} src={card} alt="project" />
                <div className={classes.link}>
                    <img className={classes.icon} src={arrow} alt="icon" />
                </div>
            </div>

            <div className={classes.info}>
                <div className={classes.index}>{data.index}</div>
                <div className={classes.details}>
                    <div className={classes.projectName}>{data.name}</div>
                    <div className={classes.description}>
                        {data.description}
                    </div>
                    <div className={classes.bottomInfo}>
                        <div className={classes.general}>
                            <div className={classes.year}>{data.year}</div>
                            <div className={classes.location}>{data.location}</div>
                        </div>
                        <div className={classes.type}>{data.type}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;