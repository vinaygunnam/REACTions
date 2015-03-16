"use strict";

var Vote = require("./Vote");

var ____ClassO = React.Component;for (var ____ClassO____Key in ____ClassO) {
    if (____ClassO.hasOwnProperty(____ClassO____Key)) {
        Post[____ClassO____Key] = ____ClassO[____ClassO____Key];
    }
}var ____SuperProtoOf____ClassO = ____ClassO === null ? null : ____ClassO.prototype;Post.prototype = Object.create(____SuperProtoOf____ClassO);Post.prototype.constructor = Post;Post.__superConstructor__ = ____ClassO;function Post() {
    "use strict";if (____ClassO !== null) {
        ____ClassO.apply(this, arguments);
    }
}
Object.defineProperty(Post.prototype, "updateVote", { writable: true, configurable: true, value: function value(votes) {
        "use strict";
        var updatedPost = React.addons.update(this.props.post, {
            votes: { $set: votes }
        });
        this.props.updatePost(updatedPost);
    } });
Object.defineProperty(Post.prototype, "render", { writable: true, configurable: true, value: function value() {
        "use strict";
        return React.createElement("div", null, React.createElement("h5", null, this.props.post.title), React.createElement("span", null, "(", this.props.post.votes, " votes)"), React.createElement("p", null, this.props.post.body), React.createElement("span", null, React.createElement(Vote, { votes: this.props.post.votes, updateVote: this.updateVote.bind(this) })));
    } });

module.exports = Post;