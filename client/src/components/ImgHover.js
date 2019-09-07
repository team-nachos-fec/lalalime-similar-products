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
      i1: false,
      i2: false,
      i3: false,
      i4: false
    }
    this.onMouseDiv = this.onMouseDiv.bind(this);
    this.onMouseIn = this.onMouseIn.bind(this);
    this.onMouseIn2 = this.onMouseIn2.bind(this);
    this.onMouseIn3 = this.onMouseIn3.bind(this);
    this.onMouseIn4 = this.onMouseIn4.bind(this);
    this.onMouseMain = this.onMouseMain.bind(this);
    this.onMouseMainLeave = this.onMouseMainLeave.bind(this);
    this.onMainChangeIn = this.onMainChangeIn.bind(this);
    this.onMainChangeOut = this.onMainChangeOut.bind(this);
    this.onMainChangeIn2 = this.onMainChangeIn2.bind(this);
    this.onMainChangeOut2 = this.onMainChangeOut2.bind(this);
    this.onMainChangeIn3 = this.onMainChangeIn3.bind(this);
    this.onMainChangeOut3 = this.onMainChangeOut3.bind(this);
    this.onMainChangeIn4 = this.onMainChangeIn4.bind(this);
    this.onMainChangeOut4 = this.onMainChangeOut4.bind(this);
  }
  

  onMouseDiv (event) {
    if(event.target.id === "img1") {
      this.onMouseIn(event)
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

  
  onMouseMain (event) {
    console.log(event.target.id)
    if(event.target.id === "i1") {
      this.onMainChangeIn()
    }
    if(event.target.id === "i2") {
      this.onMainChangeIn2()
    }
    if(event.target.id === "i3") {
      this.onMainChangeIn3()
    }
    if(event.target.id === "i4") {
      this.onMainChangeIn4()
    }
  }

  onMouseMainLeave (event) {
    if (event.target.id === "i1") {
      this.onMainChangeOut()
    }
    if(event.target.id === "i2") {
      this.onMainChangeOut2()
    }
    if(event.target.id === "i3") {
      this.onMainChangeOut3()
    }
    if(event.target.id === "i4") {
      this.onMainChangeOut4()
    }
  }
  
  onMainChangeIn () {
    this.setState (
      {i1: true}
      )
    }
    
    onMainChangeOut () {
      this.setState (
        {i1: false}
        )
    }

  onMainChangeIn2 () {
    console.log("this is main2", event.target.id)
    this.setState (
      {i2: true}
    )
  }

  onMainChangeOut2 () {
    this.setState (
      {i2: false}
    )
  }

  onMainChangeIn3 () {
    this.setState (
      {i3: true}
    )
  }

  onMainChangeOut3 () {
    this.setState (
      {i3: false}
    )
  }

  onMainChangeIn4 () {
    this.setState (
      {i4: true}
    )
  }

  onMainChangeOut4 () {
    this.setState (
      {i4: false}
    )
  }


  onMouseIn (event) {
    this.setState (
      {img1: event.target.name}
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
            <HoverImg1 pic1={img[0]} swatch1={img[0]} img1Index={this.state.img1} onMouseOver={this.onMouseDiv} i1={this.state.i1} onMouseMain={this.onMouseMain}  onMouseMainLeave={this.onMouseMainLeave}/>
            <HoverImg2 pic2={img[1]} swatch2={img[0]} img2Index={this.state.img2} onMouseOver={this.onMouseDiv} i2={this.state.i2} onMouseMain2={this.onMouseMain}  onMouseMainLeave2={this.onMouseMainLeave}/>
            <HoverImg3 pic3={img[2]} swatch3={img[0]} img3Index={this.state.img3} onMouseOver={this.onMouseDiv} i3={this.state.i3} onMouseMain3={this.onMouseMain}  onMouseMainLeave3={this.onMouseMainLeave}/>
            <HoverImg4 pic4={img[2]} swatch4={img[0]} img4Index={this.state.img4} onMouseOver={this.onMouseDiv} i4={this.state.i4} onMouseMain4={this.onMouseMain}  onMouseMainLeave4={this.onMouseMainLeave}/>
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