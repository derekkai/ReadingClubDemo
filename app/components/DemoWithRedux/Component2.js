import React, { Component } from 'react';
import Component3 from './Component3';

/* eslint-disable */
export default class Component2 extends Component {
  render() {
    console.log('Component2');
    return (
      <div className="component2">
        <Component3 />
      </div>
    );
  }
}
