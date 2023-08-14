import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { name, price, description, shortDescription, quantity, image } =
      this.props.productDetail;

    return (
      <div className="modal fade" id="productDetail">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Product Detail</h2>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            <div className="modal-body row align-items-center">
              <div className="col-4">
                <img className="img-fluid" alt="..." src={image} />
              </div>
              <div className="col-8">
                <table className="table">
                  <thead>
                    <tr>
                      <td colSpan="2">
                        <h2>{name}</h2>
                      </td>
                    </tr>
                    <tr>
                      <td className="detail-title">Description</td>
                      <td>{description}</td>
                    </tr>
                    <tr>
                      <td className="detail-title">Short Description</td>
                      <td>{shortDescription}</td>
                    </tr>
                    <tr>
                      <td className="detail-title">Quantity</td>
                      <td>{quantity}</td>
                    </tr>
                    <tr>
                      <td className="detail-title">Price</td>
                      <td>${price}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
