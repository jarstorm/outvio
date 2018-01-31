// Link.react.test.js
import React from 'react';
import ModalDialog from '../src/ModalDialog';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('ModalDialog button text', () => {  
  const component = renderer.create(<ModalDialog onChange={() => console.log("changed")} name="testName" />,
  );
  let dialog = component.toJSON();
  expect(dialog).toMatchSnapshot();
  expect(dialog.children[0].children[0]).toBe("Open dialog");
});

test('ModalDialog elements', () => {  
  const mockCallBack = jest.fn();
  const dialog = shallow(<ModalDialog onChange={mockCallBack} name="testName" />);      
  expect(dialog.find('Button').length).toBe(4);  
  expect(dialog.find('Modal').length).toBe(1);  
});

test('ModalDialog when open Save button disabled', () => {  
  const mockCallBack = jest.fn();
  const dialog = shallow(<ModalDialog onChange={mockCallBack} name="testName" />);      
  expect(dialog.find('Button').at(3).props().disabled).toBe(true);  
});

test('ModalDialog when open Cancel button enabled', () => {  
  const mockCallBack = jest.fn();
  const dialog = shallow(<ModalDialog onChange={mockCallBack} name="testName" />);      
  expect(dialog.find('Button').at(2).props().disabled).toBe(undefined);  
});

test('ModalDialog when open select chapter is shown', () => {  
  const mockCallBack = jest.fn();
  const dialog = shallow(<ModalDialog onChange={mockCallBack} name="testName" />);      
  expect(dialog.find('SelectChapter').length).toBe(1);
});

test('ModalDialog when open select heading is not shown', () => {  
  const mockCallBack = jest.fn();
  const dialog = shallow(<ModalDialog onChange={mockCallBack} name="testName" />);      
  expect(dialog.find('SelectHeading').length).toBe(0);
});

test('ModalDialog when open select subheading is not shown', () => {  
  const mockCallBack = jest.fn();
  const dialog = shallow(<ModalDialog onChange={mockCallBack} name="testName" />);      
  expect(dialog.find('SelectSubheading').length).toBe(0);
});
