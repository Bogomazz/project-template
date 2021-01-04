import React from "react";
import { Product } from "../../models/product";

export class ProductView extends React.Component<{product: Product}> {

  render() {
    return (
      <>
        <div>
          {this.props.product.name}
        </div>
        <div>
          {this.props.product.description}
        </div>
      </>
    )
  }
}