import React, { Component } from 'react';
import {provideState, injectState, update} from 'freactal';
import Child from './Child';
const parentState = {
  initialState: () => ({alpha: 1}),
  effects: {
    parentDoubleAlpha: update((state) => ({alpha: 2 * state.alpha}))
  }
};

class Parent extends Component {
  render() {
    console.log('rendering parent');
    return (
      <div>
        <h2>Parent</h2>
        <p>Alpha: {this.props.state.alpha}</p>
        <button onClick={() => this.props.effects.parentDoubleAlpha()}>Double Alpha(parent)</button>
        <Child />
      </div>
    );
  }
}

export default provideState(parentState)(injectState(Parent));
