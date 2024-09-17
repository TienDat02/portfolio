// src/components/ui/Sheet.jsx

import React, { useState } from 'react';

export const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, toggleSheet });
        }
        return child;
      })}
    </div>
  );
};

export const SheetContent = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="sheet-content">
      {children}
    </div>
  );
};

export const SheetTrigger = ({ toggleSheet, children }) => {
  return (
    <button onClick={toggleSheet}>
      {children}
    </button>
  );
};