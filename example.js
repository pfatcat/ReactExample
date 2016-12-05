'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

const allVols = [
			{volId: 1, firstName: "Josh", lastName: "Dobbs", position : "Quarterback" },
			{volId: 2, firstName: "Jalen", lastName: "Hurd", position: "Running Back" },
			{volId: 3, firstName: "Evan", lastName: "Berry", position: "Defensive Back" },
			{volId: 4, firstName: "Ethan", lastName: "Wolf", position: "Tight End" },
			{volId: 5, firstName: "Curt", lastName: "Maggitt", position: "Linebacker" },
			{volId: 6, firstName: "Jalen", lastName: "Reeves-Maybin", position: "Linebacker" }
		];

// Add the route
//http://localhost:8000/getAllVols
server.route({
    method: 'GET',
    path:'/getAllVols', 
    handler: function (request, reply) {		
        return reply(allVols);
    }
});


//http://localhost:8000/getAVol
//{"volId": 5}
server.route({
    method: 'POST',
    path:'/getAVol', 
    handler: function (request, reply) {

		const volId = request.payload.volId;
		
		for(let i = 0; i < allVols.length; i++){
			let vol = allVols[i];
			if(vol.volId === volId)
			{
				return reply(vol);
			}
		}
		
		let retObj = {volId: -1, message: "Vol not found"};
		
        return reply(retObj);
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});