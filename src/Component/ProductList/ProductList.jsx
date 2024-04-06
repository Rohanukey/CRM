




import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './ProductList.module.css'; 
import chairImage from '../../assets/chair.png';
import shoeImage from '../../assets/shoose.png';
import techImage from '../../assets/tech.png';
import tshirtImage from '../../assets/tshirt.png';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/ProductList');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/ProductList/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  

  return (
    <div className={styles.productListContainer}>
      <h1 className={styles.productListHeader}>Product List</h1>
      <table className={styles.productListTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Category</th>
            <th>Price</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                {product.Category === 'chair' && <img src={chairImage} alt="Chair" className={styles.categoryImage} />}
                {product.Category === 'shoose' && <img src={shoeImage} alt="Shoes" className={styles.categoryImage} />}
                {product.Category === 'tech' && <img src={techImage} alt="Tech" className={styles.categoryImage} />}
                {product.Category === 'tshirt' && <img src={tshirtImage} alt="T-Shirt" className={styles.categoryImage} />}
              </td>
              <td>{product.Category}</td>
              <td>{product.Price}</td>
              <td>{product.SKU}</td>
              <td>{product.Quantity}</td>
              <td>{product.status}</td>
              <td className={styles.productActions}>
                <Link to={{ pathname: `/ProductPage/${product.id}`, state: { product } }}>
                  <img src="https://img.icons8.com/material-outlined/24/visible--v1.png" alt="visible--v1" className={styles.productActionIcon} />
                </Link>
                <Link to={`/EditProduct/${product.id}`}>
                  <img src="https://img.icons8.com/fluency-systems-regular/48/edit--v1.png" alt="edit--v1" className={styles.productActionIcon} />
                </Link>
                <img src="https://img.icons8.com/fluency-systems-regular/48/filled-trash.png" alt="filled-trash" className={styles.productActionIcon} onClick={() => handleDelete(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
