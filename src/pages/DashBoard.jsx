import NavBar from '../components/NavBar';

const Dashboard = () => {
  return (
    <div className="container vw-100 vh-100 d-flex p-0">
      <NavBar />
      <div className="">
        <h1>Dashboard</h1>
        <p>Здесь будут графики и статистика по гражданам.</p>
      </div>
    </div>
  );
};

export default Dashboard;
