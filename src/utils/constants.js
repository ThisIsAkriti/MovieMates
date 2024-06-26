export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhYTVmMjI2MTc4MDMyMDkxNTE4ZDIzYzQyYjQ1ZiIsInN1YiI6IjY1ZWVjZjhiOTNkYjkyMDE4NjVkZTFkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5hCWEkmEWOvOZeTFiTprNh780XWYTqd1ujwdHsJLeU',
    },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w780/";

export const SUPPORTED_LANGUAGES = [
  {identifier : "en" , name : "English"},
  {identifier : "hn" , name : "Hindi"},
  {identifier : "sp" , name : "Spanish"},
  {identifier : "fr" , name : "French"}
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
