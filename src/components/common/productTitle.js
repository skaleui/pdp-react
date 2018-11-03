import React from 'react';


import '../../styles/product.css';

class ProductTitle extends React.Component {
	render() {
		return (
			<div>
				<h4 className="product-title strong">{this.props.title.name}</h4>
				<h5 className="product-sub-title">{this.props.title.description}</h5>
			</div>
		);
	}
}

export default ProductTitle;
