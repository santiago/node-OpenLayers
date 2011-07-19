var OpenLayers= require('../lib/OpenLayers');
var assert    = require('assert');

module.exports = {
    "<Projection>": function(done) {
	var projection= new OpenLayers.Projection("EPSG:900913");
	console.log(projection);
	done();
    }
};