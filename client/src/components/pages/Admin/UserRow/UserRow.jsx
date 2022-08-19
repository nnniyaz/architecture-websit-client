import classes from './UserRow.module.css'

const UserRow = ({ data }) => {
    return (
        <div className={classes.row}>
            <div className={classes.cell}>{data.name + " " + data.surname}</div>
            <div className={classes.cell}>{data.email}</div>
            <div className={classes.cell}>{data.role}</div>
            <div className={classes.cell}>{data.createdAt}</div>
        </div>
    );
}

export default UserRow;