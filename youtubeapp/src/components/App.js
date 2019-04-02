import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../API/youtube";
import VideoList from "./vidoeList"



class App extends React.Component {
    state = { videos: [] }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        })
        this.setState({ videos: response.data.items})
    }; 
    render() {
        return (
            <div className="ui container">
                <SearchBar search={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
               
            </div>

        )
    }
}


export default App;