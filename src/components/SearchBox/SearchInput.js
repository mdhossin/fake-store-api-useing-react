import React from "react";

export default function SearchInput() {
  return (
    <div>
      <div className="input-group my-5 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Products..."
          aria-label="Search Products..."
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
}
