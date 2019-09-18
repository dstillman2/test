import React from 'react';
import test from './test.png';
import styled from 'styled-components';

const Component = styled.div`
  height: 500px;
`;
export class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={test} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <Component onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </Component>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} />
      </div>
    );
  }
}