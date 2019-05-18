import React from "react";
// import { connect } from "react-redux";

class Smurf extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       smurfs: smurfs
    //     };
    //   }

render() {
    return (
    <div className="SmurfBox">
    <h3>{this.props.smurf.name}</h3>
     <strong>{this.props.smurf.height} tall</strong>
     <p>{this.props.smurf.age} smurf years old</p>
    )}
     </div>

    );
    
    }
}

export default Smurf;

// const mapStateToProps = state => {
//     return {
//         smurfs: smurfs
//     }
// }

// export default connect(
//     mapStateToProps
// )(Smurf);