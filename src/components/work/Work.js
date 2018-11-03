import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';

import ProductTitle from '../common/productTitle'
import ProductImage from '../image/productImage';
import ProductPrice from '../price/productPrice';

import '../../styles/product.css';

class Work extends React.Component {

  constructor(props, context){

    super(props, context);
    /*eslint-disable no-console*/
    console.log("constructor ", props);

  }

  componentDidMount(){
    /*eslint-disable no-console*/
    console.log("componentDidMount");
    this.props.actions.loadProducts();
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps", nextProps); /*eslint-disable no-console*/
  }

	render() {
    /*eslint-disable no-console*/
    const {product} = this.props;
    console.log("render", this.props);
		return (
			<div className="container card-deck">
				<div className="card">
          <ProductTitle title={this.props.products[0].detail} /> 
          <ProductImage url={this.props.products[0].identifier.productUrl} />
          <ProductPrice price={this.props.products[0].price} />
         
				</div>
			</div>
		);
	}

}

Work.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Work);
