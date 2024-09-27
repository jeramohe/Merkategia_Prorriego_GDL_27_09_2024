var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_espacios_verdes_zona_conurbada_AMG_3 = new ol.format.GeoJSON();
var features_espacios_verdes_zona_conurbada_AMG_3 = format_espacios_verdes_zona_conurbada_AMG_3.readFeatures(json_espacios_verdes_zona_conurbada_AMG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacios_verdes_zona_conurbada_AMG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espacios_verdes_zona_conurbada_AMG_3.addFeatures(features_espacios_verdes_zona_conurbada_AMG_3);
var lyr_espacios_verdes_zona_conurbada_AMG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espacios_verdes_zona_conurbada_AMG_3, 
                style: style_espacios_verdes_zona_conurbada_AMG_3,
                popuplayertitle: "espacios_verdes_zona_conurbada_AMG",
                interactive: true,
                title: '<img src="styles/legend/espacios_verdes_zona_conurbada_AMG_3.png" /> espacios_verdes_zona_conurbada_AMG'
            });
var format_Universidades_4 = new ol.format.GeoJSON();
var features_Universidades_4 = format_Universidades_4.readFeatures(json_Universidades_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universidades_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universidades_4.addFeatures(features_Universidades_4);cluster_Universidades_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Universidades_4
});
var lyr_Universidades_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Universidades_4, 
                style: style_Universidades_4,
                popuplayertitle: "Universidades",
                interactive: true,
                title: '<img src="styles/legend/Universidades_4.png" /> Universidades'
            });
var format_Parques_Industriales_5 = new ol.format.GeoJSON();
var features_Parques_Industriales_5 = format_Parques_Industriales_5.readFeatures(json_Parques_Industriales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parques_Industriales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parques_Industriales_5.addFeatures(features_Parques_Industriales_5);
var lyr_Parques_Industriales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parques_Industriales_5, 
                style: style_Parques_Industriales_5,
                popuplayertitle: "Parques_Industriales",
                interactive: true,
                title: '<img src="styles/legend/Parques_Industriales_5.png" /> Parques_Industriales'
            });
var format_Hoteles_6 = new ol.format.GeoJSON();
var features_Hoteles_6 = format_Hoteles_6.readFeatures(json_Hoteles_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hoteles_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hoteles_6.addFeatures(features_Hoteles_6);cluster_Hoteles_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Hoteles_6
});
var lyr_Hoteles_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hoteles_6, 
                style: style_Hoteles_6,
                popuplayertitle: "Hoteles",
                interactive: true,
                title: '<img src="styles/legend/Hoteles_6.png" /> Hoteles'
            });
var format_Desarrolladores_7 = new ol.format.GeoJSON();
var features_Desarrolladores_7 = format_Desarrolladores_7.readFeatures(json_Desarrolladores_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desarrolladores_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desarrolladores_7.addFeatures(features_Desarrolladores_7);cluster_Desarrolladores_7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Desarrolladores_7
});
var lyr_Desarrolladores_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Desarrolladores_7, 
                style: style_Desarrolladores_7,
                popuplayertitle: "Desarrolladores",
                interactive: true,
                title: '<img src="styles/legend/Desarrolladores_7.png" /> Desarrolladores'
            });
var format_Competencia_8 = new ol.format.GeoJSON();
var features_Competencia_8 = format_Competencia_8.readFeatures(json_Competencia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Competencia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Competencia_8.addFeatures(features_Competencia_8);cluster_Competencia_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Competencia_8
});
var lyr_Competencia_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Competencia_8, 
                style: style_Competencia_8,
                popuplayertitle: "Competencia",
                interactive: true,
                title: '<img src="styles/legend/Competencia_8.png" /> Competencia'
            });
var format_Clubs_deportivos_9 = new ol.format.GeoJSON();
var features_Clubs_deportivos_9 = format_Clubs_deportivos_9.readFeatures(json_Clubs_deportivos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clubs_deportivos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clubs_deportivos_9.addFeatures(features_Clubs_deportivos_9);
var lyr_Clubs_deportivos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clubs_deportivos_9, 
                style: style_Clubs_deportivos_9,
                popuplayertitle: "Clubs_deportivos",
                interactive: true,
                title: '<img src="styles/legend/Clubs_deportivos_9.png" /> Clubs_deportivos'
            });
var format_Contratistas_10 = new ol.format.GeoJSON();
var features_Contratistas_10 = format_Contratistas_10.readFeatures(json_Contratistas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contratistas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contratistas_10.addFeatures(features_Contratistas_10);cluster_Contratistas_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Contratistas_10
});
var lyr_Contratistas_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Contratistas_10, 
                style: style_Contratistas_10,
                popuplayertitle: "Contratistas",
                interactive: true,
                title: '<img src="styles/legend/Contratistas_10.png" /> Contratistas'
            });
