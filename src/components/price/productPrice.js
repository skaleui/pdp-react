import React from 'react';

import '../../styles/product.css';

class ProductPrice extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="product-regular-price">Regular Price: {this.props.price.regular.formattedValue}</div>				
				<div className="product-sale-price">Sale Price: {this.props.price.sale.formattedValue}</div>
			</div>
		);
	}

}

export default ProductPrice;
