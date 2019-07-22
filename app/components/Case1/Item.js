import React, { Component, PureComponent } from 'react';
/* eslint-disable */
const style = {
  fontSize: '24px',
  marginRight: '12px',
}
export default class Item extends PureComponent {
  render() {
    console.log(this.props.index);
    const { data } = this.props;
    const { props1, props2, props3} = data;
    return(
      <div>
        <span style={style}>{props1}</span>
        <span style={style}>{props2}</span>
        <span style={style}>{props3}</span>
      </div>
    );
  }
}
