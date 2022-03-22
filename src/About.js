import React from 'react'
import { Helmet } from 'react-helmet-async'


function About() {

  return (
    <>
   <Helmet>
      <title>About</title>
      <meta name='description' content="Mini Fonts typography makes easy to build your websites and apps more beautiful" />
      <link rel="canonical" href="/about"/>
    </Helmet>
      <h1 className="about_title">
      Build fast web and app development with more beautiful and more reliable</h1>
      <p className="about_paragraph">
      Mini Fonts typography makes easy to build your websites and apps more beautiful. Our robust catalog of
        open-source fonts , makes it easy to integrate expressive type seamlessly—no matter where you are
        in the world.</p>
      <div className="about-page__content">
        <div className="about-page__main-content">
          <section className="main-content__module">
            <p className="gmat-body-1">
              Our font catalog places typography front and center, inviting users to explore, sort, and test fonts for
              use in more than 135 languages. We showcase individual type designers and foundries, giving you valuable
              information about the typographers and their process, as well as analytics on usage and demographics.
              Our series of thematic collections helps you discover new fonts that have been vetted and organized by
              our team of designers, engineers, and collaborators, and our default sort organizes fonts based on
              popularity, trends, and your geographic location. You can also create your own highly customized
              collections by filtering families, weights, and scripts, plus test color themes, and review sample copy.
              Collections can be shared, making it easy to collaborate on projects and ensure typography is optimized
              and streamlined throughout the design and engineering process. In 2022, we added  to our Mini
              Fonts catalog, expanding expressive capability for our users. Our first set was the Material
              —delightful, beautifully crafted symbols for common communication needs. Download them on desktop
              to use them in your digital products for Android, iOS, and web.</p>
          </section>
        </div>
</div>

<div className='SocialMedia'>
  <ul>
    <li><a href="https://twitter.com/mini_fonts" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" ></i>
      </a></li>
    <li><a href="https://github.com/rakesh-barman/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a></li>
    <li><a href="https://www.youtube.com/channel/UCbs3HZbEjIv7puW-W46HSrQ"  target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a></li>
      <li><a href="https://paypal.me/minifonts?country.x=IN&locale.x=en_GB"  target="_blank" rel="noopener noreferrer">
      <i class="fa fa-hand-holding-dollar"></i>
      </a></li>
  </ul>
</div>


    </>
  )
}

export default About