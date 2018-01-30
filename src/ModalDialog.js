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

  printStep() {
    if (this.state.step === 0) {      
      return (
        <div>
          <SelectChapter propertyHandler={this.updateChapter}/>
          <Button color="primary" onClick={() => this.setStep(1)}>Next</Button>
        </div>
      )
    }
    if (this.state.step === 1) {      
      return (
        <div>
          <SelectHeading propertyHandler={this.updateHeading}/>
          <Button color="primary" onClick={() => this.setStep(0)}>Back</Button>
          <Button color="primary" onClick={() => this.setStep(2)}>Next</Button>
        </div> 
      )
    }
    if (this.state.step === 2) {      
      return (
        <div>
          <SelectSubheading propertyHandler={this.updateSubheading}/>
          <Button color="primary" onClick={() => this.setStep(1)}>Back</Button>
        </div> 
      )
    }
  }

  buttonEnabled() {
    return this.state.subheading === null;
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
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="primary" onClick={() => this.props.onChange(this.getTitle())} disabled={this.buttonEnabled()}>Save</Button>            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
