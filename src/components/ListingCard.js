import React, { useState } from "react";

function ListingCard({ listing:{id, description, image, location}, setListings, listings }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleClick(){
    setIsFavorite(isFavorite => !isFavorite)
  }

  function handleDelete(deleteList) {
    const deleted = listings.filter(listing => listing.description !== deleteList)
    setListings(deleted)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type" : "application/json"
      }
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(description)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
