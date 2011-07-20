var OpenLayers= require('../lib/OpenLayers');
var assert    = require('assert');

function sample_collection() {
    return {
        "type": "FeatureCollection", 
        "features": [
            {"geometry": {
                "type": "GeometryCollection", 
                "geometries": [
                    {
                        "type": "LineString", 
                        "coordinates": 
                        [[11.0878902207, 45.1602390564], 
                         [15.01953125, 48.1298828125]]
                    }, 
                    {
                        "type": "Polygon", 
                        "coordinates": 
                        [[[11.0878902207, 45.1602390564], 
                          [14.931640625, 40.9228515625], 
                          [0.8251953125, 41.0986328125], 
                          [7.63671875, 48.96484375], 
                          [11.0878902207, 45.1602390564]]]
                    },
                    {
                        "type":"Point", 
                        "coordinates":[15.87646484375, 44.1748046875]
                    }
                ]
                }, 
             "type": "Feature", 
             "properties": {}}
        ]
    };
}

module.exports = {
    /*
     * GeoJSON
     *
     */
    "<GeoJSON>": function(done) {
	var geojson_format = new OpenLayers.Format.GeoJSON();
	done();
    },
    "<GeoJSON#read>": function(done) {
	var featurecollection= sample_collection();
	var geojson_format= new OpenLayers.Format.GeoJSON();
	var feature= geojson_format.read(featurecollection);
	// console.log(feature);
	done();
    },
    "<GeoJSON#write>": function(done) {
	var featurecollection= sample_collection();
	var geojson_format= new OpenLayers.Format.GeoJSON();
	var feature= geojson_format.read(featurecollection);
	var geojson= geojson_format.write(feature);
	// console.log(geojson);
	done();
    }
};