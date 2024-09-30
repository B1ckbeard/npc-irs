import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import Citizens from './pages/Citizens';
import 'react-tabs/style/react-tabs.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/citizens" element={<Citizens />} />
      </Routes>
    </Router>
  );
}

export default App
