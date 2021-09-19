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
    <img src="styles/legend/Rendimientotha_1_0.png" /> 3.5 - 6.6 <br />\
    <img src="styles/legend/Rendimientotha_1_1.png" /> 6.6 - 9.7 <br />\
    <img src="styles/legend/Rendimientotha_1_2.png" /> 9.7 - 12.8 <br />\
    <img src="styles/legend/Rendimientotha_1_3.png" /> 12.8 - 15.8 <br />\
    <img src="styles/legend/Rendimientotha_1_4.png" /> 15.8 - 18.9 <br />\
    <img src="styles/legend/Rendimientotha_1_5.png" /> 18.9 - 22 <br />'
        });
var format_ZonaOptimizado_2 = new ol.format.GeoJSON();
var features_ZonaOptimizado_2 = format_ZonaOptimizado_2.readFeatures(json_ZonaOptimizado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaOptimizado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaOptimizado_2.addFeatures(features_ZonaOptimizado_2);
var lyr_ZonaOptimizado_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonaOptimizado_2, 
                style: style_ZonaOptimizado_2,
                interactive: false,
                title: '<img src="styles/legend/ZonaOptimizado_2.png" /> ZonaOptimizado'
            });
var format_ZonaConvencional_3 = new ol.format.GeoJSON();
var features_ZonaConvencional_3 = format_ZonaConvencional_3.readFeatures(json_ZonaConvencional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaConvencional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaConvencional_3.addFeatures(features_ZonaConvencional_3);
var lyr_ZonaConvencional_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonaConvencional_3, 
                style: style_ZonaConvencional_3,
                interactive: false,
                title: '<img src="styles/legend/ZonaConvencional_3.png" /> ZonaConvencional'
            });
