import {useNavigate } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import { useContext } from "react";
import "./Product.modular.css";

const Product = ({id, img, name, price, highlights})=>{

    const navigate = useNavigate();
    let productContext = useContext(AppContext);

    const handleClick = (productId)=>{
        let productDetails = {
            img, name, price, highlights
        }

        productContext.setProductDetails(productDetails);
        navigate(`/product/${productId}`)
    }

    return <>
        <div className="product" onClick={() => handleClick(id)}>
            <img src={img} alt="img" />
            <p>{name}</p>
            <h3>Rs. {price} /-</h3>
        </div>
    </>
}

export default Product; 