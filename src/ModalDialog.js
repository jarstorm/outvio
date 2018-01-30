import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SelectChapter from './components/SelectChapter';
import SelectHeading from './components/SelectHeading';
import SelectSubheading from './components/SelectSubheading';

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

    this.toggle = this.toggle.bind(this);
    this.updateChapter = this.updateChapter.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.updateSubheading = this.updateSubheading.bind(this);
    this.updateChapter = this.updateChapter.bind(this);
    this.setStep = this.setStep.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.buttonNextStep0Enabled = this.buttonNextStep0Enabled.bind(this);
    this.buttonNextStep1Enabled = this.buttonNextStep1Enabled.bind(this);    
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  leadingZeros(value, numberOfZeros) {
    let s = value+"";
    while (s.length < numberOfZeros) s = "0" + s;
    return s;
  }

  updateChapter(chapter) {
    let chapterValue = this.leadingZeros(chapter, 2);
    this.setState({chapter: chapterValue, heading: null, subheading: null});    
  }

  updateHeading(heading) {
    let headingValue = this.leadingZeros(heading, 2);
    this.setState({heading: headingValue, subheading: null});    
  }

  updateSubheading(subheading) {
    let subheadingValue = this.leadingZeros(subheading, 2);
    this.setState({subheading: subheadingValue});    
  }

  getTitle() {
    let text = '';
    if(this.state.chapter) {
      text += this.state.chapter;
    }
    if(this.state.heading) {
      text += " - " + this.state.heading;
    }
    if(this.state.subheading) {
      text += " - " + this.state.subheading;
    }
    return text;
  }

  setStep(step) {
    this.setState({step});    
  }

  buttonNextStep0Enabled() {
    return this.state.chapter === null;
  }

  buttonNextStep1Enabled() {
    return this.state.heading === null;
  }

  printStep() {
    if (this.state.step === 0) {      
      return (
        <div>          
          <Button color="primary" onClick={() => this.setStep(1)} disabled={this.buttonNextStep0Enabled()}>Next</Button>
          <SelectChapter propertyHandler={this.updateChapter}/>
        </div>
      )
    }
    if (this.state.step === 1) {      
      return (
        <div>          
          <Button color="primary" onClick={() => this.setStep(0)}>Back</Button>
          <Button color="primary" onClick={() => this.setStep(2)} disabled={this.buttonNextStep1Enabled()}>Next</Button>
          <SelectHeading propertyHandler={this.updateHeading}/>
        </div> 
      )
    }
    if (this.state.step === 2) {      
      return (
        <div>          
          <Button color="primary" onClick={() => this.setStep(1)}>Back</Button>
          <SelectSubheading propertyHandler={this.updateSubheading}/>
        </div> 
      )
    }
  }

  buttonEnabled() {
    return this.state.subheading === null;
  }

  cancelForm() {
    this.setState({chapter: null, heading: null, subheading: null, step: 0});    
    this.toggle();
  }

  submitForm() {
    this.props.onChange(this.props.name, this.getTitle());
    this.setState({chapter: null, heading: null, subheading: null, step: 0});    
    this.toggle();
  }

  render() {    
    return (
       <div>
        <Button color="danger" onClick={this.toggle}>Label</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className=''>
          <ModalHeader toggle={this.toggle}>{this.getTitle()}</ModalHeader>
          <ModalBody>
            {this.printStep()}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.cancelForm}>Cancel</Button>
            <Button color="primary" onClick={this.submitForm} disabled={this.buttonEnabled()}>Save</Button>            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
