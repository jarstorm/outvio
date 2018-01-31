import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

export default class SelectSubheading extends Component {
  componentWillMount() {
    this.setState({data: []});
  }

  componentDidMount() {
    const dataValues = [{value: 1, text: 'First subheading'},
      {value: 2, text: 'Second subheading'},
      {value: 3, text: 'Third subheading'},
      {value: 4, text: 'Fourth subheading'},
      {value: 5, text: 'Fifth subheading'},
      {value: 6, text: 'Sixth subheading'},
      {value: 7, text: 'Seventh subheading'},
      {value: 8, text: 'Eigth subheading'}
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
        <h1>Select subheading</h1>
        <ListGroup>
          {listItems}
        </ListGroup>  
      </div>
    );
  }
}

SelectSubheading.propTypes = {  
  propertyHandler: PropTypes.func
};