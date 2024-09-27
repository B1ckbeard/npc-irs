import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='d-flex align-items-center justify-content-center position-sticky top-0 start-0 vh-100 bg-dark'
      style={{ width: '150px' }}
    >
      <nav className="nav flex-column">
        <Link to="/" className="nav-link text-light">Dashboard</Link>
        <Link to="/citizens" className="nav-link text-light">Граждане</Link>
      </nav>
    </div>
  );
};

export default NavBar;
