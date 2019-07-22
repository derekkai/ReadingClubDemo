import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
/* eslint-disable */

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canDisable: true,
      renderLiveCycle: false,
    };
  }

  handleLockBtnClick = () => {
    this.setState({ canDisable: !this.state.canDisable });
  };

  handleRenderBtnClick = () => {
    this.setState({ renderLiveCycle: !this.state.renderLiveCycle });
  };

  render() {
    const { canDisable, renderLiveCycle } = this.state;
    console.log('Parent Render');
    return (
      <React.Fragment>
        <button onClick={this.handleLockBtnClick}>Disable Lock</button>
        <button onClick={this.handleRenderBtnClick}>Render LiveCycle</button>
        <Component1 mustBeBool="string" canDisable={canDisable} />
        <Component2 canDisable={canDisable} />
        <Component3 canDisable={canDisable} />
        {renderLiveCycle && <LifeCycle canDisable={canDisable} />}
      </React.Fragment>
    );
  }
}

class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    };
  }

  handleClick = () => {
    const { canDisable } = this.props;
    if (canDisable) {
      this.setState({ color: 'gray' });
    }
  };

  render() {
    console.log('Component1 Render');
    return (
      <div
        className={`component ${this.state.color}`}
        onClick={this.handleClick}
      >
        <span>Component1</span>
      </div>
    );
  }
}

Component1.propTypes = {
  mustBeBool: PropTypes.bool.isRequired,
};

class Component2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
    };
  }

  handleClick = () => {
    const { canDisable } = this.props;
    if (canDisable) {
      this.setState({ color: 'gray' });
    }
  };

  render() {
    console.log('Component2 Render');
    return (
      <div
        className={`component ${this.state.color}`}
        onClick={this.handleClick}
      >
        <span>Component2</span>
      </div>
    );
  }
}

class Component3 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green',
    };
  }

  handleClick = () => {
    const { canDisable } = this.props;
    if (canDisable) {
      this.setState({ color: 'gray' });
    }
  };

  render() {
    console.log('Component3 Render');
    return (
      <div
        className={`component ${this.state.color}`}
        onClick={this.handleClick}
      >
        <span>Component3</span>
      </div>
    );
  }
}

class LifeCycle extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      testState: true,
    };
  }

  /* livecycle */
  componentWillMount = () => {
    console.log('componentWillMount');
  };
  componentDidMount = () => {
    console.log('componentDidMount');
  };
  shouldComponentUpdate = () => {
    console.log('shouldComponentUpdate');
    return true;
  };
  componentWillUpdate = () => {
    console.log('componentWillUpdate');
  };
  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  };
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  };

  handleClick = () => {
    this.setState({ testState: !this.state.testState });
  };

  render() {
    console.log('render');
    const { canDisable } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>TestStateChange</button>
      </React.Fragment>
    );
  }
}
