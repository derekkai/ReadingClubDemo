import React, { Component } from 'react';
import Component2 from './Component2';

/* eslint-disable */
export default class Component1 extends Component {
  render() {
    console.log('Component1');
    return (
      <div className="component1">
        <Component2 />
      </div>
    );
  }
}
