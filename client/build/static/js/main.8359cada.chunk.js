(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),i=(a(16),a(10)),o=a(2),l=a(3),u=a(1),h=a(5),m=a(4),p=(a(17),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={term:""},n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),r.a.createElement("button",{onClick:this.search,className:"SearchButton"},"SEARCH"))}}]),a}(r.a.Component)),d=(a(18),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?r.a.createElement("button",{onClick:this.removeTrack,className:"Track-action"},"-"):r.a.createElement("button",{onClick:this.addTrack,className:"Track-action"},"+")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Track"},r.a.createElement("div",{className:"Track-information"},r.a.createElement("h3",null,this.props.track.name),r.a.createElement("p",null,this.props.track.artist," | ",this.props.track.album)),this.renderAction())}}]),a}(r.a.Component)),v=(a(19),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TrackList"},this.props.tracks.map((function(t){return r.a.createElement(d,{onAdd:e.props.onAdd,onRemove:e.props.onRemove,track:t,key:t.id,isRemoval:e.props.isRemoval})})))}}]),a}(r.a.Component)),f=(a(20),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchResults"},r.a.createElement("h2",null,"Results"),r.a.createElement(v,{isRemoval:!1,tracks:this.props.searchResults,onAdd:this.props.onAdd}))}}]),a}(r.a.Component)),k=(a(21),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Playlist"},r.a.createElement("input",{onChange:this.handleNameChange,value:this.props.name}),r.a.createElement(v,{isRemoval:!0,tracks:this.props.tracks,onRemove:this.props.onRemove}),r.a.createElement("button",{onClick:this.props.onSave,className:"Playlist-save"},"SAVE TO SPOTIFY"))}}]),a}(r.a.Component)),y=a(6),b=a.n(y),O=a(9),T="",j={getAccessToken:function(){if(T)return T;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){T=e[1];var a=Number(t[1]);return window.setTimeout((function(){return T=""}),1e3*a),window.history.pushState("Access Token",null,"/"),T}var n="https://accounts.spotify.com/authorize?client_id=".concat("8a2d5d0a7a234d4eb040dc7647ec5806","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://thedualspace.surge.sh/");window.location=n},search:function(e){var t=j.getAccessToken();return fetch("https://api.spotify.com/v1/search?q=".concat(e,"&type=track"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{name:e.name,artist:e.artists[0].name,album:e.album.name,id:e.id,uri:e.uri}})):[]}))},savePlaylist:function(e,t){return Object(O.a)(b.a.mark((function a(){var n,r,s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t.length){a.next=2;break}return a.abrupt("return");case 2:return n=j.getAccessToken(),r={Authorization:"Bearer ".concat(n)},a.abrupt("return",fetch("https://api.spotify.com/v1/me",{headers:r}).then((function(e){return e.json()})).then((function(a){return s=a.id,fetch("https://api.spotify.com/v1/users/".concat(s,"/playlists"),{method:"POST",body:JSON.stringify({name:e}),headers:r}).then((function(e){return e.json()})).then((function(e){var a=e.id;return console.log(e),fetch("https://api.spotify.com/v1/users/".concat(s,"/playlists/").concat(a,"/tracks"),{method:"POST",body:JSON.stringify({uris:t}),headers:r})}))})));case 5:case"end":return a.stop()}}),a)})))()}},g=j,N=(a(23),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[]},n.search=n.search.bind(Object(u.a)(n)),n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(e){var t=this;g.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"addTrack",value:function(e){this.setState({playlistTracks:[].concat(Object(i.a)(this.state.playlistTracks),[e])})}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks.filter((function(t){return t.id!==e.id}));this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));g.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ja",r.a.createElement("span",{className:"highlight"},"mmm"),"ing"),r.a.createElement("div",{className:"App"},r.a.createElement(p,{onSearch:this.search}),r.a.createElement("div",{className:"App-playlist"},r.a.createElement(f,{searchResults:this.state.searchResults,onAdd:this.addTrack}),r.a.createElement(k,{name:this.state.playlistName,tracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.8359cada.chunk.js.map