const slideShowUrl="https://api.themoviedb.org/3/trending/all/day";
const base_url="https://api.themoviedb.org/3";
const image_base_url = "https://image.tmdb.org/t/p/original";

const homeRequests = [
    {
        title: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        media: "movie",
    },
    {
        title: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        media: "movie",
    },
    {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        media: "movie",
    },
    {
        title: "Adventure TV Shows",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=12`,
        media: "tv",
    }
];
