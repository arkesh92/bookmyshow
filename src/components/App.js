import React from 'react';
import Seats from './Seats';
import Layout from './Layout';
import Payment from './Payment';
// import hall1 from '../data/hall1.json';
import hall2 from '../data/hall2.json';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {select: 0, hall: hall2, selected: [], cost: 0}
    this.handleClick = this.handleClick.bind(this)
    this.handleSeats = this.handleSeats.bind(this)
  }

  handleSeats(e) {
    e.preventDefault();
    let value = parseInt(e.target.innerText);
    console.log(value)
    this.setState({select: value, selected: [], cost: 0})
  }

  handleClick(e) {
    e.preventDefault();
    let elem = e.target;
    if(elem.classList.contains("selected"))
      return
    let array = [];
    let price = 0;
    if(this.state.selected.length > 0 && elem.dataset.category !== this.state.selected[0].dataset.category) {
      console.log(elem.dataset.category)
      this.setState({selected: [], cost: 0})
    }
    while(elem && !elem.disabled && array.length < this.state.select - this.state.selected.length) {
      console.log(elem)
      array.push(elem)
      price += parseInt(elem.dataset.cost)
      elem = elem.nextSibling
    }
    if(array.length <= this.state.select - this.state.selected.length) {
      this.setState({selected: [...this.state.selected, ...array], cost: this.state.cost+price})
    }
    if(this.state.select !== 0 && this.state.select - this.state.selected.length === 0) {
      let deviation = parseInt(elem.dataset.cost) - parseInt(this.state.selected[0].dataset.cost)
      this.setState({selected: [...this.state.selected.slice(1), elem], cost: this.state.cost+deviation})
    }
    console.log(this.state);
  }

  componentDidUpdate() {
    document.querySelectorAll(".seat.selected").forEach(element => {
      element.classList.remove("selected")
    })
    for(let elem of this.state.selected) {
      elem.classList.add("selected")
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          BookMyShow
        </header>
        <Seats max={10} current={this.state.select} handleClick={this.handleSeats}/>
        <Layout hall={this.state.hall} handleClick={this.handleClick}/>
        { (this.state.select !== 0 && this.state.selected.length === this.state.select) ? <Payment cost={this.state.cost} /> : ""}
      </div>
    );
  }
}

export default App;
