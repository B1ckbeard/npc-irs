import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid2, Paper, Typography, Card, CardContent } from '@mui/material';
import { Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { Gauge } from '@mui/x-charts/Gauge';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requests = [];
      for (let i = 0; i < 20; i++) {
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

  const genderData = data.reduce((acc, person) => {
    const gender = person.Gender;
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});
  const genderChartData = Object.keys(genderData).map(gender => ({ name: gender, value: genderData[gender] }));

  const totalCitizens = data.length;
  const averageAge = data.reduce((sum, person) => sum + person.YearsOld, 0) / totalCitizens || 0;

  const cityData = data.reduce((acc, person) => {
    const city = person.City;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});
  const cityChartData = Object.keys(cityData).map(city => ({ name: city, value: cityData[city] }));

  const carBrandData = data.reduce((acc, person) => {
    const brand = person.CarBrand;
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});
  const carBrandChartData = Object.keys(carBrandData).map(brand => ({ name: brand, value: carBrandData[brand] }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ padding: '16px', flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} md={6} width={500} height={300}>
            <Card elevation={3} sx={{ marginBottom: '16px' }}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  Общее количество граждан
                </Typography>
                <Typography variant="h4" align="center">
                  {totalCitizens}
                </Typography>
              </CardContent>
            </Card>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  Средний возраст
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Gauge
                    width={100}
                    height={100}
                    value={averageAge.toFixed(0)}
                    startAngle={-90}
                    endAngle={90}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 item xs={12} md={6} width={500} height={300}>
            <Paper elevation={3}>
              <Typography variant="h6" align="center" gutterBottom>
                Распределение по полу
              </Typography>
              <PieChart width={500} height={300}>
                <Pie
                  data={genderChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {genderChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Paper>
          </Grid2>
          <Grid2 item xs={12}>
            <Paper elevation={3}>
              <Typography variant="h6" align="center" gutterBottom>
                Распределение по городам
              </Typography>
              <PieChart width={500} height={300}>
                <Pie
                  data={cityChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {cityChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Paper>
          </Grid2>
          <Grid2 item xs={12}>
            <Paper elevation={3}>
              <Typography variant="h6" align="center" gutterBottom>
                Распределение по маркам автомобилей
              </Typography>
              <PieChart width={500} height={300}>
                <Pie
                  data={carBrandChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {carBrandChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Dashboard;
