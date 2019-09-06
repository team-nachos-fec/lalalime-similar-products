import React, { Component } from 'react';
import HoverImg1 from './HoverImg1';
import HoverImg2 from './HoverImg2';
import HoverImg3 from './HoverImg3';
import HoverImg4 from './HoverImg4';


class Imghover extends Component {
  constructor (props) {
    super (props);
    this.state = {
      img1: 0,
      img2: 0,
      img3: 0,
      img4: 0,
      hovered: 2,
    }
    this.onMouseDiv = this.onMouseDiv.bind(this);
    this.onMouseIn = this.onMouseIn.bind(this);
    this.onMouseIn2 = this.onMouseIn2.bind(this);
    this.onMouseIn3 = this.onMouseIn3.bind(this);
    this.onMouseIn4 = this.onMouseIn4.bind(this);
    this.onMouseOff = this.onMouseOff.bind(this);
  }
  

  onMouseDiv (event) {
    if(event.target.id === "img1") {
      this.onMouseIn(event)
      this.onMouseOff(event)
    }
    if(event.target.id === "img2") {
      this.onMouseIn2(event)
    }
    if(event.target.id === "img3") {
      this.onMouseIn3(event)
    }
    if(event.target.id === "img4") {
      this.onMouseIn4(event)
    }
  }

  onMouseOff (event) {
    console.log("something should be happening", this.props.img[0][3][this.state.hovered])
    this.setState (
      {hovered: event.target.id}
    )
  }

  onMouseIn (event) {
    this.setState (
      {img1: event.target.name, hovered: 1}
    )
  }

  onMouseIn2 (event) {
    this.setState (
      {img2: event.target.name}
    )
  }

  onMouseIn3 (event) {
    this.setState (
      {img3: event.target.name}
    )
  }

  onMouseIn4 (event) {
    this.setState (
      {img4: event.target.name}
    )
  }



  render() {
    const { img, hovered } = this.props;
    if (img.length > 0) {
      if (this.state.img1 >= 0 || this.state.img2 >= 0 || this.state.img3 >= 0 || this.state.img4 >= 0) {
        return (
          <div className="hoverListImg">
            <HoverImg1 pic1={img[0]} swatch1={img[0]} img1Index={this.state.img1} onMouseOver={this.onMouseDiv} onMouseOff={this.onMouseOff} idx={this.state.hovered} />
            <HoverImg2 pic2={img[1]} swatch2={img[0]} img2Index={this.state.img2} onMouseOver={this.onMouseDiv} />
            <HoverImg3 pic3={img[2]} swatch3={img[0]} img3Index={this.state.img3} onMouseOver={this.onMouseDiv} />
            <HoverImg4 pic4={img[2]} swatch4={img[0]} img4Index={this.state.img4} onMouseOver={this.onMouseDiv} />
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