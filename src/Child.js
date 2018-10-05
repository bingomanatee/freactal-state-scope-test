import React, {Component} from 'react';
import {provideState,update, injectState} from 'freactal';

const childState = {
  initialState: () => ({gamma: 1}),
  effects: {
    doubleAlpha: update((state) => ({alpha: state.alpha * 2})),
    doubleGamma: update((state) => ({gamma: state.gamma * 2}))
  }
}

class Child extends Component {
  render() {
    return (
      <div>
        <h2>Child</h2>
        <p>Alpha: {this.props.state.alpha}</p>
        <p>Gamma: {this.props.state.gamma}</p>
        <button onClick={() => this.props.effects.doubleAlpha()}>Double Alpha</button>
        <button onClick={() => this.props.effects.parentDoubleAlpha()}>Double Alpha(parent)</button>
        <button onClick={() => this.props.effects.doubleGamma()}>Double Gamma</button>
      </div>
    );
  }
}

export default provideState(childState)(injectState(Child));
