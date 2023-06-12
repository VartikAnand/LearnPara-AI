import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
const DarkModeBtn: React.FC = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
      <label className={`switch ${mode} rounded-full`}>
        <input
          title="darkmode"
          className="inpt"
          type="checkbox"
          checked={mode === 'dark'}
          onChange={toggle}
        />
        <span className="slider"></span>
      </label>
  );
};

export default DarkModeBtn;
