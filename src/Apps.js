import React, { useReducer } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./Navbar.js";
import SideDrawer from "./SideDrawer.js";
import Backdrop from "./Backdrop.js";
import Footer from "./Footer.js";
import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Disclaimer from "./Disclaimer.js";
import PrivacyPolicy from "./PrivacyPolicy.js";
import About from "./About.js";
import Contact from "./Contact.js";
import App from "./App.js";
import Trending from "./Trending.js"
import Donation from "./Donation.js";
import Docs from "./Docs.js";
import Blog1 from "./blogs/blog1.js";
import Blog2 from "./blogs/blog2.js";
import Blog3 from "./blogs/blog3.js";

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

function Apps() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isSideDrawerOpen: false,
      searchFonts: "",
      typeSomething: "",
      fontSize: "20px",
      searchSubsets:"",
      searchCategorys:"",
      isDarkTheme: false,
      isList: false,
      isBottomDrawerOpen: false
    }
  );
  const sideDrawerToggle = () => {
    setUserInput({ isSideDrawerOpen: !userInput.isSideDrawerOpen });
  };

  const removeDrawers = () => {
    setUserInput({ isSideDrawerOpen: false });
    setUserInput({ isBottomDrawerOpen: false });
  };

  

  return (
    <ThemeProvider theme={{ mode: userInput.isDarkTheme }}>
      <>
        <GlobalStyle />
        <div>
          <Navbar sideDrawerToggle={sideDrawerToggle} />
          <SideDrawer isSideDrawerOpen={userInput.isSideDrawerOpen} />
          {userInput.isSideDrawerOpen || userInput.isBottomDrawerOpen ? ( // add a dark Backdrop when one of the drawer menus are open
            <div>
              <Backdrop removeDrawers={removeDrawers} />
            </div>
          ) : null}

          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/disclaimer" element={<Disclaimer />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/trending" element={<Trending />} />
            <Route exact path="/donation" element={<Donation />} />
            <Route exact path="/docs" element={<Docs />} />
            <Route exact path="/how-to-add-font-in-html" element={<Blog1 />} />
            <Route exact path="/how-to-add-font-in-react-project" element={<Blog2 />} />
            <Route exact path="/how-to-add-font-in-react-native" element={<Blog3 />} />
          </Routes>
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );

}

export default Apps;
