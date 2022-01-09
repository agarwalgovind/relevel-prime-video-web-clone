const slideShowUrl="https://api.themoviedb.org/3/tv/popular";
const base_url="https://api.themoviedb.org/3";
const image_base_url = "https://image.tmdb.org/t/p/original";

const tvRequests = [
    {
        title: "Discover TV Shows",
        url: `/discover/tv?api_key=${API_KEY}`,
        media: "tv",
    },
    {
        title: "Comedy TV Shows",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        media: "tv",
    },
    {
        title: "Adventure TV Shows",
        url: `/discover/tv?api_key=${API_KEY}&with_genres=12`,
        media: "tv",
    },
    {
        title: "Popular in your Region TV Shows",
        url: `/discover/tv?api_key=${API_KEY}&region=IN`,
        media: "tv",
    },
];