var format_SiembraVar_4 = new ol.format.GeoJSON();
var features_SiembraVar_4 = format_SiembraVar_4.readFeatures(json_SiembraVar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiembraVar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiembraVar_4.addFeatures(features_SiembraVar_4);
var lyr_SiembraVar_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiembraVar_4, 
                style: style_SiembraVar_4,
                interactive: false,
    title: 'SiembraVar<br />\
    <img src="styles/legend/SiembraVar_4_0.png" /> 100000<br />\
    <img src="styles/legend/SiembraVar_4_1.png" /> 110000<br />\
    <img src="styles/legend/SiembraVar_4_2.png" /> 115000<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_Rendimientotha_1.setVisible(true);lyr_ZonaOptimizado_2.setVisible(true);lyr_ZonaConvencional_3.setVisible(true);lyr_SiembraVar_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Rendimientotha_1,lyr_ZonaOptimizado_2,lyr_ZonaConvencional_3,lyr_SiembraVar_4];
lyr_Rendimientotha_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'VALUE': 'VALUE', 'CLASE_n': 'CLASE_n', 'RENDIMIENT': 'RENDIMIENT', 'CON_05': 'CON_05', 'CON_1': 'CON_1', 'CLASE': 'CLASE', });
lyr_ZonaOptimizado_2.set('fieldAliases', {'Field': 'Field', 'Dataset': 'Dataset', 'Product': 'Product', 'Obj__Id': 'Obj__Id', 'Swth_Wdth_': 'Swth_Wdth_', 'Distance_m': 'Distance_m', 'Duration_s': 'Duration_s', 'Track_deg_': 'Track_deg_', 'Elevation_': 'Elevation_', 'Area_Count': 'Area_Count', 'Time': 'Time', 'Y_Offset_m': 'Y_Offset_m', 'Pass_Num': 'Pass_Num', 'Moisture__': 'Moisture__', 'Crop_Flw_M': 'Crop_Flw_M', 'Speed_km_h': 'Speed_km_h', 'Crop_Flw_V': 'Crop_Flw_V', 'Yld_Mass_W': 'Yld_Mass_W', 'Yld_Mass_D': 'Yld_Mass_D', 'Yld_Vol_We': 'Yld_Vol_We', 'Yld_Vol_Dr': 'Yld_Vol_Dr', 'Prod_ha_h_': 'Prod_ha_h_', 'Date': 'Date', });
lyr_ZonaConvencional_3.set('fieldAliases', {'Field': 'Field', 'Dataset': 'Dataset', 'Product': 'Product', 'Obj__Id': 'Obj__Id', 'Swth_Wdth_': 'Swth_Wdth_', 'Distance_m': 'Distance_m', 'Duration_s': 'Duration_s', 'Track_deg_': 'Track_deg_', 'Elevation_': 'Elevation_', 'Area_Count': 'Area_Count', 'Time': 'Time', 'Y_Offset_m': 'Y_Offset_m', 'Pass_Num': 'Pass_Num', 'Moisture__': 'Moisture__', 'Crop_Flw_M': 'Crop_Flw_M', 'Speed_km_h': 'Speed_km_h', 'Crop_Flw_V': 'Crop_Flw_V', 'Yld_Mass_W': 'Yld_Mass_W', 'Yld_Mass_D': 'Yld_Mass_D', 'Yld_Vol_We': 'Yld_Vol_We', 'Yld_Vol_Dr': 'Yld_Vol_Dr', 'Prod_ha_h_': 'Prod_ha_h_', 'Date': 'Date', });
lyr_SiembraVar_4.set('fieldAliases', {'DN': 'DN', 'seeds': 'seeds', });
lyr_Rendimientotha_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'VALUE': 'TextEdit', 'CLASE_n': 'TextEdit', 'RENDIMIENT': 'TextEdit', 'CON_05': 'TextEdit', 'CON_1': 'TextEdit', 'CLASE': 'TextEdit', });
lyr_ZonaOptimizado_2.set('fieldImages', {'Field': 'TextEdit', 'Dataset': 'TextEdit', 'Product': 'TextEdit', 'Obj__Id': 'TextEdit', 'Swth_Wdth_': 'TextEdit', 'Distance_m': 'TextEdit', 'Duration_s': 'TextEdit', 'Track_deg_': 'TextEdit', 'Elevation_': 'TextEdit', 'Area_Count': 'TextEdit', 'Time': 'DateTime', 'Y_Offset_m': 'TextEdit', 'Pass_Num': 'TextEdit', 'Moisture__': 'TextEdit', 'Crop_Flw_M': 'TextEdit', 'Speed_km_h': 'TextEdit', 'Crop_Flw_V': 'TextEdit', 'Yld_Mass_W': 'TextEdit', 'Yld_Mass_D': 'TextEdit', 'Yld_Vol_We': 'TextEdit', 'Yld_Vol_Dr': 'TextEdit', 'Prod_ha_h_': 'TextEdit', 'Date': 'DateTime', });
lyr_ZonaConvencional_3.set('fieldImages', {'Field': 'TextEdit', 'Dataset': 'TextEdit', 'Product': 'TextEdit', 'Obj__Id': 'TextEdit', 'Swth_Wdth_': 'TextEdit', 'Distance_m': 'TextEdit', 'Duration_s': 'TextEdit', 'Track_deg_': 'TextEdit', 'Elevation_': 'TextEdit', 'Area_Count': 'TextEdit', 'Time': 'DateTime', 'Y_Offset_m': 'TextEdit', 'Pass_Num': 'TextEdit', 'Moisture__': 'TextEdit', 'Crop_Flw_M': 'TextEdit', 'Speed_km_h': 'TextEdit', 'Crop_Flw_V': 'TextEdit', 'Yld_Mass_W': 'TextEdit', 'Yld_Mass_D': 'TextEdit', 'Yld_Vol_We': 'TextEdit', 'Yld_Vol_Dr': 'TextEdit', 'Prod_ha_h_': 'TextEdit', 'Date': 'DateTime', });
lyr_SiembraVar_4.set('fieldImages', {'DN': 'TextEdit', 'seeds': 'TextEdit', });
lyr_Rendimientotha_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'VALUE': 'inline label', 'CLASE_n': 'no label', 'RENDIMIENT': 'no label', 'CON_05': 'no label', 'CON_1': 'no label', 'CLASE': 'no label', });
lyr_ZonaOptimizado_2.set('fieldLabels', {'Field': 'no label', 'Dataset': 'no label', 'Product': 'no label', 'Obj__Id': 'no label', 'Swth_Wdth_': 'no label', 'Distance_m': 'no label', 'Duration_s': 'no label', 'Track_deg_': 'no label', 'Elevation_': 'no label', 'Area_Count': 'no label', 'Time': 'no label', 'Y_Offset_m': 'no label', 'Pass_Num': 'no label', 'Moisture__': 'no label', 'Crop_Flw_M': 'no label', 'Speed_km_h': 'no label', 'Crop_Flw_V': 'no label', 'Yld_Mass_W': 'no label', 'Yld_Mass_D': 'header label', 'Yld_Vol_We': 'no label', 'Yld_Vol_Dr': 'no label', 'Prod_ha_h_': 'no label', 'Date': 'no label', });
lyr_ZonaConvencional_3.set('fieldLabels', {'Field': 'no label', 'Dataset': 'no label', 'Product': 'no label', 'Obj__Id': 'no label', 'Swth_Wdth_': 'no label', 'Distance_m': 'no label', 'Duration_s': 'no label', 'Track_deg_': 'no label', 'Elevation_': 'no label', 'Area_Count': 'no label', 'Time': 'no label', 'Y_Offset_m': 'no label', 'Pass_Num': 'no label', 'Moisture__': 'no label', 'Crop_Flw_M': 'no label', 'Speed_km_h': 'no label', 'Crop_Flw_V': 'no label', 'Yld_Mass_W': 'no label', 'Yld_Mass_D': 'header label', 'Yld_Vol_We': 'no label', 'Yld_Vol_Dr': 'no label', 'Prod_ha_h_': 'no label', 'Date': 'no label', });
lyr_SiembraVar_4.set('fieldLabels', {'DN': 'no label', 'seeds': 'header label', });
lyr_SiembraVar_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});