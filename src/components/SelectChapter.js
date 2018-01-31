import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

export default class SelectChapter extends Component {
  
  componentWillMount() {
  	this.setState({data: []});
  }

  componentDidMount() {
  	const dataValues = [{value: 1, text: 'First chapter'},
  		{value: 2, text: 'Second chapter'},
      {value: 3, text: 'Third chapter'},
      {value: 4, text: 'Fourth chapter'},
      {value: 5, text: 'Fifth chapter'},
      {value: 6, text: 'Sixth chapter'},
      {value: 7, text: 'Seventh chapter'},
      {value: 8, text: 'Eigth chapter'}
  	];
  	this.setState({data: dataValues});  	
  }

  render() {   
    const listItems = this.state.data.map((element) =>
      <ListGroupItem key={element.value} onClick={e => this.props.propertyHandler(element.value)}>
        {element.value} - {element.text}
      </ListGroupItem>
    ); 

    return (
      <div>
        <h1>Select chapter</h1>
        <ListGroup>
          {listItems}
        </ListGroup>  
      </div>
    );
  }
  
}

SelectChapter.propTypes = {  
  propertyHandler: PropTypes.func
};