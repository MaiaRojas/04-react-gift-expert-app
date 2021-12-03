import React from 'react'
import { shallow } from "enzyme";
import { GifGrid } from "../../componets/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
//import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Test in <GifGrid />', () => {
  const category ='Rick and Morty';

  test('should return a snapshots', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should display items when images page are uploaded', () => {
    const gifs = [{
      id: 'abc',
      url: 'https://localhost/anything/thing.jpg',
      title: 'Anything'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });


  test('should display items when images(more images) page are uploaded', () => {
    const gifs = [{
      id: 'foo',
      url: 'https://localhost/anything/thing.jpg',
      title: 'Anything'
    },
    {
      id: 'bar',
      url: 'https://localhost/anything/bar.jpg',
      title: 'Bar'
    }
  ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });

})