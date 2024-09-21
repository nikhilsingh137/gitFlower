export interface IHeader {
  id: "1";
  title: "Home";
  url: "/home";
}

export interface IImageContent {
  _id: "66e99d1eda3b9e2a68a408f5";
  id: "1";
  title: "Welcome to Florist";
  heading: "Welcome to Florist Let's Make Beautiful Flowers a Part of Your Life.";
  paragraph: "Explore a vibrant tapestry of blooms and arrangements that add color, fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion.";
  button: "Shop Now";
  url: "/shop";
}

export interface IOnline {
  id: "1";
  number: "01";
  title: "Order Online";
  paragraph: "Share some details here. This is Flexible section where you can share anything you want.";
}

export interface IImage {
  id: "1";
  title: "About Florist";
  heading: "Blossoming Your Special Moments with Nature's Finest";
  paragraph: "Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.";
  button: "Read more";
  url: "/about";
  image: [
    {
      id: "1";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about-01.jpg";
    }
  ];
}

export interface IShop {
  _id: "66eaba20913b0a2cf337e1ff";
  id: "1";
  heading: "NEW ARRIVAL";
  title: "Discover the Latest Additions at Your Top Choice Flower Shop";
  paragraph: "Share some details here. This is Flexible section where you can share anything you want.";
  data: [
    {
      id: "1";
      type: "Flower";
      design: "Custom Floral Designs";
      url: "/product/custom-floral-designs";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-4.jpg";
      number: "$127.00";
      price: "$86.00";
      sale: "sale";
    }
  ];
}

export interface IShopSection {
  _id: "66ead9ed913b0a2cf337e205";
  id: "1";
  heading: "Shop";
  url: "/shop";
  paragraph: "Showing all 9 results";
  data: [
    {
      id: "1";
      type: "Flower";
      design: "Custom Floral Designs";
      url: "/product/custom-floral-designs";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-4.jpg";
      number: "$127.00";
      price: "$86.00";
      sale: "sale";
    }
  ];
}

export interface IProductSelling {
  id: "5";
  name: "Bouquet";
  title: "Tulip Custom Flower";
  url: "/product/rose-flower-bouquet";
  tulip: "tulip";
  tulipurl: "product/tulip";
  img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-10.jpg";
  flower: "Rose";
  nameurl: "product/bouquet";
  rate: "$159.00";
  price: "$129.00";
  notice: "& Free Shipping";
  paragraph: "Discover the essence of elegance with our exquisite flower bouquet. Each bloom in this carefully crafted arrangement is a testament to nature’s beauty, meticulously handpicked to create a symphony of colors and fragrances.";
  category: "Categories";
  flowerurl: "product/rose";
  shipping: "Free shipping on orders over $50!";
  money: "No-Risk Money Back Guarantee!";
  refund: "No Hassle Refunds";
  secure: "Secure Payments";
  data: [
    {
      id: "1";
      type: "Flower";
      design: "Custom Floral Designs";
      url: "/product/custom-floral-designs";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-4.jpg";
      number: "$127.00";
      price: "$86.00";
      sale: "sale";
    }
  ];
}

export interface IProductRoute {
  id: "1";
  heading: "Bouquet";
  url: "product/bouquet";
  paragraph: "Showing all 9 results";
  data: [
    {
      id: "1";
      type: "Flower";
      design: "Custom Floral Designs";
      url: "/product/custom-floral-designs";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/product-4.jpg";
      number: "$127.00";
      price: "$86.00";
      sale: "sale";
    }
  ];
}

export interface ISpecial {
  _id: "66edf41c9f7e6b6bde8e8a64";
  id: "1";
  img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/offer.jpg";
  title: "SPECIAL OFFER";
  heading: "Your Floral Journey Begins Here: Get 20% Off Your First Order!";
  button: "Shop Now";
  url: "/shop";
}

export interface IFooter {
  _id: "66edfa429f7e6b6bde8e8a67";
  id: "1";
  title: "Flower Shop";
  paragraph: "Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our passion for flowers, and our commitment to making every moment memorable.";
  nav: [
    {
      id: "1";
      title: "Home";
      url: "/";
    }
  ];
  address: "Address: 13 Fifth Avenue, New York 101660";
  email: "Email: contact@info.com";
  number: "Phone: +91 987 654 321";
}
