import React from 'react';

export default class extends React.Component {

  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>increase</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}