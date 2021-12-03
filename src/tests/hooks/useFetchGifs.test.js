import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';



describe('Test in hook useFetchGifs', () => {

  test('should return to the initial state', async() => {

    const { result, waitForNextUpdate }= renderHook(() => useFetchGifs('One punch'))
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading).toBe(true);

  });

  test('should return an array of images and loading set to false', async () => {

    const { result, waitForNextUpdate }= renderHook(() => useFetchGifs('One punch'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect( data.length ).toBe(10);
    expect( loading).toBe(false);
    
  })
  
})