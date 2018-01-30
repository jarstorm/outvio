import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ModalDialog from './ModalDialog';

export default class MainPage extends Component {
  hello(hsCode) {
  	console.log("salvando", hsCode);
  }

  render() {
    return (
      <div>
        <ModalDialog onChange={this.hello}/>
      </div>
    )
  }
}

