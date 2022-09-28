import React, { useState } from "react";

function Search({ setSearch }) {
  const [formInput, setFormInput] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(formInput)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
