import axios from "axios";
import { apiKey } from "../constants";
import { useState } from "react";

const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndporint = apiBaseUrl+'/trending/movie/day?language=tr-TR&api_key='+apiKey
const upComingMoviesEndporint = apiBaseUrl+'/movie/upcoming?language=tr-TR&api_key='+apiKey
const topRatedMoviesEndporint = apiBaseUrl+'/movie/top_rated?language=tr-TR&api_key='+apiKey

const movieDetailsEndpoint = id => apiBaseUrl+'/movie/'+id+'?language=tr-TR&api_key='+apiKey
const movieCreditsEndpoint = id => apiBaseUrl+'/movie/'+id+'/credits?language=tr-TR&api_key='+apiKey
const similarMoviesEndpoint = id => apiBaseUrl+'/movie/'+id+'/similar?language=tr-TR&api_key='+apiKey

const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

const personDetailsEndpoint = id => apiBaseUrl+'/person/'+id+'?language=tr-TR&api_key='+apiKey
const personMoviesEndpoint = id => apiBaseUrl+'/person/'+id+'/movie_credits?language=tr-TR&api_key='+apiKey

export const image500 = path => path? 'https://image.tmdb.org/t/p/w500'+path : null;
export const image342 = path => path? 'https://image.tmdb.org/t/p/w342'+path : null;
export const image185 = path => path? 'https://image.tmdb.org/t/p/w185'+path : null;

export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

const apiCall = async (endpoint , params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    }

    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log(error);
        return {}
    }
}

export const fetchTrendingMovies = ()=>{
    return apiCall(trendingMoviesEndporint)
}
export const fetchUpComingMovies = ()=>{
    return apiCall(upComingMoviesEndporint)
}
export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndporint)
}

export const fetchMovieDetails = id => {
    return apiCall(movieDetailsEndpoint(id));
}
export const fetchMovieCredits = id => {
    return apiCall(movieCreditsEndpoint(id));
}
export const fetchSimilarMovies = id => {
    return apiCall(similarMoviesEndpoint(id));
}
export const fetchPersonDetails = id => {
    return apiCall(personDetailsEndpoint(id));
}
export const fetchPersonMovies = id => {
    return apiCall(personMoviesEndpoint(id));
}
export const searchMovies = params=>{
    return apiCall(searchMoviesEndpoint, params);
}