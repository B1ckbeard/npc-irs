import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container } from '@mui/material';
import NavBar from '../components/NavBar';
import CitizensList from '../components/CitizensList';

const Citizens = () => {
  const [data, setData] = useState([]);
  const citizensCount = 50;

  useEffect(() => {
    const fetchData = async () => {
      const requests = [];
      for (let i = 0; i < citizensCount; i++) {
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
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ padding: '16px', flexGrow: 1 }}>
        <CitizensList data={data} />
      </Container>
    </Box>
  );
};

export default Citizens;