var format_Condominiosycotos_11 = new ol.format.GeoJSON();
var features_Condominiosycotos_11 = format_Condominiosycotos_11.readFeatures(json_Condominiosycotos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Condominiosycotos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Condominiosycotos_11.addFeatures(features_Condominiosycotos_11);cluster_Condominiosycotos_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Condominiosycotos_11
});
var lyr_Condominiosycotos_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Condominiosycotos_11, 
                style: style_Condominiosycotos_11,
                popuplayertitle: "Condominios y cotos",
                interactive: true,
                title: '<img src="styles/legend/Condominiosycotos_11.png" /> Condominios y cotos'
            });
var format_Cementerios_12 = new ol.format.GeoJSON();
var features_Cementerios_12 = format_Cementerios_12.readFeatures(json_Cementerios_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cementerios_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cementerios_12.addFeatures(features_Cementerios_12);cluster_Cementerios_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Cementerios_12
});
var lyr_Cementerios_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Cementerios_12, 
                style: style_Cementerios_12,
                popuplayertitle: "Cementerios",
                interactive: true,
                title: '<img src="styles/legend/Cementerios_12.png" /> Cementerios'
            });
var format_Arquitecturaypaisajeurbano_13 = new ol.format.GeoJSON();
var features_Arquitecturaypaisajeurbano_13 = format_Arquitecturaypaisajeurbano_13.readFeatures(json_Arquitecturaypaisajeurbano_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arquitecturaypaisajeurbano_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arquitecturaypaisajeurbano_13.addFeatures(features_Arquitecturaypaisajeurbano_13);cluster_Arquitecturaypaisajeurbano_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Arquitecturaypaisajeurbano_13
});
var lyr_Arquitecturaypaisajeurbano_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Arquitecturaypaisajeurbano_13, 
                style: style_Arquitecturaypaisajeurbano_13,
                popuplayertitle: "Arquitectura y paisaje urbano",
                interactive: true,
                title: '<img src="styles/legend/Arquitecturaypaisajeurbano_13.png" /> Arquitectura y paisaje urbano'
            });
var format_Administraciondebienesraices_14 = new ol.format.GeoJSON();
var features_Administraciondebienesraices_14 = format_Administraciondebienesraices_14.readFeatures(json_Administraciondebienesraices_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administraciondebienesraices_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administraciondebienesraices_14.addFeatures(features_Administraciondebienesraices_14);cluster_Administraciondebienesraices_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Administraciondebienesraices_14
});
var lyr_Administraciondebienesraices_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Administraciondebienesraices_14, 
                style: style_Administraciondebienesraices_14,
                popuplayertitle: "Administracion de bienes raices",
                interactive: true,
                title: '<img src="styles/legend/Administraciondebienesraices_14.png" /> Administracion de bienes raices'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleMaps_1.setVisible(false);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_espacios_verdes_zona_conurbada_AMG_3.setVisible(true);lyr_Universidades_4.setVisible(false);lyr_Parques_Industriales_5.setVisible(false);lyr_Hoteles_6.setVisible(false);lyr_Desarrolladores_7.setVisible(false);lyr_Competencia_8.setVisible(true);lyr_Clubs_deportivos_9.setVisible(true);lyr_Contratistas_10.setVisible(false);lyr_Condominiosycotos_11.setVisible(true);lyr_Cementerios_12.setVisible(false);lyr_Arquitecturaypaisajeurbano_13.setVisible(false);lyr_Administraciondebienesraices_14.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_espacios_verdes_zona_conurbada_AMG_3,lyr_Universidades_4,lyr_Parques_Industriales_5,lyr_Hoteles_6,lyr_Desarrolladores_7,lyr_Competencia_8,lyr_Clubs_deportivos_9,lyr_Contratistas_10,lyr_Condominiosycotos_11,lyr_Cementerios_12,lyr_Arquitecturaypaisajeurbano_13,lyr_Administraciondebienesraices_14];
