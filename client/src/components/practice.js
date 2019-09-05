// import React, { Component } from 'react';
// import HoverImg1 from './HoverImg1';
// import HoverImg2 from './HoverImg2';
// import HoverImg3 from './HoverImg3';


// class Imghover extends Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       imgIndex: 0,
//       imgIndex2: 0
//     }
//     this.onMouseIn = this.onMouseIn.bind(this);
//     this.onMouseIn2 = this.onMouseIn2.bind(this);

//   }

//   onMouseIn(event) {
//     console.log("mouse over", this.state.imgIndex)
//     this.setState (
//       {imgIndex: event.target.name}
//     )
//   }



//   render() {
//     const { img } = this.props;
//     if (img.length > 0 && this.state.imgIndex >= 0) {
//       return (
//         <div className="hoverListImg">
//           <HoverImg1 pic1={img[0][this.state.imgIndex]} swatch1={img[0]} onMouseOver={this.onMouseIn}  />
//           <HoverImg2 pic2={img[1][this.state.imgIndex]} swatch2={img[0]} onMouseOver={this.onMouseIn2} />
//           <HoverImg3 pic3={img[2][this.state.imgIndex]} swatch3={img[0]} onMouseOver={this.onMouseIn} />
//         </div>
//       ) 
//     } 
//     else if (img.length > 0 && this.state.imgIndex2 >= 0) {
//       return (
//         <div className="hoverListImg">
//           <HoverImg1 pic1={img[0][this.state.imgIndex]} swatch1={img[0]} onMouseOver={this.onMouseIn}  />
//           <HoverImg2 pic2={img[1][this.state.imgIndex2]} swatch2={img[0]} onMouseOver={this.onMouseIn} />
//           <HoverImg3 pic3={img[2][this.state.imgIndex]} swatch3={img[0]} onMouseOver={this.onMouseIn} />
//         </div>
//       )
//     }
//     else {
//       return (
//         <div>img empty</div>
//       )
//     }
//   }
// }




// export default Imghover;