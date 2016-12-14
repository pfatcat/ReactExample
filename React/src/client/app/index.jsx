import React from 'react';
import {render} from 'react-dom';
import GetAllVols from './GetAllVols.jsx';

class App extends React.Component {
	render () {
		return (
		  <div>
			<h1>University Of Tennessee Football Roster</h1>
			<GetAllVols />
		  </div>
		);
	}
}

render(<App/>, document.getElementById('app'));
