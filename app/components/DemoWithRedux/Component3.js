import React, { Component } from 'react';
import { connect } from 'react-redux';

/* eslint-disable */
class Component3 extends Component {
  render() {
    console.log('Component3');
    const { color } = this.props;
    return <div className={`component3 ${color}`} />;
  }
}

const mapStateToProps = state => ({
  color: state.color.component3Color,
})

export default connect(mapStateToProps)(Component3);