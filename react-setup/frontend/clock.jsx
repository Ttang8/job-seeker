import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.time = new Date;

    this.state = {
      hours: this.time.getHours(),
      minutes: this.time.getMinutes(),
      seconds: this.time.getSeconds()
    };

    this.tick = this.tick.bind(this);
    this.handleSeconds = this.handleSeconds.bind(this);
    this.tick();
  }

  handleSeconds () {
    this.setState({seconds: this.state.seconds+1});
    if (this.state.seconds === 60) {
      this.setState({seconds: 0, minutes: this.state.minutes+1});
    }
    if (this.state.minutes === 60) {
      this.setState({minutes: 0, hours: this.state.hours+1});
    }
  }

  tick () {
    this.id = setInterval(this.handleSeconds, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.id);
  }

  render () {
    return (
      <div className="clock">
        <div className="numbers">{this.state.hours<=12? this.state.hours : this.state.hours-12}:{this.state.minutes< 10? `0${this.state.minutes}`: this.state.minutes}:{this.state.seconds< 10? `0${this.state.seconds}` : this.state.seconds} {this.state.hours< 12? "AM" : "PM"}</div>
      </div>
    );
  }

}

export default Clock;
