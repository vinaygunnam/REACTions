(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Greeter = require("./Greeter");

React.render(React.createElement(Greeter, null), document.getElementById("app"));
},{"./Greeter":2}],2:[function(require,module,exports){
"use strict";

var DEFAULT_DISPLAY_NAME = "there";

var ____Class0 = React.Component;for (var ____Class0____Key in ____Class0) {
    if (____Class0.hasOwnProperty(____Class0____Key)) {
        Greeter[____Class0____Key] = ____Class0[____Class0____Key];
    }
}var ____SuperProtoOf____Class0 = ____Class0 === null ? null : ____Class0.prototype;Greeter.prototype = Object.create(____SuperProtoOf____Class0);Greeter.prototype.constructor = Greeter;Greeter.__superConstructor__ = ____Class0;
function Greeter() {
    "use strict";
    this.state = {
        name: DEFAULT_DISPLAY_NAME
    };
}

Object.defineProperty(Greeter.prototype, "nameChanged", { writable: true, configurable: true, value: function value(evt) {
        "use strict";
        this.setState({
            name: evt.target.value || DEFAULT_DISPLAY_NAME
        });
    } });

Object.defineProperty(Greeter.prototype, "render", { writable: true, configurable: true, value: function value() {
        "use strict";
        return React.createElement("div", null, React.createElement("input", { ref: "text", onChange: this.nameChanged.bind(this), placeholder: "What is your name?" }), React.createElement("h4", null, "Hello ", this.state.name, "!!!"));
    } });

module.exports = Greeter;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBzL2dyZWV0L0FwcC5qcyIsImFwcHMvZ3JlZXQvR3JlZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEdyZWV0ZXIgPSByZXF1aXJlKFwiLi9HcmVldGVyXCIpO1xuXG5SZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChHcmVldGVyLCBudWxsKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgREVGQVVMVF9ESVNQTEFZX05BTUUgPSBcInRoZXJlXCI7XG5cbnZhciBfX19fQ2xhc3MwID0gUmVhY3QuQ29tcG9uZW50O2ZvciAodmFyIF9fX19DbGFzczBfX19fS2V5IGluIF9fX19DbGFzczApIHtcbiAgICBpZiAoX19fX0NsYXNzMC5oYXNPd25Qcm9wZXJ0eShfX19fQ2xhc3MwX19fX0tleSkpIHtcbiAgICAgICAgR3JlZXRlcltfX19fQ2xhc3MwX19fX0tleV0gPSBfX19fQ2xhc3MwW19fX19DbGFzczBfX19fS2V5XTtcbiAgICB9XG59dmFyIF9fX19TdXBlclByb3RvT2ZfX19fQ2xhc3MwID0gX19fX0NsYXNzMCA9PT0gbnVsbCA/IG51bGwgOiBfX19fQ2xhc3MwLnByb3RvdHlwZTtHcmVldGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZl9fX19DbGFzczApO0dyZWV0ZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR3JlZXRlcjtHcmVldGVyLl9fc3VwZXJDb25zdHJ1Y3Rvcl9fID0gX19fX0NsYXNzMDtcbmZ1bmN0aW9uIEdyZWV0ZXIoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogREVGQVVMVF9ESVNQTEFZX05BTUVcbiAgICB9O1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoR3JlZXRlci5wcm90b3R5cGUsIFwibmFtZUNoYW5nZWRcIiwgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoZXZ0KSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGV2dC50YXJnZXQudmFsdWUgfHwgREVGQVVMVF9ESVNQTEFZX05BTUVcbiAgICAgICAgfSk7XG4gICAgfSB9KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdyZWV0ZXIucHJvdG90eXBlLCBcInJlbmRlclwiLCB7IHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHJlZjogXCJ0ZXh0XCIsIG9uQ2hhbmdlOiB0aGlzLm5hbWVDaGFuZ2VkLmJpbmQodGhpcyksIHBsYWNlaG9sZGVyOiBcIldoYXQgaXMgeW91ciBuYW1lP1wiIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDRcIiwgbnVsbCwgXCJIZWxsbyBcIiwgdGhpcy5zdGF0ZS5uYW1lLCBcIiEhIVwiKSk7XG4gICAgfSB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBHcmVldGVyOyJdfQ==
