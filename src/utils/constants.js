export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_KEY,
    },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w780/";

export const SUPPORTED_LANGUAGES = [
  {identifier : "en" , name : "English"},
  {identifier : "hn" , name : "Hindi"},
  {identifier : "sp" , name : "Spanish"},
  {identifier : "fr" , name : "French"}
];

export const OPENAI_KEY = process.env.REACT_APP_TMDB_KEY;
