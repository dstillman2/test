import React from 'react';
import Header from '../../components/header';

function App(props) {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
}

export default App;