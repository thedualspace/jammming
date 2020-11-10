const clientID = '8a2d5d0a7a234d4eb040dc7647ec5806';
const redirectURI = 'http://thedualspace.surge.sh/';
let accessToken = '';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } 
    
    //Why do we use window.location and not a fetch promise?
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    //Why are the matches returning arrays? Why is the match not at index 0?
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      //Upon receipt of the token, set it to expire after expiresIn seconds
      window.setTimeout(() => accessToken = '', expiresIn * 1000); //Timeout is in milliseconds by default
      window.history.pushState('Access Token', null, '/'); //Gonna be honest, I just used the hint here. No clue.
      return accessToken;
    } else {
      const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = accessURL;
    }
  },

  search(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    
    return fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.tracks) {
        return jsonResponse.tracks.items.map(track => {
          return {
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            id : track.id,
            uri: track.uri
          }
        })
      } else {
        return [];
      }
    })

  },

  async savePlaylist(playlistName, playlistTrackUris) {
    if(!playlistName || !playlistTrackUris.length) {
      return;
    }

    const accessToken = Spotify.getAccessToken();
    const headers = {Authorization: `Bearer ${accessToken}`}
    let userId;

    return fetch(`https://api.spotify.com/v1/me`, {headers: headers}
    ).then(response =>  response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: 'POST',
        body: JSON.stringify({name: playlistName}),
        headers: headers
    }).then(response => response.json()
    ).then(jsonResponse => {
      const playlistId = jsonResponse.id;
      console.log(jsonResponse)
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
        method: 'POST',
        body: JSON.stringify({uris: playlistTrackUris}),
        headers: headers
      })
    })
    })
  }
};

export default Spotify;



