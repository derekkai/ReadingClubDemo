import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

/* eslint-disable */
const style = {
  fontSize: '24px',
  marginRight: '12px',
};

class Item extends PureComponent {
  render() {
    console.log(this.props.index);
    const { props1, props2, props3 } = this.props;
    return (
      <div>
        <span style={style}>{props1}</span>
        <span style={style}>{props2}</span>
        <span style={style}>{props3}</span>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  props1: state.color.data[props.index].props1,
  props2: state.color.data[props.index].props2,
  props3: state.color.data[props.index].props3,
});
export default connect(mapStateToProps)(Item);
