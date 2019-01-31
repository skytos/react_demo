import React, {Component} from 'react';

class Counter extends Component {
  state = {
    value: this.props.value
  }

  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    return "badge m-2 badge-" + (this.state.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const {value} = this.state;
    return value === 0 ? 'Zero' : value;
  }
}
export default Counter;
