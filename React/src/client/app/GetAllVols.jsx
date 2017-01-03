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
				{			
					this.state.Vols.map(function(object, i){
						return <tr key={object.volId}>
									<td>{object.firstName}</td>
									<td>{object.lastName}</td>
									<td>
										<select ref="selPositions" defaultValue="" required>
											{
											  this.state.Positions.map(function(p, i) {
												return <option key={i}
												  value={p}>{p}</option>;
											  })
											}
									  </select>
									</td>
								</tr>
				}, this)}
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
			var positions = obj.buildPositionList(json);
			obj.setState({Vols: json, Positions: positions});
		  }).catch(function(ex) {
			console.log('parsing failed', ex)
		  })
	}

	
	buildPositionList(data)
	{
		var positions = [];
		
		for(var i=0; i < data.length; i++){
			var position = data[i].position;
			
			if(positions.indexOf(position) < 0)
			{
				positions.push(position)
			}
		}
		
		return positions;		
	}
	
}

export default GetAllVols;