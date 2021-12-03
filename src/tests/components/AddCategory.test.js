import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { AddCategory } from '../../componets/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow( <AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={setCategories} />);
  });

  test('should be displayed correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  test('should change the text box', () => {

    const input = wrapper.find('input');
    const value = 'Hello world!'

    input.simulate( 'change', { target: { value }});

    expect(wrapper).toMatchSnapshot();
  });

  test('should not called the info with submit', () => {

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should called setCtegories and clean the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hello world!';

    input.simulate( 'change', { target: { value }});
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    const inputValue = wrapper.find('p');

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(inputValue.text()).toBe('');

  });

});
