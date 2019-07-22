import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeData } from '../../color';
import Item from './Item';

/* eslint-disable */
class Case2 extends Component {
  handleClick = () => {
    this.props.changeData();
  };

  render() {
    const { keys } = this.props;
    console.log('Case2');
    return (
      <React.Fragment>
        {keys.map(key => (
          <Item key={key} index={key} />
        ))}
        <button onClick={this.handleClick}>Change Data</button>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  changeData: () => dispatch(changeData()),
});

const mapStateToProps = state => ({
  keys: state.color.keys,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Case2);
