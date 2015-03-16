(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var Greeter = require("./Greeter");

React.render(React.createElement(Greeter, null), document.getElementById("app"));
},{"./Greeter":2}],2:[function(require,module,exports){
"use strict";

var DEFAULT_DISPLAY_NAME = "there";

var ____ClassM = React.Component;for (var ____ClassM____Key in ____ClassM) {
    if (____ClassM.hasOwnProperty(____ClassM____Key)) {
        Greeter[____ClassM____Key] = ____ClassM[____ClassM____Key];
    }
}var ____SuperProtoOf____ClassM = ____ClassM === null ? null : ____ClassM.prototype;Greeter.prototype = Object.create(____SuperProtoOf____ClassM);Greeter.prototype.constructor = Greeter;Greeter.__superConstructor__ = ____ClassM;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBzL3NyYy9ncmVldC9BcHAuanMiLCJhcHBzL3NyYy9ncmVldC9HcmVldGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgR3JlZXRlciA9IHJlcXVpcmUoXCIuL0dyZWV0ZXJcIik7XG5cblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEdyZWV0ZXIsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBERUZBVUxUX0RJU1BMQVlfTkFNRSA9IFwidGhlcmVcIjtcblxudmFyIF9fX19DbGFzc00gPSBSZWFjdC5Db21wb25lbnQ7Zm9yICh2YXIgX19fX0NsYXNzTV9fX19LZXkgaW4gX19fX0NsYXNzTSkge1xuICAgIGlmIChfX19fQ2xhc3NNLmhhc093blByb3BlcnR5KF9fX19DbGFzc01fX19fS2V5KSkge1xuICAgICAgICBHcmVldGVyW19fX19DbGFzc01fX19fS2V5XSA9IF9fX19DbGFzc01bX19fX0NsYXNzTV9fX19LZXldO1xuICAgIH1cbn12YXIgX19fX1N1cGVyUHJvdG9PZl9fX19DbGFzc00gPSBfX19fQ2xhc3NNID09PSBudWxsID8gbnVsbCA6IF9fX19DbGFzc00ucHJvdG90eXBlO0dyZWV0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShfX19fU3VwZXJQcm90b09mX19fX0NsYXNzTSk7R3JlZXRlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHcmVldGVyO0dyZWV0ZXIuX19zdXBlckNvbnN0cnVjdG9yX18gPSBfX19fQ2xhc3NNO1xuZnVuY3Rpb24gR3JlZXRlcigpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBuYW1lOiBERUZBVUxUX0RJU1BMQVlfTkFNRVxuICAgIH07XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShHcmVldGVyLnByb3RvdHlwZSwgXCJuYW1lQ2hhbmdlZFwiLCB7IHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShldnQpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTogZXZ0LnRhcmdldC52YWx1ZSB8fCBERUZBVUxUX0RJU1BMQVlfTkFNRVxuICAgICAgICB9KTtcbiAgICB9IH0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoR3JlZXRlci5wcm90b3R5cGUsIFwicmVuZGVyXCIsIHsgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgcmVmOiBcInRleHRcIiwgb25DaGFuZ2U6IHRoaXMubmFtZUNoYW5nZWQuYmluZCh0aGlzKSwgcGxhY2Vob2xkZXI6IFwiV2hhdCBpcyB5b3VyIG5hbWU/XCIgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoNFwiLCBudWxsLCBcIkhlbGxvIFwiLCB0aGlzLnN0YXRlLm5hbWUsIFwiISEhXCIpKTtcbiAgICB9IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyZWV0ZXI7Il19
