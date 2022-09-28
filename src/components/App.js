import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(setListings)
  }, [])

    const searched = listings.filter(listing => {
      return listing.description.toLowerCase().includes(search.toLowerCase())
    })

    const searchedAndSorted = searched.sort((a,b) => {
      if (sort === "location") {
      const aName = a.location.toLowerCase()
      const bName = b.location.toLowerCase()
      if (aName > bName) {
        return 1
      } else {
        return -1
      } 
    } else if (sort === "listing") {
      const aName = a.description.toLowerCase()
      const bName = b.description.toLowerCase()
      if (aName > bName) {
        return 1
      } else {
        return -1
      }
    }
    })

    function handleNewListing(newListing){
      setListings([...listings, newListing])
    }


  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} handleNewListing={handleNewListing} setSort={setSort}/>
      <ListingsContainer listings={searchedAndSorted} setListings={setListings}/>
    </div>
  );
}

export default App;
