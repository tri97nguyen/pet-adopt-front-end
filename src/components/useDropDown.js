import React, { useState } from "react";

const useDropDown = (label, initValue, list) => {
  const [state, setState] = useState(initValue);

  const DropDown = () => {
    return (
      <label htmlFor={label}>
        {label}
        <select
          id={label}
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
        >
          <option>-- choose an {label} --</option>
          {list.map((item) => {
            //   return React.createElement("option", null, animal);
            return <option key={item}>{item}</option>;
          })}
        </select>
      </label>
    );
  };

  return [state, DropDown, setState];
};

export default useDropDown;
