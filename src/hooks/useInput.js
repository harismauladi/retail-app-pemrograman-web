import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return [input, onChangeHandler];
}

export default useInput;
