import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    const {chapter, heading, subheading} = this.props;
    return (
      <div>
        <h1>{chapter} - {heading} - {subheading} </h1>
      </div>
    );
  }
}

const mapStateToProps = state => {  
  const {chapter, heading, subheading}  = state.main;
  return {chapter, heading, subheading};
};

export default connect(mapStateToProps)(Display);