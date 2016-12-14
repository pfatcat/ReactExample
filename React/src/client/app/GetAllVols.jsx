import React from 'react';
import 'whatwg-fetch';

class GetAllVols extends React.Component {

  constructor(props) {
    super(props);
	this.state = {Vols: []};
	this.getData(this);
  }

  render() {
	  
    return (
      <div>
		<table>
			<thead><tr><th>First Name</th><th>Last Name</th><th>Position</th></tr></thead>
			<tbody>
				{this.state.Vols.map(function(object, i){
					return <tr key={object.volId}>
								<td>{object.firstName}</td>
								<td>{object.lastName}</td>
								<td>{object.position}</td>
							</tr>
				})}
			</tbody>
		</table>
      </div>
    );
  }
  
  
	getData(obj){	  
     
	  //var url = "http://127.0.0.1:8000/getAllVols";
	  var url = "http://35.163.219.53:8000/getAllVols";
	  let config = {
			mode: 'no-cors'
		};
	  
	  fetch(url)
	  .then(function(response) {
		    return response.json()
		  }).then(function(json) {
			obj.setState({Vols: json});
		  }).catch(function(ex) {
			console.log('parsing failed', ex)
		  })
  }

}

export default GetAllVols;