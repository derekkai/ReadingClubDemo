import React, { Component } from 'react';
import './style.scss';
/* eslint-disable */
class DemoWithoutRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component3Color: 'red',
    };
  }

  handleClick = () => {
    this.setState({ component3Color: 'yellow' });
  };
  render() {
    console.log('DemoRedux');
    const { component3Color } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Change Color To Yellow</button>
        <Component1 component3Color={component3Color} />
      </div>
    );
  }
}

class Component1 extends Component {
  render() {
    console.log('Component1');
    const { component3Color } = this.props;
    return (
      <div className="component1">
        <Component2 component3Color={component3Color} />
      </div>
    );
  }
}

class Component2 extends Component {
  render() {
    console.log('Component2');
    const { component3Color } = this.props;
    return (
      <div className="component2">
        <Component3 component3Color={component3Color} />
      </div>
    );
  }
}

class Component3 extends Component {
  render() {
    console.log('Component3');
    const { component3Color } = this.props;
    return <div className={`component3 ${component3Color}`} />;
  }
}

export default DemoWithoutRedux;
