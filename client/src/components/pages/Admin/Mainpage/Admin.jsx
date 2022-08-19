import { useEffect, useState } from 'react';
import Row from '../Row/Row';
import classes from './Admin.module.css'
import axios from '../../../../api/axios';


const Admin = () => {
    const [numbers, setNumbers] = useState([]);
    const [selectedSort, setSelectedSort] = useState('static');

    useEffect(() => {
        fetchPhones()
    }, []);

    async function fetchPhones() {
        const response = await axios.get('/api/phones');
        setNumbers(response.data);
    }

    const setSortType = (e) => {
        if (e.currentTarget.innerText === 'New') setSelectedSort('static');
        else if (e.currentTarget.innerText === 'Processed') setSelectedSort('processed');
        else if (e.currentTarget.innerText === 'Deleted') setSelectedSort('deleted');
    }

    const processItem = async (data) => {
        data.status = "processed";
        await axios.put('/api/phones', data);
        window.location.reload(false);
    }

    const removeItem = async (data) => {
        data.status = "deleted";
        await axios.put('/api/phones', data);
        window.location.reload(true);
    }

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.title}>Dashboard</div>
                    <div className={classes.sortbar}>
                        <div className={classes.sortbtn} onClick={setSortType}>New</div>
                        <div className={classes.sortbtn} onClick={setSortType}>Processed</div>
                        <div className={classes.sortbtn} onClick={setSortType}>Deleted</div>
                    </div>
                </div>
                <div className={classes.numbers}>
                    <div
                        className={classes.row}
                        style={{ borderBottom: '1px solid black' }}
                    >
                        <div className={classes.cell}>Numbers</div>
                        <div className={classes.cell}>Date</div>
                        <div className={classes.cell}>Status</div>
                        <div className={classes.cell}>Processed</div>
                        <div className={classes.cell}>Deleted</div>
                    </div>
                    {
                        (numbers.filter(num => num.status === selectedSort)).map(number =>
                            <Row data={number} process={processItem} remove={removeItem} key={number.id} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Admin;