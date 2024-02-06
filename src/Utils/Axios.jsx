import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/" ,
    headers:{
        accept:"application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2ZlOTVhMjJjZTc1MWM5OGQyMGY4Y2VkMjJlNDE1OSIsInN1YiI6IjY1YmJjZjM1YzE0NGRkMDE3Y2ZmMmE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.53y4v9fnP0m70Tl4OpIura9ws9lcmQngow_DWQp-N7Y",
    },
});


export default instance;