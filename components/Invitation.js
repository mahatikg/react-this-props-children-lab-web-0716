import React from 'react';
import ReactDOM from 'react-dom';
//getting the react elements you need

class Invitation extends React.Component {
  render(){
    return(
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}


module.exports = Invitation
