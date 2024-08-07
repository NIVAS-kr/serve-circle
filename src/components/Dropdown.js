// src/Dropdown.js
import React, { useState } from 'react';
import './Dropdown.css';
import { FaChevronDown } from 'react-icons/fa';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="dropdown-button">PRODUCTS <FaChevronDown /> </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#option1">Services</a>
          <a href="#option2">Sales</a>
          <a href="#option3">Inventory</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
