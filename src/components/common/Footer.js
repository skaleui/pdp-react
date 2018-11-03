import React from 'react';

import '../../styles/common.css'

class Footer extends React.Component {
	render() {
		return (
			<div className="container page-title">
			{this.props.title}
			</div>
		);
	}

}

export default Footer;
