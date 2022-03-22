import React from 'react'
import { Helmet } from 'react-helmet-async'
import image1 from "../assets/how-to-add-font-in-react-native.png"
import image2 from "../assets/Home_bg1.png"
import image3 from "../assets/filter_bg1.png"
import image4 from "../assets/Select_Your_Fonts_bg.png"
import image5 from "../assets/copy-fonts-on-react-native.png"
import image6 from "../assets/expo-install-fonts.png"
import image7 from "../assets/selected_variants into_react_native.png"
import image8 from "../assets/paste_and_import_fonts_into_app_file.png"
import image9 from "../assets/use_fonts_by_using_into_your_react_native_project.png"
import image10 from "../assets/usefont_into_your_react_native_project.png"


function Blog3() {
  return (
    <div>
       <Helmet>
      <title>How To Add Font In React Native</title>
      <meta name='description' content="import your selected fonts into a webpage, copy this code and import And embed your selected fonts and variants into a app and webpage" />
      <link rel="canonical" href="/how-to-add-font-in-react-native"/>
    </Helmet>
    <img src={image1} alt='how-to-add-font-in-react-native' className="blogimage"/>
    <h1 className='blogh1 about_title'>How To Add Font In React Native Project</h1>
    <p className="about_paragraph">Adding fonts to a react-native project by using mini fonts .
    To import your selected fonts into a webpage, copy this code and import of 
    the your React And ReactNative Project And embed your selected fonts and variants into a app and webpage</p>
    <p  className="blog_para about_paragraph">Step 1: Go To Mini Fonts its a typography makes easy to build your websites and apps more beautiful.</p>
    <img src={image2} alt='Mini_Fonts_Website' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 2: Filter Our font with multiple catalog front </p>
    <img src={image3} alt='Filter_Font_With_Mini_Fonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 3: Select Your Fonts </p>
    <img src={image4} alt='Select_Your_Fonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 4: Import your selected fonts into a App, copy this code and import of the your React And ReactNative Project.</p>
    <img src={image5} alt='Import_your_selected_fonts_into_a_App' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 4: Install your selected fonts into a App, copy this code and import of the your React And ReactNative Project.</p>
    <img src={image6} alt='Install_your_selected_fonts_into_a_App' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 5: Copy your selected fonts and variants into a app and webpage</p>
    <img src={image7} alt='copy_your_selected_fonts_and_variants' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 5: Paste And Embed your selected fonts and variants into a App and webpage File</p>
    <img src={image8} alt='Paste_And_Embed_your_selected_fonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 5: Selected fonts and variants UseFonts into a App and webpage</p>
    <img src={image10} alt='selected_fonts_and_variants_UseFonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 5: Selected fonts Use into a App and Webpage</p>
    <img src={image9} alt='selected fonts Use into a App' className="blogimage1" />
    </div>
  )
}

export default Blog3