import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from './ModalDialog';

export default class MainPage extends Component {
  listener(name, newValue) {
  	console.log("salvando", name, newValue);  	
  	ReactDOM.render(newValue, document.getElementById(name));
  }

  render() {
    return (
      <div>
        <ModalDialog onChange={this.listener} name="elementInput"/>
        <p>El valor seleccionado es: <span id="elementInput"></span></p>
      </div>
    )
  }
}

