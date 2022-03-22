import React, { useState, useEffect, useReducer } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Backdrop from "./Backdrop.js";
import Searchbar from "./Searchbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import BottomDrawer from "./BottomDrawer.js";
import "./App.css";
import { Helmet } from 'react-helmet-async'
//styles for dark and light mode
const GlobalStyle = createGlobalStyle`
  body, .side-drawer, footer, input, select, a, .search-bar-container {
    background-color: ${props => (props.theme.mode ? "#222" : "#FFF")};
    color: ${props => (props.theme.mode ? "#FFF" : "rgb(68, 68, 68)")}
    }
  .bottom-drawer {
    color: ${props =>
    props.theme.mode ? "rgb(68, 68, 68)" : "rgb(68, 68, 68)"}
    }  
  .mini-logo {
    background-image: ${props =>
    props.theme.mode
      ? "url(https://res.cloudinary.com/rakesh-barman/image/upload/v1647763258/Mini%20Fonts.png)"
      : "url(https://res.cloudinary.com/rakesh-barman/image/upload/v1647763257/Mini%20Fonts%20Logo.png)"};
    opacity: ${props => (props.theme.mode ? "1" : "0.6")}
  }
`;

function App() {
  <Helmet>
  <title>Mini Fonts</title>
   <link rel="canonical" href="/" />
  <meta name='description' content="mini fonts typography makes easy to build your websites and apps more beautiful" />
</Helmet>
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isSideDrawerOpen: false,
      searchCategorys:"",
      searchSubsets:"",
      searchFonts: "",
      typeSomething: "",
      fontSize: "24px",
      isDarkTheme: false,
      isList: false,
      isBottomDrawerOpen: false
    }
  );
  const [toggleButton, settoggleButton] = useState(true);
  const [sticky, setSticky] = useState(false); //state used to stick the searchbar to the top of browser when user scrolls down
  const [addedFonts, setAddedFonts] = useState([]); //state for user-selected fonts, used to create a link tag to be put in head tag of html document
  //load the data in local storage into addedFonts at the first render
  useEffect(() => {
    const data = localStorage.getItem("userSelectedFonts");
    if (data) {
      setAddedFonts(JSON.parse(data)); 
    }  
  }, []);

  //everytime addedFonts change put the addedFonts into local storage
  useEffect(() => {
    localStorage.setItem("userSelectedFonts", JSON.stringify(addedFonts));
    settoggleButton(true)
  }, [addedFonts]);
  // const sideDrawerToggle = () => {
  //   setUserInput({ isSideDrawerOpen: !userInput.isSideDrawerOpen });
  // };

  //allow user to open the bottom drawer only when there have been fonts selected
  const bottomDrawerToggle = () => {
    if (addedFonts.length > 0) {
      setUserInput({ isBottomDrawerOpen: !userInput.isBottomDrawerOpen });
    }
  };

  //adds selected fonts to the addedFonts array, but only add unique items
  const addFont = selectedFont => {
    setAddedFonts([...new Set([...addedFonts, selectedFont])]);   
    settoggleButton(false)
  };
  


  //clear all the selected fonts from the addedFont array
  const clearAllSelectedFonts = () => {
    setAddedFonts([]);
    settoggleButton(true)

  };
  // remove the corresponding font from the addedFont array
  const clearSelectedFont = selectedFont => {
    setAddedFonts(
      addedFonts.filter(currentFont => currentFont !== selectedFont))
    settoggleButton(true)
    
  };
  
  // close the bottom drawer when all fonts are removed from addedFonts array
  useEffect(() => {
    if (addedFonts.length === 0) {
      setUserInput({ isBottomDrawerOpen: false });
      settoggleButton(true)
    }
  }, [addedFonts]);

  // Add plus signs between words in the name of the font, to be used to create link tag for the head tag in html document
  const addPlusSigns = familyName => {
    if (familyName.indexOf(" ") === -1) {

      return familyName;
    } else {

      return familyName.split(" ").join("+");
    }
  };
  const addComaSigns = familyName => {
    if (familyName.indexOf(" ") === -1) {

      return familyName;
    } else {

      return familyName.split(" ").join(",");
    }
  };

  const addfamilyCategorySigns = familyCategory => {
    if (familyCategory.indexOf(" ") === -1) {

      return familyCategory;
    } else {

      return familyCategory.split(" ").join("+");
    }
  };

  const addEmptySign = familyName => {
    if (familyName.indexOf(" ") === -1) {

      return familyName;

    } else {

      return familyName.split(" ").join("");
    }
  };
  

  const addMinusSigns = familyName => {
    if (familyName.indexOf(" ") === -1) {
      return familyName;
    } else {
      return familyName.split(" ").join("-");
    }
  };

  // close all drawers
  const removeDrawers = () => {
    setUserInput({ isSideDrawerOpen: false });
    setUserInput({ isBottomDrawerOpen: false });
  };

  //update the states when user enter something int the input boxes / changes font size
  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };

  const toggleTheme = () => {
    setUserInput({ isDarkTheme: !userInput.isDarkTheme });
  };

  const listGridToggle = () => {
    setUserInput({ isList: !userInput.isList });
  };

  const reset = () => {
    setUserInput({ searchFonts: "" });
    setUserInput({ searchCategorys: "" });
    setUserInput({ searchSubsets: "" });
    setUserInput({ typeSomething: "" });
    setUserInput({ fontSize: "20px" });
    setUserInput({ isDarkTheme: false });
    setUserInput({ isList: false });
  };


  return (
    <ThemeProvider theme={{ mode: userInput.isDarkTheme }}>
      <>
        <GlobalStyle />
        <div>
          {/* <Navbar sideDrawerToggle={sideDrawerToggle} />
          <SideDrawer isSideDrawerOpen={userInput.isSideDrawerOpen} /> */}
          {userInput.isSideDrawerOpen || userInput.isBottomDrawerOpen ? ( // add a dark Backdrop when one of the drawer menus are open
            <div>
              <Backdrop removeDrawers={removeDrawers} />
            </div>
          ) : null} 


          <Searchbar
            searchFonts={userInput.searchFonts}
            searchCategorys={userInput.searchCategorys}
            searchSubsets={userInput.searchSubsets}
            typeSomething={userInput.typeSomething}
            fontSize={userInput.fontSize}
            handleChange={handleChange}
            toggleTheme={toggleTheme}
            listGridToggle={listGridToggle}
            isList={userInput.isList}
            reset={reset}
            sticky={sticky}
          />

          <Main
            addfamilyCategorySigns={addfamilyCategorySigns}
            addMinusSigns={addMinusSigns}
            addPlusSigns={addPlusSigns}
            addEmptySign={addEmptySign}
            addComaSigns={addComaSigns}
            searchFonts={userInput.searchFonts}
            searchCategorys={userInput.searchCategorys}
            searchSubsets={userInput.searchSubsets}
            typeSomething={userInput.typeSomething}
            fontSize={userInput.fontSize}
            isList={userInput.isList}
            addFont={addFont}
            toggleButton={toggleButton}
            sticky={sticky}
            setSticky={setSticky}
          />
          <BottomDrawer
            addfamilyCategorySigns={addfamilyCategorySigns}
            addComaSigns={addComaSigns}
            addMinusSigns={addMinusSigns}
            addPlusSigns={addPlusSigns}
            addEmptySign={addEmptySign}
            isBottomDrawerOpen={userInput.isBottomDrawerOpen}
            bottomDrawerToggle={bottomDrawerToggle}
            addedFonts={addedFonts}
            clearAllSelectedFonts={clearAllSelectedFonts}
            clearSelectedFont={clearSelectedFont}
          />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );

}

export default App;
