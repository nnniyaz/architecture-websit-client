import classes from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { useState } from 'react';
import View from '../../UI/View/View';

const Projects = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Canggu White House',
            year: 2022,
            location: 'Bali',
            type: 'Residential',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.'
        },
        {
            id: 2,
            name: 'Canggu White House',
            year: 2022,
            location: 'Bali',
            type: 'Residential',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.'
        },
        {
            id: 3,
            name: 'Canggu White House',
            year: 2022,
            location: 'Bali',
            type: 'Residential',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.'
        },
        {
            id: 4,
            name: 'Canggu White House',
            year: 2022,
            location: 'Bali',
            type: 'Residential',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.'
        },
    ]);

    return (
        <div className={classes.page}>
            <div className={classes.head}>
                <div className={classes.title}>PROJECTS</div>
                <div className={classes.view}>VIEW ALL</div>
            </div>

            <div className={classes.list}>
                <div className={classes.row}>
                    {
                        data.map(card =>
                            <ProjectCard key={card.id} data={card} />
                        )
                    }
                </div>
            </div>

            <View text='VIEW MORE' hasImg />
        </div>
    );
}

export default Projects;