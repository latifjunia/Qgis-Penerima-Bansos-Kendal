var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PenerimaPKHKISAPBNdanJAMKES2023_0 = new ol.format.GeoJSON();
var features_PenerimaPKHKISAPBNdanJAMKES2023_0 = format_PenerimaPKHKISAPBNdanJAMKES2023_0.readFeatures(json_PenerimaPKHKISAPBNdanJAMKES2023_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenerimaPKHKISAPBNdanJAMKES2023_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PenerimaPKHKISAPBNdanJAMKES2023_0.addFeatures(features_PenerimaPKHKISAPBNdanJAMKES2023_0);var lyr_PenerimaPKHKISAPBNdanJAMKES2023_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenerimaPKHKISAPBNdanJAMKES2023_0, 
                style: style_PenerimaPKHKISAPBNdanJAMKES2023_0,
    title: 'Penerima PKH, KIS APBN, dan JAMKES 2023<br />\
    <img src="styles/legend/PenerimaPKHKISAPBNdanJAMKES2023_0_0.png" /> Rendah<br />\
    <img src="styles/legend/PenerimaPKHKISAPBNdanJAMKES2023_0_1.png" /> Sedang<br />\
    <img src="styles/legend/PenerimaPKHKISAPBNdanJAMKES2023_0_2.png" /> Tinggi<br />'
        });

lyr_PenerimaPKHKISAPBNdanJAMKES2023_0.setVisible(true);
var layersList = [baseLayer,lyr_PenerimaPKHKISAPBNdanJAMKES2023_0];
lyr_PenerimaPKHKISAPBNdanJAMKES2023_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'PKH': 'PKH', 'KIS APBN': 'KIS APBN', 'JAMKESDA': 'JAMKESDA', 'JMLH TOTAL': 'JMLH TOTAL', });
lyr_PenerimaPKHKISAPBNdanJAMKES2023_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'PKH': 'TextEdit', 'KIS APBN': 'TextEdit', 'JAMKESDA': 'TextEdit', 'JMLH TOTAL': 'TextEdit', });
lyr_PenerimaPKHKISAPBNdanJAMKES2023_0.set('fieldLabels', {'Kecamatan': 'inline label', 'PKH': 'inline label', 'KIS APBN': 'inline label', 'JAMKESDA': 'header label', 'JMLH TOTAL': 'inline label', });
lyr_PenerimaPKHKISAPBNdanJAMKES2023_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});