import React from 'react'
import image from '../src/assets/Mini Fonts.png'
import { Helmet } from 'react-helmet-async'

function Donation() {
  return (
    <>
    <Helmet>
      <title>Donate page</title>
      <meta name='description' content="Donate our community to build fast web and app development with us" />
      <link rel="canonical" href="/donation"/>
    </Helmet>

    <div className="container text-center" >
        <div className="row">
          <div >
          <img className="title-image1"  src={image} alt="mini-fonts-logo"/>
            <h6 className="about_title ">Donate our Community</h6>
            <h1  className="about_paragraph">Build fast web and app development with us.</h1>
            <h3  className="about_paragraph">Mini Fonts  : the simple and most Greate Fonts platform in the world.</h3>
      <p className="about_paragraph">
        Mini Fonts makes it easy to build your websites and apps. <br></br>Our robust catalog of
        open-source fonts ,<br></br> makes it easy to integrate expressive type <br></br>seamlessly—no matter where you are
        in the world.</p>
          </div>
          <i className="btpay fa fa-hand-holding-dollar"  onClick={()=> window.open("https://paypal.me/minifonts?country.x=IN&locale.x=en_GB", "_black")} >  </i>
        </div>
      </div>

    </>
  )
}

export default Donation