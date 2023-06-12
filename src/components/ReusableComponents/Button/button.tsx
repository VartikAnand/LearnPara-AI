import React from 'react';

interface ButtonProps {
  buttonText: string;
}

const Butn: React.FC<ButtonProps> = ({ buttonText }) => {
  const buttonStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    outline: 'none',
    border: '0',
    verticalAlign: 'middle',
    textDecoration: 'none',
    background: 'transparent',
    padding: '0',
    fontSize: 'inherit',
    fontFamily: 'inherit'
  };

  const circleStyles: React.CSSProperties = {
    transition: 'all 0.45s cubic-bezier(0.65, 0, 0.076, 1)',
    position: 'relative',
    display: 'block',
    margin: '0',
    width: '3rem',
    height: '3rem',
    background: '#282936',
    borderRadius: '1.625rem'
  };

  // Add other styles here

  return (
    <button style={buttonStyles} className="learn-more">
      <span style={circleStyles} className="circle"></span>
      <span className="icon arrow"></span>
      <span className="button-text">{buttonText}</span>
    </button>
  );
};

export default Butn;
