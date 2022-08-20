import { useEffect, useState } from 'react';
import Row from '../Row/Row';
import classes from './Admin.module.css'
import axios from '../../../../api/axios';


const Admin = () => {
    const [client, setClient] = useState([
      {
        id: 1,
        name: "abc",
        email: "abc@gmail.com",
        message: "some message some message some message",
      },
      {
        id: 2,
        name: "abc",
        email: "abc@gmail.com",
        message: "some message some message some message",
      },
      {
        id: 3,
        name: "abc",
        email: "abc@gmail.com",
        message: "some message some message some message",
      },
      {
        id: 1,
        name: "abc",
        email: "abc@gmail.com",
        message: "some message some message some message",
      },
      {
        id: 2,
        name: "abc",
        email: "abc@gmail.com",
        message: "some message some message some message",
      },
      {
        id: 3,
        name: "abc",
        email: "abc@gmail.com",
        message: "some message some message some message",
      },
    ]);

    useEffect(() => {
        fetchClients()
    }, []);

    async function fetchClients() {
        const response = await axios.get('/api/client/clients');
        setClient(response.data);
    }

    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.header}>
            <div className={classes.title}>Почта</div>
          </div>
          <div className={classes.numbers}>
            <div
              className={classes.row}
            >
              <div className={[classes.cell, classes.cellId].join(' ')}>ID</div>
              <div className={classes.cell}>Name</div>
              <div className={classes.cell}>Email</div>
              <div className={classes.maincell}>Message</div>
            </div>
            {client.map((number) => (
              <Row data={number} key={number.id} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Admin;