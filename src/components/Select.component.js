import React, { useState, useEffect } from "react";

export const SelectDropDown = () => {
  const [items] = useState([{}]);
  return (
    <div>
      <select>
        <option value="Luke Skywalker">Luke Skywalker</option>
        <option value="C-3PO">C-3PO</option>
        <option value="R2-D2">R2-D2</option>
      </select>
    </div>
  );
};
