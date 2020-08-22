var hoverRoute = function(route_id) {
	$('#' + route_id).addClass('hover');
	$('li[data-route-id='+route_id+']').addClass('hover');
};
var unHoverRoute = function(route_id) {
	$('#' + route_id).removeClass('hover');
	$('li[data-route-id='+route_id+']').removeClass('hover');	
};
var setActiveRoute = function(route_id) {
	$('.topo-img-overlay-wrap path').removeClass('active');
	$('ul.routes li').removeClass('active');
	$('#' + route_id).addClass('active');
	$('li[data-route-id='+route_id+']').addClass('active');		
};
$(function() {
	// Document loaded
	if (typeof activeRoute !== 'undefined') {
		setActiveRoute(activeRoute);
	} else {
		var activeRouteElem = $('ul.routes li.active');
		if (activeRouteElem.length === 1) {
			//setActiveRoute(activeRoute);
			console.log(activeRouteElem[0])
		}
	}
	$('.topo-img-overlay-wrap svg path').hover(function() {
		hoverRoute(this.id);
	});
	$('.topo-img-overlay-wrap svg path').mouseout(function() {
		unHoverRoute(this.id);
	});
	$('.topo-img-overlay-wrap svg path').click(function() {
		setActiveRoute(this.id);
	});
	$('ul.routes li').hover(function() {
		hoverRoute($(this).attr('data-route-id'));
	});
	$('ul.routes li').mouseout(function() {
		unHoverRoute($(this).attr('data-route-id'));
	});
	$('ul.routes li').click(function() {
		setActiveRoute($(this).attr('data-route-id'));
	});
});