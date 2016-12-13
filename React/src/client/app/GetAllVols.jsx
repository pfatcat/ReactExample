import React from 'react';
import 'whatwg-fetch';

class GetAllVols extends React.Component {

  constructor(props) {
    super(props);
	this.state = {Vols: "Waiting..."};
	this.getData = this.getData.bind(this);
	this.getData(this);
  }

  render() {
	  
    return (
      <div>
		<h1>{this.state.Vols}</h1>
      </div>
    );
  }
  
  updateState(state){
	  this.setState(state);
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
			obj.setState({Vols: json[0].firstName});
		  }).catch(function(ex) {
			console.log('parsing failed', ex)
		  })
  }

}



export default GetAllVols;