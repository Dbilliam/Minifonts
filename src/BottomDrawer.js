import React from "react";
import FontTags from "./FontTags.js";


function BottomDrawer({
  addEmptySign,
  addComaSigns,
  addMinusSigns,
  addPlusSigns,
  isBottomDrawerOpen,
  bottomDrawerToggle,
  clearAllSelectedFonts,
  clearSelectedFont,
  addedFonts
}) {
  // join each font with the | symbol, used to create the link tag
  const addOrSigns = addedFonts => {
    return addedFonts.join("|");
  };

  const addExportSigns = addedFonts => {
    return addedFonts.join(" @expo-google-fonts/");
  };


//  Check And Verify The Varient

let neWd = addedFonts.flatMap(x=> (x[2]))

let match1 = neWd.find(x => (x) === "100")
let match2 = neWd.find(x=> (x) === "100italic")
let match3 = neWd.find(x=> (x)==="200")
let match4 = neWd.find(x=> (x)==="200italic")
let match5 = neWd.find(x=> (x)==="300")
let match6 = neWd.find(x=> (x)==="300italic")
let match7 = neWd.find(x=> (x)==="400" )
let match8 = neWd.find(x=> (x)==="400italic")
let match9 = neWd.find(x=> (x)==="500")
let match10 = neWd.find(x=> (x)==="500italic")
let match11 = neWd.find(x=> (x)==="600")
let match12 = neWd.find(x=> (x)==="600italic")
let match13 = neWd.find(x=> (x)==="700")
let match14 = neWd.find(x=> (x)==="700italic")
let match15 = neWd.find(x=> (x)==="800")
let match16 = neWd.find(x=> (x)==="800italic")
let match17 = neWd.find(x=> (x)==="900")
let match18 = neWd.find(x=> (x)==="900italic")
let match19 = neWd.find(x=> (x)==="regular")




 
 
  return (
    <div
      className="bottom-drawer"
      style={
        isBottomDrawerOpen // slide the bottom drawer up and down
          ? { transform: "translateY(0)" }
          : { transform: "translateY(471px)" }
      }
    >
      <div
        className="bottom-drawer-head"
        onClick={bottomDrawerToggle}
        style={
          addedFonts.length > 0 ? { cursor: "pointer" } : { cursor: "auto" }
        }
      >
        <p>
          {addedFonts.length} {addedFonts.length === 1 ? "Family" : "Families"}{" "}
          Selected
        </p>
      </div>

      <div className="bottom-drawer-main">
    
        <h2>Selected Families</h2>
        <div className="clear-all-fonts" onClick={clearAllSelectedFonts}>
          Clear All
        </div>
        <div className="font-tags">
          {" "}
          {/* For each font selected by user create a font tag to be display in the bottom drawer */}
          {addedFonts.map(index => (
            <FontTags
              // key={index}
              key={ Math.random().toString(36).substr(2, 9)}
              index={index}
              familyName={index[0]}
              clearSelectedFont={clearSelectedFont}
            />
          ))}
        </div>
        <hr />

        <p className="titlehead" style={{ margin: "10px 0px" }}>
          To embed your selected fonts into a webpage, copy this code into the
          &lt;head&gt; of your HTML document.
        </p>

        <p className="code">
          {" "}
          {/* create the link tag */}
          {`<link href="https://fonts.googleapis.com/css?family=${addOrSigns(
            addedFonts.map(index => addPlusSigns(index[0]))
          )}&display=swap" rel="stylesheet">`}
        </p>
        <p className="titlehead" style={{ margin: "10px 0px" }}>
          To embed your selected fonts into a webpage, copy url and paste in your .css file above 
          &lt;body&gt; tag of your HTML document.
        </p>
        <p className="code">
          {/* {" "} */}
          {/* create the link tag */}
          {`<style>@import url("https://fonts.googleapis.com/css?family=${addOrSigns(
            addedFonts.map(index => addPlusSigns(index[0]))
          )}&display=swap");</style>`}
        </p>
        <p className="titlehead" style={{ margin: "10px 0px" }}>
        CSS rules to specify families
        </p>
          <>{addedFonts.map((index)=> (
        <p  key={ Math.random().toString(36).substr(2, 9)} className="code">font-family:  '{index[0]}', {index[1]};</p>
      ))}</>
      <p className="titlehead" style={{ margin: "10px 0px" }}>
          Variants support for app and webpage
        </p>
      <>{addedFonts.map((index)=> (
        <p key={ Math.random().toString(36).substr(2, 9)}  className="code">{index[0]} Variants: {index[2].join(',')};</p>
      ))}</>

        <p className="titlehead" style={{ margin: "10px 0px" }}>
          To import your selected fonts into a webpage, copy this code and import 
          of the your React And ReactNative Project.
        </p>
        <p className="code">{`expo install @expo-google-fonts/${addExportSigns(
            addedFonts.map(index => addMinusSigns(index[0].toString().toLowerCase()))
          )}`}</p>


          <p className="titlehead">
          To embed your selected fonts and variants into a app and webpage 
        </p>
  <><br></br>
  {addedFonts.map((index)=> (
        <p key={ Math.random().toString(36).substr(2, 9)}  className="code">
        {`import { `}<br></br>
        {((match1) ? `${addEmptySign(index[0])}_100Thin,` : '')}
        {((match2) ? `${addEmptySign(index[0])}_100Thin_Italic,` : '')}
        {((match3) ? `${addEmptySign(index[0])}_200Extra_light,` : '')}
        {((match4) ? `${addEmptySign(index[0])}_200ExtraLight_Italic,` : '')}
        {((match5) ? `${addEmptySign(index[0])}_300Light,` : '')}
        {((match6) ? `${addEmptySign(index[0])}_300Light_Italic,` : '')}
        {((match19) ? `${addEmptySign(index[0])}_400Regular,` : '')}
        {((match7) ? `${addEmptySign(index[0])}_400Regular,` : '')}
        {((match8) ? `${addEmptySign(index[0])}_400Regular_Italic,` : '')}
        {((match9) ? `${addEmptySign(index[0])}_500Medium,` : '')}
        {((match10) ? `${addEmptySign(index[0])}_500Medium_Italic,` : '')}
        {((match11) ? `${addEmptySign(index[0])}_600Bold,` : '')}
        {((match12) ? `${addEmptySign(index[0])}_600SemiBold,` : '')}
        {((match12) ? `${addEmptySign(index[0])}_600SemiBold_Italic,` : '')}
        {((match13) ? `${addEmptySign(index[0])}_700Bold,` : '')}
        {((match14) ? `${addEmptySign(index[0])}_700Bold_Italic,` : '')}
        {((match15) ? `${addEmptySign(index[0])}_800ExtraBold,` : '')}
        {((match16) ? `${addEmptySign(index[0])}_800ExtraBold_Italic,` : '')}
        {((match17) ? `${addEmptySign(index[0])}_900Black,` : '')}
        {((match18) ? `${addEmptySign(index[0])}_900Black_Italic,` : '')}<br></br>
        {`} from '@expo-google-fonts/${addMinusSigns(index[0].toString().toLowerCase()) }`}{`'`}</p>
        
      ))}</>     
      </div>
    </div>
  );
}
export default BottomDrawer;
