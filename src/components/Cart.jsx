import "./Cart.modular.css";
import { useContext } from "react";
import { AppContext } from "../store/AppContext";

const Cart = () => {
    const { cartItems, dispatchCartItems } = useContext(AppContext);
    const handleCart = (id)=>{
        dispatchCartItems({type: "delete", payload : id})
    }
    return ( 
        <div className="cart-container">
            <h3>Cart</h3>
            {cartItems.length === 0 && <div className="emptyMsg">
                <p>Empty Cart</p>
            </div>}
            <div className="cartItems">
                {cartItems.map((item) => (
                    <div className="cartItem" key={item.id}>
                        <img src={item.img} alt="img" />
                        <div className="cartItemtext">
                            <p>{item.name}</p>
                            <h3>Rs. {item.price}/-</h3>
                            <div className="buttonContainer">
                                <a className="reachBtn" href="mailto:nakligmail@gmail.com">Reach Us</a>
                                <button className="deleteBtn" onClick={()=> handleCart(item.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
