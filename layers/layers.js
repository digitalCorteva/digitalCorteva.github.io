var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Rendimientotha_1 = new ol.format.GeoJSON();
var features_Rendimientotha_1 = format_Rendimientotha_1.readFeatures(json_Rendimientotha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rendimientotha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rendimientotha_1.addFeatures(features_Rendimientotha_1);
var lyr_Rendimientotha_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rendimientotha_1, 
                style: style_Rendimientotha_1,
                interactive: true,
    title: 'Rendimiento t/ha<br />\
    <img src="styles/legend/Rendimientotha_1_0.png" /> 3.5 - 6.6 t/ha<br />\
    <img src="styles/legend/Rendimientotha_1_1.png" /> 6.6 - 9.7 t/ha<br />\
    <img src="styles/legend/Rendimientotha_1_2.png" /> 9.7 - 12.8 t/ha<br />\
    <img src="styles/legend/Rendimientotha_1_3.png" /> 12.8 - 15.8 t/ha<br />\
    <img src="styles/legend/Rendimientotha_1_4.png" /> 15.8 - 18.9 t/ha<br />\
    <img src="styles/legend/Rendimientotha_1_5.png" /> 18.9 - 22 t/ha<br />'
        });
var format_SiembraVar_2 = new ol.format.GeoJSON();
var features_SiembraVar_2 = format_SiembraVar_2.readFeatures(json_SiembraVar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiembraVar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiembraVar_2.addFeatures(features_SiembraVar_2);
var lyr_SiembraVar_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiembraVar_2, 
                style: style_SiembraVar_2,
                interactive: false,
    title: 'SiembraVar<br />\
    <img src="styles/legend/SiembraVar_2_0.png" /> 100.000 plantas/ha<br />\
    <img src="styles/legend/SiembraVar_2_1.png" /> 110.000 plantas/ha<br />\
    <img src="styles/legend/SiembraVar_2_2.png" /> 115.000 plantas/ha<br />'
        });
var format_SensorSuelo_3 = new ol.format.GeoJSON();
var features_SensorSuelo_3 = format_SensorSuelo_3.readFeatures(json_SensorSuelo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SensorSuelo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SensorSuelo_3.addFeatures(features_SensorSuelo_3);
var lyr_SensorSuelo_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SensorSuelo_3, 
                style: style_SensorSuelo_3,
                interactive: false,
    title: 'SensorSuelo<br />\
    <img src="styles/legend/SensorSuelo_3_0.png" /> Arenoso<br />\
    <img src="styles/legend/SensorSuelo_3_1.png" /> Franco-Arenoso<br />\
    <img src="styles/legend/SensorSuelo_3_2.png" /> Limo<br />\
    <img src="styles/legend/SensorSuelo_3_3.png" /> Franco-Arcilloso<br />\
    <img src="styles/legend/SensorSuelo_3_4.png" /> Arcilla-MO<br />'
        });
var format_ZonaOptimizado_4 = new ol.format.GeoJSON();
var features_ZonaOptimizado_4 = format_ZonaOptimizado_4.readFeatures(json_ZonaOptimizado_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaOptimizado_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaOptimizado_4.addFeatures(features_ZonaOptimizado_4);
var lyr_ZonaOptimizado_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonaOptimizado_4, 
                style: style_ZonaOptimizado_4,
                interactive: false,
                title: '<img src="styles/legend/ZonaOptimizado_4.png" /> ZonaOptimizado'
            });
var format_ZonaConvencional_5 = new ol.format.GeoJSON();
var features_ZonaConvencional_5 = format_ZonaConvencional_5.readFeatures(json_ZonaConvencional_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaConvencional_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaConvencional_5.addFeatures(features_ZonaConvencional_5);
var lyr_ZonaConvencional_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonaConvencional_5, 
                style: style_ZonaConvencional_5,
                interactive: false,
                title: '<img src="styles/legend/ZonaConvencional_5.png" /> ZonaConvencional'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Rendimientotha_1.setVisible(true);lyr_SiembraVar_2.setVisible(true);lyr_SensorSuelo_3.setVisible(true);lyr_ZonaOptimizado_4.setVisible(true);lyr_ZonaConvencional_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Rendimientotha_1,lyr_SiembraVar_2,lyr_SensorSuelo_3,lyr_ZonaOptimizado_4,lyr_ZonaConvencional_5];
lyr_Rendimientotha_1.set('fieldAliases', {'RENDIMIENT': 'RENDIMIENT', });
lyr_SiembraVar_2.set('fieldAliases', {'DN': 'DN', 'seeds': 'seeds', });
lyr_SensorSuelo_3.set('fieldAliases', {'DN': 'DN', });
lyr_ZonaOptimizado_4.set('fieldAliases', {'Field': 'Field', });
lyr_ZonaConvencional_5.set('fieldAliases', {'Field': 'Field', });
lyr_Rendimientotha_1.set('fieldImages', {'RENDIMIENT': 'TextEdit', });
lyr_SiembraVar_2.set('fieldImages', {'DN': 'TextEdit', 'seeds': 'TextEdit', });
lyr_SensorSuelo_3.set('fieldImages', {'DN': 'TextEdit', });
lyr_ZonaOptimizado_4.set('fieldImages', {'Field': 'TextEdit', });
lyr_ZonaConvencional_5.set('fieldImages', {'Field': 'TextEdit', });
lyr_Rendimientotha_1.set('fieldLabels', {'RENDIMIENT': 'header label', });
lyr_SiembraVar_2.set('fieldLabels', {'DN': 'no label', 'seeds': 'header label', });
lyr_SensorSuelo_3.set('fieldLabels', {'DN': 'no label', });
lyr_ZonaOptimizado_4.set('fieldLabels', {'Field': 'no label', });
lyr_ZonaConvencional_5.set('fieldLabels', {'Field': 'no label', });
lyr_ZonaConvencional_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});