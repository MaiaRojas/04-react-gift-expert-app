import { shallow }from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../componets/GifGridItem'

describe('Pruebas en <GrifGridItem />', () => {
  const title ='A title';
  const url = 'https://localhost/algo.jpg'
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should coindidir con snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a text with title', () => {
    const text = wrapper.find('p')
    expect( text.text().trim() ).toBe( title);
  });


  test('should have a image equal to url and alt to props', () => {
    const img = wrapper.find('img');

    expect( img.props().src ).toBe( url );
    expect( img.props().alt ).toBe( title );
  });

  test('should have class animate_fadeIn', () => {
    const div = wrapper.find('div');
  
    expect( div.prop('className').includes('animate__fadeIn') ).toBe( true );
  });
  
  
})