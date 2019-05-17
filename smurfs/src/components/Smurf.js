import React from "react";
import { connect } from "react-redux";

const Smurf = props => {

          return (
            <div className="Smurf">
              <h3>{this.props.name}</h3>
              <strong>{this.props.height} tall</strong>
              <p>{this.props.age} smurf years old</p>
            </div>
          );
    }
    
 

export default Smurf;

