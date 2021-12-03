export const getGifs = async (category) => {
  
  const apiKey = 'Nu96BV8MSZQv0VK6fQmql3v73Av6CtFF';
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images?.downsized_medium.url
    }
  });

  return gifs;
};