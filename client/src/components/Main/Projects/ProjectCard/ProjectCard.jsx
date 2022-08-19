import classes from './ProjectCard.module.css';
import card from '../../../../assets/images/project-card.webp';
import arrow from '../../../../assets/svgs/arrow.svg';
import arrowWhite from '../../../../assets/svgs/arrow-white.svg';
import { useState } from 'react';

const ProjectCard = ({ data }) => {
    const [entered, setEntered] = useState(false);

    return (
        <div className={classes.cell}>
            <div className={classes.imageBlock} onMouseEnter={() => setEntered(true)} onMouseLeave={() => setEntered(false)}>
                <div
                    className={classes.image}
                    style={{ backgroundImage: `url(${card})` }} />
                <div className={classes.link}>
                    <img className={classes.icon} src={entered ? arrowWhite : arrow} alt="icon" />
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