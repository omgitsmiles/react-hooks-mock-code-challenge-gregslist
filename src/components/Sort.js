import React from "react";

function Sort({ setSort }) {
        return (
        <div>
            Sort By:
            <select onChange={(e) => setSort(e.target.value)}>
                <option value="location">Location</option>
                <option value="listing">Listing</option>
            </select>
        </div>
    )
}

export default Sort