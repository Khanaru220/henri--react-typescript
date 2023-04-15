import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	// const firstName: string;
	// const firstName: Array<number> = [1, 2, 123];
	const firstName: [string, number] = ['1,2', 3, 3];

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			<p style={{ backgroundColor: 'red' }}>
				That value {firstName} is {typeof firstName} type!
			</p>
		</div>
	);
}

export default App;
