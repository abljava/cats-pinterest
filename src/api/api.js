const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=15';
const API_KEY =
  'live_zuw0Qm2vXHNWkgS4Vxtt2yK5ObksVk5JoJEbuZorAqX54rxbyBV4f2cNDvANuP0h';

function getCards() {
  return fetch(API_URL, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => {
      console.error('Fetch error:', err);
    });
}

export default getCards;
