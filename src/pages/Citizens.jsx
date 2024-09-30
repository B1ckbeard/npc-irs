import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, CircularProgress } from '@mui/material';
import NavBar from '../components/NavBar';
import CitizensList from '../components/CitizensList';

const Citizens = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <NavBar />
      <Container>
        {loading ? (
          <Box sx={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <CitizensList data={data} />
        )}
      </Container>
    </div>
  );
};

export default Citizens;
