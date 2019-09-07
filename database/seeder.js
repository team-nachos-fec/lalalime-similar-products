const Lalalime = require('./index.js');


// data
const price = ['$38.00 USD', '$48.00 USD', '$58.00 USD', '$68.00 USD','$78.00 USD','$88.00 USD','$98.00 USD','$108.00 USD','$118.00 USD','$128.00 USD','$138.00 USD'];
const name = ['F.O.M.O', 'Fast and Free', 'Rule the Day', 'Align', 'Spring Break Away', 'On the Fly', 'Everyday', 'All the Right Places','Sun Setter', 'Ebb to the Street', 'Define', 'All Yours', 'Energy', 'Free to be Serene'];


// function randomizer for title
const createTitle = (name) => {
  let arr = [];
  for (let i = 0; i < 4; i++){
    if(arr.indexOf(arr[i] === -1))
      arr.push(name[Math.floor(Math.random() * Math.floor(name.length))]);
  }
  return arr;
};
// function randomizer for price
const createPrice = () => {
  let arr = [];
  for (let i = 0; i < 4; i++){
    arr.push(price[Math.floor(Math.random() * Math.floor(price.length))]);
  }
  return arr;
};

// functions for creating the product
const createDresses = (name) => {
  let product = {};
  product.property = 'top';
  product.type = 'Dresses';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
      [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
  ];
  return product;
};

// tank
const createTanks = (name) => {
  let product = {};
  product.property = 'top';
  product.type = 'Tanks';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
  ];
  return product;
};

// sweater
const createSweaters = (name) => {
  let product = {};
  product.property = 'top';
  product.type = 'Sweaters';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
  ];
  return product;
};

// skirt
const createSkirts = (name) => {
  let product = {};
  product.property = 'bottom';
  product.type = 'Skirts';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
  ];
  return product;
};

// shorts
const createShorts = (name) => {
  let product = {};
  product.property = 'bottom';
  product.type = 'Shorts';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
  ];
  return product;
};

// pants
const createPants = (name) => {
  let product = {};
  product.property = 'bottom';
  product.type = 'Pants';
  product.title = createTitle(name);
  product.price = createPrice();
  product.img = [
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
    [
            [
        "Tempest Blue", 
        "https://images.lululemon.com/is/image/lululemon/9670?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW5BURS_9670_1?$image_carousel-xl_2x$"
      ],
      [
        "something color1", 
        "https://images.lululemon.com/is/image/lululemon/32491?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW7AZ2S_032491_1?$image_carousel-xl_2x$"
      ],
      [
        "something color2", 
        "https://images.lululemon.com/is/image/lululemon/36763?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036763_1?$image_carousel-xl_2x$"
      ],
      [
        "something color3", 
        "https://images.lululemon.com/is/image/lululemon/38324?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_038324_1?$image_carousel-xl_2x$"
      ],
      [
        "green", 
        "https://images.lululemon.com/is/image/lululemon/36729?$gsr-swatch$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_2?$image_carousel-xl_2x$",
        "https://images.lululemon.com/is/image/lululemon/LW6AS5S_036729_1?$image_carousel-xl_2x$"
      ]
    ],
  ];
  return product;
};

const combineProducts = () => {
  let combinedProd = [];
  for(let i = 0; i < 20; i ++){
    combinedProd.push(createDresses(name));
    combinedProd.push(createTanks(name));
    combinedProd.push(createSweaters(name));
    combinedProd.push(createShorts(name));
    combinedProd.push(createSkirts(name));
    combinedProd.push(createPants(name));
  }
  return combinedProd;
}


// seeding data
const insertData = () => {
  Lalalime.insertMany(combineProducts())
  .then(() => console.log('db seeded'))
  .catch((err) => console.log('seed err', err))
}

insertData();

