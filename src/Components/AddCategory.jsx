import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const inputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const clean = inputValue.trim();
    if (clean.length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(clean);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar GIF"
          value={inputValue}
          onChange={inputChange}
        />
      </form>
    </>
  );
};
