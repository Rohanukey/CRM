
import  {  useState ,useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Styles from "./ProductPage.module.css";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";

function ProductPage() {
  const [bigImage, setBigImage] = useState(product1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:3000/ProductList/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    fetchProduct();
  }, [id]);

  const handleSmallImageClick = (image) => {
    setBigImage(image);
  };

  return (
    <div>
      <h1>Product Details</h1>
      <div className={Styles.productcontainer}>
        <div className={Styles.imagecontainer}>
          <img
            src={bigImage}
            alt="Product"
            className={Styles.bigimage}
          />
          <div className={Styles.smallimages}>
            <img
              src={product1}
              alt="Product 1"
              onClick={() => handleSmallImageClick(product1)}
            />
            <img
              src={product2}
              alt="Product 2"
              onClick={() => handleSmallImageClick(product2)}
            />
            <img
              src={product3}
              alt="Product 3"
              onClick={() => handleSmallImageClick(product3)}
            />
            <img
              src={product4}
              alt="Product 4"
              onClick={() => handleSmallImageClick(product4)}
            />
            <img
              src={product5}
              alt="Product 5"
              onClick={() => handleSmallImageClick(product5)}
            />
          </div>
        </div>
        <div className={Styles.description}>
          <h2 className={Styles.desheading}>Product Details</h2>
          {product ? (
            <div className={Styles.info}>
              <p>Category: {product.Category}</p>
              <p>Price: {product.Price}</p>
              <p>SKU: {product.SKU}</p>
              <p>Quantity: {product.Quantity}</p>
              <p className={Styles.status} >Status: {product.status}</p>
              <button className={Styles.addcard}>Add To Cart</button>
            </div>
          ) : (
            <div>
              <h2>Error</h2>
              <p>Product details not found.</p>
            </div>
          )}
        </div>
        {/* <div>
          <button className={Styles.addcard}>Add to cart</button>
        </div> */}
       
      </div>
      
    </div>
  );
}

export default ProductPage;

























