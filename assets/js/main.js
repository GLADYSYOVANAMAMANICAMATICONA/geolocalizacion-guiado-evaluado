'use strict'
const app = {
	map : {
		googleMap : undefined,
		googleCoordenadas : undefined,
		divmap : undefined,
		centro : {
			lat: -9.1191427,
			lng: -77.0349046
		},//posición actual
	},
	inicializar : function(){
		app.centro = {
			lat: -9.1191427,
			lng: -77.0349046
		}
		app.cuandoclikea();
	},
	cuandoclikea : function(){
		app.divmap = document.getElementById("map"),
		$('#encuentrame').click(app.getCurrentPosition);
		app.googleCoordenadas = {
			zoom: 5,
			center: app.centro, // mapa del Perú
			mapTypeControl: true,
			zoomControl: true,
			streetViewControl: true
		}
		app.map.googleMap = new google.maps.Map( app.divmap, app.googleCoordenadas);
	},
	getCurrentPosition : function ()
	{
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition( app.currentPositionCallbacks.encontrar, app.currentPositionCallbacks.error);
		}
	},
	currentPositionCallbacks : {
		encontrar : function( position ){
			app.centro.lat = position.coords.latitude;
			app.centro.lng = position.coords.longitude;
				let currentPositionMarker = new google.maps.Marker({
				position: app.centro,
				animation: google.maps.Animation.DROP,
				map: app.map.googleMap
			});
			app.map.googleMap.setZoom(17);
			app.map.googleMap.setCenter( app.centro );
		},
		error : function(){
			alert("Tenemos un problema con encontrar tu ubicación");
		}
	},
}
$(document).ready(app.inicializar);
