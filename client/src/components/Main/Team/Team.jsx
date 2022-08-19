import classes from './Team.module.css';
import View from '../../UI/View/View';
import { useState } from 'react';
import TeamCard from './TeamCard/TeamCard';

const Team = () => {

    const [data, setData] = useState([
        {
            id: 1,
            fullname: 'Laura Gaudi',
            position: 'Principal + Architect',
            nickname: '@laura.draw',
            email: 'laura@gaudi-arch.com'
        },
        {
            id: 2,
            fullname: 'Laura Gaudi',
            position: 'Principal + Architect',
            nickname: '@laura.draw',
            email: 'laura@gaudi-arch.com'
        },
        {
            id: 3,
            fullname: 'Laura Gaudi',
            position: 'Principal + Architect',
            nickname: '@laura.draw',
            email: 'laura@gaudi-arch.com'
        },
    ])

    return (
        <div className={classes.page}>
            <div className={classes.title}>TEAM</div>
            <div className={classes.categories}>
                <div className={classes.category}>ALL</div>
                <div className={classes.category}>STUDIO LEADERS</div>
                <div className={classes.category}>ADVISORY BOARD</div>
            </div>
            <div className={classes.staff}>
                {
                    data.map(person =>
                        <TeamCard key={person.id} data={person} />
                    )
                }
            </div>

            <View text='VIEW ALL MEMBERS' />
        </div>
    );
}

export default Team;