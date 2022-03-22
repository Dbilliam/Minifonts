import React from 'react';
import axios from 'axios';
import "./App.css";
import { Helmet } from 'react-helmet-async'

class trending extends React.Component {
  state = {
    id:  '',
    title: '',
    description: '',
    data: []
  }
  
  componentDidMount() {
    axios.get('https://font-news-blog.herokuapp.com/news')
    .then(res => {
      let newData = res.data.slice(0,21);
      this.setState({
        id: newData[newData.length - 1].id + 1,
        data: newData
      }, () => console.log(this.state.id))
      
    })
    .catch(err => (err))
  }

  render() {

    return (
      <>
      <Helmet>
      <title>Trending Fonts</title>
      <meta name='description' content="Trending fonts today" />
      <link rel="canonical" href="/trending"/>
    </Helmet>
      <h1 className='head-trend'>Trending Fonts</h1>
     <section className="cards-wrapper-head">
     
        {
          this.state.data.length === 0 ?
            <p >Loading...</p>
          :
            this.state.data.map((news, index) => (
              <article key={index}>
      <div className="card-grid-space-head" >
     <div className="numhead">{index + 1}</div>
      <p className="cardhead" style={{
              "--bg-img": `url(${news.image})`,
            }}>
      <div> 
      <h1>{news.title}</h1>
      <p>{news.discription.substr(0, 200)}</p>
      <div className="datehead">{news.date}</div>
      <div className="tagshead">
      <div className="taghead">{news.tags}</div>

          </div>
      </div>
    </p>
  </div>
  </article>
            ))
        }
 </section>  
 </> 
    )
  }
  
}






export default trending