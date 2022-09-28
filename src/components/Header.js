import React from "react";
import Search from "./Search";
import NewListingForm from "./NewListingForm";
import Sort from "./Sort";

function Header({ search, setSearch, handleSearch, handleNewListing, setSort={setSort} }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      <div>
      <NewListingForm handleNewListing={handleNewListing}/>
      </div>
      <div>
        <br></br>
      <Sort setSort={setSort}/>
      </div>
    </header>
  );
}

export default Header;
