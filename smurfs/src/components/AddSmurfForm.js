import React from 'react';
import {connect} from 'react-redux';
import {addSmurfs} from '../actions';
import './App.css';


class AddSmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
    // console.log(this.state);
}

addSmurfs = e => {
    const newSmurf = this.state;
    this.props.addSmurfs(newSmurf);
    this.setState({
        name: '',
        age: '',
        height: ''
    })
}

   render() {
    return (
        <div className="AddSmurfForm">
        <h2>Add New Smurf</h2>
        <form onSubmit={this.addSmurfs}>
        <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        </div>
    );
}
}
    

// const mapStateToProps = () => ({addSmurfs});


export default connect(
    null,
    { addSmurfs }
  )(AddSmurfForm);