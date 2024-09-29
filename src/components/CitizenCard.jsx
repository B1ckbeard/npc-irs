import { useState } from 'react';
import {
  Tabs,
  Tab,
  Typography,
  Box
} from '@mui/material';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const CitizenCard = ({ person }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h3>Карточка с данными</h3>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Основные данные" {...a11yProps(0)} />
            <Tab label="Образование" {...a11yProps(1)} />
            <Tab label="Паспортные данные" {...a11yProps(2)} />
            <Tab label="ИНН, СНИЛС, ОМС" {...a11yProps(3)} />
            <Tab label="Автомобиль" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <p>Фамилия: {person.LastName}</p>
          <p>Имя: {person.FirstName}</p>
          <p>Отчество: {person.FatherName}</p>
          <p>Пол: {person.Gender}</p>
          <p>Дата рождения: {person.DateOfBirth}</p>
          <p>Возраст: {person.YearsOld}</p>
          <p>Номер телефона: {person.Phone}</p>
          <p>Электронная почта: {person.Email}</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>Специальность: {person.EduSpecialty}</p>
          <p>Направление: {person.EduProgram}</p>
          <p>Учебное заведение: {person.EduName}</p>
          <p>Дата окончания обучения: {person.EduYear}</p>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <p>Адрес: {person.Address}</p>
          <p>Страна: {person.Country}</p>
          <p>Регион: {person.Region}</p>
          <p>Город: {person.City}</p>
          <p>Улица: {person.Street}</p>
          <p>Квартира: {person.Apartment}</p>
          <p>Номер дома: {person.House}</p>
          <p>Серия и номер паспорта: {person.PasportNum}</p>
          <p>Код подразделения: {person.PasportCode}</p>
          <p>Кем выдан: {person.PasportOtd}</p>
          <p>Дата выдачи паспорта: {person.PasportDate}</p>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <p>ИНН: {person.inn_fiz}</p>
          <p>СНИЛС: {person.snils}</p>
          <p>ОМС: {person.oms}</p>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <p>Марка автомобиля: {person.CarBrand}</p>
          <p>Модель автомобиля: {person.CarModel}</p>
          <p>Год выпуска: {person.CarYear}</p>
          <p>Цвет: {person.CarColor}</p>
          <p>Номерной знак: {person.CarNumber}</p>
          <p>VIN Код: {person.CarVIN}</p>
          <p>Серия/номер СТС: {person.CarSTS}</p>
          <p>Дата выдачи СТС: {person.CarSTSDate}</p>
          <p>Серия/номер ПТС: {person.CarPTS}</p>
          <p>Дата выдачи ПТС: {person.CarPTSDate}</p>
        </TabPanel>
      </Box>
    </div>
  );
};

export default CitizenCard;
