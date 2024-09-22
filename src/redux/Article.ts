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

export interface ICustomer {
  id: "1";
  title: "TESTIMONAIL";
  slug: "Hear From Our Happy Customers";
  text: "Share some details here. This is Flexible section where you can share anything you want.";
  data: [
    {
      id: "1";
      text: "I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/testimonial-skip-01.jpg";
      name: "Steve Smith";
      post: "Wedding Planner";
    }
  ];
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

export interface IConatctImage {
  id: "1";
  title: "Contact Us";
  paragraph: "Get in Touch with Our Experts Team";
  text: "Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.";
  img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/contact-hero-bg.jpg";
}

export interface IConatctForm {
  id: "1";
  title: "Get In Touch With Us";
  text: "Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.";
  addressName: "Address";
  address: "2972 Westheimer Rd. Santa Ana, Illinois 85486";
  emailName: "Email";
  email: "info@contact.com";
  phoneName: "Phone";
  phone: "(+91) 987 654 321";
  media: "Social Media";
}

export interface IContactTab {
  id: "1";
  title: "FAQs";
  paragraph: "Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.";
  data: [
    {
      id: "1";
      title: "How do I order flowers and choose delivery options?";
      paragraph: "Simply browse our shop, select your bouquet, and follow the checkout process. You can choose the delivery date and time during checkout.";
    }
  ];
}

export interface IContactAction {
  id: "1";
  img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/cta.jpg";
  title: "Call to action";
  heading: "Explore Our Exquisite Floral Collections & Shop Now for the Perfect Blooms";
  button: "Shop Now";
  url: "/shop";
}

export interface IAboutImage {
  id: "1";
  title: "About Us";
  img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about-hero-bg.jpg";
  paragraph: "Embarking on the Path to Our Dreams";
  text: "Share some details here. This is Flexible section where you can share anything you want. It could be details or some information.";
}

export interface IAboutFlorist {
  id: "1";
  title: "About Florist";
  heading: "Blossoming Your Special Moments with Nature's Finest";
  paragraph: "Welcome to the heart of Florist, where our love for flowers blooms into exquisite arrangements that celebrate life's most cherished moments. In this corner of the internet, we invite you to discover our passion, our team, and the essence of what makes Florist a blooming success. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  image: [
    {
      id: "1";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about-01.jpg";
    }
  ];
}

export interface IAboutGoal {
  id: "1";
  img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about.jpg";
  data: [
    {
      id: "1";
      title: "Our Vision";
      paragraph: "At Florist, our vision is to be the guiding light for floral elegance and creativity. We aspire to inspire, by reimagining the way flowers connect people, bring joy, and create lasting memories. We envision a world where every gesture, whether grand or subtle, is accompanied by the enchantment of flowers.";
    }
  ];
}

export interface IAboutJourney {
  id: "1";
  title: "Our Story";
  slug: "A Journey from Passion to Florist";
  paragraph: "Our journey began with a seed of passion that blossomed into a flourishing business. Allow us to share the story of our founder's deep-rooted love for flowers and how it led to the creation of your trusted floral destination. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  text: "Explore the tale of dedication, creativity, and a vision to spread the joy of nature’s beauty through the art of floral design. Discover the moments that shaped our founder’s path and paved the way for Florist to become a symbol of floral excellence.";
  img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/our-story.jpg";
  data: [
    {
      id: "1";
      title: "500k+";
      slug: "Happy Customers";
    }
  ];
}

export interface IAboutTeam {
  id: "1";
  title: "Our Team";
  slug: "Our Dedicated Team of Enthusiasts​";
  text: "Share some details here. This is Flexible section where you can share anything you want.";
  data: [
    {
      id: "1";
      title: "Elizabeth B.";
      post: "Owner";
      img: "https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/team-skip-01.jpg";
    }
  ];
}
