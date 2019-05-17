import React, { Component } from 'react';
import './App.css';

import { getSmurfs } from '../actions';
import { connect } from 'react-redux';



/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */



class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Village with Redux and all that jazz!</h1>
        <div>







        </div>
      </div>
    );
  }
}

//export default App;

function mapStateToProps(state) {
  console.log(state);
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps, {
    getSmurfs
  }
)(App);