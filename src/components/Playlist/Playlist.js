import React, { Component } from 'react';

export default class Playlist extends Component {
	render() {
		return (
			<div className="Playlist">
				<input value="New Playlist" />
				{/* <TrackList /> */}
				<button className="Playlist-save">SAVE TO SPOTIFY</button>
			</div>
		);
	}
}
