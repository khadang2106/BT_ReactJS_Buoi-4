import React, { Component } from 'react';

import './style.css';
import Header from './Header';
import productsData from '../../data/data.json';
import ProductList from './ProductList';
import Modal from './Modal';

export default class ShoesStore extends Component {
  state = {
    productDetail: productsData[0],
    cartList: [],
  };

  getProductDetail = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  addToCart = (product) => {
    const data = [...this.state.cartList];

    const index = data.findIndex((element) => {
      return element.id === product.id;
    });

    if (index !== -1) {
      data[index].cartQuantity++;
    } else {
      data.push({ ...product, cartQuantity: 1 });
    }

    this.setState({
      cartList: data,
    });
  };

  handleRemove = (id) => {
    const result = window.confirm(
      'Do you want to remove this product from cart?'
    );

    if (result) {
      const data = [...this.state.cartList];

      const index = data.findIndex((element) => {
        return element.id === id;
      });

      data.splice(index, 1);

      this.setState({
        cartList: data,
      });
    }
  };

  handleCartQuantity = (id, isIncrease) => {
    const data = [...this.state.cartList];

    const index = data.findIndex((element) => {
      return element.id === id;
    });

    if (isIncrease) {
      data[index].cartQuantity++;
    } else {
      if (data[index].cartQuantity === 1) {
        const result = window.confirm(
          'Do you want to remove this product from cart?'
        );

        if (result) {
          data.splice(index, 1);
        }
      } else {
        data[index].cartQuantity--;
      }
    }

    this.setState({
      cartList: data,
    });
  };

  handleCheckOut = () => {
    const result = window.confirm('Checkout all these items?');

    if (result) {
      const data = [];

      this.setState({
        cartList: data,
      });

      alert('Checkout successfully!');
    }
  };

  render() {
    return (
      <div>
        <Header
          cartList={this.state.cartList}
          handleRemove={this.handleRemove}
          handleCartQuantity={this.handleCartQuantity}
          handleCheckOut={this.handleCheckOut}
        />
        <h2 className="text-center my-3">Shoes Store</h2>

        <ProductList
          productsData={productsData}
          getProductDetail={this.getProductDetail}
          addToCart={this.addToCart}
        />

        <Modal productDetail={this.state.productDetail} />
      </div>
    );
  }
}
