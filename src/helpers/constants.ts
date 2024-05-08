export const BASE_URL = "https://api.themoviedb.org/3/";

export const FIXED_PARAMS_URL =
  "discover/movie?include_adult=false&include_video=false&language=en-US";

export const IMAGES_BASE_URL = "https://image.tmdb.org/t/p/";

export const LIMIT_OF_RATES = 10;

export const sortByList = [
  {
    value: "popularity.desc",
    label: "Most Popular",
  },
  {
    value: "popularity.asc",
    label: "Least Popular",
  },
  {
    value: "vote_average.desc",
    label: "Most Rated",
  },
  {
    value: "vote_average.asc",
    label: "Least Rated",
  },
  {
    value: "vote_count.desc",
    label: "Most Voted",
  },
  {
    value: "vote_count.asc",
    label: "Least Voted",
  },
  {
    value: "primary_release_date.desc",
    label: "Most Recent",
  },
  {
    value: "primary_release_date.asc",
    label: "The Oldest",
  },

  {
    value: "original_title.asc",
    label: "Title A-Z",
  },
  {
    value: "original_title.desc",
    label: "Title Z-A",
  },
];

export const genresList = [
  {
    value: "28",
    label: "Action",
  },
  {
    value: "12",
    label: "Adventure",
  },
  {
    value: "16",
    label: "Animation",
  },
  {
    value: "35",
    label: "Comedy",
  },
  {
    value: "80",
    label: "Crime",
  },
  {
    value: "99",
    label: "Documentary",
  },
  {
    value: "18",
    label: "Drama",
  },
  {
    value: "10751",
    label: "Family",
  },
  {
    value: "14",
    label: "Fantasy",
  },
  {
    value: "36",
    label: "History",
  },
  {
    value: "27",
    label: "Horror",
  },
  {
    value: "10402",
    label: "Music",
  },
  {
    value: "9648",
    label: "Mystery",
  },
  {
    value: "10749",
    label: "Romance",
  },
  {
    value: "878",
    label: "Science Fiction",
  },
  {
    value: "10770",
    label: "TV Movie",
  },
  {
    value: "53",
    label: "Thriller",
  },
  {
    value: "10752",
    label: "War",
  },
  {
    value: "37",
    label: "Western",
  },
];
