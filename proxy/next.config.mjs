const API_KEY = process.env.API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/movies/',
        destination: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc/`,
      },
      {
        source: '/movies/:page/:fiters',
        destination: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=:page&:fiters/`, //sort_by=popularity.desc
      },
      {
        source: '/details/:id/',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&append_to_response=videos&language=en-US/`,
      },
      {
        source: '/img/sm/:path/',
        destination: 'http://image.tmdb.org/t/p/w154/:path/',
      },
      {
        source: '/img/md/:path/',
        destination: 'http://image.tmdb.org/t/p/w342/:path/',
      },
    ];
  }
};



export default nextConfig;
