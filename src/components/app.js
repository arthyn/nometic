import { h } from 'preact';
import Store from './store';
import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => (
	<main class="h-screen w-screen">
		<Store>
			<Router>
				<Home path="/" />
			</Router>
		</Store>
	</main>
)

export default App;
