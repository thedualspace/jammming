import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],

      playlistName: 'New Playlist',

      playlistTracks: []
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  //Using ES6 array concatenation we can add a new track to the playlistTracks array. Very clean! 
  addTrack(track) {
    this.setState(
       {playlistTracks: [...this.state.playlistTracks, track] } 
    )
  }

  //When called, removes trackToBeRemoved from playlistTracks by filtering for all tracks which don't match trackToBeRemoved's id.
  removeTrack(trackToBeRemoved) {
    const filteredArray = this.state.playlistTracks.filter( track => {
      return track.id !== trackToBeRemoved.id;
    })
    this.setState(
       {playlistTracks: filteredArray } 
    )
  }

  updatePlaylistName(newName) {
    this.setState({playlistName: newName})
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map( track => track.uri );
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} 
            />
            
            <Playlist 
              name={this.state.playlistName} 
              tracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
