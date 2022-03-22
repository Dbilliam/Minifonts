import React from 'react'
import { Helmet } from 'react-helmet-async'
import image1 from "../assets/how-to-add-font-in-html.png"
import image2 from "../assets/Home_bg1.png"
import image3 from "../assets/filter_bg1.png"
import image4 from "../assets/Select_Your_Fonts_bg.png"
import image5 from "../assets/mini-font-add-fonts-html.png"
import image6 from "../assets/add-css-html.png"
import image7 from "../assets/font-link-add-in-html.png"
import image8 from "../assets/add-font-in-html-css-file.png"

function Blog1() {
  return (
    <>
     <Helmet>
      <title>How to add font in HTML</title>
      <meta name='description' content="How To add font in HTML site by using Mini Fonts CSS font-family property" />
      <link rel="canonical" href="/how-to-add-font-in-html"/>
    </Helmet>
    <img src={image1} alt='how-to-add-font-in-html' className="blogimage" />
    <h1 className='blogh1 about_title'>How To Add Font In HTML</h1>
    <p className="about_paragraph">
    To add font in HTML site by using Mini Fonts CSS font-family property. Set it to the value you want and place it inside a style attribute. Then add this style attribute to an HTML element, like a paragraph, heading, button, or span tag.</p>

    <p  className="blog_para about_paragraph">Step 1: Go To Mini Fonts its a typography makes easy to build your websites and apps more beautiful.</p>
    <img src={image2} alt='Mini Fonts Website' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 2: Filter Our font with multiple catalog front </p>
    <img src={image3} alt='filter_font_with_mini_fonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 3: Select Your Fonts </p>
    <img src={image4} alt='Select_Your_Fonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 4: Select Your Fonts And Copy Link embed into a webpage </p>
    <img src={image5} alt='Fonts Copy Link embed into a webpage' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 5: This Link code  Paste  into the head of your HTML document.</p>
    <img src={image7} alt='Link code  Paste  into the head of your HTML' className="blogimage1" />

    <p  className="blog_para about_paragraph">Step 6: Copy CSS font-family property into paste into CSS document.</p>
    <img src={image6} alt='Copy CSS font-family property' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 7: Finaly Step CSS font-family property into paste into CSS document.</p>
    <img src={image8} alt='CSS font-family property into paste into CSS document' className="blogimage1" />
    </>
  )
}

export default Blog1