import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.product.id}</h3>
      </div>
    );
  }
}
