import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import WizardStep from 'react-wizard-step';
import SelectChapter from './components/SelectChapter';
import SelectHeading from './components/SelectHeading';
import SelectSubheading from './components/SelectSubheading';

export default class ModalDialog extends Component {
  
  constructor(props) {
    super(props);
    console.log("cion");
    this.state = {
      modal: false,
      chapter: null,
      heading: null,
      subheading: null
    };

    this.toggle = this.toggle.bind(this);
    this.updateChapter = this.updateChapter.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.updateSubheading = this.updateSubheading.bind(this);
    this.updateChapter = this.updateChapter.bind(this);
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
    console.log("titulo", text);
    return text;
  }

  render() {    
    return (
       <div>
        <Button color="danger" onClick={this.toggle}>Label</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className=''>
          <ModalHeader toggle={this.toggle}>{this.getTitle()}</ModalHeader>
          <ModalBody>
            <WizardStep isShowStepBar={false}>
              <SelectChapter propertyHandler={this.updateChapter}/>
              <SelectHeading propertyHandler={this.updateHeading}/>
              <SelectSubheading propertyHandler={this.updateSubheading}/>
            </WizardStep>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
