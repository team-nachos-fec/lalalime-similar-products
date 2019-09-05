import React, { Component } from 'react';
import HoverImg1 from './HoverImg1';
import HoverImg2 from './HoverImg2';
import HoverImg3 from './HoverImg3';


class Imghover extends Component {
  constructor (props) {
    super (props);
    this.state = {
      img1: 0,
      img2: 0,
      img3: 0,
      img4: 0,

    }
    this.onMouseDiv = this.onMouseDiv.bind(this);
    this.onMouseIn = this.onMouseIn.bind(this);
    this.onMouseIn2 = this.onMouseIn2.bind(this);
  }
  
  onMouseDiv (event) {
    console.log("this is working", "id:",event.target.id)
    if(event.target.id === "img1") {
      this.onMouseIn(event)
      console.log("this is working2")
    }
    if(event.target.id === "img2") {
      this.onMouseIn2(event)
      console.log("this is working3")
    }
  }

  onMouseIn (event) {
    console.log("mouse over", this.state.img1)
    this.setState (
      {img1: event.target.name}
    )
  }

  onMouseIn2 (event) {
    console.log("mouse over", this.state.img2)
    this.setState (
      {img2: event.target.name}
    )
  }



  render() {
    const { img } = this.props;
    if (img.length > 0) {
      if(this.state.img1 >= 0 || this.state.img2 >= 0 || this.state.img3 >= 0 || this.state.img4 >= 0){
      console.log('shosdfosdif', img)
      return (
        <div className="hoverListImg">
          <HoverImg1 pic1={img[0]} swatch1={img[0]} img1Index={this.state.img1} onMouseOver={this.onMouseDiv} />
          <HoverImg2 pic2={img[1]} swatch2={img[0]} img2Index={this.state.img2} onMouseOver={this.onMouseDiv} />
          <HoverImg3 pic3={img[2]} swatch3={img[0]} onMouseOver={this.onMouseIn}  />
        </div>
      ) 
    }
    } else {
      return (
        <div>img empty</div>
      )
    }
  }
}




export default Imghover;