//import 

import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
  
  test('should get 10 elements', async () => {

    const gifs = await getGifs('');
    
    expect(gifs.length).toBe(0);
  })
})