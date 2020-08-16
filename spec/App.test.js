import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJSON from 'enzyme-to-json';

import App from '../client/components/App.jsx';


describe('App functionality', () => {
  it('should render without throwing an error', function() {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });

  it('should be selectable by className "reviews-container"', () => {
    // eslint-disable-next-line func-style
    function callback(data) {
      const component = shallow(<App />);
      expect(component.is('.reviews-container')).toBe(true);
      done();
    }
  });

  it('should render and mount properly', () => {
    // eslint-disable-next-line func-style
    function callback(data) {
      const component = mount(<App />);
      expect(component).toMatchSnapshot();
      done();
    }
  });

  it('should mount in a full DOM', function() {
    // eslint-disable-next-line func-style
    function callback(data) {
      const component = mount(<App />);
      expect(component.find('.app').length).toBe(1);
      done();
    }
  });
});