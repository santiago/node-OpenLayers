var OpenLayers= require('../lib/OpenLayers');
var assert    = require('assert');

var curve;
var line_string;

module.exports = {
    /*
     * Point
     * ======
     */
    "<Point>": function(done) {
	var point= new OpenLayers.Geometry.Point(0,0);
	done();
    },
    "<Point#distanceTo>": function(done) {
	var point_A= new OpenLayers.Geometry.Point(0,0);
	var point_B= new OpenLayers.Geometry.Point(2,1);
	var d= point_A.distanceTo(point_B);
	// console.log(d);
	done();
    },
    "<Point#getCentroid>": function(done) {
	var point= new OpenLayers.Geometry.Point(0,0);
	var centroid= point.getCentroid();
	// console.log(centroid);
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
	// console.log(multipoint.components);
	done();
    },
    "<MultiPoint#removePoint>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,0)
	];
	var multipoint= new OpenLayers.Geometry.MultiPoint(points);
	multipoint.removePoint(points[2]);
	// console.log(multipoint.components);
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
	curve= new OpenLayers.Geometry.Curve(points);
	done();
    },
    "<Curve#getLength>": function(done) {
	var length= curve.getLength();
	// should be 3*sqrt(2) and it is :)
	// console.log(length);
	done();
    },

    /*
     * LineString
     * ===========
     */
    "<LineString>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,0),
	    new OpenLayers.Geometry.Point(1,1)
	];
	line_string= new OpenLayers.Geometry.LineString(points);
	done();
    },
    "<LineString#removeComponent>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,0),
	    new OpenLayers.Geometry.Point(1,1)
	];
	line_string= new OpenLayers.Geometry.LineString(points);
	line_string.removeComponent(points[3]);
	// console.log(line_string.components);
	done();
    },
    "<LineString#intersects>": function(done) {
	var points_A= [ 
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(2,1)
	];
	var points_B= [ 
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(1,0)
	];
	var line_A= new OpenLayers.Geometry.LineString(points_A);
	var line_B= new OpenLayers.Geometry.LineString(points_B);
	// console.log(line_A.intersects(line_B));
	done();
    },
    "<LineString#distanceTo>": function(done) {
	var points_A= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(1,0)
	];
	var points_B= [ 
	    new OpenLayers.Geometry.Point(2,1),
	    new OpenLayers.Geometry.Point(3,0)
	];
	var line_A= new OpenLayers.Geometry.LineString(points_A);
	var line_B= new OpenLayers.Geometry.LineString(points_B);
	console.log(line_A.distanceTo(line_B, {details:true}));
	done();
    },

    /*
     * LinearRing
     * ===========
     */
    "<LinearRing>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,0),
	    new OpenLayers.Geometry.Point(1,1)
	];
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	done();
    },
    "<LinearRing#getCentroid>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(1,0)

	];
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	// console.log(linear_ring.getCentroid());
	done();
    },
    "<LinearRing#getArea>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(1,0)

	];
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	// console.log(linear_ring.getArea());
	done();
    },

    /*
     * Polygon
     * ========
     */
    "<Polygon>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(1,0)
	];    
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	var polygon= new OpenLayers.Geometry.Polygon(linear_ring);
	done();
    },
    "<Polygon#getArea>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(2,0)
	];    
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	var polygon= new OpenLayers.Geometry.Polygon(linear_ring);
	// console.log(polygon.getArea());
	done();
    },
    "<Polygon#getCentroid>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(2,0)
	];    
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	var polygon= new OpenLayers.Geometry.Polygon(linear_ring);
	// console.log(polygon.getCentroid());
	done();
    },
    "<Polygon#containsPoint>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(2,0)
	];    
	var point= new OpenLayers.Geometry.Point(1,0.5);
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	var polygon= new OpenLayers.Geometry.Polygon(linear_ring);
	// console.log(polygon.containsPoint(point));
	done();
    },
    "<Polygon#getGeodesicArea>": function(done) {
	var points= [ 
	    new OpenLayers.Geometry.Point(0,0),
	    new OpenLayers.Geometry.Point(0,1),
	    new OpenLayers.Geometry.Point(1,1),
	    new OpenLayers.Geometry.Point(2,0)
	];    
	var linear_ring= new OpenLayers.Geometry.LinearRing(points);
	var polygon= new OpenLayers.Geometry.Polygon(linear_ring);
	console.log(polygon.getGeodesicArea());
	done();
    },
    "<Polygon.createRegularPolygon>": function(done) {
	var origin= new OpenLayers.Geometry.Point(20,20);
	var radius= 2;
	var sides= 20; // Approximates a circle
	var rotation= 0;
	var polygon= OpenLayers.Geometry.Polygon
	    .createRegularPolygon(origin, radius, sides, rotation);
	// console.log(polygon);
	done();
    }
};