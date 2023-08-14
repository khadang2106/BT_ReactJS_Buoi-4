import React, { Component } from 'react';

import './style.css';
import Header from './Header';
import productsData from '../../data/data.json';
import ProductList from './ProductList';
import Modal from './Modal';

export default class ShoesStore extends Component {
  state = {
    productDetail: productsData[0],
  };

  getProductDetail = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <h2 className="text-center my-3">Shoes Store</h2>

        <ProductList
          productsData={productsData}
          getProductDetail={this.getProductDetail}
        />

        <Modal productDetail={this.state.productDetail} />
      </div>
    );
  }
}
