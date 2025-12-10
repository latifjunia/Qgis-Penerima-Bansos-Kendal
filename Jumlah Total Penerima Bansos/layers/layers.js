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
var format_JumlahTotalPenerimaBansos_0 = new ol.format.GeoJSON();
var features_JumlahTotalPenerimaBansos_0 = format_JumlahTotalPenerimaBansos_0.readFeatures(json_JumlahTotalPenerimaBansos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahTotalPenerimaBansos_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahTotalPenerimaBansos_0.addFeatures(features_JumlahTotalPenerimaBansos_0);var lyr_JumlahTotalPenerimaBansos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahTotalPenerimaBansos_0, 
                style: style_JumlahTotalPenerimaBansos_0,
    title: 'Jumlah Total Penerima Bansos<br />\
    <img src="styles/legend/JumlahTotalPenerimaBansos_0_0.png" /> Rendah<br />\
    <img src="styles/legend/JumlahTotalPenerimaBansos_0_1.png" /> Sedang<br />\
    <img src="styles/legend/JumlahTotalPenerimaBansos_0_2.png" /> Tinggi<br />'
        });

lyr_JumlahTotalPenerimaBansos_0.setVisible(true);
var layersList = [baseLayer,lyr_JumlahTotalPenerimaBansos_0];
lyr_JumlahTotalPenerimaBansos_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'PKH': 'PKH', 'KIS APBN': 'KIS APBN', 'JAMKESDA': 'JAMKESDA', 'JMLH TOTAL': 'JMLH TOTAL', });
lyr_JumlahTotalPenerimaBansos_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'PKH': 'TextEdit', 'KIS APBN': 'TextEdit', 'JAMKESDA': 'TextEdit', 'JMLH TOTAL': 'TextEdit', });
lyr_JumlahTotalPenerimaBansos_0.set('fieldLabels', {'Kecamatan': 'inline label', 'PKH': 'inline label', 'KIS APBN': 'inline label', 'JAMKESDA': 'inline label', 'JMLH TOTAL': 'inline label', });
lyr_JumlahTotalPenerimaBansos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});