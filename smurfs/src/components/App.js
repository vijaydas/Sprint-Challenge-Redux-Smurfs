import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';

import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm'

// import { addSmurfs } from '../actions';
// import { connect } from 'react-redux';



/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {

  // componentDidMount() {
  //   getSmurfs();
  // }

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <NavLink to='/'>VILLAGE</NavLink>
          <NavLink to='/AddSmurfForm'>Add New Smurf</NavLink>
        </nav>

        <Route
        path='/AddSmurfForm'
        render={ props => (
          <AddSmurfForm  />
        )}
        />


        <Route
        exact path='/'
        render={ props => (
          <SmurfList />
        )}
        />




      </div>
    );
  }
}

//export default App;

// function mapStateToProps(state) {
//   //console.log(state);
//   return {
//     smurfs: state.smurfs,
//     getSmurfs: state.getSmurfs,
//     addSmurfs: state.addSmurfs,
//     error: state.error
//   }
// }

// export default connect(
//   mapStateToProps, {
//     addSmurfs
//   }
// )(App);

export default App;