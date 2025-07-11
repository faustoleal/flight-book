import { useState } from "react";

const useSelect = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onReset = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    onReset,
  };
};

export default useSelect;
