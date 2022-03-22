import React from "react";

function FontTags({ index, clearSelectedFont }) {
  return (
    <div className="font-tag">
      <p>{index[0]}</p>
      <div
        className="fa fa-minus-circle"
        onClick={() => clearSelectedFont(index, index )} // remove the font from the addedFont state when the minus button is clicked
      ></div>
    </div>
  );
}

export default FontTags;
