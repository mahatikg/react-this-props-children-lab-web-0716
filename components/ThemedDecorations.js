import React from 'react';
import ReactDOM from 'react-dom';


class ThemedDecorations extends React.Component {
  //inherits from React.Component
  render (){
    const childrenWithNewProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme,
      });
    });
  return (
//return the following inside the great div 
    <div>
      {childrenWithNewProp}
    </div>

      );
    }
  }

module.exports = ThemedDecorations;
