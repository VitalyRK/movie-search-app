const BASE_URL = "https://api.themoviedb.org/3/";

const API_KEY = process.env.API_KEY;

const FIXED_PARAMS_URL =
  "discover/movie?include_adult=false&include_video=false&language=en-US";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/movies',
        destination: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      },
      {
        source: '/detail/:id',
        destination: `https://api.themoviedb.org/3/movie/823464:id?api_key=${API_KEY}&append_to_response=videos&language=en-US`,
      },
      {
        source: '/img',
        destination: 'http://image.tmdb.org/t/p/w154/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      },
    ];
  }
};



export default nextConfig;
