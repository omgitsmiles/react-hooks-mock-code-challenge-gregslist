import React, { useState } from "react";

function NewListingForm({ handleNewListing }) {
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")

    function handleFormSubmit(e){
        e.preventDefault()
        const newListing = {description: description, image: image, location: location}
        handleNewListing(newListing)
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(newListing)
        })
    }

    return (
        <div>
            Add Your Listing
            <form name="Add New Listing" onSubmit={handleFormSubmit}>
                <input placeholder="Description" onChange={(e) => setDescription(e.target.value)}></input>
                <input placeholder="Image" onChange={(e) => setImage(e.target.value)}></input>
                <input placeholder="Location" onChange={(e) => setLocation(e.target.value)}></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewListingForm;