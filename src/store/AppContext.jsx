import { createContext, useReducer, useState } from "react";

export const AppContext = createContext({
  productDetails: {},
  setProductDetails: () => {},
  products: [],
  cartItems: [],
  dispatchCartItems: ()=>{},
});

let storedCartItems = localStorage.getItem('cartItems');

if (storedCartItems === null) {
  storedCartItems = [];
}

else {
  storedCartItems = JSON.parse(storedCartItems);
}


const cartReducer = (currCart, action) => {
  let newCartItems = [];
  switch (action.type) {
    case "add":
      if(currCart.length !== 0){
        let existedItem = currCart.filter((item)=> item.id === action.payload.id);
        if(existedItem.length !== 0){
          return currCart;
        }
      }
      newCartItems = [action.payload, ...currCart];
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;

    case "delete":
      newCartItems = currCart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    
    default:
      return currCart;
  }
};

const AppContextProvider = (props) => {
  const [productDetails, setProductDetails] = useState({});
  const [cartItems, dispatchCartItems] = useReducer(cartReducer, storedCartItems);
  const products = [
    {
      img: "/img/1.webp",
      name: "Wall Attached Study Table",
      price: 3499,
      highlights: `<h2>Space-Saving Design:</h2>
        <p>Ideal for small rooms or apartments, this study table maximizes floor space by attaching directly to the wall.</p>
        <h2>Sturdy Construction:</h2>
        <p>Crafted from high-quality materials such as wood or metal, ensuring durability and stability.</p>
        <h2>Foldable or Collapsible:</h2>
        <p>Some models offer a foldable or collapsible design, allowing the table to be neatly tucked away when not in use.</p>
        <h2>Ample Workspace:</h2>
        <p>Despite its compact size, the study table provides ample workspace for studying, working, or writing.</p>
        <h2>Storage Solutions:</h2>
        <p>Includes built-in shelves, drawers, or compartments for organizing books, stationery, and other essentials.</p>
        <h2>Ergonomic Design:</h2>
        <p>Designed with ergonomics in mind, promoting proper posture and comfort during extended study sessions.</p>
        <h2>Customizable Features:</h2>
        <p>Some models offer customizable features such as adjustable height or interchangeable components to suit individual preferences.</p>
        <h2>Versatile Use:</h2>
        <p>Suitable for various purposes including studying, writing, crafting, or even as a makeshift workstation.</p>
        <h2>Easy Installation:</h2>
        <p>Simple installation process with mounting hardware included, making it easy to set up and install on any wall.</p>
        <h2>Modern Aesthetics:</h2>
        <p>Stylish and contemporary design options available to complement different interior styles and decor themes.</p>`,
    },

    {
      img: "/img/2.webp",
      name: "Low Height Wooden Bed",
      price: 7999,
      highlights: `
      <h2>Minimalistic Design:</h2>
      <p>Features a sleek and modern design, perfect for contemporary bedrooms.</p>
      <h2>Space-Saving:</h2>
      <p>Low height design makes it ideal for rooms with low ceilings or small spaces, maximizing vertical space.</p>
      <h2>Easy Access:</h2>
      <p>Provides easy access to the bed, especially for children or individuals with mobility issues.</p>
      <h2>Sturdy Construction:</h2>
      <p>Crafted from high-quality wood, ensuring durability and stability for a restful night's sleep.</p>
      <h2>Natural Aesthetics:</h2>
      <p>Enhances the natural beauty of the bedroom with the warmth and charm of wooden furniture.</p>
      <h2>Versatile Styling:</h2>
      <p>Compatible with various decor styles, from minimalist to rustic or Scandinavian.</p>
      <h2>Customizable Options:</h2>
      <p>Available in different wood finishes and designs to suit individual preferences and bedroom aesthetics.</p>
      <h2>Integrated Storage:</h2>
      <p>Some models may feature built-in storage drawers underneath, offering convenient space-saving storage solutions.</p>
      <h2>Easy Assembly:</h2>
      <p>Simple assembly process with clear instructions, making it easy to set up without professional assistance.</p>
      <h2>Comfortable Sleeping Experience:</h2>
      <p>Despite its low height, the bed offers ample support and comfort for a restful night's sleep.</p>`,
    },

    {
      img: "/img/3.webp",
      name: "Desktop/Laptop Wooden Table",
      price: 4599,
      highlights: `
      <h2>High-Quality Material:</h2>
      <p>Crafted from premium quality wood, ensuring durability and longevity.<
      <h2>Sleek Design:</h2>
      <p>Features a sleek and modern design that complements any workspace or home office.<
      <h2>Multi-functional:</h2>
      <p>Designed to accommodate both desktop computers and laptops, providing versatility for various needs.<
      <h2>Ergonomic:</h2>
      <p>Incorporates ergonomic design principles to promote comfortable and efficient computing experiences.<
      <h2>Spacious Surface:</h2>
      <p>Ample surface area to accommodate your computer, monitor, keyboard, mouse, and other accessories.<
      <h2>Storage Solutions:</h2>
      <p>Includes built-in drawers or shelves for convenient storage of documents, stationery, or personal items.<
      <h2>Easy Assembly:</h2>
      <p>Simple assembly process with clear instructions, making it easy to set up.<
      <h2>Customization Options:</h2>
      <p>Available in various finishes and sizes to suit different preferences and spaces.<
      <h2>Sturdy Construction:</h2>
      <p>Solid construction ensures stability and support for your devices.<
      <h2>Environmentally Friendly:</h2>
      <p>Made from sustainably sourced wood and eco-friendly manufacturing processes, minimizing environmental impact.</p>`,
    },

    {
      img: "/img/4.webp",
      name: "Recliner Comfy Sofa",
      price: 14000,
      highlights: `<h2>Plush Comfort:</h2>
      <p>Sink into luxurious comfort with plush cushions and padded armrests, providing an indulgent seating experience.<
      <h2>Reclining Functionality:</h2>
      <p>Effortlessly recline at the touch of a button or lever, allowing you to find the perfect lounging position for relaxation.<
      <h2>Multiple Recline Positions:</h2>
      <p>Adjustable reclining positions offer versatility for various activities, from watching TV to taking a nap.<
      <h2>Built-in Footrest:</h2>
      <p>Enjoy ultimate relaxation with a built-in footrest that extends out when the sofa is reclined, providing full-body support.<
      <h2>Durable Construction:</h2>
      <p>Sturdy frame construction and high-quality upholstery materials ensure long-lasting durability and support.<
      <h2>Space-Saving Design:</h2>
      <p>Ideal for smaller living spaces, the recliner sofa offers comfort without taking up excessive room.<
      <h2>Modern Aesthetics:</h2>
      <p>Stylish design options available to complement different interior decor styles, from classic to contemporary.<
      <h2>Easy Maintenance:</h2>
      <p>Easy-to-clean upholstery materials make maintenance a breeze, ensuring your sofa looks and feels great for years to come.<
      <h2>Additional Features:</h2>
      <p>Some models may include extra features such as cup holders, USB charging ports, or storage compartments for added convenience.<
      <h2>Versatile Placement:</h2>
      <p>Perfect for living rooms, home theaters, or entertainment spaces, providing the ultimate spot for relaxation and leisure activities.</p>`,
    },

    {
      img: "/img/5.webp",
      name: "Gaming Chair With RGB",
      price: 13699,
      highlights: `
      <h2>Immersive Gaming Experience:</h2>
      <p>Enhance your gaming setup with vibrant RGB lighting, creating an immersive and dynamic atmosphere.<
      <h2>Customizable Lighting:</h2>
      <p>Personalize your gaming experience with customizable RGB lighting options, allowing you to match your chair's lighting to your gaming setup or mood.<
      <h2>Sleek and Modern Design:</h2>
      <p>Featuring a sleek and modern design with integrated RGB lighting, the gaming chair adds a futuristic touch to your gaming space.<
      <h2>Comfortable Ergonomics:</h2>
      <p>Designed with ergonomic features such as lumbar support, adjustable armrests, and reclining capabilities, ensuring comfort during long gaming sessions.<
      <h2>Durable Construction:</h2>
      <p>Constructed with high-quality materials and sturdy frame construction, the gaming chair provides durability and support for gamers of all sizes.<
      <h2>Integrated Controls:</h2>
      <p>Easily control the RGB lighting effects and other features directly from the chair, providing convenient access without the need for additional accessories.<
      <h2>Multi-Functional:</h2>
      <p>Not just for gaming, the chair can also be used for work or relaxation, providing versatile seating options for various activities.<
      <h2>Compatibility:</h2>
      <p>Compatible with various gaming platforms and devices, including PCs, consoles, and more, ensuring compatibility with your gaming setup.</p>
      <h2>Easy Assembly:</h2>
      <p>Simple assembly process with clear instructions, making it easy to set up your gaming chair and start gaming in no time.</p>
      <h2>Enhanced Aesthetics:</h2>
      <p>Elevate the aesthetics of your gaming space with the sleek design and vibrant RGB lighting of the gaming chair, creating a visually striking focal point.</p>
      `,
    },

    {
      img: "/img/6.webp",
      name: "Wooden Engineered TV Table",
      price: 15000,
      highlights: `<h2>Sleek and Modern Design:</h2>
        <p>Featuring a sleek and modern design, the TV table adds a touch of sophistication to any living space.</p>
        <h2>Durable Construction:</h2>
        <p>Crafted from engineered wood, the TV table offers durability and longevity, ensuring it can support your TV and media accessories securely.</p>
        <h2>Ample Storage Space:</h2>
        <p>With spacious shelves or compartments, the TV table provides ample storage space for media devices, gaming consoles, DVDs, and more, keeping your entertainment area organized.</p>
        <h2>Integrated Cable Management:</h2>
        <p>Built-in cable management systems help keep cables and wires organized and out of sight, reducing clutter and maintaining a tidy appearance.</p>
        <h2>Versatile Use:</h2>
        <p>Suitable for various TV sizes and types, the table accommodates both flat-screen and older models, making it a versatile choice for any home.</p>
        <h2>Stylish Finishes:</h2>
        <p>Available in a variety of stylish finishes, including wood veneer, laminate, or painted surfaces, allowing you to choose the perfect option to complement your home decor.</p>
        <h2>Easy Assembly:</h2>
        <p>Simple assembly process with clear instructions and included hardware, making it easy to set up your TV table without hassle.</p>
        <h2>Sturdy Support:</h2>
        <p>Engineered wood construction provides sturdy support for your TV and accessories, ensuring stability and safety.</p>
        <h2>Space-Saving Design:</h2>
        <p>Compact design saves space in smaller living rooms or apartments, making it an ideal choice for urban dwellers or those with limited space.</p>
        <h2>Affordable Option:</h2>
        <p>Engineered wood offers a cost-effective alternative to solid wood furniture without sacrificing quality or style, providing excellent value for your money.</p>`,
    },
  ];

  return (
    <AppContext.Provider
      value={{ productDetails, setProductDetails, products, cartItems, dispatchCartItems }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
