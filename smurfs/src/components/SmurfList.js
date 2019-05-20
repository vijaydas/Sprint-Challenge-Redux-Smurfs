import React from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="Smurfs">
                {this.props.smurfs.map(smurf => {
                    return <Smurf smurf={smurf} />
                })}

            </div>
        )
    };
}

    
    const mapStateToProps = state => {
        return {
        smurfs: state.smurfs,
        getSmurfs: state.getSmurfs
        };
   };

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     smurfs: state.smurfs,
//     getSmurfs: state.getSmurfs,
//     error: state.error
//   }
// }

export default connect(
    mapStateToProps,
    { getSmurfs}
)(SmurfList);