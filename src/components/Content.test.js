import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Content from './Content';

describe('Content', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Content />);
    
    throw 'TODO';
  });

  it('properly shows given text', () => {
    throw 'TODO';
  });
});