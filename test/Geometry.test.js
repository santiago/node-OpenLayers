var OpenLayers= require('../lib/OpenLayers');
var assert    = require('assert');

module.exports = {
    /*
     * Point
     * ======
     */
    "<Point> it should load Point": function(done) {
	var point= new OpenLayers.Geometry.Point(0,0);
	done();
    },
    "<Point#distanceTo> it should calculate distance between two points": function(done) {
	var point_A= new OpenLayers.Geometry.Point(0,0);
	var point_B= new OpenLayers.Geometry.Point(2,1);
	var d= point_A.distanceTo(point_B);
	console.log(d);
	done();
    },
    "<Point#getCentroid> it should calculate centroid": function(done) {
	var point= new OpenLayers.Geometry.Point(0,0);
	var centroid= point.getCentroid();
	console.log(centroid);
	done();
    },

    /*
     * MultiPoint
     * ===========
     */
    "<MultiPoint>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,0),
	    new OpenLayers.Geometry.Point(1,1)
	];
	var multipoint= new OpenLayers.Geometry.MultiPoint(points);
	done();
    },
    "<MultiPoint#addPoint>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	];
	var multipoint= new OpenLayers.Geometry.MultiPoint(points);
	multipoint.addPoint(new OpenLayers.Geometry.Point(1,0));
	console.log(multipoint.components);
	done();
    },
    "<MultiPoint#removePoint>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	];
	var multipoint= new OpenLayers.Geometry.MultiPoint(points);
	multipoint.removePoint(new OpenLayers.Geometry.Point(1,0));
	console.log(multipoint.components);
	done();
    },

    /*
     * Curve
     * ======
     */
    "<Curve>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,0),
	    new OpenLayers.Geometry.Point(1,1)
	];
	var curve= new OpenLayers.Geometry.Curve(points);
	done();
    }
};