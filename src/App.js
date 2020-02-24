import React, {Component} from 'react';
import Body from "./components/Body";
import './App.css';

class App extends Component {
  state = {
    display: []
  };

  appendDisplayHandler = (insert) => {
    let display = this.state.display;

    if(insert === "<="){
      display.splice(display.length - 1, 1);
    } else {
      display.push(insert);
    }

    this.setState({display});
  }

  solveHandler = () => {
    try{
      let operation = "";
      this.state.display.forEach(elem => {
        operation += elem;
      });

      let display = eval(operation);

      display = display.toString().split("");

      this.setState({display});
    } catch {
      this.setState({display: []});
    }
    
  }

  allClearHandler = () => {
    this.setState({display: []});
  }

  render() {
    return (
      <div className="App">
        <Body display={this.state.display} appendDisplay={this.appendDisplayHandler} solve={this.solveHandler} allClear={this.allClearHandler} keys={["<=", "AC", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "."]}/>
      </div>
    )
  }
}

export default App;
