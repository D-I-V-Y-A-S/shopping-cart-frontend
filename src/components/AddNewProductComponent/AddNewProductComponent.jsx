import React, { useState } from 'react';
import './AddNewProductComponent.css';
import Base_Url from '../../../CONFIG.JS';

const AddNewProductComponent = () => {
  const [productData, setProductData] = useState({
    productID: '',
    productName: '',
    productCategory: '',
    productCost: '',
    productStockQuantity: '',
    productImage: null,
  });

  const {
    productID,
    productName,
    productCategory,
    productCost,
    productStockQuantity,
    productImage,
  } = productData;

  const productIDHandler = (event) => {
    setProductData({ ...productData, productID: event.target.value });
  };

  const productNameHandler = (event) => {
    setProductData({ ...productData, productName: event.target.value });
  };

  const productCategoryHandler = (event) => {
    setProductData({ ...productData, productCategory: event.target.value });
  };

  const productCostHandler = (event) => {
    setProductData({ ...productData, productCost: event.target.value });
  };

  const productStockQuantityHandler = (event) => {
    setProductData({ ...productData, productStockQuantity: event.target.value });
  };

  const productImageHandler = (event) => {
    setProductData({ ...productData, productImage: event.target.files[0] });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('productID', productID);
    formData.append('productName', productName);
    formData.append('productCategory', productCategory);
    formData.append('productCost', productCost);
    formData.append('productStockQuantity', productStockQuantity);
    formData.append('productImage', productImage);

    fetch(`${Base_Url}/upload`, {
      method: 'POST',
      crossDomain: true,
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ErrorMessage) {
          alert(data.ErrorMessage);
        } else {
          alert(`Product added successfully`);
          window.location.href = '/';
        }
      });
  };

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new product</h2>

      <div className='form-group'>
        <label>Product Name</label>
        <input
          type='text'
          placeholder='Enter the product Name'
          value={productName}
          onChange={productNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Product ID</label>
        <input
          type='text'
          placeholder='Enter the product ID'
          value={productID}
          onChange={productIDHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Product Category</label>
        <select value={productCategory} onChange={productCategoryHandler} required>
          <option value=''>-- Please select --</option>
          <option value='Electronics'>Electronics</option>
          <option value='Food & Beverages'>Food & Beverages</option>
          <option value='Toys'>Toys</option>
          <option value='Books'>Books</option>
        </select>
      </div>

      <div className='form-group'>
        <label>Product Cost</label>
        <input
          type='number'
          placeholder='Enter the product cost'
          value={productCost}
          onChange={productCostHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Product Stock Quantity</label>
        <input
          type='number'
          placeholder='Enter the stock quantity'
          value={productStockQuantity}
          onChange={productStockQuantityHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Product Image</label>
        <input type='file' onChange={productImageHandler} required />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewProductComponent;
