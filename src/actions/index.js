import {SET_RECENT_POSTS} from "./types";
import axios from "axios";

export function fetchRecentPosts() {
  return function(dispatch) {
    //perform our request in here.
//    axios.get('https://api.dailysmarty.com/posts')
// from https://swapi.dev/
//    axios.get('https://swapi.dev/api/')
//    axios.get('https://swapi.dev/api/people/1/')
    axios.get('https://swapi.dev/api/planets/')    
      .then(response => {
//        console.log(response.data.post);
        console.log(response.data);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data
        })
    });
  }
}