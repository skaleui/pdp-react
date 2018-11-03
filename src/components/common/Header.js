import React from 'react';

import '../../styles/common.css';

class Header extends React.Component {
	render() {
		return (
			<h1 className="product-page container page-title">
			{this.props.title}
			</h1>
		);
	}

}

export default Header;
