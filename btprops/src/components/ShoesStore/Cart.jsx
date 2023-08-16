import React, { Component } from 'react';

export default class Cart extends Component {
  renderCartList = () => {
    if (this.props.cartList.length === 0) {
      return (
        <tr>
          <td colSpan={7} className="empty-card-announce">
            YOUR SHOPPING CART IS EMPTY
          </td>
        </tr>
      );
    }
    return this.props.cartList.map((element) => {
      const { id, name, price, image, cartQuantity } = element;
      return (
        <tr key={id}>
          <td className="text-center">{id}</td>
          <td className="text-center">
            <img width={75} src={image} className="img-fluid" alt="" />
          </td>
          <td>{name}</td>
          <td>${price.toLocaleString()}</td>
          <td className="text-center">
            <button
              onClick={() => this.props.handleCartQuantity(id, false)}
              className="btn qty-btn"
            >
              <i className="fa fa-minus" />
            </button>
            <span className="mx-lg-3 mx-1">{cartQuantity}</span>
            <button
              onClick={() => this.props.handleCartQuantity(id, true)}
              className="btn qty-btn"
            >
              <i className="fa fa-plus" />
            </button>
          </td>
          <td>${(price * cartQuantity).toLocaleString()}</td>
          <td className="text-center">
            <button onClick={() => this.props.handleRemove(id)} className="btn">
              <i className="fa fa-trash-alt text-danger" />
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="cart">
          <button
            type="button"
            className="btn cart-btn"
            data-toggle="modal"
            data-target="#shoppingCart"
          >
            <i className="fa fa-shopping-cart" />
            <span className="cart-item-qty">{this.props.cartList.length}</span>
          </button>
        </div>
        <div
          className="modal fade"
          id="shoppingCart"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Shopping Cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table table-responsive-lg">
                  <thead>
                    <tr className="text-center">
                      <th>ID</th>
                      <th>Item Image</th>
                      <th>Item Name</th>
                      <th>Unit</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartList()}</tbody>
                </table>
                {this.props.cartList.length === 0 ? (
                  <p></p>
                ) : (
                  <p className="sub-total">
                    Sub-total: $
                    <span>
                      {this.props.cartList.length !== 0
                        ? this.props.cartList
                            .reduce((total, element) => {
                              total += element.price * element.cartQuantity;
                              return total;
                            }, 0)
                            .toLocaleString()
                        : this.props.cartList.length}
                    </span>
                  </p>
                )}
              </div>
              <div className="modal-footer">
                {this.props.cartList.length !== 0 ? (
                  <button
                    onClick={() => this.props.handleCheckOut()}
                    type="button"
                    className="btn btn-primary checkout-btn"
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <></>
                )}

                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
