var OpenLayers= require('../lib/OpenLayers');
var assert    = require('assert');

module.exports = {
    "it should load Base Type Class": function(done) {
	var MyClass= OpenLayers.Class({
	    hola: "mundo",
	    initialize: function(options) {
		console.log("MyClass");
	    },
	    CLASS_NAME: "OpenLayers.TestClass"
	});

	var my_instance= new MyClass();
	console.log(my_instance.CLASS_NAME);
	done();
    },

    "it should load Base Type Bounds": function(done) {
	var MyBounds= new OpenLayers.Bounds({hola:'mundo'});
	done();
    },

    "it should load Base Type Bounds": function(done) {
	var MyBounds= new OpenLayers.Bounds({hola:'mundo'});
	done();
    },

    "it should load Base Type LonLat": function(done) {
	var MyLonLat= new OpenLayers.LonLat(4,5);
	done();
    },

    "it should load Base Type Pixel": function(done) {
	var MyLonLat= new OpenLayers.Pixel(0,0);
	done();
    },

    "it should load Base Type Size": function(done) {
	var MyLonLat= new OpenLayers.Pixel(0,0);
	done();
    }
};