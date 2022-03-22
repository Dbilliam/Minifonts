import React from 'react'
import { Helmet } from 'react-helmet-async'


function Contact() {
  return (
    <> 
    <Helmet>
      <title>Contact with us</title>
      <meta name='description' content="Contact us for technical and general questions: Please read the FAQ" />
      <link rel="canonical" href="/contact"/>
    </Helmet>
      <div>
      <h1 className="about_title">Contact with us</h1>
      <div className="gmat-body-1">
      <p>For technical and general questions: Please read the FAQ.</p>
      <p>For font search or identification: Post your question on the Forum, 
      you have more chances to get a response and everybody takes advantage of it.</p>
      <p>Concerning font rights: The licence mentioned above the download button is just an indication. Please look at the readme-files in the zips or check the indicated author's website for details, and contact him/her if in doubt. If no author/licence is indicated that's because we don't have information, that doesn't mean it's free.</p>
      <p>For link exchanges: Only the font authors naturally get a link.</p>
      <p>Please do not email the webmaster in any case above, 
      or to ask for fonts; you will not receive any response.
For any other kind of request, write to info@minifonts.in</p>
</div>
</div>
    </>
   
  )
}

export default Contact