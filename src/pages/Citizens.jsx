import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import NavBar from '../components/NavBar';
import CitizensList from '../components/CitizensList';
import citizens from '../Data.json';

const Citizens = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(citizens);
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ marginLeft:'120px' }}>
        <CitizensList data={data} />
      </Container>
    </div>
  );
};

export default Citizens;
