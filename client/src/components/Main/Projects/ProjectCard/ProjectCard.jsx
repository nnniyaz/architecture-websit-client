import classes from './ProjectCard.module.css';
import card from '../../../../assets/images/card.webp';

const ProjectCard = () => {
    return (
        <div className={classes.cell}>
            <img className={classes.image} src={card} alt="project" />

            <div className={classes.info}>
                <div className={classes.index}>01</div>
                <div className={classes.details}>
                    <div className={classes.projectName}>Canggu White House</div>
                    <div className={classes.description}>
                        Our intent is to be unclassifiable in a cluttered agency landscape.
                    </div>
                    <div className={classes.bottomInfo}>
                        <div className={classes.general}>
                            <div className={classes.year}>2022</div>
                            <div className={classes.location}>Bali</div>
                        </div>
                        <div className={classes.type}>Residential</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;