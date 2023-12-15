import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'blue',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    float:'left',
    marginRight: '1rem', // Added margin to the right of the second button
  };

  return (
    <nav style={navStyle}>
      <div style={buttonContainerStyle}>
        <Link to="/">
          <button style={buttonStyle}>Button 1</button>
        </Link>
        <Link to="EmployeeForm">
          <button style={buttonStyle}>Button 2</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
