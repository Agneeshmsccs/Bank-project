import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './Context';

export default function Navbar() {
  const navigate = useNavigate();
  const userContext = React.useContext(UserContext);

  const handleLogout = () => {
    if (userContext && userContext.setCurrentUser) {
      userContext.setCurrentUser(null); 
    }
    navigate('/Home'); 
  };

  return (
    <nav style={{display:'flex',gap:'220px', backgroundColor: '#060708', color: '#2d34e9' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ marginLeft: '10px' }}>Global Bank</h1>
      </div>
      <div>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, marginTop:'.8em',fontSize:'22px' }}>
          <li style={{ margin: '0 10px' }}><Link to="/home" style={{ color: '#2d34e9', textDecoration: 'none' }}>Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/createaccount" style={{ color: '#2d34e9', textDecoration: 'none' }}>Create Account</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/deposit" style={{ color: '#2d34e9', textDecoration: 'none' }}>Deposit</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/withdraw" style={{ color: '#2d34e9', textDecoration: 'none' }}>Withdraw</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/alldata" style={{ color: '#2d34e9', textDecoration: 'none' }}>All Data</Link></li>
        </ul>
      </div>
      <div>
        <button onClick={handleLogout} style={{ color: '#ffffff', backgroundColor: '#dc3545', border: 'none',marginTop:'.4em', padding: '8px 16px', marginLeft: '10px' }}>Logout</button>
      </div>
    </nav>
  );
}
