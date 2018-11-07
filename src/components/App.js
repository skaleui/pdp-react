import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'prop-types';

import Header from './common/Header';
import Work from './work/Work';
import Footer from './common/Footer';
import config from '../config/config';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    return (
      <div>
        <Header title={config.header}>
        </Header>
        <Work productId={config.id}/>
        <Footer title={config.footer}>
        This is Footer
        </Footer>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps){
  return {
    loading: state.ajaxCallsInProgress  > 0
  };
}


export default App;
