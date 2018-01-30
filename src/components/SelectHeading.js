import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SelectHeading extends Component {
   componentWillMount() {
  	this.setState({data: []});
  }

  componentDidMount() {
  	const dataValues = [{value: 1, text: 'Primera heading'},
  		{value: 2, text: 'Segunda heading'}
  	];
  	this.setState({data: dataValues});  	
  }

  render() {   
  const listItems = this.state.data.map((element) =>
    <button key={element.value} onClick={e => this.props.propertyHandler(element.value)}>
      {element.value} - {element.text}
    </button>
  ); 
    return (
      <div>
      {listItems}
      </div>
    );
  }
}

