import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Component1 from './Component1';
import { changeColor } from '../../color';

/* eslint-disable */
class DemoWithRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component3Color: 'red',
    };
  }

  handleClick = () => {
    this.props.changeColor('yellow');
  };

  render() {
    console.log('DemoRedux');

    return (
      <div>
        <button onClick={this.handleClick}>Change Color To Yellow</button>
        <Component1 />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>  ({
  changeColor: param => dispatch(changeColor(param)),
});

export default connect(null, mapDispatchToProps)(DemoWithRedux);
