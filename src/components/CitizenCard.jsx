import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Typography, Paper } from '@mui/material';

const CitizenCard = ({ person }) => {
  return (
    <Paper elevation={2} sx={{padding:'16px', paddingBottom:'4px', height: '100%'}}>
      <Typography variant="h5" align='center' gutterBottom>
        Карточка с данными
      </Typography>
      <Tabs>
        <TabList>
          <Tab>Основные данные</Tab>
          <Tab>Образование</Tab>
          <Tab>Паспортные данные</Tab>
          <Tab>ИНН, СНИЛС, ОМС</Tab>
          <Tab>Автомобиль</Tab>
        </TabList>
        <TabPanel>
          <p>Фамилия: {person.LastName}</p>
          <p>Имя: {person.FirstName}</p>
          <p>Отчество: {person.FatherName}</p>
          <p>Пол: {person.Gender}</p>
          <p>Дата рождения: {person.DateOfBirth}</p>
          <p>Возраст: {person.YearsOld}</p>
          <p>Номер телефона: {person.Phone}</p>
          <p>Электронная почта: {person.Email}</p>
        </TabPanel>
        <TabPanel>
          <p>Специальность: {person.EduSpecialty}</p>
          <p>Направление: {person.EduProgram}</p>
          <p>Учебное заведение: {person.EduName}</p>
          <p>Дата окончания обучения: {person.EduYear}</p>
        </TabPanel>
        <TabPanel>
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
        <TabPanel>
          <p>ИНН: {person.inn_fiz}</p>
          <p>СНИЛС: {person.snils}</p>
          <p>ОМС: {person.oms}</p>
        </TabPanel>
        <TabPanel>
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
      </Tabs>
    </Paper>
  );
};

export default CitizenCard;
