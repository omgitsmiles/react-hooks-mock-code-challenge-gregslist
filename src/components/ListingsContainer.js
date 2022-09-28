import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {

  const renderListings = listings.map(listing => (
    <ListingCard key={listing.id} listing={listing} listings={listings} setListings={setListings}/>
  ))

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
