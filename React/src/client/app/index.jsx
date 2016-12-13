import React from 'react';
import {render} from 'react-dom';
import GetAllVols from './GetAllVols.jsx';

class App extends React.Component {
	render () {
		return (
		  <div>
			<p> Hello Vols</p>
			<GetAllVols />
		  </div>
		);
	}
}

render(<App/>, document.getElementById('app'));
