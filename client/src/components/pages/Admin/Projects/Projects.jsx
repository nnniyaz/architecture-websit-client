import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../../../../api/axios';
import ProjectsRow from '../ProjectsRow/ProjectsRow';
import classes from './Projects.module.css'

const Projects = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
        {
            id: 2,
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
        {
            id: 3,
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
        {
            id: 4,
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        },
    ]);

    useEffect(() => {
        getProjects()
    }, []);

    const getProjects = async () => {
        const response = await axios.get('/api/project/projects');
        setData(response.data);
    }

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>Projects</div>
                <div className={classes.users}>
                    <div
                        className={classes.row}
                        style={{ borderBottom: '1px solid black' }}
                    >
                        <div className={classes.smallcell}>ID</div>
                        <div className={classes.cell}>Project Name</div>
                        <div className={classes.smallcell}>Year</div>
                        <div className={classes.cell}>Location</div>
                        <div className={classes.cell}>Type</div>
                        <div className={classes.maincell}>Description</div>
                    </div>
                    {
                        data.map(row =>
                            <ProjectsRow data={row} key={row.id} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;