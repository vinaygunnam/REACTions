"use strict";

var ____ClassP = React.Component;for (var ____ClassP____Key in ____ClassP) {
    if (____ClassP.hasOwnProperty(____ClassP____Key)) {
        Vote[____ClassP____Key] = ____ClassP[____ClassP____Key];
    }
}var ____SuperProtoOf____ClassP = ____ClassP === null ? null : ____ClassP.prototype;Vote.prototype = Object.create(____SuperProtoOf____ClassP);Vote.prototype.constructor = Vote;Vote.__superConstructor__ = ____ClassP;function Vote() {
    "use strict";if (____ClassP !== null) {
        ____ClassP.apply(this, arguments);
    }
}
Object.defineProperty(Vote.prototype, "downVote", { writable: true, configurable: true, value: function value() {
        "use strict";
        this.props.updateVote(this.props.votes - 1);
    } });
Object.defineProperty(Vote.prototype, "upVote", { writable: true, configurable: true, value: function value() {
        "use strict";
        this.props.updateVote(this.props.votes + 1);
    } });
Object.defineProperty(Vote.prototype, "render", { writable: true, configurable: true, value: function value() {
        "use strict";
        return React.createElement("span", null, React.createElement("a", { className: "btn-floating waves-effect waves-light red", onClick: this.downVote.bind(this) }, React.createElement("i", { className: "mdi-action-thumb-down" })), " ", React.createElement("a", { className: "btn-floating waves-effect waves-light green", onClick: this.upVote.bind(this) }, React.createElement("i", { className: "mdi-action-thumb-up" })));
    } });

module.exports = Vote;