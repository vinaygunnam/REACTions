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