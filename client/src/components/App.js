import React, { Component } from 'react';
import axios from 'axios';
import PriceList from './PriceList.js';
import TitleList from './TitleList.js';
import ImgList from './ImgList.js';
import ImgHover from './ImgHover.js';
// import List from './List.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      title: [],
      price: [],
      img: []
      // imgMain: [],
      // imgSec: [],
      // imgColor: []
    }
    this.getComponents = this.getComponents.bind(this);

  }

  componentDidMount(){
    this.getComponents();
  }

  getComponents() {
    axios
    .get('/api/similar_products')
    .then((res) => this.setState({
      title: res.data[0]['title'],
      price: res.data[0]['price'],
      img: res.data[0]['img']
    }, () => console.log('title', res.data[0])))
    .catch((err) => console.log('title',err))
  }

 

  render(){
    return(
      <div class="similar-container">
        <div class="headline-top">
          <h2 class="headline">You may also like</h2>
        </div>
        {/* <List title={this.state.title} price={this.state.price} img={this.state.img}/>  */}
        <ImgList img={this.state.img}/>
        <TitleList title={this.state.title}/>
        <PriceList price={this.state.price}/>
        <ImgHover img={this.state.img}/>
      </div>
    )
  }
}

export default App;