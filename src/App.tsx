import { Component, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Message from './Message';

const initialState = {
	name: 'Manny',
	message: 'TypeScript is cool!!',
};

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {
	readonly state = initialState;

	render() {
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
					{/* <button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button> */}
				</div>
				<Message name={this.state.name} message={this.state.message} />
			</div>
		);
	}
}

/* function App() {
	const [count, setCount] = useState(0);

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
			<Message name="Manny	" message="This is a simple message" />
		</div>
	);
}
 */
export default App;
