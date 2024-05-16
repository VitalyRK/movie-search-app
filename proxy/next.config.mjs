const BASE_URL = "https://api.themoviedb.org/3/";

const FIXED_PARAMS_URL =
  "discover/movie?include_adult=false&include_video=false&language=en-US";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/movies',
        destination: 'https://api.themoviedb.org/3/discover/movie?api_key=eb4f000a05aa21b1916f306d674defb0&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      },
      {
        source: '/cats',
        destination: 'https://meowfacts.herokuapp.com',
      },
      {
        source: '/img',
        destination: 'http://image.tmdb.org/t/p/w154/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      },
      {
        source: '/ducks',
        destination: 'https://random-d.uk/api/random',
      },
    ];
  }
};



export default nextConfig;
