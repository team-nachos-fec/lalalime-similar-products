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
      img: [],
      hover: false
      // mainPic1: 0,
      // mainPic2: 0,
      // mainPic3: 0,
      // mainPic4: 0
    }
    this.getComponents = this.getComponents.bind(this);
    // this.onMouseHandlerOn = this.onMouseHandlerOn.bind(this);
    // this.onMouseHandlerOff = this.onMouseHandlerOff.bind(this);
    // this.onPicHoverIn = this.onPicHoverIn.bind(this);
    // this.onPicHoverOff = this.onPicHoverOff.bind(this); 
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

 
  // onMouseHoverHandler (event) {
  //   console.log("this is the app page")
  //   if(event.target.id === "pic1"){
  //     this.picOn1(event)
  //   }
  //   if(event.target.id === "pic2"){
  //     this.picOn2(event)
  //   }
  //   if(event.target.id === "pic3"){
  //     this.picOn3(event)
  //   }
  //   if(event.target.id === "pic4"){
  //     this.picOn4(event)
  //   }
  // }

  // picOn1(event){
  //   this.setState (
  //     {mainPic1: 1}
  //   )
  //   this.picOff1(event);
  // }

  // picOn2(event){
  //   this.setState (
  //     {mainPic2: 1}
  //   )
  //   this.picOff2(event);
  // }

  // picOn3(event){
  //   this.setState (
  //     {mainPic3: 1}
  //   )
  //   this.picOff3(event);
  // }

  // picOn4(event){
  //   this.setState (
  //     {mainPic4: 1}
  //   )
  //   this.picOff4(event);
  // }

  // picOff1(event){
  //   this.setState (
  //     {mainPic1: 0}
  //   )
  // }

  // picOff2(event){
  //   this.setState (
  //     {mainPic2: 0}
  //   )
  // }

  // picOff3(event){
  //   this.setState (
  //     {mainPic3: 0}
  //   )
  // }

  // picOff4(event){
  //   this.setState (
  //     {mainPic4: 0}
  //   )
  // }
  
  // onMouseHandlerOn (event) {
  //   this.onPicHoverIn(event)
  // }

  // onMouseHandlerOff (event) {
  //   this.onPicHoverOff(event)
  // }

  // onPicHoverIn (event) {
  //   this.setState (
  //     {hover: true}
  //   )
  // }

  // onPicHoverOff (event) {
  //   this.setState (
  //     {hover: false}
  //   )
  // }

  render(){
      return(
        <div className="similar-container">
          <div className="headline-top">
            <h2 className="headline">You may also like</h2>
          </div>
          <ImgHover img={this.state.img}/>
          <TitleList title={this.state.title}/>
          <PriceList price={this.state.price}/>
        </div>
      )
  }
}


// render(){
//   if(!this.state.hover){
//     return(
//       <div className="similar-container">
//         <div className="headline-top">
//           <h2 className="headline">You may also like</h2>
//         </div>
//         <ImgList img={this.state.img} onMouseHandlerOn={this.onMouseHandlerOn} onMouseHandlerOff={this.onMouseHandlerOff}/>
//         <TitleList title={this.state.title}/>
//         <PriceList price={this.state.price}/>
//       </div>
//     )
//   } else {
//     return(
//       <div className="similar-container">
//         <div className="headline-top">
//           <h2 className="headline">You may also like</h2>
//         </div>
//         <ImgHover img={this.state.img}  />
//         <TitleList title={this.state.title}/>
//         <PriceList price={this.state.price}/>
//       </div>
//     )
//   }
// }





export default App;