"use strict";

var Post = require("./Post");

var post = {
    title: "Some title",
    body: "A long story about another story.",
    votes: 0
};

var ____ClassN = React.Component;for (var ____ClassN____Key in ____ClassN) {
    if (____ClassN.hasOwnProperty(____ClassN____Key)) {
        App[____ClassN____Key] = ____ClassN[____ClassN____Key];
    }
}var ____SuperProtoOf____ClassN = ____ClassN === null ? null : ____ClassN.prototype;App.prototype = Object.create(____SuperProtoOf____ClassN);App.prototype.constructor = App;App.__superConstructor__ = ____ClassN;
function App() {
    "use strict";
    this.state = {
        posts: [post]
    };
}

Object.defineProperty(App.prototype, "updatePost", { writable: true, configurable: true, value: function value(index, post) {
        "use strict";
        var posts = this.state.posts;
        posts[index] = post;
        this.setState({
            posts: posts
        });
    } });

Object.defineProperty(App.prototype, "render", { writable: true, configurable: true, value: function value() {
        "use strict";
        var posts = this.state.posts.map((function (post, index) {
            return React.createElement(Post, { post: post, updatePost: this.updatePost.bind(this, index), key: index });
        }).bind(this));

        return React.createElement("div", null, posts);
    } });

React.render(React.createElement(App, null), document.getElementById("app"));