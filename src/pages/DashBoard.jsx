import { useState, useEffect } from 'react';
import { Container, Grid2, Paper, Typography, Card, CardContent } from '@mui/material';
import { Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import NavBar from '../components/NavBar';
import citizens from '../Data.json';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(citizens);
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
    <div style={{ height: '100%' }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ marginLeft:'120px', padding:'16px' }}>
        <Typography variant="h4" align='center' gutterBottom sx={{ marginBottom:'16px' }}>
          Dashboard
        </Typography>
        <Grid2 container spacing={2}>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Card elevation={2}
              sx={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  Общее количество граждан
                </Typography>
                <Typography variant="h4" align="center">
                  {totalCitizens}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <Card elevation={2}
              sx={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                  Средний возраст
                </Typography>
                <Typography variant="h4" align="center">
                  {averageAge.toFixed(0)}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper elevation={2} sx={{padding:'16px'}} align="center">
              <Typography variant="h6" align="center" gutterBottom>
                Распределение по полу
              </Typography>
              <PieChart width={300} height={300}>
                <Pie
                  data={genderChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
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

          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper elevation={2} sx={{padding:'16px'}} align="center">
              <Typography variant="h6" align="center" gutterBottom>
                Распределение по городам
              </Typography>
              <PieChart width={300} height={300}>
                <Pie
                  data={cityChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {cityChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Paper>
          </Grid2>
          
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Paper elevation={2} sx={{padding:'16px'}} align="center">
              <Typography variant="h6" align="center" gutterBottom>
                Распределение по маркам авто
              </Typography>
              <PieChart width={300} height={300}>
                <Pie
                  data={carBrandChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {carBrandChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Dashboard;
