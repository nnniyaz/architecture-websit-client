import avatar from '../../../../assets/images/avatar.jpg';
import classes from './TeamCard.module.css';

const TeamCard = ({ data }) => {
    return (
        <div className={classes.card}>
            <img className={classes.image} src={avatar} alt="profile photo" />
            <div className={classes.fullname}>{data.fullname}</div>
            <div className={classes.position}>{data.position}</div>
            <div className={classes.contacts}>
                <div className={classes.nickname}>{data.nickname}</div>
                <div className={classes.email}>{data.email}</div>
            </div>
        </div>
    );
}

export default TeamCard;