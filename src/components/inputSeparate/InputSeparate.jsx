import { useState } from 'react';

function InputSeparate() {
  const [value, setValue] = useState(0)
  return (
    <label>
    <input type='number' value={value} onChange={(e)=>setValue(e.target.value)}/>
    </label>
  );
}

export default InputSeparate;
