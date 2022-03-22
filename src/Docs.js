import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./App.css";
import image1 from "../src/assets/how-to-add-font-in-html.png"
import image2 from "../src/assets/how-to-add-font-in-react.png"
import image3 from "../src/assets/how-to-add-font-in-react-native.png"




function Docs() {


  return (
    <>
      <Helmet>
        <title>Mini Fonts: Documentation</title>
        <meta name='description' content="Documentation Get started with Mini Fonts, the world’s most beautiful fonts. mini fonts typography makes easy to build your websites and apps more beautiful. Our robust catalog of
        open-source fonts" />
        <link rel="canonical" href="/docs" />
      </Helmet>
      <h1 className="about_title">Mini Fonts Docs</h1>
      <p className="about_paragraph">Get started with Mini Fonts, the world’s most beautiful fonts. mini fonts typography makes easy to build your websites and apps more beautiful. Our robust catalog of
        open-source fonts, makes it easy to integrate expressive type seamlessly—no matter where you are
        in the world.</p>
      <div className='icon-g'>
        <i className="docs-i">Simple</i>
        <i className="docs-i">Fast</i>
        <i className="docs-i">Easy</i>
      </div>
      <section className="cards-wrapper-head">
        <article>
          <div className="card-grid-space-head" >
            <a href="/how-to-add-font-in-html" className="cardhead" style={{
              "--bg-img": `url(${image1})`,
            }}>
              <div>
                <h1>Add Font In HTML</h1>
                <p>font in HTML site by using Mini Fonts CSS font-family property. Set it to the value you want and place it inside a style attribute. Then add this style attribute to an HTML element, like a paragraph, heading, button, or span tag.</p>
                <div className="datehead">2022</div>
                <div className="tagshead">
                  <div className="taghead">HTML</div>
                </div>
              </div>
            </a>
          </div>
        </article>
        <article>
          <div className="card-grid-space-head" >
            <a href="/how-to-add-font-in-react-project" className="cardhead" style={{
              "--bg-img": `url(${image2})`,
            }}>
              <div>
                <h1>Add Font In React Project</h1>
                <p>You can Simply add a font to your application by adding a link tag to your head tag inside the public/index.html file.
                embed your selected fonts into a webpage, copy this code into the head of your HTML document.</p>
                <div className="datehead">2022</div>
                <div className="tagshead">
                  <div className="taghead">React</div>
                </div>
              </div>
            </a>
          </div>
        </article>
        <article>
          <div className="card-grid-space-head" >
            <a href="/how-to-add-font-in-react-native" className="cardhead" style={{
              "--bg-img": `url(${image3})`,
            }}>
              <div>
                <h1>Add Font In React Native</h1>
                <p> Adding fonts to a react-native project by using mini fonts .
                  To import your selected fonts into a webpage, copy this code and import of
                  the your React And ReactNative Project And embed your selected fonts and variants into a app and webpage.</p>
                <div className="datehead">2022</div>
                <div className="tagshead">
                  <div className="taghead">React Native</div>
                </div>
              </div>
            </a>
          </div>
        </article>

      </section>


    </>
  )
}

export default Docs