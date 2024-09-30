import { useState, useEffect } from 'react';
import { 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Slider, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Pagination,
  Box,
  Grid2
} from '@mui/material';
import CitizenCard from './CitizenCard';

const CitizensList = ({ data }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [filters, setFilters] = useState({
    gender: '',
    ageRange: [0, 100],
  });
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    if (data) {
      setSelectedPerson(data[0]);
    }
  }, [data]);

  const handleRowClick = (person) => {
    setSelectedPerson(person);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
    setPage(1);
  };

  const handleAgeRangeChange = (event, newValue) => {
    setFilters({
      ...filters,
      ageRange: newValue,
    });
    setPage(1);
  };

  const applyFilters = () => {
    return data.filter(person => {
      let isValid = true;
      if (filters.gender && person.Gender !== filters.gender) {
        isValid = false;
      }
      if (person.YearsOld < filters.ageRange[0] || person.YearsOld > filters.ageRange[1]) {
        isValid = false;
      }
      return isValid;
    });
  };

  const filteredData = applyFilters();
  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 2 }}>
        <Box sx={{ height: '100%', padding: '20px', boxShadow: 4, borderRadius: 1 }}>
        <h3>Фильтры</h3>
        <FormControl fullWidth>
          <InputLabel id="gender-label">Пол</InputLabel>
          <Select
            labelId="gender-label"
            id="gender"
            name="gender"
            value={filters.gender}
            label="Пол"
            onChange={handleFilterChange}
          >
            <MenuItem value="">Все</MenuItem>
            <MenuItem value="Мужчина">Мужской</MenuItem>
            <MenuItem value="Женщина">Женский</MenuItem>
          </Select>
        </FormControl>
        <div style={{ marginTop: '20px' }}>
          <InputLabel id="age-range-label">Возраст</InputLabel>
          <Slider
            value={filters.ageRange}
            onChange={handleAgeRangeChange}
            valueLabelDisplay="auto"
            aria-labelledby="age-range-label"
            min={0}
            max={100}
          />
        </div>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setFilters({ gender: '', ageRange: [0, 100] })}
          style={{ marginTop: '20px' }}
        >
          Сбросить фильтры
        </Button>
        </Box>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 5 }}>
      <Box sx={{ height: '100%', padding: '20px', boxShadow: 4, borderRadius: 1 }}>
        <h3>Граждане</h3>
        <p>Всего: {filteredData.length}</p>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ФИО</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((person) => (
                <TableRow 
                  key={person.id} 
                  onClick={() => handleRowClick(person)} 
                  selected={selectedPerson === person}
                  style={{ cursor: 'pointer' }}
                >
                  <TableCell>{`${person.LastName} ${person.FirstName} ${person.FatherName}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={Math.ceil(filteredData.length / rowsPerPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
          style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      </Box>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 5 }}>
      <Box sx={{ height: '100%', width: '500px', padding: '20px', boxShadow: 4, borderRadius: 1 }}>
          {selectedPerson && (
            <CitizenCard person={selectedPerson} />
          )}
      </Box>
      </Grid2>
    </Grid2>
  );
};

export default CitizensList;
