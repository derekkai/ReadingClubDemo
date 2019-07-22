import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeData } from '../../color';
import Item from './Item';

/* eslint-disable */
class Case1 extends Component {
  handleClick = () => {
    this.props.changeData();
  };

  render() {
    const { data } = this.props;
    console.log('Case1');
    return (
      <React.Fragment>
        {Object.entries(data).map(([key, value]) => (
          <Item key={key} index={key} data={value} />
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
  data: state.color.data,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Case1);
