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
<<<<<<< HEAD
];

export const OPENAI_KEY = process.env.REACT_APP_TMDB_KEY;
=======
]
>>>>>>> 5f4541f27e62b1ab4b4877d07eb074ed7887041a
