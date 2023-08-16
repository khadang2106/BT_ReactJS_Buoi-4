import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.item;

    return (
      <div className="card product-item">
        <div className="product-img">
          <a href="#">
            <img className="card-img-top" src={image} alt="" />
          </a>
          <div className="actions">
            <div className="actions-btn d-flex">
              <button
                onClick={() => this.props.getProductDetail(this.props.item)}
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#productDetail"
              >
                Show Detail
              </button>
              <button
                onClick={() => this.props.addToCart(this.props.item)}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h4 className="card-title">
            <a href="#">{name}</a>
          </h4>
          <div className="price-rating">
            <p className="card-text">${price}</p>
            <div className="ratings">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-alt" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
