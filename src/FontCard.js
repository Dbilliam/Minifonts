import React from "react";
import { Helmet } from "react-helmet";

function FontCard({
  addPlusSigns,
  category,
  categoryName,
  familyName,
  typeSomething,
  fontSize,
  addFont ,
  toggleButton,
  familyVariants,
  subsets
}) {
  return (
    <div className="fontcard">
      <div className="font-title">
        <Helmet>
          <link
            href={`https://fonts.googleapis.com/css?family=${addPlusSigns(
              familyName 
            )}`}
            rel="stylesheet"
          ></link>
        </Helmet>
        <h4>{familyName}</h4>
        { toggleButton ? <i className="fa fa-plus-circle" onClick={() => { addFont([familyName, categoryName, familyVariants]); }} > </i> : 
        <i className="fa fa-minus-circle" onClick={() => { addFont([familyName, categoryName, familyVariants]);}}> </i>
        }
 
      </div>
      <p
        style={{
          fontSize: fontSize, 
          fontFamily: familyName, 
          categoryName: categoryName,
          category : category,
          familyVariants : familyVariants,
          subsets:subsets
        }}
      >
        {typeSomething}{" "}
      </p>
    </div>
  );
}

export default FontCard;
