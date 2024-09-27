import { useState, useEffect } from 'react'
import axios from 'axios';
import NavBar from '../components/NavBar';
import CitizensList from '../components/CitizensList';

const Citizens = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requests = [];
      for (let i = 0; i < 5; i++) {
        requests.push(axios.get('https://api.randomdatatools.ru/'));
      }
      try {
        const responses = await Promise.all(requests);
        const newData = responses.map(response => response.data);
        setData(newData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container vw-100 vh-100 d-flex p-0">
      <NavBar />
      <CitizensList data={data} />
    </div>
  )
}

export default Citizens
