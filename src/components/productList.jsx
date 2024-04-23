import Product from "./Product";
import "./productList.modular.css";
import { AppContext } from "../store/AppContext";
import { useContext } from "react";

const ProductList = ()=>{
    const {products} = useContext(AppContext);
    return <>

        <div className="products marginBottom">
            {products.map((product, index) => (
                <Product key={index} id={index} img={product.img} name={product.name} price={product.price} highlights={product.highlights}></Product>
            ))}
        </div>
    </>
} 

export default ProductList;