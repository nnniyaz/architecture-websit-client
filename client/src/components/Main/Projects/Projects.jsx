import classes from './Projects.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import { useState } from 'react';
import View from '../../UI/View/View';

const Projects = () => {
    const [data, setData] = useState([
        {
            index: '01',
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
        {
            index: '02',
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
        {
            index: '03',
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
        {
            index: '04',
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
    ]);

    return (
        <div className={classes.page}>
            <div className={classes.head}>
                <div className={classes.title}>PROJECT</div>
                <div className={classes.view}>VIEW ALL</div>
            </div>

            <div className={classes.list}>
                <div className={classes.row}>
                    {
                        data.map(card =>
                            <ProjectCard key={card.index} data={card} />
                        )
                    }
                </div>
            </div>

            <View text='VIEW MORE' />
        </div>
    );
}

export default Projects;