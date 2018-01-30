import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class SelectHeading extends Component {
  componentWillMount() {
    this.setState({data: []});
  }

  componentDidMount() {
    const dataValues = [{value: 1, text: 'First heading'},
      {value: 2, text: 'Second heading'},
      {value: 3, text: 'Third heading'},
      {value: 4, text: 'Fourth heading'},
      {value: 5, text: 'Fifth heading'},
      {value: 6, text: 'Sixth heading'},
      {value: 7, text: 'Seventh heading'},
      {value: 8, text: 'Eigth heading'}
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
        <h1>Select heading</h1>
        <ListGroup>
          {listItems}
        </ListGroup>  
      </div>
    );
  }
}

