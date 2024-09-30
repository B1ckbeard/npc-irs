import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/DashBoard';
import Citizens from './pages/Citizens';
import 'react-tabs/style/react-tabs.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/npc-irs/" element={<Dashboard />} />
        <Route path="/npc-irs/citizens" element={<Citizens />} />
      </Routes>
    </Router>
  );
}

export default App
