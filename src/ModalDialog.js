import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectChapter from './components/SelectChapter';
import SelectHeading from './components/SelectHeading';
import SelectSubheading from './components/SelectSubheading';
import PropTypes from 'prop-types';

export default class ModalDialog extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      chapter: null,
      heading: null,
      subheading: null,
      step: 0
    };
  }

  _toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  _leadingZeros = (value, numberOfZeros) => {
    let s = value+"";
    while (s.length < numberOfZeros) s = "0" + s;
    return s;
  }

  _updateChapter = (chapter) => {
    let chapterValue = this._leadingZeros(chapter, 2);
    this.setState({chapter: chapterValue, heading: null, subheading: null});    
  }

  _updateHeading = (heading) => {
    let headingValue = this._leadingZeros(heading, 2);
    this.setState({heading: headingValue, subheading: null});    
  }

  _updateSubheading = (subheading) => {
    let subheadingValue = this._leadingZeros(subheading, 2);
    this.setState({subheading: subheadingValue});    
  }

  _getTitle = () => {
    let text = 'Selected HS code: ';
    if(this.state.chapter) {
      text += this.state.chapter;
    }
    if(this.state.heading) {
      text += "-" + this.state.heading;
    }
    if(this.state.subheading) {
      text += "-" + this.state.subheading;
    }
    return text;
  }

  _setStep = (step) => {
    this.setState({step});    
  }

  _buttonNextStep0Enabled = () => {
    return this.state.chapter === null;
  }

  _buttonNextStep1Enabled = () => {
    return this.state.heading === null;
  }

  _printStep = () => {
    if (this.state.step === 0) {      
      return (
        <div>          
          <Button className="float-right" color="primary" onClick={() => this._setStep(1)} disabled={this._buttonNextStep0Enabled()}>Next</Button>
          <SelectChapter propertyHandler={this._updateChapter}/>
        </div>
      )
    }
    if (this.state.step === 1) {      
      return (
        <div>          
          <Button color="warning" onClick={() => this._setStep(0)}>Back</Button>
          <Button className="float-right" color="primary" onClick={() => this._setStep(2)} disabled={this._buttonNextStep1Enabled()}>Next</Button>
          <SelectHeading propertyHandler={this._updateHeading}/>
        </div> 
      )
    }
    if (this.state.step === 2) {      
      return (
        <div>          
          <Button color="warning" onClick={() => this._setStep(1)}>Back</Button>
          <SelectSubheading propertyHandler={this._updateSubheading}/>
        </div> 
      )
    }
  }

  _buttonEnabled = () => {
    return this.state.subheading === null;
  }

  _cancelForm = () => {
    this.setState({chapter: null, heading: null, subheading: null, step: 0});    
    this._toggle();
  }

  _submitForm = () => {
    const value = this.state.chapter + "-" + this.state.heading + "-" + this.state.subheading;
    this.props.onChange(this.props.name, value);
    this.setState({chapter: null, heading: null, subheading: null, step: 0});    
    this._toggle();
  }

  render() {    
    return (
       <div>
        <Button className="openButton" color="primary" onClick={this._toggle}>Open dialog</Button>
        <Modal isOpen={this.state.modal} toggle={this._toggle} className=''>
          <ModalHeader toggle={this._toggle}>{this._getTitle()}</ModalHeader>
          <ModalBody>
            {this._printStep()}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this._cancelForm}>Cancel</Button>
            <Button color="primary" onClick={this._submitForm} disabled={this._buttonEnabled()}>Save</Button>            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


ModalDialog.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func
};