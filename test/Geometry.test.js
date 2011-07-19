var OpenLayers= require('../lib/OpenLayers');
var assert    = require('assert');

module.exports = {
    "<Point> it should load Point": function(done) {
	var point= new OpenLayers.Geometry.Point(0,0);
	done();
    },

    "<Point#distanceTo> it should calculate distance between two points": function(done) {
	var point_A= new OpenLayers.Geometry.Point(0,0);
	var point_B= new OpenLayers.Geometry.Point(2,1);
	var d= point_A.distanceTo(point_B);
	done();
    },

    "<Point#getCentroid> it should calculate centroid": function(done) {
	var point= new OpenLayers.Geometry.Point(0,0);
	var centroid= point.getCentroid();
	console.log(centroid);
	done();
    },

    "<Point#getCentroid> it should calculate centroid": function(done) {
	var point= new OpenLayers.Geometry.Point(0,0);
	var centroid= point.getCentroid();
	console.log(centroid);
	done();
    }
};