lyr_espacios_verdes_zona_conurbada_AMG_3.set('fieldAliases', {'Fuente': 'Fuente', 'Tipo': 'Tipo', 'Uso': 'Uso', });
lyr_Universidades_4.set('fieldAliases', {'Fuente': 'Fuente', 'Municipio': 'Municipio', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Interés': 'Interés', 'Personal': 'Personal', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Parques_Industriales_5.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Tipo': 'Tipo', 'Personal': 'Personal', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Hoteles_6.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'TIpo': 'TIpo', 'Estrellas': 'Estrellas', 'Personal': 'Personal', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Desarrolladores_7.set('fieldAliases', {'Fuente': 'Fuente', 'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Competencia_8.set('fieldAliases', {'Fuente': 'Fuente', 'Municipio': 'Municipio', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Clubs_deportivos_9.set('fieldAliases', {'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Interés': 'Interés', 'Personal': 'Personal', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Contratistas_10.set('fieldAliases', {'Ciudad': 'Ciudad', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Tipo': 'Tipo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Condominiosycotos_11.set('fieldAliases', {'Fuente': 'Fuente', 'Municipio': 'Municipio', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Direccion': 'Direccion', 'Telefono': 'Telefono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Interés': 'Interés', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Cementerios_12.set('fieldAliases', {'Fuente': 'Fuente', 'Municipio': 'Municipio', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Interés': 'Interés', 'Personal': 'Personal', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Arquitecturaypaisajeurbano_13.set('fieldAliases', {'Fuente': 'Fuente', 'Municipio': 'Municipio', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Interés': 'Interés', 'Personal': 'Personal', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_Administraciondebienesraices_14.set('fieldAliases', {'Fuente': 'Fuente', 'Municipio': 'Municipio', 'Google Maps': 'Google Maps', 'Nombre de Empresa': 'Nombre de Empresa', 'Razon Social': 'Razon Social', 'Direccion': 'Direccion', 'Teléfono': 'Teléfono', 'Tipo': 'Tipo', 'Pagina Web': 'Pagina Web', 'Email': 'Email', 'Interés': 'Interés', 'Personal': 'Personal', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_espacios_verdes_zona_conurbada_AMG_3.set('fieldImages', {'Fuente': 'TextEdit', 'Tipo': 'TextEdit', 'Uso': 'TextEdit', });
lyr_Universidades_4.set('fieldImages', {'Fuente': 'TextEdit', 'Municipio': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Interés': 'TextEdit', 'Personal': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Parques_Industriales_5.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Tipo': 'TextEdit', 'Personal': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Hoteles_6.set('fieldImages', {'Fuente': '', 'Ciudad': '', 'Google Maps': '', 'Nombre de Empresa': '', 'Razon Social': '', 'Direccion': '', 'Teléfono': '', 'Pagina Web': '', 'Email': '', 'TIpo': '', 'Estrellas': '', 'Personal': '', 'Latitud': '', 'Longitud': '', });
lyr_Desarrolladores_7.set('fieldImages', {'Fuente': 'TextEdit', 'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Competencia_8.set('fieldImages', {'Fuente': '', 'Municipio': '', 'Google Maps': '', 'Nombre de Empresa': '', 'Direccion': '', 'Telefono': '', 'Tipo': '', 'Pagina Web': '', 'Email': '', 'Latitud': '', 'Longitud': '', });
lyr_Clubs_deportivos_9.set('fieldImages', {'Google Maps': '', 'Nombre de Empresa': '', 'Razon Social': '', 'Direccion': '', 'Teléfono': '', 'Tipo': '', 'Pagina Web': '', 'Email': '', 'Interés': '', 'Personal': '', 'Latitud': '', 'Longitud': '', });
lyr_Contratistas_10.set('fieldImages', {'Ciudad': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Tipo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Condominiosycotos_11.set('fieldImages', {'Fuente': 'TextEdit', 'Municipio': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Direccion': 'TextEdit', 'Telefono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Interés': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Cementerios_12.set('fieldImages', {'Fuente': '', 'Municipio': '', 'Google Maps': '', 'Nombre de Empresa': '', 'Razon Social': '', 'Direccion': '', 'Teléfono': '', 'Tipo': '', 'Pagina Web': '', 'Email': '', 'Interés': '', 'Personal': '', 'Latitud': '', 'Longitud': '', });
lyr_Arquitecturaypaisajeurbano_13.set('fieldImages', {'Fuente': 'TextEdit', 'Municipio': 'TextEdit', 'Google Maps': 'TextEdit', 'Nombre de Empresa': 'TextEdit', 'Razon Social': 'TextEdit', 'Direccion': 'TextEdit', 'Teléfono': 'TextEdit', 'Tipo': 'TextEdit', 'Pagina Web': 'TextEdit', 'Email': 'TextEdit', 'Interés': 'TextEdit', 'Personal': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_Administraciondebienesraices_14.set('fieldImages', {'Fuente': '', 'Municipio': '', 'Google Maps': '', 'Nombre de Empresa': '', 'Razon Social': '', 'Direccion': '', 'Teléfono': '', 'Tipo': '', 'Pagina Web': '', 'Email': '', 'Interés': '', 'Personal': '', 'Latitud': '', 'Longitud': '', });
lyr_espacios_verdes_zona_conurbada_AMG_3.set('fieldLabels', {'Fuente': 'inline label - always visible', 'Tipo': 'no label', 'Uso': 'no label', });
lyr_Universidades_4.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Interés': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Parques_Industriales_5.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Hoteles_6.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'TIpo': 'inline label - visible with data', 'Estrellas': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Desarrolladores_7.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Competencia_8.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Clubs_deportivos_9.set('fieldLabels', {'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Interés': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Contratistas_10.set('fieldLabels', {'Ciudad': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Condominiosycotos_11.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Telefono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Interés': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Cementerios_12.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Interés': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Arquitecturaypaisajeurbano_13.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Interés': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Administraciondebienesraices_14.set('fieldLabels', {'Fuente': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Google Maps': 'inline label - visible with data', 'Nombre de Empresa': 'inline label - visible with data', 'Razon Social': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Pagina Web': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Interés': 'inline label - visible with data', 'Personal': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_Administraciondebienesraices_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});