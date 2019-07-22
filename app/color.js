/* action type */
const CHANGE_COLOR = 'CHANGE_COLOR';
const CHANGE_DATA = 'CHANGE_DATA';

/* actions */

export const changeColor = payload => ({
  type: CHANGE_COLOR,
  payload,
});

export const changeData = () => ({
  type: CHANGE_DATA,
});

const initalState = {
  component3Color: 'red',
  keys: ['key1', 'key2', 'key3'],
  data: {
    key1: {
      props1: 20,
      props2: 30,
      props3: 40,
    },
    key2: {
      props1: 10,
      props2: 90,
      props3: 10,
    },
    key3: {
      props1: 10,
      props2: 80,
      props3: 60,
    },
  },
};

export default (state = initalState, action) => {
  switch (action.type) {
    case CHANGE_COLOR: {
      return {
        ...state,
        component3Color: action.payload,
      };
    }
    case CHANGE_DATA: {
      return {
        ...state,
        data: {
          ...state.data,
          key3: {
            props1: 99,
            props2: 99,
            props3: 99,
          },
        },
      };
    }
    default:
      return state;
  }
};
