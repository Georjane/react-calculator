import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      totalstatus: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = buttonName => {
    const {
      total, next, operation, totalstatus,
    } = this.state;
    const result = calculate({
      total, next, operation, totalstatus
    }, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
      totalstatus: result.totalstatus
    })
  }
  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
