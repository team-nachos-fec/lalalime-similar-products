const price = ['$38.00 USD', '$48.00 USD', '$58.00 USD', '$68.00 USD','$78.00 USD','$88.00 USD','$98.00 USD','$118.00 USD','$128.00 USD','$138.00 USD'];
const name = ['Fast and Free', 'Rule the Day', 'Align', 'Spring Break Away', 'On the Fly', 'Everyday', 'All the Right Places','Sun Setter', 'Ebb to the Street', 'Define', 'All Yours', 'Energy', 'Free to be Serene'];
const top = ['Dresses', 'Tanks', 'Sweaters'];
const bottom = ['Shorts', 'Skirts', 'Pants'];
const imgBot = {
  short1: [
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ]
  ],
  short2: [
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ],
    [
      "Tempest Blue", 
      "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
      "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
    ]
  ]
};
const imgTop = {

}


// make a func for creating creating the database
const createTopItems = () => {
  let product = {};
  product.property = 'top';
  product.type = createTopType();
  product.title = func;
  product.img = [];
  product.price = [];
};

const createBotItems = () => {
  let product = {};
  product.property = 'bot';
  product.type = createBotType();
  product.title = func;
  product.img = [];
  product.price = [];
}


const createTopType = () => {
  return top[Math.floor(Math.random() * Math.floor(top.length))];
};

const createBotType = () => {
  return bot[Math.floor(Math.random() * Math.floor(bot.length))];
};

const createTitle = (name) => {
  let arr = [];
  for (let i = 0; i < 4; i++){
    if(arr.indexOf(arr[i] === -1))
      arr.push(name[Math.floor(Math.random() * Math.floor(name.length))]);
  }
  return arr;
};

const createPrice = () => {
  let arr = [];
  for (let i = 0; i < 4; i++){
    arr.push(price[Math.floor(Math.random() * Math.floor(price.length))]);
  }
  return arr;
};




// insertmany
