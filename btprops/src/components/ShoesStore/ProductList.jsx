import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  renderShoesList = () => {
    return this.props.productsData.map((element) => {
      return (
        <div key={element.id} className="col-4 mb-4">
          <ProductItem
            item={element}
            getProductDetail={this.props.getProductDetail}
            addToCart={this.props.addToCart}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container product-list">
        <div className="row">{this.renderShoesList()}</div>
      </div>
    );
  }
}
