import React from 'react'
import { Helmet } from 'react-helmet-async'
import image1 from "../assets/how-to-add-font-in-react.png"
import image2 from "../assets/Home_bg1.png"
import image3 from "../assets/filter_bg1.png"
import image4 from "../assets/Select_Your_Fonts_bg.png"
import image5 from "../assets/mini-font-add-fonts-html.png"
import image6 from "../assets/add-css-html.png"
import image7 from "../assets/font-link-add-in-html.png"
import image8 from "../assets/add-font-in-html-css-file.png"


function Blog2() {
  return (
    <>
         <Helmet>
      <title>How To Add Font In React Project</title>
      <meta name='description' content="Simply add a font to your application by adding a <link> tag to your <head> tag inside the public/index.html file" />
      <link rel="canonical" href="/how-to-add-font-in-react-project"/>
    </Helmet>
    <img src={image1} alt='how-to-add-font-in-react-project' className="blogimage"/>
    <h1 className='blogh1 about_title'>How To Add Font In React Project</h1>
    <p className="about_paragraph">You can Simply add a font to your application by adding a link tag to your head tag inside the public/index.html file.</p>
     
    <p  className="blog_para about_paragraph">Step 1: Go To Mini Fonts its a typography makes easy to build your websites and apps more beautiful.</p>
    <img src={image2} alt='Mini Fonts Website' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 2: Filter Our font with multiple catalog front </p>
    <img src={image3} alt='filter_font_with_mini_fonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 3: Select Your Fonts </p>
    <img src={image4} alt='select_your_fonts' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 4: Select Your Fonts And Copy Link embed into a webpage </p>
    <img src={image5} alt='copy_link_embed_into_a_webpage' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 5: This Link code Paste  into the head of your HTML document.</p>
    <img src={image7} alt='link_code_paste_into_the_head_of_your_HTML_document' className="blogimage1" />

    <p  className="blog_para about_paragraph">Step 6: Copy CSS font-family property into paste into CSS document.</p>
    <img src={image6} alt='copy_css_font-family_property' className="blogimage1" />
    <p  className="blog_para about_paragraph">Step 7: Finaly Step CSS font-family property into paste into CSS document.</p>
    <img src={image8} alt='property_into_paste_into_css_document' className="blogimage1" />
    </>
  )
}

export default Blog2