import { useState } from "react";

const useDefaultValue = (type) => {
  const [value, setValue] = useState("0");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

export default useDefaultValue;
