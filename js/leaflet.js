(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // leaflet.js
  var require_stdin = __commonJS((exports, module) => {
    /* @preserve
     * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
     * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
     */
    !function(t, i) {
      "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {});
    }(exports, function(t) {
      "use strict";
      function h(t2) {
        for (var i2, e2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
          for (i2 in e2 = arguments[n2])
            t2[i2] = e2[i2];
        return t2;
      }
      var s = Object.create || function(t2) {
        return i.prototype = t2, new i();
      };
      function i() {
      }
      function p(t2, i2) {
        var e2 = Array.prototype.slice;
        if (t2.bind)
          return t2.bind.apply(t2, e2.call(arguments, 1));
        var n2 = e2.call(arguments, 2);
        return function() {
          return t2.apply(i2, n2.length ? n2.concat(e2.call(arguments)) : arguments);
        };
      }
      var e = 0;
      function m(t2) {
        return t2._leaflet_id = t2._leaflet_id || ++e, t2._leaflet_id;
      }
      function n(t2, i2, e2) {
        var n2, o2, s2 = function() {
          n2 = false, o2 && (r2.apply(e2, o2), o2 = false);
        }, r2 = function() {
          n2 ? o2 = arguments : (t2.apply(e2, arguments), setTimeout(s2, i2), n2 = true);
        };
        return r2;
      }
      function o(t2, i2, e2) {
        var n2 = i2[1], o2 = i2[0], s2 = n2 - o2;
        return t2 === n2 && e2 ? t2 : ((t2 - o2) % s2 + s2) % s2 + o2;
      }
      function a() {
        return false;
      }
      function r(t2, i2) {
        var e2 = Math.pow(10, void 0 === i2 ? 6 : i2);
        return Math.round(t2 * e2) / e2;
      }
      function u(t2) {
        return t2.trim ? t2.trim() : t2.replace(/^\s+|\s+$/g, "");
      }
      function l(t2) {
        return u(t2).split(/\s+/);
      }
      function c(t2, i2) {
        for (var e2 in (Object.prototype.hasOwnProperty.call(t2, "options") || (t2.options = t2.options ? s(t2.options) : {}), i2))
          t2.options[e2] = i2[e2];
        return t2.options;
      }
      function _(t2, i2, e2) {
        var n2 = [];
        for (var o2 in t2)
          n2.push(encodeURIComponent(e2 ? o2.toUpperCase() : o2) + "=" + encodeURIComponent(t2[o2]));
        return (i2 && -1 !== i2.indexOf("?") ? "&" : "?") + n2.join("&");
      }
      var d = /\{ *([\w_-]+) *\}/g;
      function f(t2, n2) {
        return t2.replace(d, function(t3, i2) {
          var e2 = n2[i2];
          if (void 0 === e2)
            throw new Error("No value provided for variable " + t3);
          return "function" == typeof e2 && (e2 = e2(n2)), e2;
        });
      }
      var g = Array.isArray || function(t2) {
        return "[object Array]" === Object.prototype.toString.call(t2);
      };
      function v(t2, i2) {
        for (var e2 = 0; e2 < t2.length; e2++)
          if (t2[e2] === i2)
            return e2;
        return -1;
      }
      var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function x(t2) {
        return window["webkit" + t2] || window["moz" + t2] || window["ms" + t2];
      }
      var w = 0;
      function P(t2) {
        var i2 = +new Date(), e2 = Math.max(0, 16 - (i2 - w));
        return w = i2 + e2, window.setTimeout(t2, e2);
      }
      var b = window.requestAnimationFrame || x("RequestAnimationFrame") || P, T = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function(t2) {
        window.clearTimeout(t2);
      };
      function M(t2, i2, e2) {
        if (!e2 || b !== P)
          return b.call(window, p(t2, i2));
        t2.call(i2);
      }
      function z(t2) {
        t2 && T.call(window, t2);
      }
      var C = {extend: h, create: s, bind: p, lastId: e, stamp: m, throttle: n, wrapNum: o, falseFn: a, formatNum: r, trim: u, splitWords: l, setOptions: c, getParamString: _, template: f, isArray: g, indexOf: v, emptyImageUrl: y, requestFn: b, cancelFn: T, requestAnimFrame: M, cancelAnimFrame: z};
      function S() {
      }
      S.extend = function(t2) {
        function i2() {
          this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }
        var e2 = i2.__super__ = this.prototype, n2 = s(e2);
        for (var o2 in ((n2.constructor = i2).prototype = n2, this))
          Object.prototype.hasOwnProperty.call(this, o2) && "prototype" !== o2 && "__super__" !== o2 && (i2[o2] = this[o2]);
        return t2.statics && (h(i2, t2.statics), delete t2.statics), t2.includes && (function(t3) {
          if ("undefined" == typeof L || !L || !L.Mixin)
            return;
          t3 = g(t3) ? t3 : [t3];
          for (var i3 = 0; i3 < t3.length; i3++)
            t3[i3] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }(t2.includes), h.apply(null, [n2].concat(t2.includes)), delete t2.includes), n2.options && (t2.options = h(s(n2.options), t2.options)), h(n2, t2), n2._initHooks = [], n2.callInitHooks = function() {
          if (!this._initHooksCalled) {
            e2.callInitHooks && e2.callInitHooks.call(this), this._initHooksCalled = true;
            for (var t3 = 0, i3 = n2._initHooks.length; t3 < i3; t3++)
              n2._initHooks[t3].call(this);
          }
        }, i2;
      }, S.include = function(t2) {
        return h(this.prototype, t2), this;
      }, S.mergeOptions = function(t2) {
        return h(this.prototype.options, t2), this;
      }, S.addInitHook = function(t2) {
        var i2 = Array.prototype.slice.call(arguments, 1), e2 = "function" == typeof t2 ? t2 : function() {
          this[t2].apply(this, i2);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e2), this;
      };
      var Z = {on: function(t2, i2, e2) {
        if ("object" == typeof t2)
          for (var n2 in t2)
            this._on(n2, t2[n2], i2);
        else
          for (var o2 = 0, s2 = (t2 = l(t2)).length; o2 < s2; o2++)
            this._on(t2[o2], i2, e2);
        return this;
      }, off: function(t2, i2, e2) {
        if (t2)
          if ("object" == typeof t2)
            for (var n2 in t2)
              this._off(n2, t2[n2], i2);
          else
            for (var o2 = 0, s2 = (t2 = l(t2)).length; o2 < s2; o2++)
              this._off(t2[o2], i2, e2);
        else
          delete this._events;
        return this;
      }, _on: function(t2, i2, e2) {
        this._events = this._events || {};
        var n2 = this._events[t2];
        n2 || (n2 = [], this._events[t2] = n2), e2 === this && (e2 = void 0);
        for (var o2 = {fn: i2, ctx: e2}, s2 = n2, r2 = 0, a2 = s2.length; r2 < a2; r2++)
          if (s2[r2].fn === i2 && s2[r2].ctx === e2)
            return;
        s2.push(o2);
      }, _off: function(t2, i2, e2) {
        var n2, o2, s2;
        if (this._events && (n2 = this._events[t2]))
          if (i2) {
            if (e2 === this && (e2 = void 0), n2)
              for (o2 = 0, s2 = n2.length; o2 < s2; o2++) {
                var r2 = n2[o2];
                if (r2.ctx === e2 && r2.fn === i2)
                  return r2.fn = a, this._firingCount && (this._events[t2] = n2 = n2.slice()), void n2.splice(o2, 1);
              }
          } else {
            for (o2 = 0, s2 = n2.length; o2 < s2; o2++)
              n2[o2].fn = a;
            delete this._events[t2];
          }
      }, fire: function(t2, i2, e2) {
        if (!this.listens(t2, e2))
          return this;
        var n2 = h({}, i2, {type: t2, target: this, sourceTarget: i2 && i2.sourceTarget || this});
        if (this._events) {
          var o2 = this._events[t2];
          if (o2) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var s2 = 0, r2 = o2.length; s2 < r2; s2++) {
              var a2 = o2[s2];
              a2.fn.call(a2.ctx || this, n2);
            }
            this._firingCount--;
          }
        }
        return e2 && this._propagateEvent(n2), this;
      }, listens: function(t2, i2) {
        var e2 = this._events && this._events[t2];
        if (e2 && e2.length)
          return true;
        if (i2) {
          for (var n2 in this._eventParents)
            if (this._eventParents[n2].listens(t2, i2))
              return true;
        }
        return false;
      }, once: function(t2, i2, e2) {
        if ("object" == typeof t2) {
          for (var n2 in t2)
            this.once(n2, t2[n2], i2);
          return this;
        }
        var o2 = p(function() {
          this.off(t2, i2, e2).off(t2, o2, e2);
        }, this);
        return this.on(t2, i2, e2).on(t2, o2, e2);
      }, addEventParent: function(t2) {
        return this._eventParents = this._eventParents || {}, this._eventParents[m(t2)] = t2, this;
      }, removeEventParent: function(t2) {
        return this._eventParents && delete this._eventParents[m(t2)], this;
      }, _propagateEvent: function(t2) {
        for (var i2 in this._eventParents)
          this._eventParents[i2].fire(t2.type, h({layer: t2.target, propagatedFrom: t2.target}, t2), true);
      }};
      Z.addEventListener = Z.on, Z.removeEventListener = Z.clearAllEventListeners = Z.off, Z.addOneTimeEventListener = Z.once, Z.fireEvent = Z.fire, Z.hasEventListeners = Z.listens;
      var E = S.extend(Z);
      function k(t2, i2, e2) {
        this.x = e2 ? Math.round(t2) : t2, this.y = e2 ? Math.round(i2) : i2;
      }
      var B = Math.trunc || function(t2) {
        return 0 < t2 ? Math.floor(t2) : Math.ceil(t2);
      };
      function A(t2, i2, e2) {
        return t2 instanceof k ? t2 : g(t2) ? new k(t2[0], t2[1]) : null == t2 ? t2 : "object" == typeof t2 && "x" in t2 && "y" in t2 ? new k(t2.x, t2.y) : new k(t2, i2, e2);
      }
      function I(t2, i2) {
        if (t2)
          for (var e2 = i2 ? [t2, i2] : t2, n2 = 0, o2 = e2.length; n2 < o2; n2++)
            this.extend(e2[n2]);
      }
      function O(t2, i2) {
        return !t2 || t2 instanceof I ? t2 : new I(t2, i2);
      }
      function R(t2, i2) {
        if (t2)
          for (var e2 = i2 ? [t2, i2] : t2, n2 = 0, o2 = e2.length; n2 < o2; n2++)
            this.extend(e2[n2]);
      }
      function N(t2, i2) {
        return t2 instanceof R ? t2 : new R(t2, i2);
      }
      function D(t2, i2, e2) {
        if (isNaN(t2) || isNaN(i2))
          throw new Error("Invalid LatLng object: (" + t2 + ", " + i2 + ")");
        this.lat = +t2, this.lng = +i2, void 0 !== e2 && (this.alt = +e2);
      }
      function j(t2, i2, e2) {
        return t2 instanceof D ? t2 : g(t2) && "object" != typeof t2[0] ? 3 === t2.length ? new D(t2[0], t2[1], t2[2]) : 2 === t2.length ? new D(t2[0], t2[1]) : null : null == t2 ? t2 : "object" == typeof t2 && "lat" in t2 ? new D(t2.lat, "lng" in t2 ? t2.lng : t2.lon, t2.alt) : void 0 === i2 ? null : new D(t2, i2, e2);
      }
      k.prototype = {clone: function() {
        return new k(this.x, this.y);
      }, add: function(t2) {
        return this.clone()._add(A(t2));
      }, _add: function(t2) {
        return this.x += t2.x, this.y += t2.y, this;
      }, subtract: function(t2) {
        return this.clone()._subtract(A(t2));
      }, _subtract: function(t2) {
        return this.x -= t2.x, this.y -= t2.y, this;
      }, divideBy: function(t2) {
        return this.clone()._divideBy(t2);
      }, _divideBy: function(t2) {
        return this.x /= t2, this.y /= t2, this;
      }, multiplyBy: function(t2) {
        return this.clone()._multiplyBy(t2);
      }, _multiplyBy: function(t2) {
        return this.x *= t2, this.y *= t2, this;
      }, scaleBy: function(t2) {
        return new k(this.x * t2.x, this.y * t2.y);
      }, unscaleBy: function(t2) {
        return new k(this.x / t2.x, this.y / t2.y);
      }, round: function() {
        return this.clone()._round();
      }, _round: function() {
        return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
      }, floor: function() {
        return this.clone()._floor();
      }, _floor: function() {
        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
      }, ceil: function() {
        return this.clone()._ceil();
      }, _ceil: function() {
        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
      }, trunc: function() {
        return this.clone()._trunc();
      }, _trunc: function() {
        return this.x = B(this.x), this.y = B(this.y), this;
      }, distanceTo: function(t2) {
        var i2 = (t2 = A(t2)).x - this.x, e2 = t2.y - this.y;
        return Math.sqrt(i2 * i2 + e2 * e2);
      }, equals: function(t2) {
        return (t2 = A(t2)).x === this.x && t2.y === this.y;
      }, contains: function(t2) {
        return t2 = A(t2), Math.abs(t2.x) <= Math.abs(this.x) && Math.abs(t2.y) <= Math.abs(this.y);
      }, toString: function() {
        return "Point(" + r(this.x) + ", " + r(this.y) + ")";
      }}, I.prototype = {extend: function(t2) {
        return t2 = A(t2), this.min || this.max ? (this.min.x = Math.min(t2.x, this.min.x), this.max.x = Math.max(t2.x, this.max.x), this.min.y = Math.min(t2.y, this.min.y), this.max.y = Math.max(t2.y, this.max.y)) : (this.min = t2.clone(), this.max = t2.clone()), this;
      }, getCenter: function(t2) {
        return new k((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t2);
      }, getBottomLeft: function() {
        return new k(this.min.x, this.max.y);
      }, getTopRight: function() {
        return new k(this.max.x, this.min.y);
      }, getTopLeft: function() {
        return this.min;
      }, getBottomRight: function() {
        return this.max;
      }, getSize: function() {
        return this.max.subtract(this.min);
      }, contains: function(t2) {
        var i2, e2;
        return (t2 = ("number" == typeof t2[0] || t2 instanceof k ? A : O)(t2)) instanceof I ? (i2 = t2.min, e2 = t2.max) : i2 = e2 = t2, i2.x >= this.min.x && e2.x <= this.max.x && i2.y >= this.min.y && e2.y <= this.max.y;
      }, intersects: function(t2) {
        t2 = O(t2);
        var i2 = this.min, e2 = this.max, n2 = t2.min, o2 = t2.max, s2 = o2.x >= i2.x && n2.x <= e2.x, r2 = o2.y >= i2.y && n2.y <= e2.y;
        return s2 && r2;
      }, overlaps: function(t2) {
        t2 = O(t2);
        var i2 = this.min, e2 = this.max, n2 = t2.min, o2 = t2.max, s2 = o2.x > i2.x && n2.x < e2.x, r2 = o2.y > i2.y && n2.y < e2.y;
        return s2 && r2;
      }, isValid: function() {
        return !(!this.min || !this.max);
      }}, R.prototype = {extend: function(t2) {
        var i2, e2, n2 = this._southWest, o2 = this._northEast;
        if (t2 instanceof D)
          e2 = i2 = t2;
        else {
          if (!(t2 instanceof R))
            return t2 ? this.extend(j(t2) || N(t2)) : this;
          if (i2 = t2._southWest, e2 = t2._northEast, !i2 || !e2)
            return this;
        }
        return n2 || o2 ? (n2.lat = Math.min(i2.lat, n2.lat), n2.lng = Math.min(i2.lng, n2.lng), o2.lat = Math.max(e2.lat, o2.lat), o2.lng = Math.max(e2.lng, o2.lng)) : (this._southWest = new D(i2.lat, i2.lng), this._northEast = new D(e2.lat, e2.lng)), this;
      }, pad: function(t2) {
        var i2 = this._southWest, e2 = this._northEast, n2 = Math.abs(i2.lat - e2.lat) * t2, o2 = Math.abs(i2.lng - e2.lng) * t2;
        return new R(new D(i2.lat - n2, i2.lng - o2), new D(e2.lat + n2, e2.lng + o2));
      }, getCenter: function() {
        return new D((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
      }, getSouthWest: function() {
        return this._southWest;
      }, getNorthEast: function() {
        return this._northEast;
      }, getNorthWest: function() {
        return new D(this.getNorth(), this.getWest());
      }, getSouthEast: function() {
        return new D(this.getSouth(), this.getEast());
      }, getWest: function() {
        return this._southWest.lng;
      }, getSouth: function() {
        return this._southWest.lat;
      }, getEast: function() {
        return this._northEast.lng;
      }, getNorth: function() {
        return this._northEast.lat;
      }, contains: function(t2) {
        t2 = ("number" == typeof t2[0] || t2 instanceof D || "lat" in t2 ? j : N)(t2);
        var i2, e2, n2 = this._southWest, o2 = this._northEast;
        return t2 instanceof R ? (i2 = t2.getSouthWest(), e2 = t2.getNorthEast()) : i2 = e2 = t2, i2.lat >= n2.lat && e2.lat <= o2.lat && i2.lng >= n2.lng && e2.lng <= o2.lng;
      }, intersects: function(t2) {
        t2 = N(t2);
        var i2 = this._southWest, e2 = this._northEast, n2 = t2.getSouthWest(), o2 = t2.getNorthEast(), s2 = o2.lat >= i2.lat && n2.lat <= e2.lat, r2 = o2.lng >= i2.lng && n2.lng <= e2.lng;
        return s2 && r2;
      }, overlaps: function(t2) {
        t2 = N(t2);
        var i2 = this._southWest, e2 = this._northEast, n2 = t2.getSouthWest(), o2 = t2.getNorthEast(), s2 = o2.lat > i2.lat && n2.lat < e2.lat, r2 = o2.lng > i2.lng && n2.lng < e2.lng;
        return s2 && r2;
      }, toBBoxString: function() {
        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
      }, equals: function(t2, i2) {
        return !!t2 && (t2 = N(t2), this._southWest.equals(t2.getSouthWest(), i2) && this._northEast.equals(t2.getNorthEast(), i2));
      }, isValid: function() {
        return !(!this._southWest || !this._northEast);
      }};
      var W, H = {latLngToPoint: function(t2, i2) {
        var e2 = this.projection.project(t2), n2 = this.scale(i2);
        return this.transformation._transform(e2, n2);
      }, pointToLatLng: function(t2, i2) {
        var e2 = this.scale(i2), n2 = this.transformation.untransform(t2, e2);
        return this.projection.unproject(n2);
      }, project: function(t2) {
        return this.projection.project(t2);
      }, unproject: function(t2) {
        return this.projection.unproject(t2);
      }, scale: function(t2) {
        return 256 * Math.pow(2, t2);
      }, zoom: function(t2) {
        return Math.log(t2 / 256) / Math.LN2;
      }, getProjectedBounds: function(t2) {
        if (this.infinite)
          return null;
        var i2 = this.projection.bounds, e2 = this.scale(t2);
        return new I(this.transformation.transform(i2.min, e2), this.transformation.transform(i2.max, e2));
      }, infinite: !(D.prototype = {equals: function(t2, i2) {
        return !!t2 && (t2 = j(t2), Math.max(Math.abs(this.lat - t2.lat), Math.abs(this.lng - t2.lng)) <= (void 0 === i2 ? 1e-9 : i2));
      }, toString: function(t2) {
        return "LatLng(" + r(this.lat, t2) + ", " + r(this.lng, t2) + ")";
      }, distanceTo: function(t2) {
        return F.distance(this, j(t2));
      }, wrap: function() {
        return F.wrapLatLng(this);
      }, toBounds: function(t2) {
        var i2 = 180 * t2 / 40075017, e2 = i2 / Math.cos(Math.PI / 180 * this.lat);
        return N([this.lat - i2, this.lng - e2], [this.lat + i2, this.lng + e2]);
      }, clone: function() {
        return new D(this.lat, this.lng, this.alt);
      }}), wrapLatLng: function(t2) {
        var i2 = this.wrapLng ? o(t2.lng, this.wrapLng, true) : t2.lng;
        return new D(this.wrapLat ? o(t2.lat, this.wrapLat, true) : t2.lat, i2, t2.alt);
      }, wrapLatLngBounds: function(t2) {
        var i2 = t2.getCenter(), e2 = this.wrapLatLng(i2), n2 = i2.lat - e2.lat, o2 = i2.lng - e2.lng;
        if (0 == n2 && 0 == o2)
          return t2;
        var s2 = t2.getSouthWest(), r2 = t2.getNorthEast();
        return new R(new D(s2.lat - n2, s2.lng - o2), new D(r2.lat - n2, r2.lng - o2));
      }}, F = h({}, H, {wrapLng: [-180, 180], R: 6371e3, distance: function(t2, i2) {
        var e2 = Math.PI / 180, n2 = t2.lat * e2, o2 = i2.lat * e2, s2 = Math.sin((i2.lat - t2.lat) * e2 / 2), r2 = Math.sin((i2.lng - t2.lng) * e2 / 2), a2 = s2 * s2 + Math.cos(n2) * Math.cos(o2) * r2 * r2, h2 = 2 * Math.atan2(Math.sqrt(a2), Math.sqrt(1 - a2));
        return this.R * h2;
      }}), U = 6378137, V = {R: U, MAX_LATITUDE: 85.0511287798, project: function(t2) {
        var i2 = Math.PI / 180, e2 = this.MAX_LATITUDE, n2 = Math.max(Math.min(e2, t2.lat), -e2), o2 = Math.sin(n2 * i2);
        return new k(this.R * t2.lng * i2, this.R * Math.log((1 + o2) / (1 - o2)) / 2);
      }, unproject: function(t2) {
        var i2 = 180 / Math.PI;
        return new D((2 * Math.atan(Math.exp(t2.y / this.R)) - Math.PI / 2) * i2, t2.x * i2 / this.R);
      }, bounds: new I([-(W = U * Math.PI), -W], [W, W])};
      function q(t2, i2, e2, n2) {
        if (g(t2))
          return this._a = t2[0], this._b = t2[1], this._c = t2[2], void (this._d = t2[3]);
        this._a = t2, this._b = i2, this._c = e2, this._d = n2;
      }
      function G(t2, i2, e2, n2) {
        return new q(t2, i2, e2, n2);
      }
      q.prototype = {transform: function(t2, i2) {
        return this._transform(t2.clone(), i2);
      }, _transform: function(t2, i2) {
        return i2 = i2 || 1, t2.x = i2 * (this._a * t2.x + this._b), t2.y = i2 * (this._c * t2.y + this._d), t2;
      }, untransform: function(t2, i2) {
        return i2 = i2 || 1, new k((t2.x / i2 - this._b) / this._a, (t2.y / i2 - this._d) / this._c);
      }};
      var K, Y = h({}, F, {code: "EPSG:3857", projection: V, transformation: G(K = 0.5 / (Math.PI * V.R), 0.5, -K, 0.5)}), X = h({}, Y, {code: "EPSG:900913"});
      function J(t2) {
        return document.createElementNS("http://www.w3.org/2000/svg", t2);
      }
      function $(t2, i2) {
        for (var e2, n2, o2, s2, r2 = "", a2 = 0, h2 = t2.length; a2 < h2; a2++) {
          for (e2 = 0, n2 = (o2 = t2[a2]).length; e2 < n2; e2++)
            r2 += (e2 ? "L" : "M") + (s2 = o2[e2]).x + " " + s2.y;
          r2 += i2 ? Zt ? "z" : "x" : "";
        }
        return r2 || "M0 0";
      }
      var Q = document.documentElement.style, tt = "ActiveXObject" in window, it = tt && !document.addEventListener, et = "msLaunchUri" in navigator && !("documentMode" in document), nt = kt("webkit"), ot = kt("android"), st = kt("android 2") || kt("android 3"), rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), at = ot && kt("Google") && rt < 537 && !("AudioNode" in window), ht = !!window.opera, ut = !et && kt("chrome"), lt = kt("gecko") && !nt && !ht && !tt, ct = !ut && kt("safari"), _t = kt("phantom"), dt = "OTransition" in Q, pt = 0 === navigator.platform.indexOf("Win"), mt = tt && "transition" in Q, ft = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !st, gt = "MozPerspective" in Q, vt = !window.L_DISABLE_3D && (mt || ft || gt) && !dt && !_t, yt = "undefined" != typeof orientation || kt("mobile"), xt = yt && nt, wt = yt && ft, Pt = !window.PointerEvent && window.MSPointerEvent, Lt = !(!window.PointerEvent && !Pt), bt = !window.L_NO_TOUCH && (Lt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), Tt = yt && ht, Mt = yt && lt, zt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), Ct = function() {
        var t2 = false;
        try {
          var i2 = Object.defineProperty({}, "passive", {get: function() {
            t2 = true;
          }});
          window.addEventListener("testPassiveEventSupport", a, i2), window.removeEventListener("testPassiveEventSupport", a, i2);
        } catch (t3) {
        }
        return t2;
      }(), St = !!document.createElement("canvas").getContext, Zt = !(!document.createElementNS || !J("svg").createSVGRect), Et = !Zt && function() {
        try {
          var t2 = document.createElement("div");
          t2.innerHTML = '<v:shape adj="1"/>';
          var i2 = t2.firstChild;
          return i2.style.behavior = "url(#default#VML)", i2 && "object" == typeof i2.adj;
        } catch (t3) {
          return false;
        }
      }();
      function kt(t2) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t2);
      }
      var Bt = {ie: tt, ielt9: it, edge: et, webkit: nt, android: ot, android23: st, androidStock: at, opera: ht, chrome: ut, gecko: lt, safari: ct, phantom: _t, opera12: dt, win: pt, ie3d: mt, webkit3d: ft, gecko3d: gt, any3d: vt, mobile: yt, mobileWebkit: xt, mobileWebkit3d: wt, msPointer: Pt, pointer: Lt, touch: bt, mobileOpera: Tt, mobileGecko: Mt, retina: zt, passiveEvents: Ct, canvas: St, svg: Zt, vml: Et}, At = Pt ? "MSPointerDown" : "pointerdown", It = Pt ? "MSPointerMove" : "pointermove", Ot = Pt ? "MSPointerUp" : "pointerup", Rt = Pt ? "MSPointerCancel" : "pointercancel", Nt = {}, Dt = false;
      function jt(t2, i2, e2, n2) {
        function o2(t3) {
          Ut(t3, r2);
        }
        var s2, r2, a2, h2, u2, l2, c2, _2;
        function d2(t3) {
          t3.pointerType === (t3.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t3.buttons || Ut(t3, h2);
        }
        return "touchstart" === i2 ? (u2 = t2, l2 = e2, c2 = n2, _2 = p(function(t3) {
          t3.MSPOINTER_TYPE_TOUCH && t3.pointerType === t3.MSPOINTER_TYPE_TOUCH && Ri(t3), Ut(t3, l2);
        }), u2["_leaflet_touchstart" + c2] = _2, u2.addEventListener(At, _2, false), Dt || (document.addEventListener(At, Wt, true), document.addEventListener(It, Ht, true), document.addEventListener(Ot, Ft, true), document.addEventListener(Rt, Ft, true), Dt = true)) : "touchmove" === i2 ? (h2 = e2, (a2 = t2)["_leaflet_touchmove" + n2] = d2, a2.addEventListener(It, d2, false)) : "touchend" === i2 && (r2 = e2, (s2 = t2)["_leaflet_touchend" + n2] = o2, s2.addEventListener(Ot, o2, false), s2.addEventListener(Rt, o2, false)), this;
      }
      function Wt(t2) {
        Nt[t2.pointerId] = t2;
      }
      function Ht(t2) {
        Nt[t2.pointerId] && (Nt[t2.pointerId] = t2);
      }
      function Ft(t2) {
        delete Nt[t2.pointerId];
      }
      function Ut(t2, i2) {
        for (var e2 in (t2.touches = [], Nt))
          t2.touches.push(Nt[e2]);
        t2.changedTouches = [t2], i2(t2);
      }
      var Vt = Pt ? "MSPointerDown" : Lt ? "pointerdown" : "touchstart", qt = Pt ? "MSPointerUp" : Lt ? "pointerup" : "touchend", Gt = "_leaflet_";
      var Kt, Yt, Xt, Jt, $t, Qt, ti = fi(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ii = fi(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), ei = "webkitTransition" === ii || "OTransition" === ii ? ii + "End" : "transitionend";
      function ni(t2) {
        return "string" == typeof t2 ? document.getElementById(t2) : t2;
      }
      function oi(t2, i2) {
        var e2, n2 = t2.style[i2] || t2.currentStyle && t2.currentStyle[i2];
        return n2 && "auto" !== n2 || !document.defaultView || (n2 = (e2 = document.defaultView.getComputedStyle(t2, null)) ? e2[i2] : null), "auto" === n2 ? null : n2;
      }
      function si(t2, i2, e2) {
        var n2 = document.createElement(t2);
        return n2.className = i2 || "", e2 && e2.appendChild(n2), n2;
      }
      function ri(t2) {
        var i2 = t2.parentNode;
        i2 && i2.removeChild(t2);
      }
      function ai(t2) {
        for (; t2.firstChild; )
          t2.removeChild(t2.firstChild);
      }
      function hi(t2) {
        var i2 = t2.parentNode;
        i2 && i2.lastChild !== t2 && i2.appendChild(t2);
      }
      function ui(t2) {
        var i2 = t2.parentNode;
        i2 && i2.firstChild !== t2 && i2.insertBefore(t2, i2.firstChild);
      }
      function li(t2, i2) {
        if (void 0 !== t2.classList)
          return t2.classList.contains(i2);
        var e2 = pi(t2);
        return 0 < e2.length && new RegExp("(^|\\s)" + i2 + "(\\s|$)").test(e2);
      }
      function ci(t2, i2) {
        var e2;
        if (void 0 !== t2.classList)
          for (var n2 = l(i2), o2 = 0, s2 = n2.length; o2 < s2; o2++)
            t2.classList.add(n2[o2]);
        else
          li(t2, i2) || di(t2, ((e2 = pi(t2)) ? e2 + " " : "") + i2);
      }
      function _i(t2, i2) {
        void 0 !== t2.classList ? t2.classList.remove(i2) : di(t2, u((" " + pi(t2) + " ").replace(" " + i2 + " ", " ")));
      }
      function di(t2, i2) {
        void 0 === t2.className.baseVal ? t2.className = i2 : t2.className.baseVal = i2;
      }
      function pi(t2) {
        return t2.correspondingElement && (t2 = t2.correspondingElement), void 0 === t2.className.baseVal ? t2.className : t2.className.baseVal;
      }
      function mi(t2, i2) {
        "opacity" in t2.style ? t2.style.opacity = i2 : "filter" in t2.style && function(t3, i3) {
          var e2 = false, n2 = "DXImageTransform.Microsoft.Alpha";
          try {
            e2 = t3.filters.item(n2);
          } catch (t4) {
            if (1 === i3)
              return;
          }
          i3 = Math.round(100 * i3), e2 ? (e2.Enabled = 100 !== i3, e2.Opacity = i3) : t3.style.filter += " progid:" + n2 + "(opacity=" + i3 + ")";
        }(t2, i2);
      }
      function fi(t2) {
        for (var i2 = document.documentElement.style, e2 = 0; e2 < t2.length; e2++)
          if (t2[e2] in i2)
            return t2[e2];
        return false;
      }
      function gi(t2, i2, e2) {
        var n2 = i2 || new k(0, 0);
        t2.style[ti] = (mt ? "translate(" + n2.x + "px," + n2.y + "px)" : "translate3d(" + n2.x + "px," + n2.y + "px,0)") + (e2 ? " scale(" + e2 + ")" : "");
      }
      function vi(t2, i2) {
        t2._leaflet_pos = i2, vt ? gi(t2, i2) : (t2.style.left = i2.x + "px", t2.style.top = i2.y + "px");
      }
      function yi(t2) {
        return t2._leaflet_pos || new k(0, 0);
      }
      function xi() {
        zi(window, "dragstart", Ri);
      }
      function wi() {
        Si(window, "dragstart", Ri);
      }
      function Pi(t2) {
        for (; -1 === t2.tabIndex; )
          t2 = t2.parentNode;
        t2.style && (Li(), Qt = ($t = t2).style.outline, t2.style.outline = "none", zi(window, "keydown", Li));
      }
      function Li() {
        $t && ($t.style.outline = Qt, Qt = $t = void 0, Si(window, "keydown", Li));
      }
      function bi(t2) {
        for (; !((t2 = t2.parentNode).offsetWidth && t2.offsetHeight || t2 === document.body); )
          ;
        return t2;
      }
      function Ti(t2) {
        var i2 = t2.getBoundingClientRect();
        return {x: i2.width / t2.offsetWidth || 1, y: i2.height / t2.offsetHeight || 1, boundingClientRect: i2};
      }
      Jt = "onselectstart" in document ? (Xt = function() {
        zi(window, "selectstart", Ri);
      }, function() {
        Si(window, "selectstart", Ri);
      }) : (Yt = fi(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), Xt = function() {
        var t2;
        Yt && (t2 = document.documentElement.style, Kt = t2[Yt], t2[Yt] = "none");
      }, function() {
        Yt && (document.documentElement.style[Yt] = Kt, Kt = void 0);
      });
      var Mi = {TRANSFORM: ti, TRANSITION: ii, TRANSITION_END: ei, get: ni, getStyle: oi, create: si, remove: ri, empty: ai, toFront: hi, toBack: ui, hasClass: li, addClass: ci, removeClass: _i, setClass: di, getClass: pi, setOpacity: mi, testProp: fi, setTransform: gi, setPosition: vi, getPosition: yi, disableTextSelection: Xt, enableTextSelection: Jt, disableImageDrag: xi, enableImageDrag: wi, preventOutline: Pi, restoreOutline: Li, getSizedParentNode: bi, getScale: Ti};
      function zi(t2, i2, e2, n2) {
        if ("object" == typeof i2)
          for (var o2 in i2)
            ki(t2, o2, i2[o2], e2);
        else
          for (var s2 = 0, r2 = (i2 = l(i2)).length; s2 < r2; s2++)
            ki(t2, i2[s2], e2, n2);
        return this;
      }
      var Ci = "_leaflet_events";
      function Si(t2, i2, e2, n2) {
        if ("object" == typeof i2)
          for (var o2 in i2)
            Bi(t2, o2, i2[o2], e2);
        else if (i2)
          for (var s2 = 0, r2 = (i2 = l(i2)).length; s2 < r2; s2++)
            Bi(t2, i2[s2], e2, n2);
        else {
          for (var a2 in t2[Ci])
            Bi(t2, a2, t2[Ci][a2]);
          delete t2[Ci];
        }
        return this;
      }
      function Zi() {
        return Lt && (!et && !ct);
      }
      var Ei = {mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel"};
      function ki(i2, t2, e2, n2) {
        var o2 = t2 + m(e2) + (n2 ? "_" + m(n2) : "");
        if (i2[Ci] && i2[Ci][o2])
          return this;
        var s2, r2, a2, h2, u2, l2, c2 = function(t3) {
          return e2.call(n2 || i2, t3 || window.event);
        }, _2 = c2;
        function d2(t3) {
          if (Lt) {
            if (!t3.isPrimary)
              return;
            if ("mouse" === t3.pointerType)
              return;
          } else if (1 < t3.touches.length)
            return;
          var i3 = Date.now(), e3 = i3 - (h2 || i3);
          u2 = t3.touches ? t3.touches[0] : t3, l2 = 0 < e3 && e3 <= 250, h2 = i3;
        }
        function p2(t3) {
          if (l2 && !u2.cancelBubble) {
            if (Lt) {
              if ("mouse" === t3.pointerType)
                return;
              var i3, e3, n3 = {};
              for (e3 in u2)
                i3 = u2[e3], n3[e3] = i3 && i3.bind ? i3.bind(u2) : i3;
              u2 = n3;
            }
            u2.type = "dblclick", u2.button = 0, r2(u2), h2 = null;
          }
        }
        Lt && 0 === t2.indexOf("touch") ? jt(i2, t2, c2, o2) : bt && "dblclick" === t2 && !Zi() ? (r2 = c2, l2 = false, (s2 = i2)[Gt + Vt + (a2 = o2)] = d2, s2[Gt + qt + a2] = p2, s2[Gt + "dblclick" + a2] = r2, s2.addEventListener(Vt, d2, !!Ct && {passive: false}), s2.addEventListener(qt, p2, !!Ct && {passive: false}), s2.addEventListener("dblclick", r2, false)) : "addEventListener" in i2 ? "touchstart" === t2 || "touchmove" === t2 || "wheel" === t2 || "mousewheel" === t2 ? i2.addEventListener(Ei[t2] || t2, c2, !!Ct && {passive: false}) : "mouseenter" === t2 || "mouseleave" === t2 ? (c2 = function(t3) {
          t3 = t3 || window.event, Vi(i2, t3) && _2(t3);
        }, i2.addEventListener(Ei[t2], c2, false)) : i2.addEventListener(t2, _2, false) : "attachEvent" in i2 && i2.attachEvent("on" + t2, c2), i2[Ci] = i2[Ci] || {}, i2[Ci][o2] = c2;
      }
      function Bi(t2, i2, e2, n2) {
        var o2, s2, r2, a2, h2, u2, l2, c2, _2 = i2 + m(e2) + (n2 ? "_" + m(n2) : ""), d2 = t2[Ci] && t2[Ci][_2];
        if (!d2)
          return this;
        Lt && 0 === i2.indexOf("touch") ? (c2 = (u2 = t2)["_leaflet_" + (l2 = i2) + _2], "touchstart" === l2 ? u2.removeEventListener(At, c2, false) : "touchmove" === l2 ? u2.removeEventListener(It, c2, false) : "touchend" === l2 && (u2.removeEventListener(Ot, c2, false), u2.removeEventListener(Rt, c2, false))) : bt && "dblclick" === i2 && !Zi() ? (r2 = (o2 = t2)[Gt + Vt + (s2 = _2)], a2 = o2[Gt + qt + s2], h2 = o2[Gt + "dblclick" + s2], o2.removeEventListener(Vt, r2, !!Ct && {passive: false}), o2.removeEventListener(qt, a2, !!Ct && {passive: false}), o2.removeEventListener("dblclick", h2, false)) : "removeEventListener" in t2 ? t2.removeEventListener(Ei[i2] || i2, d2, false) : "detachEvent" in t2 && t2.detachEvent("on" + i2, d2), t2[Ci][_2] = null;
      }
      function Ai(t2) {
        return t2.stopPropagation ? t2.stopPropagation() : t2.originalEvent ? t2.originalEvent._stopped = true : t2.cancelBubble = true, Ui(t2), this;
      }
      function Ii(t2) {
        return ki(t2, "wheel", Ai), this;
      }
      function Oi(t2) {
        return zi(t2, "mousedown touchstart dblclick", Ai), ki(t2, "click", Fi), this;
      }
      function Ri(t2) {
        return t2.preventDefault ? t2.preventDefault() : t2.returnValue = false, this;
      }
      function Ni(t2) {
        return Ri(t2), Ai(t2), this;
      }
      function Di(t2, i2) {
        if (!i2)
          return new k(t2.clientX, t2.clientY);
        var e2 = Ti(i2), n2 = e2.boundingClientRect;
        return new k((t2.clientX - n2.left) / e2.x - i2.clientLeft, (t2.clientY - n2.top) / e2.y - i2.clientTop);
      }
      var ji = pt && ut ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;
      function Wi(t2) {
        return et ? t2.wheelDeltaY / 2 : t2.deltaY && 0 === t2.deltaMode ? -t2.deltaY / ji : t2.deltaY && 1 === t2.deltaMode ? 20 * -t2.deltaY : t2.deltaY && 2 === t2.deltaMode ? 60 * -t2.deltaY : t2.deltaX || t2.deltaZ ? 0 : t2.wheelDelta ? (t2.wheelDeltaY || t2.wheelDelta) / 2 : t2.detail && Math.abs(t2.detail) < 32765 ? 20 * -t2.detail : t2.detail ? t2.detail / -32765 * 60 : 0;
      }
      var Hi = {};
      function Fi(t2) {
        Hi[t2.type] = true;
      }
      function Ui(t2) {
        var i2 = Hi[t2.type];
        return Hi[t2.type] = false, i2;
      }
      function Vi(t2, i2) {
        var e2 = i2.relatedTarget;
        if (!e2)
          return true;
        try {
          for (; e2 && e2 !== t2; )
            e2 = e2.parentNode;
        } catch (t3) {
          return false;
        }
        return e2 !== t2;
      }
      var qi = {on: zi, off: Si, stopPropagation: Ai, disableScrollPropagation: Ii, disableClickPropagation: Oi, preventDefault: Ri, stop: Ni, getMousePosition: Di, getWheelDelta: Wi, fakeStop: Fi, skipped: Ui, isExternalTarget: Vi, addListener: zi, removeListener: Si}, Gi = E.extend({run: function(t2, i2, e2, n2) {
        this.stop(), this._el = t2, this._inProgress = true, this._duration = e2 || 0.25, this._easeOutPower = 1 / Math.max(n2 || 0.5, 0.2), this._startPos = yi(t2), this._offset = i2.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
      }, stop: function() {
        this._inProgress && (this._step(true), this._complete());
      }, _animate: function() {
        this._animId = M(this._animate, this), this._step();
      }, _step: function(t2) {
        var i2 = new Date() - this._startTime, e2 = 1e3 * this._duration;
        i2 < e2 ? this._runFrame(this._easeOut(i2 / e2), t2) : (this._runFrame(1), this._complete());
      }, _runFrame: function(t2, i2) {
        var e2 = this._startPos.add(this._offset.multiplyBy(t2));
        i2 && e2._round(), vi(this._el, e2), this.fire("step");
      }, _complete: function() {
        z(this._animId), this._inProgress = false, this.fire("end");
      }, _easeOut: function(t2) {
        return 1 - Math.pow(1 - t2, this._easeOutPower);
      }}), Ki = E.extend({options: {crs: Y, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: true, zoomAnimationThreshold: 4, fadeAnimation: true, markerZoomAnimation: true, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: true}, initialize: function(t2, i2) {
        i2 = c(this, i2), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = true, this._initContainer(t2), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), i2.maxBounds && this.setMaxBounds(i2.maxBounds), void 0 !== i2.zoom && (this._zoom = this._limitZoom(i2.zoom)), i2.center && void 0 !== i2.zoom && this.setView(j(i2.center), i2.zoom, {reset: true}), this.callInitHooks(), this._zoomAnimated = ii && vt && !Tt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), zi(this._proxy, ei, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
      }, setView: function(t2, i2, e2) {
        if ((i2 = void 0 === i2 ? this._zoom : this._limitZoom(i2), t2 = this._limitCenter(j(t2), i2, this.options.maxBounds), e2 = e2 || {}, this._stop(), this._loaded && !e2.reset && true !== e2) && (void 0 !== e2.animate && (e2.zoom = h({animate: e2.animate}, e2.zoom), e2.pan = h({animate: e2.animate, duration: e2.duration}, e2.pan)), this._zoom !== i2 ? this._tryAnimatedZoom && this._tryAnimatedZoom(t2, i2, e2.zoom) : this._tryAnimatedPan(t2, e2.pan)))
          return clearTimeout(this._sizeTimer), this;
        return this._resetView(t2, i2), this;
      }, setZoom: function(t2, i2) {
        return this._loaded ? this.setView(this.getCenter(), t2, {zoom: i2}) : (this._zoom = t2, this);
      }, zoomIn: function(t2, i2) {
        return t2 = t2 || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t2, i2);
      }, zoomOut: function(t2, i2) {
        return t2 = t2 || (vt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t2, i2);
      }, setZoomAround: function(t2, i2, e2) {
        var n2 = this.getZoomScale(i2), o2 = this.getSize().divideBy(2), s2 = (t2 instanceof k ? t2 : this.latLngToContainerPoint(t2)).subtract(o2).multiplyBy(1 - 1 / n2), r2 = this.containerPointToLatLng(o2.add(s2));
        return this.setView(r2, i2, {zoom: e2});
      }, _getBoundsCenterZoom: function(t2, i2) {
        i2 = i2 || {}, t2 = t2.getBounds ? t2.getBounds() : N(t2);
        var e2 = A(i2.paddingTopLeft || i2.padding || [0, 0]), n2 = A(i2.paddingBottomRight || i2.padding || [0, 0]), o2 = this.getBoundsZoom(t2, false, e2.add(n2));
        if ((o2 = "number" == typeof i2.maxZoom ? Math.min(i2.maxZoom, o2) : o2) === 1 / 0)
          return {center: t2.getCenter(), zoom: o2};
        var s2 = n2.subtract(e2).divideBy(2), r2 = this.project(t2.getSouthWest(), o2), a2 = this.project(t2.getNorthEast(), o2);
        return {center: this.unproject(r2.add(a2).divideBy(2).add(s2), o2), zoom: o2};
      }, fitBounds: function(t2, i2) {
        if (!(t2 = N(t2)).isValid())
          throw new Error("Bounds are not valid.");
        var e2 = this._getBoundsCenterZoom(t2, i2);
        return this.setView(e2.center, e2.zoom, i2);
      }, fitWorld: function(t2) {
        return this.fitBounds([[-90, -180], [90, 180]], t2);
      }, panTo: function(t2, i2) {
        return this.setView(t2, this._zoom, {pan: i2});
      }, panBy: function(t2, i2) {
        return i2 = i2 || {}, (t2 = A(t2).round()).x || t2.y ? (true === i2.animate || this.getSize().contains(t2) ? (this._panAnim || (this._panAnim = new Gi(), this._panAnim.on({step: this._onPanTransitionStep, end: this._onPanTransitionEnd}, this)), i2.noMoveStart || this.fire("movestart"), false !== i2.animate ? (ci(this._mapPane, "leaflet-pan-anim"), e2 = this._getMapPanePos().subtract(t2).round(), this._panAnim.run(this._mapPane, e2, i2.duration || 0.25, i2.easeLinearity)) : (this._rawPanBy(t2), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t2)), this.getZoom()), this) : this.fire("moveend");
        var e2;
      }, flyTo: function(s2, r2, t2) {
        if (false === (t2 = t2 || {}).animate || !vt)
          return this.setView(s2, r2, t2);
        this._stop();
        var a2 = this.project(this.getCenter()), h2 = this.project(s2), i2 = this.getSize(), u2 = this._zoom;
        s2 = j(s2), r2 = void 0 === r2 ? u2 : r2;
        var l2 = Math.max(i2.x, i2.y), n2 = l2 * this.getZoomScale(u2, r2), c2 = h2.distanceTo(a2) || 1, _2 = 1.42, o2 = _2 * _2;
        function e2(t3) {
          var i3 = (n2 * n2 - l2 * l2 + (t3 ? -1 : 1) * o2 * o2 * c2 * c2) / (2 * (t3 ? n2 : l2) * o2 * c2), e3 = Math.sqrt(i3 * i3 + 1) - i3;
          return e3 < 1e-9 ? -18 : Math.log(e3);
        }
        function d2(t3) {
          return (Math.exp(t3) - Math.exp(-t3)) / 2;
        }
        function p2(t3) {
          return (Math.exp(t3) + Math.exp(-t3)) / 2;
        }
        var m2 = e2(0);
        function f2(t3) {
          return l2 * (p2(m2) * (d2(i3 = m2 + _2 * t3) / p2(i3)) - d2(m2)) / o2;
          var i3;
        }
        var g2 = Date.now(), v2 = (e2(1) - m2) / _2, y2 = t2.duration ? 1e3 * t2.duration : 1e3 * v2 * 0.8;
        return this._moveStart(true, t2.noMoveStart), function t3() {
          var i3, e3, n3 = (Date.now() - g2) / y2, o3 = (i3 = n3, (1 - Math.pow(1 - i3, 1.5)) * v2);
          n3 <= 1 ? (this._flyToFrame = M(t3, this), this._move(this.unproject(a2.add(h2.subtract(a2).multiplyBy(f2(o3) / c2)), u2), this.getScaleZoom(l2 / (e3 = o3, l2 * (p2(m2) / p2(m2 + _2 * e3))), u2), {flyTo: true})) : this._move(s2, r2)._moveEnd(true);
        }.call(this), this;
      }, flyToBounds: function(t2, i2) {
        var e2 = this._getBoundsCenterZoom(t2, i2);
        return this.flyTo(e2.center, e2.zoom, i2);
      }, setMaxBounds: function(t2) {
        return (t2 = N(t2)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t2, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
      }, setMinZoom: function(t2) {
        var i2 = this.options.minZoom;
        return this.options.minZoom = t2, this._loaded && i2 !== t2 && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t2) : this;
      }, setMaxZoom: function(t2) {
        var i2 = this.options.maxZoom;
        return this.options.maxZoom = t2, this._loaded && i2 !== t2 && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t2) : this;
      }, panInsideBounds: function(t2, i2) {
        this._enforcingBounds = true;
        var e2 = this.getCenter(), n2 = this._limitCenter(e2, this._zoom, N(t2));
        return e2.equals(n2) || this.panTo(n2, i2), this._enforcingBounds = false, this;
      }, panInside: function(t2, i2) {
        var e2, n2, o2 = A((i2 = i2 || {}).paddingTopLeft || i2.padding || [0, 0]), s2 = A(i2.paddingBottomRight || i2.padding || [0, 0]), r2 = this.getCenter(), a2 = this.project(r2), h2 = this.project(t2), u2 = this.getPixelBounds(), l2 = u2.getSize().divideBy(2), c2 = O([u2.min.add(o2), u2.max.subtract(s2)]);
        return c2.contains(h2) || (this._enforcingBounds = true, e2 = a2.subtract(h2), n2 = A(h2.x + e2.x, h2.y + e2.y), (h2.x < c2.min.x || h2.x > c2.max.x) && (n2.x = a2.x - e2.x, 0 < e2.x ? n2.x += l2.x - o2.x : n2.x -= l2.x - s2.x), (h2.y < c2.min.y || h2.y > c2.max.y) && (n2.y = a2.y - e2.y, 0 < e2.y ? n2.y += l2.y - o2.y : n2.y -= l2.y - s2.y), this.panTo(this.unproject(n2), i2), this._enforcingBounds = false), this;
      }, invalidateSize: function(t2) {
        if (!this._loaded)
          return this;
        t2 = h({animate: false, pan: true}, true === t2 ? {animate: true} : t2);
        var i2 = this.getSize();
        this._sizeChanged = true, this._lastCenter = null;
        var e2 = this.getSize(), n2 = i2.divideBy(2).round(), o2 = e2.divideBy(2).round(), s2 = n2.subtract(o2);
        return s2.x || s2.y ? (t2.animate && t2.pan ? this.panBy(s2) : (t2.pan && this._rawPanBy(s2), this.fire("move"), t2.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {oldSize: i2, newSize: e2})) : this;
      }, stop: function() {
        return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
      }, locate: function(t2) {
        if (t2 = this._locateOptions = h({timeout: 1e4, watch: false}, t2), !("geolocation" in navigator))
          return this._handleGeolocationError({code: 0, message: "Geolocation not supported."}), this;
        var i2 = p(this._handleGeolocationResponse, this), e2 = p(this._handleGeolocationError, this);
        return t2.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i2, e2, t2) : navigator.geolocation.getCurrentPosition(i2, e2, t2), this;
      }, stopLocate: function() {
        return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = false), this;
      }, _handleGeolocationError: function(t2) {
        var i2 = t2.code, e2 = t2.message || (1 === i2 ? "permission denied" : 2 === i2 ? "position unavailable" : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {code: i2, message: "Geolocation error: " + e2 + "."});
      }, _handleGeolocationResponse: function(t2) {
        var i2, e2 = new D(t2.coords.latitude, t2.coords.longitude), n2 = e2.toBounds(2 * t2.coords.accuracy), o2 = this._locateOptions;
        o2.setView && (i2 = this.getBoundsZoom(n2), this.setView(e2, o2.maxZoom ? Math.min(i2, o2.maxZoom) : i2));
        var s2 = {latlng: e2, bounds: n2, timestamp: t2.timestamp};
        for (var r2 in t2.coords)
          "number" == typeof t2.coords[r2] && (s2[r2] = t2.coords[r2]);
        this.fire("locationfound", s2);
      }, addHandler: function(t2, i2) {
        if (!i2)
          return this;
        var e2 = this[t2] = new i2(this);
        return this._handlers.push(e2), this.options[t2] && e2.enable(), this;
      }, remove: function() {
        if (this._initEvents(true), this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t3) {
          this._container._leaflet_id = void 0, this._containerId = void 0;
        }
        var t2;
        for (t2 in (void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ri(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (z(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers))
          this._layers[t2].remove();
        for (t2 in this._panes)
          ri(this._panes[t2]);
        return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
      }, createPane: function(t2, i2) {
        var e2 = si("div", "leaflet-pane" + (t2 ? " leaflet-" + t2.replace("Pane", "") + "-pane" : ""), i2 || this._mapPane);
        return t2 && (this._panes[t2] = e2), e2;
      }, getCenter: function() {
        return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
      }, getZoom: function() {
        return this._zoom;
      }, getBounds: function() {
        var t2 = this.getPixelBounds();
        return new R(this.unproject(t2.getBottomLeft()), this.unproject(t2.getTopRight()));
      }, getMinZoom: function() {
        return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
      }, getMaxZoom: function() {
        return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
      }, getBoundsZoom: function(t2, i2, e2) {
        t2 = N(t2), e2 = A(e2 || [0, 0]);
        var n2 = this.getZoom() || 0, o2 = this.getMinZoom(), s2 = this.getMaxZoom(), r2 = t2.getNorthWest(), a2 = t2.getSouthEast(), h2 = this.getSize().subtract(e2), u2 = O(this.project(a2, n2), this.project(r2, n2)).getSize(), l2 = vt ? this.options.zoomSnap : 1, c2 = h2.x / u2.x, _2 = h2.y / u2.y, d2 = i2 ? Math.max(c2, _2) : Math.min(c2, _2), n2 = this.getScaleZoom(d2, n2);
        return l2 && (n2 = Math.round(n2 / (l2 / 100)) * (l2 / 100), n2 = i2 ? Math.ceil(n2 / l2) * l2 : Math.floor(n2 / l2) * l2), Math.max(o2, Math.min(s2, n2));
      }, getSize: function() {
        return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = false), this._size.clone();
      }, getPixelBounds: function(t2, i2) {
        var e2 = this._getTopLeftPoint(t2, i2);
        return new I(e2, e2.add(this.getSize()));
      }, getPixelOrigin: function() {
        return this._checkIfLoaded(), this._pixelOrigin;
      }, getPixelWorldBounds: function(t2) {
        return this.options.crs.getProjectedBounds(void 0 === t2 ? this.getZoom() : t2);
      }, getPane: function(t2) {
        return "string" == typeof t2 ? this._panes[t2] : t2;
      }, getPanes: function() {
        return this._panes;
      }, getContainer: function() {
        return this._container;
      }, getZoomScale: function(t2, i2) {
        var e2 = this.options.crs;
        return i2 = void 0 === i2 ? this._zoom : i2, e2.scale(t2) / e2.scale(i2);
      }, getScaleZoom: function(t2, i2) {
        var e2 = this.options.crs;
        i2 = void 0 === i2 ? this._zoom : i2;
        var n2 = e2.zoom(t2 * e2.scale(i2));
        return isNaN(n2) ? 1 / 0 : n2;
      }, project: function(t2, i2) {
        return i2 = void 0 === i2 ? this._zoom : i2, this.options.crs.latLngToPoint(j(t2), i2);
      }, unproject: function(t2, i2) {
        return i2 = void 0 === i2 ? this._zoom : i2, this.options.crs.pointToLatLng(A(t2), i2);
      }, layerPointToLatLng: function(t2) {
        var i2 = A(t2).add(this.getPixelOrigin());
        return this.unproject(i2);
      }, latLngToLayerPoint: function(t2) {
        return this.project(j(t2))._round()._subtract(this.getPixelOrigin());
      }, wrapLatLng: function(t2) {
        return this.options.crs.wrapLatLng(j(t2));
      }, wrapLatLngBounds: function(t2) {
        return this.options.crs.wrapLatLngBounds(N(t2));
      }, distance: function(t2, i2) {
        return this.options.crs.distance(j(t2), j(i2));
      }, containerPointToLayerPoint: function(t2) {
        return A(t2).subtract(this._getMapPanePos());
      }, layerPointToContainerPoint: function(t2) {
        return A(t2).add(this._getMapPanePos());
      }, containerPointToLatLng: function(t2) {
        var i2 = this.containerPointToLayerPoint(A(t2));
        return this.layerPointToLatLng(i2);
      }, latLngToContainerPoint: function(t2) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t2)));
      }, mouseEventToContainerPoint: function(t2) {
        return Di(t2, this._container);
      }, mouseEventToLayerPoint: function(t2) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t2));
      }, mouseEventToLatLng: function(t2) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t2));
      }, _initContainer: function(t2) {
        var i2 = this._container = ni(t2);
        if (!i2)
          throw new Error("Map container not found.");
        if (i2._leaflet_id)
          throw new Error("Map container is already initialized.");
        zi(i2, "scroll", this._onScroll, this), this._containerId = m(i2);
      }, _initLayout: function() {
        var t2 = this._container;
        this._fadeAnimated = this.options.fadeAnimation && vt, ci(t2, "leaflet-container" + (bt ? " leaflet-touch" : "") + (zt ? " leaflet-retina" : "") + (it ? " leaflet-oldie" : "") + (ct ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var i2 = oi(t2, "position");
        "absolute" !== i2 && "relative" !== i2 && "fixed" !== i2 && (t2.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
      }, _initPanes: function() {
        var t2 = this._panes = {};
        this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), vi(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ci(t2.markerPane, "leaflet-zoom-hide"), ci(t2.shadowPane, "leaflet-zoom-hide"));
      }, _resetView: function(t2, i2) {
        vi(this._mapPane, new k(0, 0));
        var e2 = !this._loaded;
        this._loaded = true, i2 = this._limitZoom(i2), this.fire("viewprereset");
        var n2 = this._zoom !== i2;
        this._moveStart(n2, false)._move(t2, i2)._moveEnd(n2), this.fire("viewreset"), e2 && this.fire("load");
      }, _moveStart: function(t2, i2) {
        return t2 && this.fire("zoomstart"), i2 || this.fire("movestart"), this;
      }, _move: function(t2, i2, e2) {
        void 0 === i2 && (i2 = this._zoom);
        var n2 = this._zoom !== i2;
        return this._zoom = i2, this._lastCenter = t2, this._pixelOrigin = this._getNewPixelOrigin(t2), (n2 || e2 && e2.pinch) && this.fire("zoom", e2), this.fire("move", e2);
      }, _moveEnd: function(t2) {
        return t2 && this.fire("zoomend"), this.fire("moveend");
      }, _stop: function() {
        return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      }, _rawPanBy: function(t2) {
        vi(this._mapPane, this._getMapPanePos().subtract(t2));
      }, _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
      }, _panInsideMaxBounds: function() {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      }, _checkIfLoaded: function() {
        if (!this._loaded)
          throw new Error("Set map center and zoom first.");
      }, _initEvents: function(t2) {
        this._targets = {};
        var i2 = t2 ? Si : zi;
        i2((this._targets[m(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i2(window, "resize", this._onResize, this), vt && this.options.transform3DLimit && (t2 ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      }, _onResize: function() {
        z(this._resizeRequest), this._resizeRequest = M(function() {
          this.invalidateSize({debounceMoveend: true});
        }, this);
      }, _onScroll: function() {
        this._container.scrollTop = 0, this._container.scrollLeft = 0;
      }, _onMoveEnd: function() {
        var t2 = this._getMapPanePos();
        Math.max(Math.abs(t2.x), Math.abs(t2.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
      }, _findEventTargets: function(t2, i2) {
        for (var e2, n2 = [], o2 = "mouseout" === i2 || "mouseover" === i2, s2 = t2.target || t2.srcElement, r2 = false; s2; ) {
          if ((e2 = this._targets[m(s2)]) && ("click" === i2 || "preclick" === i2) && !t2._simulated && this._draggableMoved(e2)) {
            r2 = true;
            break;
          }
          if (e2 && e2.listens(i2, true)) {
            if (o2 && !Vi(s2, t2))
              break;
            if (n2.push(e2), o2)
              break;
          }
          if (s2 === this._container)
            break;
          s2 = s2.parentNode;
        }
        return n2.length || r2 || o2 || !Vi(s2, t2) || (n2 = [this]), n2;
      }, _handleDOMEvent: function(t2) {
        var i2;
        this._loaded && !Ui(t2) && ("mousedown" !== (i2 = t2.type) && "keypress" !== i2 && "keyup" !== i2 && "keydown" !== i2 || Pi(t2.target || t2.srcElement), this._fireDOMEvent(t2, i2));
      }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function(t2, i2, e2) {
        var n2;
        if ("click" === t2.type && ((n2 = h({}, t2)).type = "preclick", this._fireDOMEvent(n2, n2.type, e2)), !t2._stopped && (e2 = (e2 || []).concat(this._findEventTargets(t2, i2))).length) {
          var o2 = e2[0];
          "contextmenu" === i2 && o2.listens(i2, true) && Ri(t2);
          var s2, r2 = {originalEvent: t2};
          "keypress" !== t2.type && "keydown" !== t2.type && "keyup" !== t2.type && (s2 = o2.getLatLng && (!o2._radius || o2._radius <= 10), r2.containerPoint = s2 ? this.latLngToContainerPoint(o2.getLatLng()) : this.mouseEventToContainerPoint(t2), r2.layerPoint = this.containerPointToLayerPoint(r2.containerPoint), r2.latlng = s2 ? o2.getLatLng() : this.layerPointToLatLng(r2.layerPoint));
          for (var a2 = 0; a2 < e2.length; a2++)
            if (e2[a2].fire(i2, r2, true), r2.originalEvent._stopped || false === e2[a2].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, i2))
              return;
        }
      }, _draggableMoved: function(t2) {
        return (t2 = t2.dragging && t2.dragging.enabled() ? t2 : this).dragging && t2.dragging.moved() || this.boxZoom && this.boxZoom.moved();
      }, _clearHandlers: function() {
        for (var t2 = 0, i2 = this._handlers.length; t2 < i2; t2++)
          this._handlers[t2].disable();
      }, whenReady: function(t2, i2) {
        return this._loaded ? t2.call(i2 || this, {target: this}) : this.on("load", t2, i2), this;
      }, _getMapPanePos: function() {
        return yi(this._mapPane) || new k(0, 0);
      }, _moved: function() {
        var t2 = this._getMapPanePos();
        return t2 && !t2.equals([0, 0]);
      }, _getTopLeftPoint: function(t2, i2) {
        return (t2 && void 0 !== i2 ? this._getNewPixelOrigin(t2, i2) : this.getPixelOrigin()).subtract(this._getMapPanePos());
      }, _getNewPixelOrigin: function(t2, i2) {
        var e2 = this.getSize()._divideBy(2);
        return this.project(t2, i2)._subtract(e2)._add(this._getMapPanePos())._round();
      }, _latLngToNewLayerPoint: function(t2, i2, e2) {
        var n2 = this._getNewPixelOrigin(e2, i2);
        return this.project(t2, i2)._subtract(n2);
      }, _latLngBoundsToNewLayerBounds: function(t2, i2, e2) {
        var n2 = this._getNewPixelOrigin(e2, i2);
        return O([this.project(t2.getSouthWest(), i2)._subtract(n2), this.project(t2.getNorthWest(), i2)._subtract(n2), this.project(t2.getSouthEast(), i2)._subtract(n2), this.project(t2.getNorthEast(), i2)._subtract(n2)]);
      }, _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      }, _getCenterOffset: function(t2) {
        return this.latLngToLayerPoint(t2).subtract(this._getCenterLayerPoint());
      }, _limitCenter: function(t2, i2, e2) {
        if (!e2)
          return t2;
        var n2 = this.project(t2, i2), o2 = this.getSize().divideBy(2), s2 = new I(n2.subtract(o2), n2.add(o2)), r2 = this._getBoundsOffset(s2, e2, i2);
        return r2.round().equals([0, 0]) ? t2 : this.unproject(n2.add(r2), i2);
      }, _limitOffset: function(t2, i2) {
        if (!i2)
          return t2;
        var e2 = this.getPixelBounds(), n2 = new I(e2.min.add(t2), e2.max.add(t2));
        return t2.add(this._getBoundsOffset(n2, i2));
      }, _getBoundsOffset: function(t2, i2, e2) {
        var n2 = O(this.project(i2.getNorthEast(), e2), this.project(i2.getSouthWest(), e2)), o2 = n2.min.subtract(t2.min), s2 = n2.max.subtract(t2.max);
        return new k(this._rebound(o2.x, -s2.x), this._rebound(o2.y, -s2.y));
      }, _rebound: function(t2, i2) {
        return 0 < t2 + i2 ? Math.round(t2 - i2) / 2 : Math.max(0, Math.ceil(t2)) - Math.max(0, Math.floor(i2));
      }, _limitZoom: function(t2) {
        var i2 = this.getMinZoom(), e2 = this.getMaxZoom(), n2 = vt ? this.options.zoomSnap : 1;
        return n2 && (t2 = Math.round(t2 / n2) * n2), Math.max(i2, Math.min(e2, t2));
      }, _onPanTransitionStep: function() {
        this.fire("move");
      }, _onPanTransitionEnd: function() {
        _i(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      }, _tryAnimatedPan: function(t2, i2) {
        var e2 = this._getCenterOffset(t2)._trunc();
        return !(true !== (i2 && i2.animate) && !this.getSize().contains(e2)) && (this.panBy(e2, i2), true);
      }, _createAnimProxy: function() {
        var t2 = this._proxy = si("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(t2), this.on("zoomanim", function(t3) {
          var i2 = ti, e2 = this._proxy.style[i2];
          gi(this._proxy, this.project(t3.center, t3.zoom), this.getZoomScale(t3.zoom, 1)), e2 === this._proxy.style[i2] && this._animatingZoom && this._onZoomTransitionEnd();
        }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
      }, _destroyAnimProxy: function() {
        ri(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
      }, _animMoveEnd: function() {
        var t2 = this.getCenter(), i2 = this.getZoom();
        gi(this._proxy, this.project(t2, i2), this.getZoomScale(i2, 1));
      }, _catchTransitionEnd: function(t2) {
        this._animatingZoom && 0 <= t2.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
      }, _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
      }, _tryAnimatedZoom: function(t2, i2, e2) {
        if (this._animatingZoom)
          return true;
        if (e2 = e2 || {}, !this._zoomAnimated || false === e2.animate || this._nothingToAnimate() || Math.abs(i2 - this._zoom) > this.options.zoomAnimationThreshold)
          return false;
        var n2 = this.getZoomScale(i2), o2 = this._getCenterOffset(t2)._divideBy(1 - 1 / n2);
        return !(true !== e2.animate && !this.getSize().contains(o2)) && (M(function() {
          this._moveStart(true, false)._animateZoom(t2, i2, true);
        }, this), true);
      }, _animateZoom: function(t2, i2, e2, n2) {
        this._mapPane && (e2 && (this._animatingZoom = true, this._animateToCenter = t2, this._animateToZoom = i2, ci(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {center: t2, zoom: i2, noUpdate: n2}), setTimeout(p(this._onZoomTransitionEnd, this), 250));
      }, _onZoomTransitionEnd: function() {
        this._animatingZoom && (this._mapPane && _i(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = false, this._move(this._animateToCenter, this._animateToZoom), M(function() {
          this._moveEnd(true);
        }, this));
      }});
      function Yi(t2) {
        return new Xi(t2);
      }
      var Xi = S.extend({options: {position: "topright"}, initialize: function(t2) {
        c(this, t2);
      }, getPosition: function() {
        return this.options.position;
      }, setPosition: function(t2) {
        var i2 = this._map;
        return i2 && i2.removeControl(this), this.options.position = t2, i2 && i2.addControl(this), this;
      }, getContainer: function() {
        return this._container;
      }, addTo: function(t2) {
        this.remove(), this._map = t2;
        var i2 = this._container = this.onAdd(t2), e2 = this.getPosition(), n2 = t2._controlCorners[e2];
        return ci(i2, "leaflet-control"), -1 !== e2.indexOf("bottom") ? n2.insertBefore(i2, n2.firstChild) : n2.appendChild(i2), this._map.on("unload", this.remove, this), this;
      }, remove: function() {
        return this._map && (ri(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
      }, _refocusOnMap: function(t2) {
        this._map && t2 && 0 < t2.screenX && 0 < t2.screenY && this._map.getContainer().focus();
      }});
      Ki.include({addControl: function(t2) {
        return t2.addTo(this), this;
      }, removeControl: function(t2) {
        return t2.remove(), this;
      }, _initControlPos: function() {
        var n2 = this._controlCorners = {}, o2 = "leaflet-", s2 = this._controlContainer = si("div", o2 + "control-container", this._container);
        function t2(t3, i2) {
          var e2 = o2 + t3 + " " + o2 + i2;
          n2[t3 + i2] = si("div", e2, s2);
        }
        t2("top", "left"), t2("top", "right"), t2("bottom", "left"), t2("bottom", "right");
      }, _clearControlPos: function() {
        for (var t2 in this._controlCorners)
          ri(this._controlCorners[t2]);
        ri(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
      }});
      var Ji = Xi.extend({options: {collapsed: true, position: "topright", autoZIndex: true, hideSingleBase: false, sortLayers: false, sortFunction: function(t2, i2, e2, n2) {
        return e2 < n2 ? -1 : n2 < e2 ? 1 : 0;
      }}, initialize: function(t2, i2, e2) {
        for (var n2 in (c(this, e2), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = false, t2))
          this._addLayer(t2[n2], n2);
        for (n2 in i2)
          this._addLayer(i2[n2], n2, true);
      }, onAdd: function(t2) {
        this._initLayout(), this._update(), (this._map = t2).on("zoomend", this._checkDisabledLayers, this);
        for (var i2 = 0; i2 < this._layers.length; i2++)
          this._layers[i2].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      }, addTo: function(t2) {
        return Xi.prototype.addTo.call(this, t2), this._expandIfNotCollapsed();
      }, onRemove: function() {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t2 = 0; t2 < this._layers.length; t2++)
          this._layers[t2].layer.off("add remove", this._onLayerChange, this);
      }, addBaseLayer: function(t2, i2) {
        return this._addLayer(t2, i2), this._map ? this._update() : this;
      }, addOverlay: function(t2, i2) {
        return this._addLayer(t2, i2, true), this._map ? this._update() : this;
      }, removeLayer: function(t2) {
        t2.off("add remove", this._onLayerChange, this);
        var i2 = this._getLayer(m(t2));
        return i2 && this._layers.splice(this._layers.indexOf(i2), 1), this._map ? this._update() : this;
      }, expand: function() {
        ci(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
        var t2 = this._map.getSize().y - (this._container.offsetTop + 50);
        return t2 < this._section.clientHeight ? (ci(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t2 + "px") : _i(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
      }, collapse: function() {
        return _i(this._container, "leaflet-control-layers-expanded"), this;
      }, _initLayout: function() {
        var t2 = "leaflet-control-layers", i2 = this._container = si("div", t2), e2 = this.options.collapsed;
        i2.setAttribute("aria-haspopup", true), Oi(i2), Ii(i2);
        var n2 = this._section = si("section", t2 + "-list");
        e2 && (this._map.on("click", this.collapse, this), ot || zi(i2, {mouseenter: this.expand, mouseleave: this.collapse}, this));
        var o2 = this._layersLink = si("a", t2 + "-toggle", i2);
        o2.href = "#", o2.title = "Layers", bt ? (zi(o2, "click", Ni), zi(o2, "click", this.expand, this)) : zi(o2, "focus", this.expand, this), e2 || this.expand(), this._baseLayersList = si("div", t2 + "-base", n2), this._separator = si("div", t2 + "-separator", n2), this._overlaysList = si("div", t2 + "-overlays", n2), i2.appendChild(n2);
      }, _getLayer: function(t2) {
        for (var i2 = 0; i2 < this._layers.length; i2++)
          if (this._layers[i2] && m(this._layers[i2].layer) === t2)
            return this._layers[i2];
      }, _addLayer: function(t2, i2, e2) {
        this._map && t2.on("add remove", this._onLayerChange, this), this._layers.push({layer: t2, name: i2, overlay: e2}), this.options.sortLayers && this._layers.sort(p(function(t3, i3) {
          return this.options.sortFunction(t3.layer, i3.layer, t3.name, i3.name);
        }, this)), this.options.autoZIndex && t2.setZIndex && (this._lastZIndex++, t2.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
      }, _update: function() {
        if (!this._container)
          return this;
        ai(this._baseLayersList), ai(this._overlaysList), this._layerControlInputs = [];
        for (var t2, i2, e2, n2 = 0, o2 = 0; o2 < this._layers.length; o2++)
          e2 = this._layers[o2], this._addItem(e2), i2 = i2 || e2.overlay, t2 = t2 || !e2.overlay, n2 += e2.overlay ? 0 : 1;
        return this.options.hideSingleBase && (t2 = t2 && 1 < n2, this._baseLayersList.style.display = t2 ? "" : "none"), this._separator.style.display = i2 && t2 ? "" : "none", this;
      }, _onLayerChange: function(t2) {
        this._handlingClick || this._update();
        var i2 = this._getLayer(m(t2.target)), e2 = i2.overlay ? "add" === t2.type ? "overlayadd" : "overlayremove" : "add" === t2.type ? "baselayerchange" : null;
        e2 && this._map.fire(e2, i2);
      }, _createRadioElement: function(t2, i2) {
        var e2 = '<input type="radio" class="leaflet-control-layers-selector" name="' + t2 + '"' + (i2 ? ' checked="checked"' : "") + "/>", n2 = document.createElement("div");
        return n2.innerHTML = e2, n2.firstChild;
      }, _addItem: function(t2) {
        var i2, e2 = document.createElement("label"), n2 = this._map.hasLayer(t2.layer);
        t2.overlay ? ((i2 = document.createElement("input")).type = "checkbox", i2.className = "leaflet-control-layers-selector", i2.defaultChecked = n2) : i2 = this._createRadioElement("leaflet-base-layers_" + m(this), n2), this._layerControlInputs.push(i2), i2.layerId = m(t2.layer), zi(i2, "click", this._onInputClick, this);
        var o2 = document.createElement("span");
        o2.innerHTML = " " + t2.name;
        var s2 = document.createElement("div");
        return e2.appendChild(s2), s2.appendChild(i2), s2.appendChild(o2), (t2.overlay ? this._overlaysList : this._baseLayersList).appendChild(e2), this._checkDisabledLayers(), e2;
      }, _onInputClick: function() {
        var t2, i2, e2 = this._layerControlInputs, n2 = [], o2 = [];
        this._handlingClick = true;
        for (var s2 = e2.length - 1; 0 <= s2; s2--)
          t2 = e2[s2], i2 = this._getLayer(t2.layerId).layer, t2.checked ? n2.push(i2) : t2.checked || o2.push(i2);
        for (s2 = 0; s2 < o2.length; s2++)
          this._map.hasLayer(o2[s2]) && this._map.removeLayer(o2[s2]);
        for (s2 = 0; s2 < n2.length; s2++)
          this._map.hasLayer(n2[s2]) || this._map.addLayer(n2[s2]);
        this._handlingClick = false, this._refocusOnMap();
      }, _checkDisabledLayers: function() {
        for (var t2, i2, e2 = this._layerControlInputs, n2 = this._map.getZoom(), o2 = e2.length - 1; 0 <= o2; o2--)
          t2 = e2[o2], i2 = this._getLayer(t2.layerId).layer, t2.disabled = void 0 !== i2.options.minZoom && n2 < i2.options.minZoom || void 0 !== i2.options.maxZoom && n2 > i2.options.maxZoom;
      }, _expandIfNotCollapsed: function() {
        return this._map && !this.options.collapsed && this.expand(), this;
      }, _expand: function() {
        return this.expand();
      }, _collapse: function() {
        return this.collapse();
      }}), $i = Xi.extend({options: {position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "&#x2212;", zoomOutTitle: "Zoom out"}, onAdd: function(t2) {
        var i2 = "leaflet-control-zoom", e2 = si("div", i2 + " leaflet-bar"), n2 = this.options;
        return this._zoomInButton = this._createButton(n2.zoomInText, n2.zoomInTitle, i2 + "-in", e2, this._zoomIn), this._zoomOutButton = this._createButton(n2.zoomOutText, n2.zoomOutTitle, i2 + "-out", e2, this._zoomOut), this._updateDisabled(), t2.on("zoomend zoomlevelschange", this._updateDisabled, this), e2;
      }, onRemove: function(t2) {
        t2.off("zoomend zoomlevelschange", this._updateDisabled, this);
      }, disable: function() {
        return this._disabled = true, this._updateDisabled(), this;
      }, enable: function() {
        return this._disabled = false, this._updateDisabled(), this;
      }, _zoomIn: function(t2) {
        !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t2.shiftKey ? 3 : 1));
      }, _zoomOut: function(t2) {
        !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t2.shiftKey ? 3 : 1));
      }, _createButton: function(t2, i2, e2, n2, o2) {
        var s2 = si("a", e2, n2);
        return s2.innerHTML = t2, s2.href = "#", s2.title = i2, s2.setAttribute("role", "button"), s2.setAttribute("aria-label", i2), Oi(s2), zi(s2, "click", Ni), zi(s2, "click", o2, this), zi(s2, "click", this._refocusOnMap, this), s2;
      }, _updateDisabled: function() {
        var t2 = this._map, i2 = "leaflet-disabled";
        _i(this._zoomInButton, i2), _i(this._zoomOutButton, i2), !this._disabled && t2._zoom !== t2.getMinZoom() || ci(this._zoomOutButton, i2), !this._disabled && t2._zoom !== t2.getMaxZoom() || ci(this._zoomInButton, i2);
      }});
      Ki.mergeOptions({zoomControl: true}), Ki.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new $i(), this.addControl(this.zoomControl));
      });
      var Qi = Xi.extend({options: {position: "bottomleft", maxWidth: 100, metric: true, imperial: true}, onAdd: function(t2) {
        var i2 = "leaflet-control-scale", e2 = si("div", i2), n2 = this.options;
        return this._addScales(n2, i2 + "-line", e2), t2.on(n2.updateWhenIdle ? "moveend" : "move", this._update, this), t2.whenReady(this._update, this), e2;
      }, onRemove: function(t2) {
        t2.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
      }, _addScales: function(t2, i2, e2) {
        t2.metric && (this._mScale = si("div", i2, e2)), t2.imperial && (this._iScale = si("div", i2, e2));
      }, _update: function() {
        var t2 = this._map, i2 = t2.getSize().y / 2, e2 = t2.distance(t2.containerPointToLatLng([0, i2]), t2.containerPointToLatLng([this.options.maxWidth, i2]));
        this._updateScales(e2);
      }, _updateScales: function(t2) {
        this.options.metric && t2 && this._updateMetric(t2), this.options.imperial && t2 && this._updateImperial(t2);
      }, _updateMetric: function(t2) {
        var i2 = this._getRoundNum(t2), e2 = i2 < 1e3 ? i2 + " m" : i2 / 1e3 + " km";
        this._updateScale(this._mScale, e2, i2 / t2);
      }, _updateImperial: function(t2) {
        var i2, e2, n2, o2 = 3.2808399 * t2;
        5280 < o2 ? (i2 = o2 / 5280, e2 = this._getRoundNum(i2), this._updateScale(this._iScale, e2 + " mi", e2 / i2)) : (n2 = this._getRoundNum(o2), this._updateScale(this._iScale, n2 + " ft", n2 / o2));
      }, _updateScale: function(t2, i2, e2) {
        t2.style.width = Math.round(this.options.maxWidth * e2) + "px", t2.innerHTML = i2;
      }, _getRoundNum: function(t2) {
        var i2 = Math.pow(10, (Math.floor(t2) + "").length - 1), e2 = t2 / i2;
        return i2 * (e2 = 10 <= e2 ? 10 : 5 <= e2 ? 5 : 3 <= e2 ? 3 : 2 <= e2 ? 2 : 1);
      }}), te = Xi.extend({options: {position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'}, initialize: function(t2) {
        c(this, t2), this._attributions = {};
      }, onAdd: function(t2) {
        for (var i2 in ((t2.attributionControl = this)._container = si("div", "leaflet-control-attribution"), Oi(this._container), t2._layers))
          t2._layers[i2].getAttribution && this.addAttribution(t2._layers[i2].getAttribution());
        return this._update(), this._container;
      }, setPrefix: function(t2) {
        return this.options.prefix = t2, this._update(), this;
      }, addAttribution: function(t2) {
        return t2 && (this._attributions[t2] || (this._attributions[t2] = 0), this._attributions[t2]++, this._update()), this;
      }, removeAttribution: function(t2) {
        return t2 && this._attributions[t2] && (this._attributions[t2]--, this._update()), this;
      }, _update: function() {
        if (this._map) {
          var t2 = [];
          for (var i2 in this._attributions)
            this._attributions[i2] && t2.push(i2);
          var e2 = [];
          this.options.prefix && e2.push(this.options.prefix), t2.length && e2.push(t2.join(", ")), this._container.innerHTML = e2.join(" | ");
        }
      }});
      Ki.mergeOptions({attributionControl: true}), Ki.addInitHook(function() {
        this.options.attributionControl && new te().addTo(this);
      });
      Xi.Layers = Ji, Xi.Zoom = $i, Xi.Scale = Qi, Xi.Attribution = te, Yi.layers = function(t2, i2, e2) {
        return new Ji(t2, i2, e2);
      }, Yi.zoom = function(t2) {
        return new $i(t2);
      }, Yi.scale = function(t2) {
        return new Qi(t2);
      }, Yi.attribution = function(t2) {
        return new te(t2);
      };
      var ie = S.extend({initialize: function(t2) {
        this._map = t2;
      }, enable: function() {
        return this._enabled || (this._enabled = true, this.addHooks()), this;
      }, disable: function() {
        return this._enabled && (this._enabled = false, this.removeHooks()), this;
      }, enabled: function() {
        return !!this._enabled;
      }});
      ie.addTo = function(t2, i2) {
        return t2.addHandler(i2, this), this;
      };
      var ee, ne = {Events: Z}, oe = bt ? "touchstart mousedown" : "mousedown", se = {mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend"}, re = {mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove"}, ae = E.extend({options: {clickTolerance: 3}, initialize: function(t2, i2, e2, n2) {
        c(this, n2), this._element = t2, this._dragStartTarget = i2 || t2, this._preventOutline = e2;
      }, enable: function() {
        this._enabled || (zi(this._dragStartTarget, oe, this._onDown, this), this._enabled = true);
      }, disable: function() {
        this._enabled && (ae._dragging === this && this.finishDrag(), Si(this._dragStartTarget, oe, this._onDown, this), this._enabled = false, this._moved = false);
      }, _onDown: function(t2) {
        var i2, e2;
        !t2._simulated && this._enabled && (this._moved = false, li(this._element, "leaflet-zoom-anim") || ae._dragging || t2.shiftKey || 1 !== t2.which && 1 !== t2.button && !t2.touches || ((ae._dragging = this)._preventOutline && Pi(this._element), xi(), Xt(), this._moving || (this.fire("down"), i2 = t2.touches ? t2.touches[0] : t2, e2 = bi(this._element), this._startPoint = new k(i2.clientX, i2.clientY), this._parentScale = Ti(e2), zi(document, re[t2.type], this._onMove, this), zi(document, se[t2.type], this._onUp, this))));
      }, _onMove: function(t2) {
        var i2, e2;
        !t2._simulated && this._enabled && (t2.touches && 1 < t2.touches.length ? this._moved = true : ((e2 = new k((i2 = t2.touches && 1 === t2.touches.length ? t2.touches[0] : t2).clientX, i2.clientY)._subtract(this._startPoint)).x || e2.y) && (Math.abs(e2.x) + Math.abs(e2.y) < this.options.clickTolerance || (e2.x /= this._parentScale.x, e2.y /= this._parentScale.y, Ri(t2), this._moved || (this.fire("dragstart"), this._moved = true, this._startPos = yi(this._element).subtract(e2), ci(document.body, "leaflet-dragging"), this._lastTarget = t2.target || t2.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ci(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e2), this._moving = true, z(this._animRequest), this._lastEvent = t2, this._animRequest = M(this._updatePosition, this, true))));
      }, _updatePosition: function() {
        var t2 = {originalEvent: this._lastEvent};
        this.fire("predrag", t2), vi(this._element, this._newPos), this.fire("drag", t2);
      }, _onUp: function(t2) {
        !t2._simulated && this._enabled && this.finishDrag();
      }, finishDrag: function() {
        for (var t2 in (_i(document.body, "leaflet-dragging"), this._lastTarget && (_i(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), re))
          Si(document, re[t2], this._onMove, this), Si(document, se[t2], this._onUp, this);
        wi(), Jt(), this._moved && this._moving && (z(this._animRequest), this.fire("dragend", {distance: this._newPos.distanceTo(this._startPos)})), this._moving = false, ae._dragging = false;
      }});
      function he(t2, i2) {
        if (!i2 || !t2.length)
          return t2.slice();
        var e2 = i2 * i2;
        return t2 = function(t3, i3) {
          var e3 = t3.length, n2 = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e3);
          n2[0] = n2[e3 - 1] = 1, function t4(i4, e4, n3, o3, s3) {
            var r2, a2, h2, u2 = 0;
            for (a2 = o3 + 1; a2 <= s3 - 1; a2++)
              h2 = de(i4[a2], i4[o3], i4[s3], true), u2 < h2 && (r2 = a2, u2 = h2);
            n3 < u2 && (e4[r2] = 1, t4(i4, e4, n3, o3, r2), t4(i4, e4, n3, r2, s3));
          }(t3, n2, i3, 0, e3 - 1);
          var o2, s2 = [];
          for (o2 = 0; o2 < e3; o2++)
            n2[o2] && s2.push(t3[o2]);
          return s2;
        }(t2 = function(t3, i3) {
          for (var e3 = [t3[0]], n2 = 1, o2 = 0, s2 = t3.length; n2 < s2; n2++)
            (function(t4, i4) {
              var e4 = i4.x - t4.x, n3 = i4.y - t4.y;
              return e4 * e4 + n3 * n3;
            })(t3[n2], t3[o2]) > i3 && (e3.push(t3[n2]), o2 = n2);
          o2 < s2 - 1 && e3.push(t3[s2 - 1]);
          return e3;
        }(t2, e2), e2);
      }
      function ue(t2, i2, e2) {
        return Math.sqrt(de(t2, i2, e2, true));
      }
      function le(t2, i2, e2, n2, o2) {
        var s2, r2, a2, h2 = n2 ? ee : _e(t2, e2), u2 = _e(i2, e2);
        for (ee = u2; ; ) {
          if (!(h2 | u2))
            return [t2, i2];
          if (h2 & u2)
            return false;
          a2 = _e(r2 = ce(t2, i2, s2 = h2 || u2, e2, o2), e2), s2 === h2 ? (t2 = r2, h2 = a2) : (i2 = r2, u2 = a2);
        }
      }
      function ce(t2, i2, e2, n2, o2) {
        var s2, r2, a2 = i2.x - t2.x, h2 = i2.y - t2.y, u2 = n2.min, l2 = n2.max;
        return 8 & e2 ? (s2 = t2.x + a2 * (l2.y - t2.y) / h2, r2 = l2.y) : 4 & e2 ? (s2 = t2.x + a2 * (u2.y - t2.y) / h2, r2 = u2.y) : 2 & e2 ? (s2 = l2.x, r2 = t2.y + h2 * (l2.x - t2.x) / a2) : 1 & e2 && (s2 = u2.x, r2 = t2.y + h2 * (u2.x - t2.x) / a2), new k(s2, r2, o2);
      }
      function _e(t2, i2) {
        var e2 = 0;
        return t2.x < i2.min.x ? e2 |= 1 : t2.x > i2.max.x && (e2 |= 2), t2.y < i2.min.y ? e2 |= 4 : t2.y > i2.max.y && (e2 |= 8), e2;
      }
      function de(t2, i2, e2, n2) {
        var o2, s2 = i2.x, r2 = i2.y, a2 = e2.x - s2, h2 = e2.y - r2, u2 = a2 * a2 + h2 * h2;
        return 0 < u2 && (1 < (o2 = ((t2.x - s2) * a2 + (t2.y - r2) * h2) / u2) ? (s2 = e2.x, r2 = e2.y) : 0 < o2 && (s2 += a2 * o2, r2 += h2 * o2)), a2 = t2.x - s2, h2 = t2.y - r2, n2 ? a2 * a2 + h2 * h2 : new k(s2, r2);
      }
      function pe(t2) {
        return !g(t2[0]) || "object" != typeof t2[0][0] && void 0 !== t2[0][0];
      }
      function me(t2) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), pe(t2);
      }
      var fe = {simplify: he, pointToSegmentDistance: ue, closestPointOnSegment: function(t2, i2, e2) {
        return de(t2, i2, e2);
      }, clipSegment: le, _getEdgeIntersection: ce, _getBitCode: _e, _sqClosestPointOnSegment: de, isFlat: pe, _flat: me};
      function ge(t2, i2, e2) {
        for (var n2, o2, s2, r2, a2, h2, u2, l2 = [1, 4, 2, 8], c2 = 0, _2 = t2.length; c2 < _2; c2++)
          t2[c2]._code = _e(t2[c2], i2);
        for (s2 = 0; s2 < 4; s2++) {
          for (h2 = l2[s2], n2 = [], c2 = 0, o2 = (_2 = t2.length) - 1; c2 < _2; o2 = c2++)
            r2 = t2[c2], a2 = t2[o2], r2._code & h2 ? a2._code & h2 || ((u2 = ce(a2, r2, h2, i2, e2))._code = _e(u2, i2), n2.push(u2)) : (a2._code & h2 && ((u2 = ce(a2, r2, h2, i2, e2))._code = _e(u2, i2), n2.push(u2)), n2.push(r2));
          t2 = n2;
        }
        return t2;
      }
      var ve, ye = {clipPolygon: ge}, xe = {project: function(t2) {
        return new k(t2.lng, t2.lat);
      }, unproject: function(t2) {
        return new D(t2.y, t2.x);
      }, bounds: new I([-180, -90], [180, 90])}, we = {R: 6378137, R_MINOR: 6356752314245179e-9, bounds: new I([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]), project: function(t2) {
        var i2 = Math.PI / 180, e2 = this.R, n2 = t2.lat * i2, o2 = this.R_MINOR / e2, s2 = Math.sqrt(1 - o2 * o2), r2 = s2 * Math.sin(n2), a2 = Math.tan(Math.PI / 4 - n2 / 2) / Math.pow((1 - r2) / (1 + r2), s2 / 2), n2 = -e2 * Math.log(Math.max(a2, 1e-10));
        return new k(t2.lng * i2 * e2, n2);
      }, unproject: function(t2) {
        for (var i2, e2 = 180 / Math.PI, n2 = this.R, o2 = this.R_MINOR / n2, s2 = Math.sqrt(1 - o2 * o2), r2 = Math.exp(-t2.y / n2), a2 = Math.PI / 2 - 2 * Math.atan(r2), h2 = 0, u2 = 0.1; h2 < 15 && 1e-7 < Math.abs(u2); h2++)
          i2 = s2 * Math.sin(a2), i2 = Math.pow((1 - i2) / (1 + i2), s2 / 2), a2 += u2 = Math.PI / 2 - 2 * Math.atan(r2 * i2) - a2;
        return new D(a2 * e2, t2.x * e2 / n2);
      }}, Pe = {LonLat: xe, Mercator: we, SphericalMercator: V}, Le = h({}, F, {code: "EPSG:3395", projection: we, transformation: G(ve = 0.5 / (Math.PI * we.R), 0.5, -ve, 0.5)}), be = h({}, F, {code: "EPSG:4326", projection: xe, transformation: G(1 / 180, 1, -1 / 180, 0.5)}), Te = h({}, H, {projection: xe, transformation: G(1, 0, -1, 0), scale: function(t2) {
        return Math.pow(2, t2);
      }, zoom: function(t2) {
        return Math.log(t2) / Math.LN2;
      }, distance: function(t2, i2) {
        var e2 = i2.lng - t2.lng, n2 = i2.lat - t2.lat;
        return Math.sqrt(e2 * e2 + n2 * n2);
      }, infinite: true});
      H.Earth = F, H.EPSG3395 = Le, H.EPSG3857 = Y, H.EPSG900913 = X, H.EPSG4326 = be, H.Simple = Te;
      var Me = E.extend({options: {pane: "overlayPane", attribution: null, bubblingMouseEvents: true}, addTo: function(t2) {
        return t2.addLayer(this), this;
      }, remove: function() {
        return this.removeFrom(this._map || this._mapToAdd);
      }, removeFrom: function(t2) {
        return t2 && t2.removeLayer(this), this;
      }, getPane: function(t2) {
        return this._map.getPane(t2 ? this.options[t2] || t2 : this.options.pane);
      }, addInteractiveTarget: function(t2) {
        return this._map._targets[m(t2)] = this;
      }, removeInteractiveTarget: function(t2) {
        return delete this._map._targets[m(t2)], this;
      }, getAttribution: function() {
        return this.options.attribution;
      }, _layerAdd: function(t2) {
        var i2, e2 = t2.target;
        e2.hasLayer(this) && (this._map = e2, this._zoomAnimated = e2._zoomAnimated, this.getEvents && (i2 = this.getEvents(), e2.on(i2, this), this.once("remove", function() {
          e2.off(i2, this);
        }, this)), this.onAdd(e2), this.getAttribution && e2.attributionControl && e2.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e2.fire("layeradd", {layer: this}));
      }});
      Ki.include({addLayer: function(t2) {
        if (!t2._layerAdd)
          throw new Error("The provided object is not a Layer.");
        var i2 = m(t2);
        return this._layers[i2] || ((this._layers[i2] = t2)._mapToAdd = this, t2.beforeAdd && t2.beforeAdd(this), this.whenReady(t2._layerAdd, t2)), this;
      }, removeLayer: function(t2) {
        var i2 = m(t2);
        return this._layers[i2] && (this._loaded && t2.onRemove(this), t2.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t2.getAttribution()), delete this._layers[i2], this._loaded && (this.fire("layerremove", {layer: t2}), t2.fire("remove")), t2._map = t2._mapToAdd = null), this;
      }, hasLayer: function(t2) {
        return !!t2 && m(t2) in this._layers;
      }, eachLayer: function(t2, i2) {
        for (var e2 in this._layers)
          t2.call(i2, this._layers[e2]);
        return this;
      }, _addLayers: function(t2) {
        for (var i2 = 0, e2 = (t2 = t2 ? g(t2) ? t2 : [t2] : []).length; i2 < e2; i2++)
          this.addLayer(t2[i2]);
      }, _addZoomLimit: function(t2) {
        !isNaN(t2.options.maxZoom) && isNaN(t2.options.minZoom) || (this._zoomBoundLayers[m(t2)] = t2, this._updateZoomLevels());
      }, _removeZoomLimit: function(t2) {
        var i2 = m(t2);
        this._zoomBoundLayers[i2] && (delete this._zoomBoundLayers[i2], this._updateZoomLevels());
      }, _updateZoomLevels: function() {
        var t2 = 1 / 0, i2 = -1 / 0, e2 = this._getZoomSpan();
        for (var n2 in this._zoomBoundLayers)
          var o2 = this._zoomBoundLayers[n2].options, t2 = void 0 === o2.minZoom ? t2 : Math.min(t2, o2.minZoom), i2 = void 0 === o2.maxZoom ? i2 : Math.max(i2, o2.maxZoom);
        this._layersMaxZoom = i2 === -1 / 0 ? void 0 : i2, this._layersMinZoom = t2 === 1 / 0 ? void 0 : t2, e2 !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
      }});
      var ze = Me.extend({initialize: function(t2, i2) {
        var e2, n2;
        if (c(this, i2), this._layers = {}, t2)
          for (e2 = 0, n2 = t2.length; e2 < n2; e2++)
            this.addLayer(t2[e2]);
      }, addLayer: function(t2) {
        var i2 = this.getLayerId(t2);
        return this._layers[i2] = t2, this._map && this._map.addLayer(t2), this;
      }, removeLayer: function(t2) {
        var i2 = t2 in this._layers ? t2 : this.getLayerId(t2);
        return this._map && this._layers[i2] && this._map.removeLayer(this._layers[i2]), delete this._layers[i2], this;
      }, hasLayer: function(t2) {
        return !!t2 && ("number" == typeof t2 ? t2 : this.getLayerId(t2)) in this._layers;
      }, clearLayers: function() {
        return this.eachLayer(this.removeLayer, this);
      }, invoke: function(t2) {
        var i2, e2, n2 = Array.prototype.slice.call(arguments, 1);
        for (i2 in this._layers)
          (e2 = this._layers[i2])[t2] && e2[t2].apply(e2, n2);
        return this;
      }, onAdd: function(t2) {
        this.eachLayer(t2.addLayer, t2);
      }, onRemove: function(t2) {
        this.eachLayer(t2.removeLayer, t2);
      }, eachLayer: function(t2, i2) {
        for (var e2 in this._layers)
          t2.call(i2, this._layers[e2]);
        return this;
      }, getLayer: function(t2) {
        return this._layers[t2];
      }, getLayers: function() {
        var t2 = [];
        return this.eachLayer(t2.push, t2), t2;
      }, setZIndex: function(t2) {
        return this.invoke("setZIndex", t2);
      }, getLayerId: m}), Ce = ze.extend({addLayer: function(t2) {
        return this.hasLayer(t2) ? this : (t2.addEventParent(this), ze.prototype.addLayer.call(this, t2), this.fire("layeradd", {layer: t2}));
      }, removeLayer: function(t2) {
        return this.hasLayer(t2) ? (t2 in this._layers && (t2 = this._layers[t2]), t2.removeEventParent(this), ze.prototype.removeLayer.call(this, t2), this.fire("layerremove", {layer: t2})) : this;
      }, setStyle: function(t2) {
        return this.invoke("setStyle", t2);
      }, bringToFront: function() {
        return this.invoke("bringToFront");
      }, bringToBack: function() {
        return this.invoke("bringToBack");
      }, getBounds: function() {
        var t2 = new R();
        for (var i2 in this._layers) {
          var e2 = this._layers[i2];
          t2.extend(e2.getBounds ? e2.getBounds() : e2.getLatLng());
        }
        return t2;
      }}), Se = S.extend({options: {popupAnchor: [0, 0], tooltipAnchor: [0, 0]}, initialize: function(t2) {
        c(this, t2);
      }, createIcon: function(t2) {
        return this._createIcon("icon", t2);
      }, createShadow: function(t2) {
        return this._createIcon("shadow", t2);
      }, _createIcon: function(t2, i2) {
        var e2 = this._getIconUrl(t2);
        if (!e2) {
          if ("icon" === t2)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n2 = this._createImg(e2, i2 && "IMG" === i2.tagName ? i2 : null);
        return this._setIconStyles(n2, t2), n2;
      }, _setIconStyles: function(t2, i2) {
        var e2 = this.options, n2 = e2[i2 + "Size"];
        "number" == typeof n2 && (n2 = [n2, n2]);
        var o2 = A(n2), s2 = A("shadow" === i2 && e2.shadowAnchor || e2.iconAnchor || o2 && o2.divideBy(2, true));
        t2.className = "leaflet-marker-" + i2 + " " + (e2.className || ""), s2 && (t2.style.marginLeft = -s2.x + "px", t2.style.marginTop = -s2.y + "px"), o2 && (t2.style.width = o2.x + "px", t2.style.height = o2.y + "px");
      }, _createImg: function(t2, i2) {
        return (i2 = i2 || document.createElement("img")).src = t2, i2;
      }, _getIconUrl: function(t2) {
        return zt && this.options[t2 + "RetinaUrl"] || this.options[t2 + "Url"];
      }});
      var Ze = Se.extend({options: {iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41]}, _getIconUrl: function(t2) {
        return Ze.imagePath || (Ze.imagePath = this._detectIconPath()), (this.options.imagePath || Ze.imagePath) + Se.prototype._getIconUrl.call(this, t2);
      }, _detectIconPath: function() {
        var t2 = si("div", "leaflet-default-icon-path", document.body), i2 = oi(t2, "background-image") || oi(t2, "backgroundImage");
        return document.body.removeChild(t2), i2 = null === i2 || 0 !== i2.indexOf("url") ? "" : i2.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "");
      }}), Ee = ie.extend({initialize: function(t2) {
        this._marker = t2;
      }, addHooks: function() {
        var t2 = this._marker._icon;
        this._draggable || (this._draggable = new ae(t2, t2, true)), this._draggable.on({dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd}, this).enable(), ci(t2, "leaflet-marker-draggable");
      }, removeHooks: function() {
        this._draggable.off({dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd}, this).disable(), this._marker._icon && _i(this._marker._icon, "leaflet-marker-draggable");
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, _adjustPan: function(t2) {
        var i2, e2 = this._marker, n2 = e2._map, o2 = this._marker.options.autoPanSpeed, s2 = this._marker.options.autoPanPadding, r2 = yi(e2._icon), a2 = n2.getPixelBounds(), h2 = n2.getPixelOrigin(), u2 = O(a2.min._subtract(h2).add(s2), a2.max._subtract(h2).subtract(s2));
        u2.contains(r2) || (i2 = A((Math.max(u2.max.x, r2.x) - u2.max.x) / (a2.max.x - u2.max.x) - (Math.min(u2.min.x, r2.x) - u2.min.x) / (a2.min.x - u2.min.x), (Math.max(u2.max.y, r2.y) - u2.max.y) / (a2.max.y - u2.max.y) - (Math.min(u2.min.y, r2.y) - u2.min.y) / (a2.min.y - u2.min.y)).multiplyBy(o2), n2.panBy(i2, {animate: false}), this._draggable._newPos._add(i2), this._draggable._startPos._add(i2), vi(e2._icon, this._draggable._newPos), this._onDrag(t2), this._panRequest = M(this._adjustPan.bind(this, t2)));
      }, _onDragStart: function() {
        this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
      }, _onPreDrag: function(t2) {
        this._marker.options.autoPan && (z(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t2)));
      }, _onDrag: function(t2) {
        var i2 = this._marker, e2 = i2._shadow, n2 = yi(i2._icon), o2 = i2._map.layerPointToLatLng(n2);
        e2 && vi(e2, n2), i2._latlng = o2, t2.latlng = o2, t2.oldLatLng = this._oldLatLng, i2.fire("move", t2).fire("drag", t2);
      }, _onDragEnd: function(t2) {
        z(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t2);
      }}), ke = Me.extend({options: {icon: new Ze(), interactive: true, keyboard: true, title: "", alt: "", zIndexOffset: 0, opacity: 1, riseOnHover: false, riseOffset: 250, pane: "markerPane", shadowPane: "shadowPane", bubblingMouseEvents: false, draggable: false, autoPan: false, autoPanPadding: [50, 50], autoPanSpeed: 10}, initialize: function(t2, i2) {
        c(this, i2), this._latlng = j(t2);
      }, onAdd: function(t2) {
        this._zoomAnimated = this._zoomAnimated && t2.options.markerZoomAnimation, this._zoomAnimated && t2.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
      }, onRemove: function(t2) {
        this.dragging && this.dragging.enabled() && (this.options.draggable = true, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t2.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
      }, getEvents: function() {
        return {zoom: this.update, viewreset: this.update};
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(t2) {
        var i2 = this._latlng;
        return this._latlng = j(t2), this.update(), this.fire("move", {oldLatLng: i2, latlng: this._latlng});
      }, setZIndexOffset: function(t2) {
        return this.options.zIndexOffset = t2, this.update();
      }, getIcon: function() {
        return this.options.icon;
      }, setIcon: function(t2) {
        return this.options.icon = t2, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
      }, getElement: function() {
        return this._icon;
      }, update: function() {
        var t2;
        return this._icon && this._map && (t2 = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t2)), this;
      }, _initIcon: function() {
        var t2 = this.options, i2 = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), e2 = t2.icon.createIcon(this._icon), n2 = false;
        e2 !== this._icon && (this._icon && this._removeIcon(), n2 = true, t2.title && (e2.title = t2.title), "IMG" === e2.tagName && (e2.alt = t2.alt || "")), ci(e2, i2), t2.keyboard && (e2.tabIndex = "0"), this._icon = e2, t2.riseOnHover && this.on({mouseover: this._bringToFront, mouseout: this._resetZIndex});
        var o2 = t2.icon.createShadow(this._shadow), s2 = false;
        o2 !== this._shadow && (this._removeShadow(), s2 = true), o2 && (ci(o2, i2), o2.alt = ""), this._shadow = o2, t2.opacity < 1 && this._updateOpacity(), n2 && this.getPane().appendChild(this._icon), this._initInteraction(), o2 && s2 && this.getPane(t2.shadowPane).appendChild(this._shadow);
      }, _removeIcon: function() {
        this.options.riseOnHover && this.off({mouseover: this._bringToFront, mouseout: this._resetZIndex}), ri(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
      }, _removeShadow: function() {
        this._shadow && ri(this._shadow), this._shadow = null;
      }, _setPos: function(t2) {
        this._icon && vi(this._icon, t2), this._shadow && vi(this._shadow, t2), this._zIndex = t2.y + this.options.zIndexOffset, this._resetZIndex();
      }, _updateZIndex: function(t2) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t2);
      }, _animateZoom: function(t2) {
        var i2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center).round();
        this._setPos(i2);
      }, _initInteraction: function() {
        var t2;
        this.options.interactive && (ci(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ee && (t2 = this.options.draggable, this.dragging && (t2 = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ee(this), t2 && this.dragging.enable()));
      }, setOpacity: function(t2) {
        return this.options.opacity = t2, this._map && this._updateOpacity(), this;
      }, _updateOpacity: function() {
        var t2 = this.options.opacity;
        this._icon && mi(this._icon, t2), this._shadow && mi(this._shadow, t2);
      }, _bringToFront: function() {
        this._updateZIndex(this.options.riseOffset);
      }, _resetZIndex: function() {
        this._updateZIndex(0);
      }, _getPopupAnchor: function() {
        return this.options.icon.options.popupAnchor;
      }, _getTooltipAnchor: function() {
        return this.options.icon.options.tooltipAnchor;
      }});
      var Be = Me.extend({options: {stroke: true, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: false, fillColor: null, fillOpacity: 0.2, fillRule: "evenodd", interactive: true, bubblingMouseEvents: true}, beforeAdd: function(t2) {
        this._renderer = t2.getRenderer(this);
      }, onAdd: function() {
        this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
      }, onRemove: function() {
        this._renderer._removePath(this);
      }, redraw: function() {
        return this._map && this._renderer._updatePath(this), this;
      }, setStyle: function(t2) {
        return c(this, t2), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t2 && Object.prototype.hasOwnProperty.call(t2, "weight") && this._updateBounds()), this;
      }, bringToFront: function() {
        return this._renderer && this._renderer._bringToFront(this), this;
      }, bringToBack: function() {
        return this._renderer && this._renderer._bringToBack(this), this;
      }, getElement: function() {
        return this._path;
      }, _reset: function() {
        this._project(), this._update();
      }, _clickTolerance: function() {
        return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
      }}), Ae = Be.extend({options: {fill: true, radius: 10}, initialize: function(t2, i2) {
        c(this, i2), this._latlng = j(t2), this._radius = this.options.radius;
      }, setLatLng: function(t2) {
        var i2 = this._latlng;
        return this._latlng = j(t2), this.redraw(), this.fire("move", {oldLatLng: i2, latlng: this._latlng});
      }, getLatLng: function() {
        return this._latlng;
      }, setRadius: function(t2) {
        return this.options.radius = this._radius = t2, this.redraw();
      }, getRadius: function() {
        return this._radius;
      }, setStyle: function(t2) {
        var i2 = t2 && t2.radius || this._radius;
        return Be.prototype.setStyle.call(this, t2), this.setRadius(i2), this;
      }, _project: function() {
        this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
      }, _updateBounds: function() {
        var t2 = this._radius, i2 = this._radiusY || t2, e2 = this._clickTolerance(), n2 = [t2 + e2, i2 + e2];
        this._pxBounds = new I(this._point.subtract(n2), this._point.add(n2));
      }, _update: function() {
        this._map && this._updatePath();
      }, _updatePath: function() {
        this._renderer._updateCircle(this);
      }, _empty: function() {
        return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
      }, _containsPoint: function(t2) {
        return t2.distanceTo(this._point) <= this._radius + this._clickTolerance();
      }});
      var Ie = Ae.extend({initialize: function(t2, i2, e2) {
        if ("number" == typeof i2 && (i2 = h({}, e2, {radius: i2})), c(this, i2), this._latlng = j(t2), isNaN(this.options.radius))
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      }, setRadius: function(t2) {
        return this._mRadius = t2, this.redraw();
      }, getRadius: function() {
        return this._mRadius;
      }, getBounds: function() {
        var t2 = [this._radius, this._radiusY || this._radius];
        return new R(this._map.layerPointToLatLng(this._point.subtract(t2)), this._map.layerPointToLatLng(this._point.add(t2)));
      }, setStyle: Be.prototype.setStyle, _project: function() {
        var t2, i2, e2, n2, o2, s2, r2, a2, h2 = this._latlng.lng, u2 = this._latlng.lat, l2 = this._map, c2 = l2.options.crs;
        c2.distance === F.distance ? (t2 = Math.PI / 180, i2 = this._mRadius / F.R / t2, e2 = l2.project([u2 + i2, h2]), n2 = l2.project([u2 - i2, h2]), o2 = e2.add(n2).divideBy(2), s2 = l2.unproject(o2).lat, r2 = Math.acos((Math.cos(i2 * t2) - Math.sin(u2 * t2) * Math.sin(s2 * t2)) / (Math.cos(u2 * t2) * Math.cos(s2 * t2))) / t2, !isNaN(r2) && 0 !== r2 || (r2 = i2 / Math.cos(Math.PI / 180 * u2)), this._point = o2.subtract(l2.getPixelOrigin()), this._radius = isNaN(r2) ? 0 : o2.x - l2.project([s2, h2 - r2]).x, this._radiusY = o2.y - e2.y) : (a2 = c2.unproject(c2.project(this._latlng).subtract([this._mRadius, 0])), this._point = l2.latLngToLayerPoint(this._latlng), this._radius = this._point.x - l2.latLngToLayerPoint(a2).x), this._updateBounds();
      }});
      var Oe = Be.extend({options: {smoothFactor: 1, noClip: false}, initialize: function(t2, i2) {
        c(this, i2), this._setLatLngs(t2);
      }, getLatLngs: function() {
        return this._latlngs;
      }, setLatLngs: function(t2) {
        return this._setLatLngs(t2), this.redraw();
      }, isEmpty: function() {
        return !this._latlngs.length;
      }, closestLayerPoint: function(t2) {
        for (var i2, e2, n2 = 1 / 0, o2 = null, s2 = de, r2 = 0, a2 = this._parts.length; r2 < a2; r2++)
          for (var h2 = this._parts[r2], u2 = 1, l2 = h2.length; u2 < l2; u2++) {
            var c2 = s2(t2, i2 = h2[u2 - 1], e2 = h2[u2], true);
            c2 < n2 && (n2 = c2, o2 = s2(t2, i2, e2));
          }
        return o2 && (o2.distance = Math.sqrt(n2)), o2;
      }, getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t2, i2, e2, n2, o2, s2, r2, a2 = this._rings[0], h2 = a2.length;
        if (!h2)
          return null;
        for (i2 = t2 = 0; t2 < h2 - 1; t2++)
          i2 += a2[t2].distanceTo(a2[t2 + 1]) / 2;
        if (0 === i2)
          return this._map.layerPointToLatLng(a2[0]);
        for (n2 = t2 = 0; t2 < h2 - 1; t2++)
          if (o2 = a2[t2], s2 = a2[t2 + 1], i2 < (n2 += e2 = o2.distanceTo(s2)))
            return r2 = (n2 - i2) / e2, this._map.layerPointToLatLng([s2.x - r2 * (s2.x - o2.x), s2.y - r2 * (s2.y - o2.y)]);
      }, getBounds: function() {
        return this._bounds;
      }, addLatLng: function(t2, i2) {
        return i2 = i2 || this._defaultShape(), t2 = j(t2), i2.push(t2), this._bounds.extend(t2), this.redraw();
      }, _setLatLngs: function(t2) {
        this._bounds = new R(), this._latlngs = this._convertLatLngs(t2);
      }, _defaultShape: function() {
        return pe(this._latlngs) ? this._latlngs : this._latlngs[0];
      }, _convertLatLngs: function(t2) {
        for (var i2 = [], e2 = pe(t2), n2 = 0, o2 = t2.length; n2 < o2; n2++)
          e2 ? (i2[n2] = j(t2[n2]), this._bounds.extend(i2[n2])) : i2[n2] = this._convertLatLngs(t2[n2]);
        return i2;
      }, _project: function() {
        var t2 = new I();
        this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t2), this._bounds.isValid() && t2.isValid() && (this._rawPxBounds = t2, this._updateBounds());
      }, _updateBounds: function() {
        var t2 = this._clickTolerance(), i2 = new k(t2, t2);
        this._pxBounds = new I([this._rawPxBounds.min.subtract(i2), this._rawPxBounds.max.add(i2)]);
      }, _projectLatlngs: function(t2, i2, e2) {
        var n2, o2, s2 = t2[0] instanceof D, r2 = t2.length;
        if (s2) {
          for (o2 = [], n2 = 0; n2 < r2; n2++)
            o2[n2] = this._map.latLngToLayerPoint(t2[n2]), e2.extend(o2[n2]);
          i2.push(o2);
        } else
          for (n2 = 0; n2 < r2; n2++)
            this._projectLatlngs(t2[n2], i2, e2);
      }, _clipPoints: function() {
        var t2 = this._renderer._bounds;
        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t2))
          if (this.options.noClip)
            this._parts = this._rings;
          else
            for (var i2, e2, n2, o2, s2 = this._parts, r2 = 0, a2 = 0, h2 = this._rings.length; r2 < h2; r2++)
              for (i2 = 0, e2 = (o2 = this._rings[r2]).length; i2 < e2 - 1; i2++)
                (n2 = le(o2[i2], o2[i2 + 1], t2, i2, true)) && (s2[a2] = s2[a2] || [], s2[a2].push(n2[0]), n2[1] === o2[i2 + 1] && i2 !== e2 - 2 || (s2[a2].push(n2[1]), a2++));
      }, _simplifyPoints: function() {
        for (var t2 = this._parts, i2 = this.options.smoothFactor, e2 = 0, n2 = t2.length; e2 < n2; e2++)
          t2[e2] = he(t2[e2], i2);
      }, _update: function() {
        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      }, _updatePath: function() {
        this._renderer._updatePoly(this);
      }, _containsPoint: function(t2, i2) {
        var e2, n2, o2, s2, r2, a2, h2 = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t2))
          return false;
        for (e2 = 0, s2 = this._parts.length; e2 < s2; e2++)
          for (n2 = 0, o2 = (r2 = (a2 = this._parts[e2]).length) - 1; n2 < r2; o2 = n2++)
            if ((i2 || 0 !== n2) && ue(t2, a2[o2], a2[n2]) <= h2)
              return true;
        return false;
      }});
      Oe._flat = me;
      var Re = Oe.extend({options: {fill: true}, isEmpty: function() {
        return !this._latlngs.length || !this._latlngs[0].length;
      }, getCenter: function() {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t2, i2, e2, n2, o2, s2, r2, a2, h2, u2 = this._rings[0], l2 = u2.length;
        if (!l2)
          return null;
        for (t2 = s2 = r2 = a2 = 0, i2 = l2 - 1; t2 < l2; i2 = t2++)
          e2 = u2[t2], n2 = u2[i2], o2 = e2.y * n2.x - n2.y * e2.x, r2 += (e2.x + n2.x) * o2, a2 += (e2.y + n2.y) * o2, s2 += 3 * o2;
        return h2 = 0 === s2 ? u2[0] : [r2 / s2, a2 / s2], this._map.layerPointToLatLng(h2);
      }, _convertLatLngs: function(t2) {
        var i2 = Oe.prototype._convertLatLngs.call(this, t2), e2 = i2.length;
        return 2 <= e2 && i2[0] instanceof D && i2[0].equals(i2[e2 - 1]) && i2.pop(), i2;
      }, _setLatLngs: function(t2) {
        Oe.prototype._setLatLngs.call(this, t2), pe(this._latlngs) && (this._latlngs = [this._latlngs]);
      }, _defaultShape: function() {
        return pe(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      }, _clipPoints: function() {
        var t2 = this._renderer._bounds, i2 = this.options.weight, e2 = new k(i2, i2), t2 = new I(t2.min.subtract(e2), t2.max.add(e2));
        if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t2))
          if (this.options.noClip)
            this._parts = this._rings;
          else
            for (var n2, o2 = 0, s2 = this._rings.length; o2 < s2; o2++)
              (n2 = ge(this._rings[o2], t2, true)).length && this._parts.push(n2);
      }, _updatePath: function() {
        this._renderer._updatePoly(this, true);
      }, _containsPoint: function(t2) {
        var i2, e2, n2, o2, s2, r2, a2, h2, u2 = false;
        if (!this._pxBounds || !this._pxBounds.contains(t2))
          return false;
        for (o2 = 0, a2 = this._parts.length; o2 < a2; o2++)
          for (s2 = 0, r2 = (h2 = (i2 = this._parts[o2]).length) - 1; s2 < h2; r2 = s2++)
            e2 = i2[s2], n2 = i2[r2], e2.y > t2.y != n2.y > t2.y && t2.x < (n2.x - e2.x) * (t2.y - e2.y) / (n2.y - e2.y) + e2.x && (u2 = !u2);
        return u2 || Oe.prototype._containsPoint.call(this, t2, true);
      }});
      var Ne = Ce.extend({initialize: function(t2, i2) {
        c(this, i2), this._layers = {}, t2 && this.addData(t2);
      }, addData: function(t2) {
        var i2, e2, n2, o2 = g(t2) ? t2 : t2.features;
        if (o2) {
          for (i2 = 0, e2 = o2.length; i2 < e2; i2++)
            ((n2 = o2[i2]).geometries || n2.geometry || n2.features || n2.coordinates) && this.addData(n2);
          return this;
        }
        var s2 = this.options;
        if (s2.filter && !s2.filter(t2))
          return this;
        var r2 = De(t2, s2);
        return r2 ? (r2.feature = qe(t2), r2.defaultOptions = r2.options, this.resetStyle(r2), s2.onEachFeature && s2.onEachFeature(t2, r2), this.addLayer(r2)) : this;
      }, resetStyle: function(t2) {
        return void 0 === t2 ? this.eachLayer(this.resetStyle, this) : (t2.options = h({}, t2.defaultOptions), this._setLayerStyle(t2, this.options.style), this);
      }, setStyle: function(i2) {
        return this.eachLayer(function(t2) {
          this._setLayerStyle(t2, i2);
        }, this);
      }, _setLayerStyle: function(t2, i2) {
        t2.setStyle && ("function" == typeof i2 && (i2 = i2(t2.feature)), t2.setStyle(i2));
      }});
      function De(t2, i2) {
        var e2, n2, o2, s2, r2 = "Feature" === t2.type ? t2.geometry : t2, a2 = r2 ? r2.coordinates : null, h2 = [], u2 = i2 && i2.pointToLayer, l2 = i2 && i2.coordsToLatLng || We;
        if (!a2 && !r2)
          return null;
        switch (r2.type) {
          case "Point":
            return je(u2, t2, e2 = l2(a2), i2);
          case "MultiPoint":
            for (o2 = 0, s2 = a2.length; o2 < s2; o2++)
              e2 = l2(a2[o2]), h2.push(je(u2, t2, e2, i2));
            return new Ce(h2);
          case "LineString":
          case "MultiLineString":
            return n2 = He(a2, "LineString" === r2.type ? 0 : 1, l2), new Oe(n2, i2);
          case "Polygon":
          case "MultiPolygon":
            return n2 = He(a2, "Polygon" === r2.type ? 1 : 2, l2), new Re(n2, i2);
          case "GeometryCollection":
            for (o2 = 0, s2 = r2.geometries.length; o2 < s2; o2++) {
              var c2 = De({geometry: r2.geometries[o2], type: "Feature", properties: t2.properties}, i2);
              c2 && h2.push(c2);
            }
            return new Ce(h2);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function je(t2, i2, e2, n2) {
        return t2 ? t2(i2, e2) : new ke(e2, n2 && n2.markersInheritOptions && n2);
      }
      function We(t2) {
        return new D(t2[1], t2[0], t2[2]);
      }
      function He(t2, i2, e2) {
        for (var n2, o2 = [], s2 = 0, r2 = t2.length; s2 < r2; s2++)
          n2 = i2 ? He(t2[s2], i2 - 1, e2) : (e2 || We)(t2[s2]), o2.push(n2);
        return o2;
      }
      function Fe(t2, i2) {
        return i2 = "number" == typeof i2 ? i2 : 6, void 0 !== t2.alt ? [r(t2.lng, i2), r(t2.lat, i2), r(t2.alt, i2)] : [r(t2.lng, i2), r(t2.lat, i2)];
      }
      function Ue(t2, i2, e2, n2) {
        for (var o2 = [], s2 = 0, r2 = t2.length; s2 < r2; s2++)
          o2.push(i2 ? Ue(t2[s2], i2 - 1, e2, n2) : Fe(t2[s2], n2));
        return !i2 && e2 && o2.push(o2[0]), o2;
      }
      function Ve(t2, i2) {
        return t2.feature ? h({}, t2.feature, {geometry: i2}) : qe(i2);
      }
      function qe(t2) {
        return "Feature" === t2.type || "FeatureCollection" === t2.type ? t2 : {type: "Feature", properties: {}, geometry: t2};
      }
      var Ge = {toGeoJSON: function(t2) {
        return Ve(this, {type: "Point", coordinates: Fe(this.getLatLng(), t2)});
      }};
      function Ke(t2, i2) {
        return new Ne(t2, i2);
      }
      ke.include(Ge), Ie.include(Ge), Ae.include(Ge), Oe.include({toGeoJSON: function(t2) {
        var i2 = !pe(this._latlngs);
        return Ve(this, {type: (i2 ? "Multi" : "") + "LineString", coordinates: Ue(this._latlngs, i2 ? 1 : 0, false, t2)});
      }}), Re.include({toGeoJSON: function(t2) {
        var i2 = !pe(this._latlngs), e2 = i2 && !pe(this._latlngs[0]), n2 = Ue(this._latlngs, e2 ? 2 : i2 ? 1 : 0, true, t2);
        return i2 || (n2 = [n2]), Ve(this, {type: (e2 ? "Multi" : "") + "Polygon", coordinates: n2});
      }}), ze.include({toMultiPoint: function(i2) {
        var e2 = [];
        return this.eachLayer(function(t2) {
          e2.push(t2.toGeoJSON(i2).geometry.coordinates);
        }), Ve(this, {type: "MultiPoint", coordinates: e2});
      }, toGeoJSON: function(n2) {
        var t2 = this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === t2)
          return this.toMultiPoint(n2);
        var o2 = "GeometryCollection" === t2, s2 = [];
        return this.eachLayer(function(t3) {
          var i2, e2;
          t3.toGeoJSON && (i2 = t3.toGeoJSON(n2), o2 ? s2.push(i2.geometry) : "FeatureCollection" === (e2 = qe(i2)).type ? s2.push.apply(s2, e2.features) : s2.push(e2));
        }), o2 ? Ve(this, {geometries: s2, type: "GeometryCollection"}) : {type: "FeatureCollection", features: s2};
      }});
      var Ye = Ke, Xe = Me.extend({options: {opacity: 1, alt: "", interactive: false, crossOrigin: false, errorOverlayUrl: "", zIndex: 1, className: ""}, initialize: function(t2, i2, e2) {
        this._url = t2, this._bounds = N(i2), c(this, e2);
      }, onAdd: function() {
        this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ci(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
      }, onRemove: function() {
        ri(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
      }, setOpacity: function(t2) {
        return this.options.opacity = t2, this._image && this._updateOpacity(), this;
      }, setStyle: function(t2) {
        return t2.opacity && this.setOpacity(t2.opacity), this;
      }, bringToFront: function() {
        return this._map && hi(this._image), this;
      }, bringToBack: function() {
        return this._map && ui(this._image), this;
      }, setUrl: function(t2) {
        return this._url = t2, this._image && (this._image.src = t2), this;
      }, setBounds: function(t2) {
        return this._bounds = N(t2), this._map && this._reset(), this;
      }, getEvents: function() {
        var t2 = {zoom: this._reset, viewreset: this._reset};
        return this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
      }, setZIndex: function(t2) {
        return this.options.zIndex = t2, this._updateZIndex(), this;
      }, getBounds: function() {
        return this._bounds;
      }, getElement: function() {
        return this._image;
      }, _initImage: function() {
        var t2 = "IMG" === this._url.tagName, i2 = this._image = t2 ? this._url : si("img");
        ci(i2, "leaflet-image-layer"), this._zoomAnimated && ci(i2, "leaflet-zoom-animated"), this.options.className && ci(i2, this.options.className), i2.onselectstart = a, i2.onmousemove = a, i2.onload = p(this.fire, this, "load"), i2.onerror = p(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t2 ? this._url = i2.src : (i2.src = this._url, i2.alt = this.options.alt);
      }, _animateZoom: function(t2) {
        var i2 = this._map.getZoomScale(t2.zoom), e2 = this._map._latLngBoundsToNewLayerBounds(this._bounds, t2.zoom, t2.center).min;
        gi(this._image, e2, i2);
      }, _reset: function() {
        var t2 = this._image, i2 = new I(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), e2 = i2.getSize();
        vi(t2, i2.min), t2.style.width = e2.x + "px", t2.style.height = e2.y + "px";
      }, _updateOpacity: function() {
        mi(this._image, this.options.opacity);
      }, _updateZIndex: function() {
        this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
      }, _overlayOnError: function() {
        this.fire("error");
        var t2 = this.options.errorOverlayUrl;
        t2 && this._url !== t2 && (this._url = t2, this._image.src = t2);
      }}), Je = Xe.extend({options: {autoplay: true, loop: true, keepAspectRatio: true, muted: false}, _initImage: function() {
        var t2 = "VIDEO" === this._url.tagName, i2 = this._image = t2 ? this._url : si("video");
        if (ci(i2, "leaflet-image-layer"), this._zoomAnimated && ci(i2, "leaflet-zoom-animated"), this.options.className && ci(i2, this.options.className), i2.onselectstart = a, i2.onmousemove = a, i2.onloadeddata = p(this.fire, this, "load"), t2) {
          for (var e2 = i2.getElementsByTagName("source"), n2 = [], o2 = 0; o2 < e2.length; o2++)
            n2.push(e2[o2].src);
          this._url = 0 < e2.length ? n2 : [i2.src];
        } else {
          g(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i2.style, "objectFit") && (i2.style.objectFit = "fill"), i2.autoplay = !!this.options.autoplay, i2.loop = !!this.options.loop, i2.muted = !!this.options.muted;
          for (var s2 = 0; s2 < this._url.length; s2++) {
            var r2 = si("source");
            r2.src = this._url[s2], i2.appendChild(r2);
          }
        }
      }});
      var $e = Xe.extend({_initImage: function() {
        var t2 = this._image = this._url;
        ci(t2, "leaflet-image-layer"), this._zoomAnimated && ci(t2, "leaflet-zoom-animated"), this.options.className && ci(t2, this.options.className), t2.onselectstart = a, t2.onmousemove = a;
      }});
      var Qe = Me.extend({options: {offset: [0, 7], className: "", pane: "popupPane"}, initialize: function(t2, i2) {
        c(this, t2), this._source = i2;
      }, onAdd: function(t2) {
        this._zoomAnimated = t2._zoomAnimated, this._container || this._initLayout(), t2._fadeAnimated && mi(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t2._fadeAnimated && mi(this._container, 1), this.bringToFront();
      }, onRemove: function(t2) {
        t2._fadeAnimated ? (mi(this._container, 0), this._removeTimeout = setTimeout(p(ri, void 0, this._container), 200)) : ri(this._container);
      }, getLatLng: function() {
        return this._latlng;
      }, setLatLng: function(t2) {
        return this._latlng = j(t2), this._map && (this._updatePosition(), this._adjustPan()), this;
      }, getContent: function() {
        return this._content;
      }, setContent: function(t2) {
        return this._content = t2, this.update(), this;
      }, getElement: function() {
        return this._container;
      }, update: function() {
        this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
      }, getEvents: function() {
        var t2 = {zoom: this._updatePosition, viewreset: this._updatePosition};
        return this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
      }, isOpen: function() {
        return !!this._map && this._map.hasLayer(this);
      }, bringToFront: function() {
        return this._map && hi(this._container), this;
      }, bringToBack: function() {
        return this._map && ui(this._container), this;
      }, _prepareOpen: function(t2, i2, e2) {
        if (i2 instanceof Me || (e2 = i2, i2 = t2), i2 instanceof Ce)
          for (var n2 in t2._layers) {
            i2 = t2._layers[n2];
            break;
          }
        if (!e2)
          if (i2.getCenter)
            e2 = i2.getCenter();
          else {
            if (!i2.getLatLng)
              throw new Error("Unable to get source layer LatLng.");
            e2 = i2.getLatLng();
          }
        return this._source = i2, this.update(), e2;
      }, _updateContent: function() {
        if (this._content) {
          var t2 = this._contentNode, i2 = "function" == typeof this._content ? this._content(this._source || this) : this._content;
          if ("string" == typeof i2)
            t2.innerHTML = i2;
          else {
            for (; t2.hasChildNodes(); )
              t2.removeChild(t2.firstChild);
            t2.appendChild(i2);
          }
          this.fire("contentupdate");
        }
      }, _updatePosition: function() {
        var t2, i2, e2, n2, o2;
        this._map && (t2 = this._map.latLngToLayerPoint(this._latlng), i2 = A(this.options.offset), e2 = this._getAnchor(), this._zoomAnimated ? vi(this._container, t2.add(e2)) : i2 = i2.add(t2).add(e2), n2 = this._containerBottom = -i2.y, o2 = this._containerLeft = -Math.round(this._containerWidth / 2) + i2.x, this._container.style.bottom = n2 + "px", this._container.style.left = o2 + "px");
      }, _getAnchor: function() {
        return [0, 0];
      }}), tn = Qe.extend({options: {maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: true, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: false, closeButton: true, autoClose: true, closeOnEscapeKey: true, className: ""}, openOn: function(t2) {
        return t2.openPopup(this), this;
      }, onAdd: function(t2) {
        Qe.prototype.onAdd.call(this, t2), t2.fire("popupopen", {popup: this}), this._source && (this._source.fire("popupopen", {popup: this}, true), this._source instanceof Be || this._source.on("preclick", Ai));
      }, onRemove: function(t2) {
        Qe.prototype.onRemove.call(this, t2), t2.fire("popupclose", {popup: this}), this._source && (this._source.fire("popupclose", {popup: this}, true), this._source instanceof Be || this._source.off("preclick", Ai));
      }, getEvents: function() {
        var t2 = Qe.prototype.getEvents.call(this);
        return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t2.preclick = this._close), this.options.keepInView && (t2.moveend = this._adjustPan), t2;
      }, _close: function() {
        this._map && this._map.closePopup(this);
      }, _initLayout: function() {
        var t2, i2 = "leaflet-popup", e2 = this._container = si("div", i2 + " " + (this.options.className || "") + " leaflet-zoom-animated"), n2 = this._wrapper = si("div", i2 + "-content-wrapper", e2);
        this._contentNode = si("div", i2 + "-content", n2), Oi(e2), Ii(this._contentNode), zi(e2, "contextmenu", Ai), this._tipContainer = si("div", i2 + "-tip-container", e2), this._tip = si("div", i2 + "-tip", this._tipContainer), this.options.closeButton && ((t2 = this._closeButton = si("a", i2 + "-close-button", e2)).href = "#close", t2.innerHTML = "&#215;", zi(t2, "click", this._onCloseButtonClick, this));
      }, _updateLayout: function() {
        var t2 = this._contentNode, i2 = t2.style;
        i2.width = "", i2.whiteSpace = "nowrap";
        var e2 = t2.offsetWidth, e2 = Math.min(e2, this.options.maxWidth);
        e2 = Math.max(e2, this.options.minWidth), i2.width = e2 + 1 + "px", i2.whiteSpace = "", i2.height = "";
        var n2 = t2.offsetHeight, o2 = this.options.maxHeight, s2 = "leaflet-popup-scrolled";
        o2 && o2 < n2 ? (i2.height = o2 + "px", ci(t2, s2)) : _i(t2, s2), this._containerWidth = this._container.offsetWidth;
      }, _animateZoom: function(t2) {
        var i2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center), e2 = this._getAnchor();
        vi(this._container, i2.add(e2));
      }, _adjustPan: function() {
        var t2, i2, e2, n2, o2, s2, r2, a2, h2, u2, l2, c2;
        this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), t2 = this._map, i2 = parseInt(oi(this._container, "marginBottom"), 10) || 0, e2 = this._container.offsetHeight + i2, n2 = this._containerWidth, (o2 = new k(this._containerLeft, -e2 - this._containerBottom))._add(yi(this._container)), s2 = t2.layerPointToContainerPoint(o2), r2 = A(this.options.autoPanPadding), a2 = A(this.options.autoPanPaddingTopLeft || r2), h2 = A(this.options.autoPanPaddingBottomRight || r2), u2 = t2.getSize(), c2 = l2 = 0, s2.x + n2 + h2.x > u2.x && (l2 = s2.x + n2 - u2.x + h2.x), s2.x - l2 - a2.x < 0 && (l2 = s2.x - a2.x), s2.y + e2 + h2.y > u2.y && (c2 = s2.y + e2 - u2.y + h2.y), s2.y - c2 - a2.y < 0 && (c2 = s2.y - a2.y), (l2 || c2) && t2.fire("autopanstart").panBy([l2, c2]));
      }, _onCloseButtonClick: function(t2) {
        this._close(), Ni(t2);
      }, _getAnchor: function() {
        return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
      }});
      Ki.mergeOptions({closePopupOnClick: true}), Ki.include({openPopup: function(t2, i2, e2) {
        return t2 instanceof tn || (t2 = new tn(e2).setContent(t2)), i2 && t2.setLatLng(i2), this.hasLayer(t2) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t2, this.addLayer(t2));
      }, closePopup: function(t2) {
        return t2 && t2 !== this._popup || (t2 = this._popup, this._popup = null), t2 && this.removeLayer(t2), this;
      }}), Me.include({bindPopup: function(t2, i2) {
        return t2 instanceof tn ? (c(t2, i2), (this._popup = t2)._source = this) : (this._popup && !i2 || (this._popup = new tn(i2, this)), this._popup.setContent(t2)), this._popupHandlersAdded || (this.on({click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup}), this._popupHandlersAdded = true), this;
      }, unbindPopup: function() {
        return this._popup && (this.off({click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup}), this._popupHandlersAdded = false, this._popup = null), this;
      }, openPopup: function(t2, i2) {
        return this._popup && this._map && (i2 = this._popup._prepareOpen(this, t2, i2), this._map.openPopup(this._popup, i2)), this;
      }, closePopup: function() {
        return this._popup && this._popup._close(), this;
      }, togglePopup: function(t2) {
        return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t2)), this;
      }, isPopupOpen: function() {
        return !!this._popup && this._popup.isOpen();
      }, setPopupContent: function(t2) {
        return this._popup && this._popup.setContent(t2), this;
      }, getPopup: function() {
        return this._popup;
      }, _openPopup: function(t2) {
        var i2 = t2.layer || t2.target;
        this._popup && this._map && (Ni(t2), i2 instanceof Be ? this.openPopup(t2.layer || t2.target, t2.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i2 ? this.closePopup() : this.openPopup(i2, t2.latlng));
      }, _movePopup: function(t2) {
        this._popup.setLatLng(t2.latlng);
      }, _onKeyPress: function(t2) {
        13 === t2.originalEvent.keyCode && this._openPopup(t2);
      }});
      var en = Qe.extend({options: {pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: false, sticky: false, interactive: false, opacity: 0.9}, onAdd: function(t2) {
        Qe.prototype.onAdd.call(this, t2), this.setOpacity(this.options.opacity), t2.fire("tooltipopen", {tooltip: this}), this._source && this._source.fire("tooltipopen", {tooltip: this}, true);
      }, onRemove: function(t2) {
        Qe.prototype.onRemove.call(this, t2), t2.fire("tooltipclose", {tooltip: this}), this._source && this._source.fire("tooltipclose", {tooltip: this}, true);
      }, getEvents: function() {
        var t2 = Qe.prototype.getEvents.call(this);
        return bt && !this.options.permanent && (t2.preclick = this._close), t2;
      }, _close: function() {
        this._map && this._map.closeTooltip(this);
      }, _initLayout: function() {
        var t2 = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = si("div", t2);
      }, _updateLayout: function() {
      }, _adjustPan: function() {
      }, _setPosition: function(t2) {
        var i2, e2 = this._map, n2 = this._container, o2 = e2.latLngToContainerPoint(e2.getCenter()), s2 = e2.layerPointToContainerPoint(t2), r2 = this.options.direction, a2 = n2.offsetWidth, h2 = n2.offsetHeight, u2 = A(this.options.offset), l2 = this._getAnchor(), c2 = "top" === r2 ? (i2 = a2 / 2, h2) : "bottom" === r2 ? (i2 = a2 / 2, 0) : (i2 = "center" === r2 ? a2 / 2 : "right" === r2 ? 0 : "left" === r2 ? a2 : s2.x < o2.x ? (r2 = "right", 0) : (r2 = "left", a2 + 2 * (u2.x + l2.x)), h2 / 2);
        t2 = t2.subtract(A(i2, c2, true)).add(u2).add(l2), _i(n2, "leaflet-tooltip-right"), _i(n2, "leaflet-tooltip-left"), _i(n2, "leaflet-tooltip-top"), _i(n2, "leaflet-tooltip-bottom"), ci(n2, "leaflet-tooltip-" + r2), vi(n2, t2);
      }, _updatePosition: function() {
        var t2 = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t2);
      }, setOpacity: function(t2) {
        this.options.opacity = t2, this._container && mi(this._container, t2);
      }, _animateZoom: function(t2) {
        var i2 = this._map._latLngToNewLayerPoint(this._latlng, t2.zoom, t2.center);
        this._setPosition(i2);
      }, _getAnchor: function() {
        return A(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
      }});
      Ki.include({openTooltip: function(t2, i2, e2) {
        return t2 instanceof en || (t2 = new en(e2).setContent(t2)), i2 && t2.setLatLng(i2), this.hasLayer(t2) ? this : this.addLayer(t2);
      }, closeTooltip: function(t2) {
        return t2 && this.removeLayer(t2), this;
      }}), Me.include({bindTooltip: function(t2, i2) {
        return t2 instanceof en ? (c(t2, i2), (this._tooltip = t2)._source = this) : (this._tooltip && !i2 || (this._tooltip = new en(i2, this)), this._tooltip.setContent(t2)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
      }, unbindTooltip: function() {
        return this._tooltip && (this._initTooltipInteractions(true), this.closeTooltip(), this._tooltip = null), this;
      }, _initTooltipInteractions: function(t2) {
        var i2, e2;
        !t2 && this._tooltipHandlersAdded || (i2 = t2 ? "off" : "on", e2 = {remove: this.closeTooltip, move: this._moveTooltip}, this._tooltip.options.permanent ? e2.add = this._openTooltip : (e2.mouseover = this._openTooltip, e2.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e2.mousemove = this._moveTooltip), bt && (e2.click = this._openTooltip)), this[i2](e2), this._tooltipHandlersAdded = !t2);
      }, openTooltip: function(t2, i2) {
        return this._tooltip && this._map && (i2 = this._tooltip._prepareOpen(this, t2, i2), this._map.openTooltip(this._tooltip, i2), this._tooltip.options.interactive && this._tooltip._container && (ci(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
      }, closeTooltip: function() {
        return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (_i(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
      }, toggleTooltip: function(t2) {
        return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t2)), this;
      }, isTooltipOpen: function() {
        return this._tooltip.isOpen();
      }, setTooltipContent: function(t2) {
        return this._tooltip && this._tooltip.setContent(t2), this;
      }, getTooltip: function() {
        return this._tooltip;
      }, _openTooltip: function(t2) {
        var i2 = t2.layer || t2.target;
        this._tooltip && this._map && this.openTooltip(i2, this._tooltip.options.sticky ? t2.latlng : void 0);
      }, _moveTooltip: function(t2) {
        var i2, e2, n2 = t2.latlng;
        this._tooltip.options.sticky && t2.originalEvent && (i2 = this._map.mouseEventToContainerPoint(t2.originalEvent), e2 = this._map.containerPointToLayerPoint(i2), n2 = this._map.layerPointToLatLng(e2)), this._tooltip.setLatLng(n2);
      }});
      var nn = Se.extend({options: {iconSize: [12, 12], html: false, bgPos: null, className: "leaflet-div-icon"}, createIcon: function(t2) {
        var i2, e2 = t2 && "DIV" === t2.tagName ? t2 : document.createElement("div"), n2 = this.options;
        return n2.html instanceof Element ? (ai(e2), e2.appendChild(n2.html)) : e2.innerHTML = false !== n2.html ? n2.html : "", n2.bgPos && (i2 = A(n2.bgPos), e2.style.backgroundPosition = -i2.x + "px " + -i2.y + "px"), this._setIconStyles(e2, "icon"), e2;
      }, createShadow: function() {
        return null;
      }});
      Se.Default = Ze;
      var on = Me.extend({options: {tileSize: 256, opacity: 1, updateWhenIdle: yt, updateWhenZooming: true, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: false, pane: "tilePane", className: "", keepBuffer: 2}, initialize: function(t2) {
        c(this, t2);
      }, onAdd: function() {
        this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
      }, beforeAdd: function(t2) {
        t2._addZoomLimit(this);
      }, onRemove: function(t2) {
        this._removeAllTiles(), ri(this._container), t2._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
      }, bringToFront: function() {
        return this._map && (hi(this._container), this._setAutoZIndex(Math.max)), this;
      }, bringToBack: function() {
        return this._map && (ui(this._container), this._setAutoZIndex(Math.min)), this;
      }, getContainer: function() {
        return this._container;
      }, setOpacity: function(t2) {
        return this.options.opacity = t2, this._updateOpacity(), this;
      }, setZIndex: function(t2) {
        return this.options.zIndex = t2, this._updateZIndex(), this;
      }, isLoading: function() {
        return this._loading;
      }, redraw: function() {
        return this._map && (this._removeAllTiles(), this._update()), this;
      }, getEvents: function() {
        var t2 = {viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd};
        return this.options.updateWhenIdle || (this._onMove || (this._onMove = n(this._onMoveEnd, this.options.updateInterval, this)), t2.move = this._onMove), this._zoomAnimated && (t2.zoomanim = this._animateZoom), t2;
      }, createTile: function() {
        return document.createElement("div");
      }, getTileSize: function() {
        var t2 = this.options.tileSize;
        return t2 instanceof k ? t2 : new k(t2, t2);
      }, _updateZIndex: function() {
        this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
      }, _setAutoZIndex: function(t2) {
        for (var i2, e2 = this.getPane().children, n2 = -t2(-1 / 0, 1 / 0), o2 = 0, s2 = e2.length; o2 < s2; o2++)
          i2 = e2[o2].style.zIndex, e2[o2] !== this._container && i2 && (n2 = t2(n2, +i2));
        isFinite(n2) && (this.options.zIndex = n2 + t2(-1, 1), this._updateZIndex());
      }, _updateOpacity: function() {
        if (this._map && !it) {
          mi(this._container, this.options.opacity);
          var t2 = +new Date(), i2 = false, e2 = false;
          for (var n2 in this._tiles) {
            var o2, s2 = this._tiles[n2];
            s2.current && s2.loaded && (o2 = Math.min(1, (t2 - s2.loaded) / 200), mi(s2.el, o2), o2 < 1 ? i2 = true : (s2.active ? e2 = true : this._onOpaqueTile(s2), s2.active = true));
          }
          e2 && !this._noPrune && this._pruneTiles(), i2 && (z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this));
        }
      }, _onOpaqueTile: a, _initContainer: function() {
        this._container || (this._container = si("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
      }, _updateLevels: function() {
        var t2 = this._tileZoom, i2 = this.options.maxZoom;
        if (void 0 !== t2) {
          for (var e2 in this._levels)
            e2 = Number(e2), this._levels[e2].el.children.length || e2 === t2 ? (this._levels[e2].el.style.zIndex = i2 - Math.abs(t2 - e2), this._onUpdateLevel(e2)) : (ri(this._levels[e2].el), this._removeTilesAtZoom(e2), this._onRemoveLevel(e2), delete this._levels[e2]);
          var n2 = this._levels[t2], o2 = this._map;
          return n2 || ((n2 = this._levels[t2] = {}).el = si("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n2.el.style.zIndex = i2, n2.origin = o2.project(o2.unproject(o2.getPixelOrigin()), t2).round(), n2.zoom = t2, this._setZoomTransform(n2, o2.getCenter(), o2.getZoom()), a(n2.el.offsetWidth), this._onCreateLevel(n2)), this._level = n2;
        }
      }, _onUpdateLevel: a, _onRemoveLevel: a, _onCreateLevel: a, _pruneTiles: function() {
        if (this._map) {
          var t2, i2, e2, n2 = this._map.getZoom();
          if (n2 > this.options.maxZoom || n2 < this.options.minZoom)
            this._removeAllTiles();
          else {
            for (t2 in this._tiles)
              (e2 = this._tiles[t2]).retain = e2.current;
            for (t2 in this._tiles) {
              (e2 = this._tiles[t2]).current && !e2.active && (i2 = e2.coords, this._retainParent(i2.x, i2.y, i2.z, i2.z - 5) || this._retainChildren(i2.x, i2.y, i2.z, i2.z + 2));
            }
            for (t2 in this._tiles)
              this._tiles[t2].retain || this._removeTile(t2);
          }
        }
      }, _removeTilesAtZoom: function(t2) {
        for (var i2 in this._tiles)
          this._tiles[i2].coords.z === t2 && this._removeTile(i2);
      }, _removeAllTiles: function() {
        for (var t2 in this._tiles)
          this._removeTile(t2);
      }, _invalidateAll: function() {
        for (var t2 in this._levels)
          ri(this._levels[t2].el), this._onRemoveLevel(Number(t2)), delete this._levels[t2];
        this._removeAllTiles(), this._tileZoom = void 0;
      }, _retainParent: function(t2, i2, e2, n2) {
        var o2 = Math.floor(t2 / 2), s2 = Math.floor(i2 / 2), r2 = e2 - 1, a2 = new k(+o2, +s2);
        a2.z = +r2;
        var h2 = this._tileCoordsToKey(a2), u2 = this._tiles[h2];
        return u2 && u2.active ? u2.retain = true : (u2 && u2.loaded && (u2.retain = true), n2 < r2 && this._retainParent(o2, s2, r2, n2));
      }, _retainChildren: function(t2, i2, e2, n2) {
        for (var o2 = 2 * t2; o2 < 2 * t2 + 2; o2++)
          for (var s2 = 2 * i2; s2 < 2 * i2 + 2; s2++) {
            var r2 = new k(o2, s2);
            r2.z = e2 + 1;
            var a2 = this._tileCoordsToKey(r2), h2 = this._tiles[a2];
            h2 && h2.active ? h2.retain = true : (h2 && h2.loaded && (h2.retain = true), e2 + 1 < n2 && this._retainChildren(o2, s2, e2 + 1, n2));
          }
      }, _resetView: function(t2) {
        var i2 = t2 && (t2.pinch || t2.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), i2, i2);
      }, _animateZoom: function(t2) {
        this._setView(t2.center, t2.zoom, true, t2.noUpdate);
      }, _clampZoom: function(t2) {
        var i2 = this.options;
        return void 0 !== i2.minNativeZoom && t2 < i2.minNativeZoom ? i2.minNativeZoom : void 0 !== i2.maxNativeZoom && i2.maxNativeZoom < t2 ? i2.maxNativeZoom : t2;
      }, _setView: function(t2, i2, e2, n2) {
        var o2 = Math.round(i2), o2 = void 0 !== this.options.maxZoom && o2 > this.options.maxZoom || void 0 !== this.options.minZoom && o2 < this.options.minZoom ? void 0 : this._clampZoom(o2), s2 = this.options.updateWhenZooming && o2 !== this._tileZoom;
        n2 && !s2 || (this._tileZoom = o2, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o2 && this._update(t2), e2 || this._pruneTiles(), this._noPrune = !!e2), this._setZoomTransforms(t2, i2);
      }, _setZoomTransforms: function(t2, i2) {
        for (var e2 in this._levels)
          this._setZoomTransform(this._levels[e2], t2, i2);
      }, _setZoomTransform: function(t2, i2, e2) {
        var n2 = this._map.getZoomScale(e2, t2.zoom), o2 = t2.origin.multiplyBy(n2).subtract(this._map._getNewPixelOrigin(i2, e2)).round();
        vt ? gi(t2.el, o2, n2) : vi(t2.el, o2);
      }, _resetGrid: function() {
        var t2 = this._map, i2 = t2.options.crs, e2 = this._tileSize = this.getTileSize(), n2 = this._tileZoom, o2 = this._map.getPixelWorldBounds(this._tileZoom);
        o2 && (this._globalTileRange = this._pxBoundsToTileRange(o2)), this._wrapX = i2.wrapLng && !this.options.noWrap && [Math.floor(t2.project([0, i2.wrapLng[0]], n2).x / e2.x), Math.ceil(t2.project([0, i2.wrapLng[1]], n2).x / e2.y)], this._wrapY = i2.wrapLat && !this.options.noWrap && [Math.floor(t2.project([i2.wrapLat[0], 0], n2).y / e2.x), Math.ceil(t2.project([i2.wrapLat[1], 0], n2).y / e2.y)];
      }, _onMoveEnd: function() {
        this._map && !this._map._animatingZoom && this._update();
      }, _getTiledPixelBounds: function(t2) {
        var i2 = this._map, e2 = i2._animatingZoom ? Math.max(i2._animateToZoom, i2.getZoom()) : i2.getZoom(), n2 = i2.getZoomScale(e2, this._tileZoom), o2 = i2.project(t2, this._tileZoom).floor(), s2 = i2.getSize().divideBy(2 * n2);
        return new I(o2.subtract(s2), o2.add(s2));
      }, _update: function(t2) {
        var i2 = this._map;
        if (i2) {
          var e2 = this._clampZoom(i2.getZoom());
          if (void 0 === t2 && (t2 = i2.getCenter()), void 0 !== this._tileZoom) {
            var n2 = this._getTiledPixelBounds(t2), o2 = this._pxBoundsToTileRange(n2), s2 = o2.getCenter(), r2 = [], a2 = this.options.keepBuffer, h2 = new I(o2.getBottomLeft().subtract([a2, -a2]), o2.getTopRight().add([a2, -a2]));
            if (!(isFinite(o2.min.x) && isFinite(o2.min.y) && isFinite(o2.max.x) && isFinite(o2.max.y)))
              throw new Error("Attempted to load an infinite number of tiles");
            for (var u2 in this._tiles) {
              var l2 = this._tiles[u2].coords;
              l2.z === this._tileZoom && h2.contains(new k(l2.x, l2.y)) || (this._tiles[u2].current = false);
            }
            if (1 < Math.abs(e2 - this._tileZoom))
              this._setView(t2, e2);
            else {
              for (var c2 = o2.min.y; c2 <= o2.max.y; c2++)
                for (var _2 = o2.min.x; _2 <= o2.max.x; _2++) {
                  var d2, p2 = new k(_2, c2);
                  p2.z = this._tileZoom, this._isValidTile(p2) && ((d2 = this._tiles[this._tileCoordsToKey(p2)]) ? d2.current = true : r2.push(p2));
                }
              if (r2.sort(function(t3, i3) {
                return t3.distanceTo(s2) - i3.distanceTo(s2);
              }), 0 !== r2.length) {
                this._loading || (this._loading = true, this.fire("loading"));
                for (var m2 = document.createDocumentFragment(), _2 = 0; _2 < r2.length; _2++)
                  this._addTile(r2[_2], m2);
                this._level.el.appendChild(m2);
              }
            }
          }
        }
      }, _isValidTile: function(t2) {
        var i2 = this._map.options.crs;
        if (!i2.infinite) {
          var e2 = this._globalTileRange;
          if (!i2.wrapLng && (t2.x < e2.min.x || t2.x > e2.max.x) || !i2.wrapLat && (t2.y < e2.min.y || t2.y > e2.max.y))
            return false;
        }
        if (!this.options.bounds)
          return true;
        var n2 = this._tileCoordsToBounds(t2);
        return N(this.options.bounds).overlaps(n2);
      }, _keyToBounds: function(t2) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t2));
      }, _tileCoordsToNwSe: function(t2) {
        var i2 = this._map, e2 = this.getTileSize(), n2 = t2.scaleBy(e2), o2 = n2.add(e2);
        return [i2.unproject(n2, t2.z), i2.unproject(o2, t2.z)];
      }, _tileCoordsToBounds: function(t2) {
        var i2 = this._tileCoordsToNwSe(t2), e2 = new R(i2[0], i2[1]);
        return this.options.noWrap || (e2 = this._map.wrapLatLngBounds(e2)), e2;
      }, _tileCoordsToKey: function(t2) {
        return t2.x + ":" + t2.y + ":" + t2.z;
      }, _keyToTileCoords: function(t2) {
        var i2 = t2.split(":"), e2 = new k(+i2[0], +i2[1]);
        return e2.z = +i2[2], e2;
      }, _removeTile: function(t2) {
        var i2 = this._tiles[t2];
        i2 && (ri(i2.el), delete this._tiles[t2], this.fire("tileunload", {tile: i2.el, coords: this._keyToTileCoords(t2)}));
      }, _initTile: function(t2) {
        ci(t2, "leaflet-tile");
        var i2 = this.getTileSize();
        t2.style.width = i2.x + "px", t2.style.height = i2.y + "px", t2.onselectstart = a, t2.onmousemove = a, it && this.options.opacity < 1 && mi(t2, this.options.opacity), ot && !st && (t2.style.WebkitBackfaceVisibility = "hidden");
      }, _addTile: function(t2, i2) {
        var e2 = this._getTilePos(t2), n2 = this._tileCoordsToKey(t2), o2 = this.createTile(this._wrapCoords(t2), p(this._tileReady, this, t2));
        this._initTile(o2), this.createTile.length < 2 && M(p(this._tileReady, this, t2, null, o2)), vi(o2, e2), this._tiles[n2] = {el: o2, coords: t2, current: true}, i2.appendChild(o2), this.fire("tileloadstart", {tile: o2, coords: t2});
      }, _tileReady: function(t2, i2, e2) {
        i2 && this.fire("tileerror", {error: i2, tile: e2, coords: t2});
        var n2 = this._tileCoordsToKey(t2);
        (e2 = this._tiles[n2]) && (e2.loaded = +new Date(), this._map._fadeAnimated ? (mi(e2.el, 0), z(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (e2.active = true, this._pruneTiles()), i2 || (ci(e2.el, "leaflet-tile-loaded"), this.fire("tileload", {tile: e2.el, coords: t2})), this._noTilesToLoad() && (this._loading = false, this.fire("load"), it || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)));
      }, _getTilePos: function(t2) {
        return t2.scaleBy(this.getTileSize()).subtract(this._level.origin);
      }, _wrapCoords: function(t2) {
        var i2 = new k(this._wrapX ? o(t2.x, this._wrapX) : t2.x, this._wrapY ? o(t2.y, this._wrapY) : t2.y);
        return i2.z = t2.z, i2;
      }, _pxBoundsToTileRange: function(t2) {
        var i2 = this.getTileSize();
        return new I(t2.min.unscaleBy(i2).floor(), t2.max.unscaleBy(i2).ceil().subtract([1, 1]));
      }, _noTilesToLoad: function() {
        for (var t2 in this._tiles)
          if (!this._tiles[t2].loaded)
            return false;
        return true;
      }});
      var sn = on.extend({options: {minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: false, zoomReverse: false, detectRetina: false, crossOrigin: false}, initialize: function(t2, i2) {
        this._url = t2, (i2 = c(this, i2)).detectRetina && zt && 0 < i2.maxZoom && (i2.tileSize = Math.floor(i2.tileSize / 2), i2.zoomReverse ? (i2.zoomOffset--, i2.minZoom++) : (i2.zoomOffset++, i2.maxZoom--), i2.minZoom = Math.max(0, i2.minZoom)), "string" == typeof i2.subdomains && (i2.subdomains = i2.subdomains.split("")), ot || this.on("tileunload", this._onTileRemove);
      }, setUrl: function(t2, i2) {
        return this._url === t2 && void 0 === i2 && (i2 = true), this._url = t2, i2 || this.redraw(), this;
      }, createTile: function(t2, i2) {
        var e2 = document.createElement("img");
        return zi(e2, "load", p(this._tileOnLoad, this, i2, e2)), zi(e2, "error", p(this._tileOnError, this, i2, e2)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e2.crossOrigin = true === this.options.crossOrigin ? "" : this.options.crossOrigin), e2.alt = "", e2.setAttribute("role", "presentation"), e2.src = this.getTileUrl(t2), e2;
      }, getTileUrl: function(t2) {
        var i2, e2 = {r: zt ? "@2x" : "", s: this._getSubdomain(t2), x: t2.x, y: t2.y, z: this._getZoomForUrl()};
        return this._map && !this._map.options.crs.infinite && (i2 = this._globalTileRange.max.y - t2.y, this.options.tms && (e2.y = i2), e2["-y"] = i2), f(this._url, h(e2, this.options));
      }, _tileOnLoad: function(t2, i2) {
        it ? setTimeout(p(t2, this, null, i2), 0) : t2(null, i2);
      }, _tileOnError: function(t2, i2, e2) {
        var n2 = this.options.errorTileUrl;
        n2 && i2.getAttribute("src") !== n2 && (i2.src = n2), t2(e2, i2);
      }, _onTileRemove: function(t2) {
        t2.tile.onload = null;
      }, _getZoomForUrl: function() {
        var t2 = this._tileZoom, i2 = this.options.maxZoom;
        return this.options.zoomReverse && (t2 = i2 - t2), t2 + this.options.zoomOffset;
      }, _getSubdomain: function(t2) {
        var i2 = Math.abs(t2.x + t2.y) % this.options.subdomains.length;
        return this.options.subdomains[i2];
      }, _abortLoading: function() {
        var t2, i2;
        for (t2 in this._tiles)
          this._tiles[t2].coords.z !== this._tileZoom && ((i2 = this._tiles[t2].el).onload = a, i2.onerror = a, i2.complete || (i2.src = y, ri(i2), delete this._tiles[t2]));
      }, _removeTile: function(t2) {
        var i2 = this._tiles[t2];
        if (i2)
          return at || i2.el.setAttribute("src", y), on.prototype._removeTile.call(this, t2);
      }, _tileReady: function(t2, i2, e2) {
        if (this._map && (!e2 || e2.getAttribute("src") !== y))
          return on.prototype._tileReady.call(this, t2, i2, e2);
      }});
      function rn(t2, i2) {
        return new sn(t2, i2);
      }
      var an = sn.extend({defaultWmsParams: {service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: false, version: "1.1.1"}, options: {crs: null, uppercase: false}, initialize: function(t2, i2) {
        this._url = t2;
        var e2 = h({}, this.defaultWmsParams);
        for (var n2 in i2)
          n2 in this.options || (e2[n2] = i2[n2]);
        var o2 = (i2 = c(this, i2)).detectRetina && zt ? 2 : 1, s2 = this.getTileSize();
        e2.width = s2.x * o2, e2.height = s2.y * o2, this.wmsParams = e2;
      }, onAdd: function(t2) {
        this._crs = this.options.crs || t2.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
        var i2 = 1.3 <= this._wmsVersion ? "crs" : "srs";
        this.wmsParams[i2] = this._crs.code, sn.prototype.onAdd.call(this, t2);
      }, getTileUrl: function(t2) {
        var i2 = this._tileCoordsToNwSe(t2), e2 = this._crs, n2 = O(e2.project(i2[0]), e2.project(i2[1])), o2 = n2.min, s2 = n2.max, r2 = (1.3 <= this._wmsVersion && this._crs === be ? [o2.y, o2.x, s2.y, s2.x] : [o2.x, o2.y, s2.x, s2.y]).join(","), a2 = sn.prototype.getTileUrl.call(this, t2);
        return a2 + _(this.wmsParams, a2, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r2;
      }, setParams: function(t2, i2) {
        return h(this.wmsParams, t2), i2 || this.redraw(), this;
      }});
      sn.WMS = an, rn.wms = function(t2, i2) {
        return new an(t2, i2);
      };
      var hn = Me.extend({options: {padding: 0.1, tolerance: 0}, initialize: function(t2) {
        c(this, t2), m(this), this._layers = this._layers || {};
      }, onAdd: function() {
        this._container || (this._initContainer(), this._zoomAnimated && ci(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
      }, onRemove: function() {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      }, getEvents: function() {
        var t2 = {viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd};
        return this._zoomAnimated && (t2.zoomanim = this._onAnimZoom), t2;
      }, _onAnimZoom: function(t2) {
        this._updateTransform(t2.center, t2.zoom);
      }, _onZoom: function() {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      }, _updateTransform: function(t2, i2) {
        var e2 = this._map.getZoomScale(i2, this._zoom), n2 = yi(this._container), o2 = this._map.getSize().multiplyBy(0.5 + this.options.padding), s2 = this._map.project(this._center, i2), r2 = this._map.project(t2, i2).subtract(s2), a2 = o2.multiplyBy(-e2).add(n2).add(o2).subtract(r2);
        vt ? gi(this._container, a2, e2) : vi(this._container, a2);
      }, _reset: function() {
        for (var t2 in (this._update(), this._updateTransform(this._center, this._zoom), this._layers))
          this._layers[t2]._reset();
      }, _onZoomEnd: function() {
        for (var t2 in this._layers)
          this._layers[t2]._project();
      }, _updatePaths: function() {
        for (var t2 in this._layers)
          this._layers[t2]._update();
      }, _update: function() {
        var t2 = this.options.padding, i2 = this._map.getSize(), e2 = this._map.containerPointToLayerPoint(i2.multiplyBy(-t2)).round();
        this._bounds = new I(e2, e2.add(i2.multiplyBy(1 + 2 * t2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
      }}), un = hn.extend({getEvents: function() {
        var t2 = hn.prototype.getEvents.call(this);
        return t2.viewprereset = this._onViewPreReset, t2;
      }, _onViewPreReset: function() {
        this._postponeUpdatePaths = true;
      }, onAdd: function() {
        hn.prototype.onAdd.call(this), this._draw();
      }, _initContainer: function() {
        var t2 = this._container = document.createElement("canvas");
        zi(t2, "mousemove", this._onMouseMove, this), zi(t2, "click dblclick mousedown mouseup contextmenu", this._onClick, this), zi(t2, "mouseout", this._handleMouseOut, this), this._ctx = t2.getContext("2d");
      }, _destroyContainer: function() {
        z(this._redrawRequest), delete this._ctx, ri(this._container), Si(this._container), delete this._container;
      }, _updatePaths: function() {
        if (!this._postponeUpdatePaths) {
          for (var t2 in (this._redrawBounds = null, this._layers))
            this._layers[t2]._update();
          this._redraw();
        }
      }, _update: function() {
        var t2, i2, e2, n2;
        this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), t2 = this._bounds, i2 = this._container, e2 = t2.getSize(), n2 = zt ? 2 : 1, vi(i2, t2.min), i2.width = n2 * e2.x, i2.height = n2 * e2.y, i2.style.width = e2.x + "px", i2.style.height = e2.y + "px", zt && this._ctx.scale(2, 2), this._ctx.translate(-t2.min.x, -t2.min.y), this.fire("update"));
      }, _reset: function() {
        hn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = false, this._updatePaths());
      }, _initPath: function(t2) {
        this._updateDashArray(t2);
        var i2 = (this._layers[m(t2)] = t2)._order = {layer: t2, prev: this._drawLast, next: null};
        this._drawLast && (this._drawLast.next = i2), this._drawLast = i2, this._drawFirst = this._drawFirst || this._drawLast;
      }, _addPath: function(t2) {
        this._requestRedraw(t2);
      }, _removePath: function(t2) {
        var i2 = t2._order, e2 = i2.next, n2 = i2.prev;
        e2 ? e2.prev = n2 : this._drawLast = n2, n2 ? n2.next = e2 : this._drawFirst = e2, delete t2._order, delete this._layers[m(t2)], this._requestRedraw(t2);
      }, _updatePath: function(t2) {
        this._extendRedrawBounds(t2), t2._project(), t2._update(), this._requestRedraw(t2);
      }, _updateStyle: function(t2) {
        this._updateDashArray(t2), this._requestRedraw(t2);
      }, _updateDashArray: function(t2) {
        if ("string" == typeof t2.options.dashArray) {
          for (var i2, e2 = t2.options.dashArray.split(/[, ]+/), n2 = [], o2 = 0; o2 < e2.length; o2++) {
            if (i2 = Number(e2[o2]), isNaN(i2))
              return;
            n2.push(i2);
          }
          t2.options._dashArray = n2;
        } else
          t2.options._dashArray = t2.options.dashArray;
      }, _requestRedraw: function(t2) {
        this._map && (this._extendRedrawBounds(t2), this._redrawRequest = this._redrawRequest || M(this._redraw, this));
      }, _extendRedrawBounds: function(t2) {
        var i2;
        t2._pxBounds && (i2 = (t2.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new I(), this._redrawBounds.extend(t2._pxBounds.min.subtract([i2, i2])), this._redrawBounds.extend(t2._pxBounds.max.add([i2, i2])));
      }, _redraw: function() {
        this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
      }, _clear: function() {
        var t2, i2 = this._redrawBounds;
        i2 ? (t2 = i2.getSize(), this._ctx.clearRect(i2.min.x, i2.min.y, t2.x, t2.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
      }, _draw: function() {
        var t2, i2, e2 = this._redrawBounds;
        this._ctx.save(), e2 && (i2 = e2.getSize(), this._ctx.beginPath(), this._ctx.rect(e2.min.x, e2.min.y, i2.x, i2.y), this._ctx.clip()), this._drawing = true;
        for (var n2 = this._drawFirst; n2; n2 = n2.next)
          t2 = n2.layer, (!e2 || t2._pxBounds && t2._pxBounds.intersects(e2)) && t2._updatePath();
        this._drawing = false, this._ctx.restore();
      }, _updatePoly: function(t2, i2) {
        if (this._drawing) {
          var e2, n2, o2, s2, r2 = t2._parts, a2 = r2.length, h2 = this._ctx;
          if (a2) {
            for (h2.beginPath(), e2 = 0; e2 < a2; e2++) {
              for (n2 = 0, o2 = r2[e2].length; n2 < o2; n2++)
                s2 = r2[e2][n2], h2[n2 ? "lineTo" : "moveTo"](s2.x, s2.y);
              i2 && h2.closePath();
            }
            this._fillStroke(h2, t2);
          }
        }
      }, _updateCircle: function(t2) {
        var i2, e2, n2, o2;
        this._drawing && !t2._empty() && (i2 = t2._point, e2 = this._ctx, n2 = Math.max(Math.round(t2._radius), 1), 1 != (o2 = (Math.max(Math.round(t2._radiusY), 1) || n2) / n2) && (e2.save(), e2.scale(1, o2)), e2.beginPath(), e2.arc(i2.x, i2.y / o2, n2, 0, 2 * Math.PI, false), 1 != o2 && e2.restore(), this._fillStroke(e2, t2));
      }, _fillStroke: function(t2, i2) {
        var e2 = i2.options;
        e2.fill && (t2.globalAlpha = e2.fillOpacity, t2.fillStyle = e2.fillColor || e2.color, t2.fill(e2.fillRule || "evenodd")), e2.stroke && 0 !== e2.weight && (t2.setLineDash && t2.setLineDash(i2.options && i2.options._dashArray || []), t2.globalAlpha = e2.opacity, t2.lineWidth = e2.weight, t2.strokeStyle = e2.color, t2.lineCap = e2.lineCap, t2.lineJoin = e2.lineJoin, t2.stroke());
      }, _onClick: function(t2) {
        for (var i2, e2, n2 = this._map.mouseEventToLayerPoint(t2), o2 = this._drawFirst; o2; o2 = o2.next)
          (i2 = o2.layer).options.interactive && i2._containsPoint(n2) && (("click" === t2.type || "preclick" !== t2.type) && this._map._draggableMoved(i2) || (e2 = i2));
        e2 && (Fi(t2), this._fireEvent([e2], t2));
      }, _onMouseMove: function(t2) {
        var i2;
        !this._map || this._map.dragging.moving() || this._map._animatingZoom || (i2 = this._map.mouseEventToLayerPoint(t2), this._handleMouseHover(t2, i2));
      }, _handleMouseOut: function(t2) {
        var i2 = this._hoveredLayer;
        i2 && (_i(this._container, "leaflet-interactive"), this._fireEvent([i2], t2, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = false);
      }, _handleMouseHover: function(t2, i2) {
        if (!this._mouseHoverThrottled) {
          for (var e2, n2, o2 = this._drawFirst; o2; o2 = o2.next)
            (e2 = o2.layer).options.interactive && e2._containsPoint(i2) && (n2 = e2);
          n2 !== this._hoveredLayer && (this._handleMouseOut(t2), n2 && (ci(this._container, "leaflet-interactive"), this._fireEvent([n2], t2, "mouseover"), this._hoveredLayer = n2)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t2), this._mouseHoverThrottled = true, setTimeout(p(function() {
            this._mouseHoverThrottled = false;
          }, this), 32);
        }
      }, _fireEvent: function(t2, i2, e2) {
        this._map._fireDOMEvent(i2, e2 || i2.type, t2);
      }, _bringToFront: function(t2) {
        var i2, e2, n2 = t2._order;
        n2 && (i2 = n2.next, e2 = n2.prev, i2 && ((i2.prev = e2) ? e2.next = i2 : i2 && (this._drawFirst = i2), n2.prev = this._drawLast, (this._drawLast.next = n2).next = null, this._drawLast = n2, this._requestRedraw(t2)));
      }, _bringToBack: function(t2) {
        var i2, e2, n2 = t2._order;
        n2 && (i2 = n2.next, (e2 = n2.prev) && ((e2.next = i2) ? i2.prev = e2 : e2 && (this._drawLast = e2), n2.prev = null, n2.next = this._drawFirst, this._drawFirst.prev = n2, this._drawFirst = n2, this._requestRedraw(t2)));
      }});
      function ln(t2) {
        return St ? new un(t2) : null;
      }
      var cn = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t2) {
            return document.createElement("<lvml:" + t2 + ' class="lvml">');
          };
        } catch (t2) {
          return function(t3) {
            return document.createElement("<" + t3 + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
          };
        }
      }(), _n = {_initContainer: function() {
        this._container = si("div", "leaflet-vml-container");
      }, _update: function() {
        this._map._animatingZoom || (hn.prototype._update.call(this), this.fire("update"));
      }, _initPath: function(t2) {
        var i2 = t2._container = cn("shape");
        ci(i2, "leaflet-vml-shape " + (this.options.className || "")), i2.coordsize = "1 1", t2._path = cn("path"), i2.appendChild(t2._path), this._updateStyle(t2), this._layers[m(t2)] = t2;
      }, _addPath: function(t2) {
        var i2 = t2._container;
        this._container.appendChild(i2), t2.options.interactive && t2.addInteractiveTarget(i2);
      }, _removePath: function(t2) {
        var i2 = t2._container;
        ri(i2), t2.removeInteractiveTarget(i2), delete this._layers[m(t2)];
      }, _updateStyle: function(t2) {
        var i2 = t2._stroke, e2 = t2._fill, n2 = t2.options, o2 = t2._container;
        o2.stroked = !!n2.stroke, o2.filled = !!n2.fill, n2.stroke ? (i2 = i2 || (t2._stroke = cn("stroke")), o2.appendChild(i2), i2.weight = n2.weight + "px", i2.color = n2.color, i2.opacity = n2.opacity, n2.dashArray ? i2.dashStyle = g(n2.dashArray) ? n2.dashArray.join(" ") : n2.dashArray.replace(/( *, *)/g, " ") : i2.dashStyle = "", i2.endcap = n2.lineCap.replace("butt", "flat"), i2.joinstyle = n2.lineJoin) : i2 && (o2.removeChild(i2), t2._stroke = null), n2.fill ? (e2 = e2 || (t2._fill = cn("fill")), o2.appendChild(e2), e2.color = n2.fillColor || n2.color, e2.opacity = n2.fillOpacity) : e2 && (o2.removeChild(e2), t2._fill = null);
      }, _updateCircle: function(t2) {
        var i2 = t2._point.round(), e2 = Math.round(t2._radius), n2 = Math.round(t2._radiusY || e2);
        this._setPath(t2, t2._empty() ? "M0 0" : "AL " + i2.x + "," + i2.y + " " + e2 + "," + n2 + " 0,23592600");
      }, _setPath: function(t2, i2) {
        t2._path.v = i2;
      }, _bringToFront: function(t2) {
        hi(t2._container);
      }, _bringToBack: function(t2) {
        ui(t2._container);
      }}, dn = Et ? cn : J, pn = hn.extend({getEvents: function() {
        var t2 = hn.prototype.getEvents.call(this);
        return t2.zoomstart = this._onZoomStart, t2;
      }, _initContainer: function() {
        this._container = dn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = dn("g"), this._container.appendChild(this._rootGroup);
      }, _destroyContainer: function() {
        ri(this._container), Si(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
      }, _onZoomStart: function() {
        this._update();
      }, _update: function() {
        var t2, i2, e2;
        this._map._animatingZoom && this._bounds || (hn.prototype._update.call(this), i2 = (t2 = this._bounds).getSize(), e2 = this._container, this._svgSize && this._svgSize.equals(i2) || (this._svgSize = i2, e2.setAttribute("width", i2.x), e2.setAttribute("height", i2.y)), vi(e2, t2.min), e2.setAttribute("viewBox", [t2.min.x, t2.min.y, i2.x, i2.y].join(" ")), this.fire("update"));
      }, _initPath: function(t2) {
        var i2 = t2._path = dn("path");
        t2.options.className && ci(i2, t2.options.className), t2.options.interactive && ci(i2, "leaflet-interactive"), this._updateStyle(t2), this._layers[m(t2)] = t2;
      }, _addPath: function(t2) {
        this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t2._path), t2.addInteractiveTarget(t2._path);
      }, _removePath: function(t2) {
        ri(t2._path), t2.removeInteractiveTarget(t2._path), delete this._layers[m(t2)];
      }, _updatePath: function(t2) {
        t2._project(), t2._update();
      }, _updateStyle: function(t2) {
        var i2 = t2._path, e2 = t2.options;
        i2 && (e2.stroke ? (i2.setAttribute("stroke", e2.color), i2.setAttribute("stroke-opacity", e2.opacity), i2.setAttribute("stroke-width", e2.weight), i2.setAttribute("stroke-linecap", e2.lineCap), i2.setAttribute("stroke-linejoin", e2.lineJoin), e2.dashArray ? i2.setAttribute("stroke-dasharray", e2.dashArray) : i2.removeAttribute("stroke-dasharray"), e2.dashOffset ? i2.setAttribute("stroke-dashoffset", e2.dashOffset) : i2.removeAttribute("stroke-dashoffset")) : i2.setAttribute("stroke", "none"), e2.fill ? (i2.setAttribute("fill", e2.fillColor || e2.color), i2.setAttribute("fill-opacity", e2.fillOpacity), i2.setAttribute("fill-rule", e2.fillRule || "evenodd")) : i2.setAttribute("fill", "none"));
      }, _updatePoly: function(t2, i2) {
        this._setPath(t2, $(t2._parts, i2));
      }, _updateCircle: function(t2) {
        var i2 = t2._point, e2 = Math.max(Math.round(t2._radius), 1), n2 = "a" + e2 + "," + (Math.max(Math.round(t2._radiusY), 1) || e2) + " 0 1,0 ", o2 = t2._empty() ? "M0 0" : "M" + (i2.x - e2) + "," + i2.y + n2 + 2 * e2 + ",0 " + n2 + 2 * -e2 + ",0 ";
        this._setPath(t2, o2);
      }, _setPath: function(t2, i2) {
        t2._path.setAttribute("d", i2);
      }, _bringToFront: function(t2) {
        hi(t2._path);
      }, _bringToBack: function(t2) {
        ui(t2._path);
      }});
      function mn(t2) {
        return Zt || Et ? new pn(t2) : null;
      }
      Et && pn.include(_n), Ki.include({getRenderer: function(t2) {
        var i2 = (i2 = t2.options.renderer || this._getPaneRenderer(t2.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
        return this.hasLayer(i2) || this.addLayer(i2), i2;
      }, _getPaneRenderer: function(t2) {
        if ("overlayPane" === t2 || void 0 === t2)
          return false;
        var i2 = this._paneRenderers[t2];
        return void 0 === i2 && (i2 = this._createRenderer({pane: t2}), this._paneRenderers[t2] = i2), i2;
      }, _createRenderer: function(t2) {
        return this.options.preferCanvas && ln(t2) || mn(t2);
      }});
      var fn = Re.extend({initialize: function(t2, i2) {
        Re.prototype.initialize.call(this, this._boundsToLatLngs(t2), i2);
      }, setBounds: function(t2) {
        return this.setLatLngs(this._boundsToLatLngs(t2));
      }, _boundsToLatLngs: function(t2) {
        return [(t2 = N(t2)).getSouthWest(), t2.getNorthWest(), t2.getNorthEast(), t2.getSouthEast()];
      }});
      pn.create = dn, pn.pointsToPath = $, Ne.geometryToLayer = De, Ne.coordsToLatLng = We, Ne.coordsToLatLngs = He, Ne.latLngToCoords = Fe, Ne.latLngsToCoords = Ue, Ne.getFeature = Ve, Ne.asFeature = qe, Ki.mergeOptions({boxZoom: true});
      var gn = ie.extend({initialize: function(t2) {
        this._map = t2, this._container = t2._container, this._pane = t2._panes.overlayPane, this._resetStateTimeout = 0, t2.on("unload", this._destroy, this);
      }, addHooks: function() {
        zi(this._container, "mousedown", this._onMouseDown, this);
      }, removeHooks: function() {
        Si(this._container, "mousedown", this._onMouseDown, this);
      }, moved: function() {
        return this._moved;
      }, _destroy: function() {
        ri(this._pane), delete this._pane;
      }, _resetState: function() {
        this._resetStateTimeout = 0, this._moved = false;
      }, _clearDeferredResetState: function() {
        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
      }, _onMouseDown: function(t2) {
        if (!t2.shiftKey || 1 !== t2.which && 1 !== t2.button)
          return false;
        this._clearDeferredResetState(), this._resetState(), Xt(), xi(), this._startPoint = this._map.mouseEventToContainerPoint(t2), zi(document, {contextmenu: Ni, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown}, this);
      }, _onMouseMove: function(t2) {
        this._moved || (this._moved = true, this._box = si("div", "leaflet-zoom-box", this._container), ci(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t2);
        var i2 = new I(this._point, this._startPoint), e2 = i2.getSize();
        vi(this._box, i2.min), this._box.style.width = e2.x + "px", this._box.style.height = e2.y + "px";
      }, _finish: function() {
        this._moved && (ri(this._box), _i(this._container, "leaflet-crosshair")), Jt(), wi(), Si(document, {contextmenu: Ni, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown}, this);
      }, _onMouseUp: function(t2) {
        var i2;
        1 !== t2.which && 1 !== t2.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0), i2 = new R(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(i2).fire("boxzoomend", {boxZoomBounds: i2})));
      }, _onKeyDown: function(t2) {
        27 === t2.keyCode && this._finish();
      }});
      Ki.addInitHook("addHandler", "boxZoom", gn), Ki.mergeOptions({doubleClickZoom: true});
      var vn = ie.extend({addHooks: function() {
        this._map.on("dblclick", this._onDoubleClick, this);
      }, removeHooks: function() {
        this._map.off("dblclick", this._onDoubleClick, this);
      }, _onDoubleClick: function(t2) {
        var i2 = this._map, e2 = i2.getZoom(), n2 = i2.options.zoomDelta, o2 = t2.originalEvent.shiftKey ? e2 - n2 : e2 + n2;
        "center" === i2.options.doubleClickZoom ? i2.setZoom(o2) : i2.setZoomAround(t2.containerPoint, o2);
      }});
      Ki.addInitHook("addHandler", "doubleClickZoom", vn), Ki.mergeOptions({dragging: true, inertia: !st, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: false, maxBoundsViscosity: 0});
      var yn = ie.extend({addHooks: function() {
        var t2;
        this._draggable || (t2 = this._map, this._draggable = new ae(t2._mapPane, t2._container), this._draggable.on({dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd}, this), this._draggable.on("predrag", this._onPreDragLimit, this), t2.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t2.on("zoomend", this._onZoomEnd, this), t2.whenReady(this._onZoomEnd, this))), ci(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
      }, removeHooks: function() {
        _i(this._map._container, "leaflet-grab"), _i(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
      }, moved: function() {
        return this._draggable && this._draggable._moved;
      }, moving: function() {
        return this._draggable && this._draggable._moving;
      }, _onDragStart: function() {
        var t2, i2 = this._map;
        i2._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t2 = N(this._map.options.maxBounds), this._offsetLimit = O(this._map.latLngToContainerPoint(t2.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t2.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, i2.fire("movestart").fire("dragstart"), i2.options.inertia && (this._positions = [], this._times = []);
      }, _onDrag: function(t2) {
        var i2, e2;
        this._map.options.inertia && (i2 = this._lastTime = +new Date(), e2 = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(e2), this._times.push(i2), this._prunePositions(i2)), this._map.fire("move", t2).fire("drag", t2);
      }, _prunePositions: function(t2) {
        for (; 1 < this._positions.length && 50 < t2 - this._times[0]; )
          this._positions.shift(), this._times.shift();
      }, _onZoomEnd: function() {
        var t2 = this._map.getSize().divideBy(2), i2 = this._map.latLngToLayerPoint([0, 0]);
        this._initialWorldOffset = i2.subtract(t2).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
      }, _viscousLimit: function(t2, i2) {
        return t2 - (t2 - i2) * this._viscosity;
      }, _onPreDragLimit: function() {
        var t2, i2;
        this._viscosity && this._offsetLimit && (t2 = this._draggable._newPos.subtract(this._draggable._startPos), i2 = this._offsetLimit, t2.x < i2.min.x && (t2.x = this._viscousLimit(t2.x, i2.min.x)), t2.y < i2.min.y && (t2.y = this._viscousLimit(t2.y, i2.min.y)), t2.x > i2.max.x && (t2.x = this._viscousLimit(t2.x, i2.max.x)), t2.y > i2.max.y && (t2.y = this._viscousLimit(t2.y, i2.max.y)), this._draggable._newPos = this._draggable._startPos.add(t2));
      }, _onPreDragWrap: function() {
        var t2 = this._worldWidth, i2 = Math.round(t2 / 2), e2 = this._initialWorldOffset, n2 = this._draggable._newPos.x, o2 = (n2 - i2 + e2) % t2 + i2 - e2, s2 = (n2 + i2 + e2) % t2 - i2 - e2, r2 = Math.abs(o2 + e2) < Math.abs(s2 + e2) ? o2 : s2;
        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r2;
      }, _onDragEnd: function(t2) {
        var i2, e2, n2, o2, s2, r2, a2, h2, u2, l2 = this._map, c2 = l2.options, _2 = !c2.inertia || this._times.length < 2;
        l2.fire("dragend", t2), _2 ? l2.fire("moveend") : (this._prunePositions(+new Date()), i2 = this._lastPos.subtract(this._positions[0]), e2 = (this._lastTime - this._times[0]) / 1e3, n2 = c2.easeLinearity, s2 = (o2 = i2.multiplyBy(n2 / e2)).distanceTo([0, 0]), r2 = Math.min(c2.inertiaMaxSpeed, s2), a2 = o2.multiplyBy(r2 / s2), h2 = r2 / (c2.inertiaDeceleration * n2), (u2 = a2.multiplyBy(-h2 / 2).round()).x || u2.y ? (u2 = l2._limitOffset(u2, l2.options.maxBounds), M(function() {
          l2.panBy(u2, {duration: h2, easeLinearity: n2, noMoveStart: true, animate: true});
        })) : l2.fire("moveend"));
      }});
      Ki.addInitHook("addHandler", "dragging", yn), Ki.mergeOptions({keyboard: true, keyboardPanDelta: 80});
      var xn = ie.extend({keyCodes: {left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173]}, initialize: function(t2) {
        this._map = t2, this._setPanDelta(t2.options.keyboardPanDelta), this._setZoomDelta(t2.options.zoomDelta);
      }, addHooks: function() {
        var t2 = this._map._container;
        t2.tabIndex <= 0 && (t2.tabIndex = "0"), zi(t2, {focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown}, this), this._map.on({focus: this._addHooks, blur: this._removeHooks}, this);
      }, removeHooks: function() {
        this._removeHooks(), Si(this._map._container, {focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown}, this), this._map.off({focus: this._addHooks, blur: this._removeHooks}, this);
      }, _onMouseDown: function() {
        var t2, i2, e2, n2;
        this._focused || (t2 = document.body, i2 = document.documentElement, e2 = t2.scrollTop || i2.scrollTop, n2 = t2.scrollLeft || i2.scrollLeft, this._map._container.focus(), window.scrollTo(n2, e2));
      }, _onFocus: function() {
        this._focused = true, this._map.fire("focus");
      }, _onBlur: function() {
        this._focused = false, this._map.fire("blur");
      }, _setPanDelta: function(t2) {
        for (var i2 = this._panKeys = {}, e2 = this.keyCodes, n2 = 0, o2 = e2.left.length; n2 < o2; n2++)
          i2[e2.left[n2]] = [-1 * t2, 0];
        for (n2 = 0, o2 = e2.right.length; n2 < o2; n2++)
          i2[e2.right[n2]] = [t2, 0];
        for (n2 = 0, o2 = e2.down.length; n2 < o2; n2++)
          i2[e2.down[n2]] = [0, t2];
        for (n2 = 0, o2 = e2.up.length; n2 < o2; n2++)
          i2[e2.up[n2]] = [0, -1 * t2];
      }, _setZoomDelta: function(t2) {
        for (var i2 = this._zoomKeys = {}, e2 = this.keyCodes, n2 = 0, o2 = e2.zoomIn.length; n2 < o2; n2++)
          i2[e2.zoomIn[n2]] = t2;
        for (n2 = 0, o2 = e2.zoomOut.length; n2 < o2; n2++)
          i2[e2.zoomOut[n2]] = -t2;
      }, _addHooks: function() {
        zi(document, "keydown", this._onKeyDown, this);
      }, _removeHooks: function() {
        Si(document, "keydown", this._onKeyDown, this);
      }, _onKeyDown: function(t2) {
        if (!(t2.altKey || t2.ctrlKey || t2.metaKey)) {
          var i2, e2 = t2.keyCode, n2 = this._map;
          if (e2 in this._panKeys)
            n2._panAnim && n2._panAnim._inProgress || (i2 = this._panKeys[e2], t2.shiftKey && (i2 = A(i2).multiplyBy(3)), n2.panBy(i2), n2.options.maxBounds && n2.panInsideBounds(n2.options.maxBounds));
          else if (e2 in this._zoomKeys)
            n2.setZoom(n2.getZoom() + (t2.shiftKey ? 3 : 1) * this._zoomKeys[e2]);
          else {
            if (27 !== e2 || !n2._popup || !n2._popup.options.closeOnEscapeKey)
              return;
            n2.closePopup();
          }
          Ni(t2);
        }
      }});
      Ki.addInitHook("addHandler", "keyboard", xn), Ki.mergeOptions({scrollWheelZoom: true, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60});
      var wn = ie.extend({addHooks: function() {
        zi(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
      }, removeHooks: function() {
        Si(this._map._container, "wheel", this._onWheelScroll, this);
      }, _onWheelScroll: function(t2) {
        var i2 = Wi(t2), e2 = this._map.options.wheelDebounceTime;
        this._delta += i2, this._lastMousePos = this._map.mouseEventToContainerPoint(t2), this._startTime || (this._startTime = +new Date());
        var n2 = Math.max(e2 - (new Date() - this._startTime), 0);
        clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n2), Ni(t2);
      }, _performZoom: function() {
        var t2 = this._map, i2 = t2.getZoom(), e2 = this._map.options.zoomSnap || 0;
        t2._stop();
        var n2 = this._delta / (4 * this._map.options.wheelPxPerZoomLevel), o2 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n2)))) / Math.LN2, s2 = e2 ? Math.ceil(o2 / e2) * e2 : o2, r2 = t2._limitZoom(i2 + (0 < this._delta ? s2 : -s2)) - i2;
        this._delta = 0, this._startTime = null, r2 && ("center" === t2.options.scrollWheelZoom ? t2.setZoom(i2 + r2) : t2.setZoomAround(this._lastMousePos, i2 + r2));
      }});
      Ki.addInitHook("addHandler", "scrollWheelZoom", wn), Ki.mergeOptions({tap: true, tapTolerance: 15});
      var Pn = ie.extend({addHooks: function() {
        zi(this._map._container, "touchstart", this._onDown, this);
      }, removeHooks: function() {
        Si(this._map._container, "touchstart", this._onDown, this);
      }, _onDown: function(t2) {
        if (t2.touches) {
          if (Ri(t2), this._fireClick = true, 1 < t2.touches.length)
            return this._fireClick = false, void clearTimeout(this._holdTimeout);
          var i2 = t2.touches[0], e2 = i2.target;
          this._startPos = this._newPos = new k(i2.clientX, i2.clientY), e2.tagName && "a" === e2.tagName.toLowerCase() && ci(e2, "leaflet-active"), this._holdTimeout = setTimeout(p(function() {
            this._isTapValid() && (this._fireClick = false, this._onUp(), this._simulateEvent("contextmenu", i2));
          }, this), 1e3), this._simulateEvent("mousedown", i2), zi(document, {touchmove: this._onMove, touchend: this._onUp}, this);
        }
      }, _onUp: function(t2) {
        var i2, e2;
        clearTimeout(this._holdTimeout), Si(document, {touchmove: this._onMove, touchend: this._onUp}, this), this._fireClick && t2 && t2.changedTouches && ((e2 = (i2 = t2.changedTouches[0]).target) && e2.tagName && "a" === e2.tagName.toLowerCase() && _i(e2, "leaflet-active"), this._simulateEvent("mouseup", i2), this._isTapValid() && this._simulateEvent("click", i2));
      }, _isTapValid: function() {
        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
      }, _onMove: function(t2) {
        var i2 = t2.touches[0];
        this._newPos = new k(i2.clientX, i2.clientY), this._simulateEvent("mousemove", i2);
      }, _simulateEvent: function(t2, i2) {
        var e2 = document.createEvent("MouseEvents");
        e2._simulated = true, i2.target._simulatedClick = true, e2.initMouseEvent(t2, true, true, window, 1, i2.screenX, i2.screenY, i2.clientX, i2.clientY, false, false, false, false, 0, null), i2.target.dispatchEvent(e2);
      }});
      !bt || Lt && !ct || Ki.addInitHook("addHandler", "tap", Pn), Ki.mergeOptions({touchZoom: bt && !st, bounceAtZoomLimits: true});
      var Ln = ie.extend({addHooks: function() {
        ci(this._map._container, "leaflet-touch-zoom"), zi(this._map._container, "touchstart", this._onTouchStart, this);
      }, removeHooks: function() {
        _i(this._map._container, "leaflet-touch-zoom"), Si(this._map._container, "touchstart", this._onTouchStart, this);
      }, _onTouchStart: function(t2) {
        var i2, e2, n2 = this._map;
        !t2.touches || 2 !== t2.touches.length || n2._animatingZoom || this._zooming || (i2 = n2.mouseEventToContainerPoint(t2.touches[0]), e2 = n2.mouseEventToContainerPoint(t2.touches[1]), this._centerPoint = n2.getSize()._divideBy(2), this._startLatLng = n2.containerPointToLatLng(this._centerPoint), "center" !== n2.options.touchZoom && (this._pinchStartLatLng = n2.containerPointToLatLng(i2.add(e2)._divideBy(2))), this._startDist = i2.distanceTo(e2), this._startZoom = n2.getZoom(), this._moved = false, this._zooming = true, n2._stop(), zi(document, "touchmove", this._onTouchMove, this), zi(document, "touchend", this._onTouchEnd, this), Ri(t2));
      }, _onTouchMove: function(t2) {
        if (t2.touches && 2 === t2.touches.length && this._zooming) {
          var i2 = this._map, e2 = i2.mouseEventToContainerPoint(t2.touches[0]), n2 = i2.mouseEventToContainerPoint(t2.touches[1]), o2 = e2.distanceTo(n2) / this._startDist;
          if (this._zoom = i2.getScaleZoom(o2, this._startZoom), !i2.options.bounceAtZoomLimits && (this._zoom < i2.getMinZoom() && o2 < 1 || this._zoom > i2.getMaxZoom() && 1 < o2) && (this._zoom = i2._limitZoom(this._zoom)), "center" === i2.options.touchZoom) {
            if (this._center = this._startLatLng, 1 == o2)
              return;
          } else {
            var s2 = e2._add(n2)._divideBy(2)._subtract(this._centerPoint);
            if (1 == o2 && 0 === s2.x && 0 === s2.y)
              return;
            this._center = i2.unproject(i2.project(this._pinchStartLatLng, this._zoom).subtract(s2), this._zoom);
          }
          this._moved || (i2._moveStart(true, false), this._moved = true), z(this._animRequest);
          var r2 = p(i2._move, i2, this._center, this._zoom, {pinch: true, round: false});
          this._animRequest = M(r2, this, true), Ri(t2);
        }
      }, _onTouchEnd: function() {
        this._moved && this._zooming ? (this._zooming = false, z(this._animRequest), Si(document, "touchmove", this._onTouchMove, this), Si(document, "touchend", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = false;
      }});
      Ki.addInitHook("addHandler", "touchZoom", Ln), Ki.BoxZoom = gn, Ki.DoubleClickZoom = vn, Ki.Drag = yn, Ki.Keyboard = xn, Ki.ScrollWheelZoom = wn, Ki.Tap = Pn, Ki.TouchZoom = Ln, t.version = "1.7.1", t.Control = Xi, t.control = Yi, t.Browser = Bt, t.Evented = E, t.Mixin = ne, t.Util = C, t.Class = S, t.Handler = ie, t.extend = h, t.bind = p, t.stamp = m, t.setOptions = c, t.DomEvent = qi, t.DomUtil = Mi, t.PosAnimation = Gi, t.Draggable = ae, t.LineUtil = fe, t.PolyUtil = ye, t.Point = k, t.point = A, t.Bounds = I, t.bounds = O, t.Transformation = q, t.transformation = G, t.Projection = Pe, t.LatLng = D, t.latLng = j, t.LatLngBounds = R, t.latLngBounds = N, t.CRS = H, t.GeoJSON = Ne, t.geoJSON = Ke, t.geoJson = Ye, t.Layer = Me, t.LayerGroup = ze, t.layerGroup = function(t2, i2) {
        return new ze(t2, i2);
      }, t.FeatureGroup = Ce, t.featureGroup = function(t2, i2) {
        return new Ce(t2, i2);
      }, t.ImageOverlay = Xe, t.imageOverlay = function(t2, i2, e2) {
        return new Xe(t2, i2, e2);
      }, t.VideoOverlay = Je, t.videoOverlay = function(t2, i2, e2) {
        return new Je(t2, i2, e2);
      }, t.SVGOverlay = $e, t.svgOverlay = function(t2, i2, e2) {
        return new $e(t2, i2, e2);
      }, t.DivOverlay = Qe, t.Popup = tn, t.popup = function(t2, i2) {
        return new tn(t2, i2);
      }, t.Tooltip = en, t.tooltip = function(t2, i2) {
        return new en(t2, i2);
      }, t.Icon = Se, t.icon = function(t2) {
        return new Se(t2);
      }, t.DivIcon = nn, t.divIcon = function(t2) {
        return new nn(t2);
      }, t.Marker = ke, t.marker = function(t2, i2) {
        return new ke(t2, i2);
      }, t.TileLayer = sn, t.tileLayer = rn, t.GridLayer = on, t.gridLayer = function(t2) {
        return new on(t2);
      }, t.SVG = pn, t.svg = mn, t.Renderer = hn, t.Canvas = un, t.canvas = ln, t.Path = Be, t.CircleMarker = Ae, t.circleMarker = function(t2, i2) {
        return new Ae(t2, i2);
      }, t.Circle = Ie, t.circle = function(t2, i2, e2) {
        return new Ie(t2, i2, e2);
      }, t.Polyline = Oe, t.polyline = function(t2, i2) {
        return new Oe(t2, i2);
      }, t.Polygon = Re, t.polygon = function(t2, i2) {
        return new Re(t2, i2);
      }, t.Rectangle = fn, t.rectangle = function(t2, i2) {
        return new fn(t2, i2);
      }, t.Map = Ki, t.map = function(t2, i2) {
        return new Ki(t2, i2);
      };
      var bn = window.L;
      t.noConflict = function() {
        return window.L = bn, this;
      }, window.L = t;
    });
  });
  require_stdin();
})();
