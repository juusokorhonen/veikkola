(() => {
  // routes.js
  var hoverRoute = function(route_id) {
    $("path[data-route-id=" + route_id + "]").addClass("hover");
    $("li[data-route-id=" + route_id + "]").addClass("hover");
    $(".post__header h3[data-route-id=" + route_id + "]").addClass("hover");
  };
  var unHoverRoute = function(route_id) {
    $("path[data-route-id=" + route_id + "]").removeClass("hover");
    $("li[data-route-id=" + route_id + "]").removeClass("hover");
    $(".post__header > h3[data-route-id=" + route_id + "]").removeClass("hover");
  };
  var setActiveRoute = function(route_id) {
    $(".topo-img-overlay-wrap path").removeClass("active");
    $("ul.routes li").removeClass("active");
    $(".post__header h3").removeClass("active");
    $("path[data-route-id=" + route_id + "]").addClass("active");
    $("li[data-route-id=" + route_id + "]").addClass("active");
    $(".post__header h3[data-route-id=" + route_id + "]").addClass("active");
  };
  $(function() {
    if (typeof activeRoute !== "undefined") {
      setActiveRoute(activeRoute);
    } else {
      var activeRouteElem = $("ul.routes li.active");
      if (activeRouteElem.length >= 1) {
        var activeRoute = activeRouteElem[0].getAttribute("data-route-id");
        setActiveRoute(activeRoute);
      }
    }
    $(".topo-img-overlay-wrap svg path").hover(function() {
      hoverRoute($(this).attr("data-route-id"));
    });
    $(".topo-img-overlay-wrap svg path").mouseout(function() {
      unHoverRoute($(this).attr("data-route-id"));
    });
    $(".topo-img-overlay-wrap svg path").click(function() {
      setActiveRoute($(this).attr("data-route-id"));
    });
    $("ul.routes li").hover(function() {
      hoverRoute($(this).attr("data-route-id"));
    });
    $("ul.routes li").mouseout(function() {
      unHoverRoute($(this).attr("data-route-id"));
    });
    $("ul.routes li").click(function() {
      setActiveRoute($(this).attr("data-route-id"));
    });
  });
})();
