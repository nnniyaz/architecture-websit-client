import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../../api/axios';
import classes from './ProjectPage.module.css';

const ProjectPage = () => {
    const { id } = useParams();

    const [project, setProject] = useState(
        {
            id: 1,
            name: 'Canggu White House',
            description: 'Our intent is to be unclassifiable in a cluttered agency landscape.',
            year: 2022,
            location: 'Bali',
            type: 'Residential'
        }
    );

    useEffect(() => {
        getProject();
    }, [])

    const getProject = async () => {
        const response = await axios.get(`/api/project/project/${id}`);
        setProject(response.data);
    }

    return (
        <div className={classes.main}>
            <div className={classes.title}>
                {id}
            </div>
        </div>
    );
}

export default ProjectPage;