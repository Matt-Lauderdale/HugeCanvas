import React, { Component } from 'react';
import Canvas from './components/Canvas';
import txt from './data/input.txt';
class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      data: {},
    }
    this.data = {};
  }
  componentDidMount() {
    
    fetch(txt)
        .then( r => r.text())
        .then(data => {
          this.setState({
            data: this.parseData(data)
          })
        });
  }
  parseData(data) {
    let myObj = {}

    data.split(/\n/g).forEach((item) => {
      const shapeVal = item.split(' ');
      const shapeKey = item[0];
      const shapeVals = shapeVal.slice(1, shapeVal.length);
      if (myObj[shapeKey]) {
        myObj[shapeKey].push(shapeVals);
      } else {
        myObj[shapeKey] = [shapeVals];
      }
    })
    return myObj;
  }
  render() {
    console.log('this.state.data...........', this.state.data);
    return (
      <div className="App">
        <Canvas drawing={this.state.data}/>
      </div>
    );
  }
}

export default App;
