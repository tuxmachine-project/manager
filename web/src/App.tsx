import { useState } from 'react';
import '@fontsource/roboto';
import './App.css';

function App() {
	const startGame = typeof (window as any).tuxmachine == "undefined" ? (name: string) => {} : (window as any).tuxmachine.startGame;
	
	return (
		<div className="App">
			<header className="App-header">
				<h1 style={{fontSize: "10vw", marginBottom: 0}}>Welcome!</h1>
				<p>Select a game:</p>
				
				<button style={{marginTop: 15}} onClick={() => {startGame("pingus");}}>Pingus</button>
				<button style={{marginTop: 15}} onClick={() => {startGame("tuxmath");}}>Tux Math</button>
				<button style={{marginTop: 15}} onClick={() => {startGame("tuxpaint");}}>Tux Paint</button>
				<button style={{marginTop: 15}} onClick={() => {startGame("tuxtype");}}>Tux Typing</button>
				<button style={{marginTop: 15}} onClick={() => {startGame("etr");}}>Extreme Tux Racer</button>
			</header>
		</div>
	);
}

export default App;
