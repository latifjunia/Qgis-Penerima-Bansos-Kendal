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
var format_PenerimaKISAPBN_0 = new ol.format.GeoJSON();
var features_PenerimaKISAPBN_0 = format_PenerimaKISAPBN_0.readFeatures(json_PenerimaKISAPBN_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenerimaKISAPBN_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PenerimaKISAPBN_0.addFeatures(features_PenerimaKISAPBN_0);var lyr_PenerimaKISAPBN_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenerimaKISAPBN_0, 
                style: style_PenerimaKISAPBN_0,
    title: 'Penerima KIS APBN<br />\
    <img src="styles/legend/PenerimaKISAPBN_0_0.png" /> Rendah<br />\
    <img src="styles/legend/PenerimaKISAPBN_0_1.png" /> Sedang<br />\
    <img src="styles/legend/PenerimaKISAPBN_0_2.png" /> Tinggi<br />'
        });

lyr_PenerimaKISAPBN_0.setVisible(true);
var layersList = [baseLayer,lyr_PenerimaKISAPBN_0];
lyr_PenerimaKISAPBN_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'PKH': 'PKH', 'KIS APBN': 'KIS APBN', 'JAMKESDA': 'JAMKESDA', 'JMLH TOTAL': 'JMLH TOTAL', });
lyr_PenerimaKISAPBN_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'PKH': 'TextEdit', 'KIS APBN': 'TextEdit', 'JAMKESDA': 'TextEdit', 'JMLH TOTAL': 'TextEdit', });
lyr_PenerimaKISAPBN_0.set('fieldLabels', {'Kecamatan': 'inline label', 'PKH': 'inline label', 'KIS APBN': 'inline label', 'JAMKESDA': 'inline label', 'JMLH TOTAL': 'inline label', });
lyr_PenerimaKISAPBN_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});