import axios from "axios"

const KEY = "AIzaSyDQNkZ3aWwkJXyD9yg5AJAKysXBWnABot8"


export default axios.create({
         baseURL:  'https://www.googleapis.com/youtube/v3',
         params: {
             part: 'snippet',
             maxResults: 5,
             key: KEY
         }

});