import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../store/AppContext";
import "./ViewProduct.modular.css";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  const { products, dispatchCartItems, cartItems} = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);
  const { productId } = useParams();
  const productDetails = products[productId];
  const cartBtn = useRef();
  
  const alreadyAdded = cartItems.filter((item)=> item.id === productId);
  
  useEffect(()=>{
    if(alreadyAdded.length !== 0){
      cartBtn.current.innerText = "Added";
      cartBtn.current.style.backgroundColor = "black"
      cartBtn.current.style.color = "white"
      
    }
  }, [])

  const handleCart = (e) => {
    const item = {
      id: productId,
      name: productDetails.name,
      img: productDetails.img,
      price: productDetails.price,
    }; 

    if (alreadyAdded.length === 0) {
      setIsAdded(true);
      document.body.style.overflow = 'hidden'; 
    }
    
    setTimeout(()=>{
        setIsAdded(false);
        document.body.style.overflow = '';
        e.target.innerText = "Added";
        e.target.style.backgroundColor = "black"
        e.target.style.color = "white"
    }, 1000);



    dispatchCartItems({ type: "add", payload: item });
  };

  window.scrollTo(0, 0);
  return (
    <>
      <div className="product-view custom-container">
        {isAdded && (
          <div class="d-flex justify-content-center cartSpinner">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <div className="left-look">
          <div className="left-view">
            <img
              src={`${productDetails.img}`}
              alt="logo"
            />
            
            <p>{productDetails.name}</p>
            <h3>Rs. {productDetails.price} /-</h3>

            <button className="cart-btn" onClick={handleCart} ref={cartBtn}>
              Add Cart
            </button>
          </div>
        </div>
        <div className="product-summary">
          <h2>Highlights: </h2>
          <div
            className="highlights"
            dangerouslySetInnerHTML={{ __html: productDetails.highlights }}
          />
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
