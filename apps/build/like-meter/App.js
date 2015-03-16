(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./Post":2}],2:[function(require,module,exports){
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
},{"./Vote":3}],3:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBzL3NyYy9saWtlLW1ldGVyL0FwcC5qcyIsImFwcHMvc3JjL2xpa2UtbWV0ZXIvUG9zdC5qcyIsImFwcHMvc3JjL2xpa2UtbWV0ZXIvVm90ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUG9zdCA9IHJlcXVpcmUoXCIuL1Bvc3RcIik7XG5cbnZhciBwb3N0ID0ge1xuICAgIHRpdGxlOiBcIlNvbWUgdGl0bGVcIixcbiAgICBib2R5OiBcIkEgbG9uZyBzdG9yeSBhYm91dCBhbm90aGVyIHN0b3J5LlwiLFxuICAgIHZvdGVzOiAwXG59O1xuXG52YXIgX19fX0NsYXNzTiA9IFJlYWN0LkNvbXBvbmVudDtmb3IgKHZhciBfX19fQ2xhc3NOX19fX0tleSBpbiBfX19fQ2xhc3NOKSB7XG4gICAgaWYgKF9fX19DbGFzc04uaGFzT3duUHJvcGVydHkoX19fX0NsYXNzTl9fX19LZXkpKSB7XG4gICAgICAgIEFwcFtfX19fQ2xhc3NOX19fX0tleV0gPSBfX19fQ2xhc3NOW19fX19DbGFzc05fX19fS2V5XTtcbiAgICB9XG59dmFyIF9fX19TdXBlclByb3RvT2ZfX19fQ2xhc3NOID0gX19fX0NsYXNzTiA9PT0gbnVsbCA/IG51bGwgOiBfX19fQ2xhc3NOLnByb3RvdHlwZTtBcHAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShfX19fU3VwZXJQcm90b09mX19fX0NsYXNzTik7QXBwLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFwcDtBcHAuX19zdXBlckNvbnN0cnVjdG9yX18gPSBfX19fQ2xhc3NOO1xuZnVuY3Rpb24gQXBwKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIHBvc3RzOiBbcG9zdF1cbiAgICB9O1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwLnByb3RvdHlwZSwgXCJ1cGRhdGVQb3N0XCIsIHsgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKGluZGV4LCBwb3N0KSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgcG9zdHMgPSB0aGlzLnN0YXRlLnBvc3RzO1xuICAgICAgICBwb3N0c1tpbmRleF0gPSBwb3N0O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBvc3RzOiBwb3N0c1xuICAgICAgICB9KTtcbiAgICB9IH0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwLnByb3RvdHlwZSwgXCJyZW5kZXJcIiwgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgcG9zdHMgPSB0aGlzLnN0YXRlLnBvc3RzLm1hcCgoZnVuY3Rpb24gKHBvc3QsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQb3N0LCB7IHBvc3Q6IHBvc3QsIHVwZGF0ZVBvc3Q6IHRoaXMudXBkYXRlUG9zdC5iaW5kKHRoaXMsIGluZGV4KSwga2V5OiBpbmRleCB9KTtcbiAgICAgICAgfSkuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgcG9zdHMpO1xuICAgIH0gfSk7XG5cblJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFZvdGUgPSByZXF1aXJlKFwiLi9Wb3RlXCIpO1xuXG52YXIgX19fX0NsYXNzTyA9IFJlYWN0LkNvbXBvbmVudDtmb3IgKHZhciBfX19fQ2xhc3NPX19fX0tleSBpbiBfX19fQ2xhc3NPKSB7XG4gICAgaWYgKF9fX19DbGFzc08uaGFzT3duUHJvcGVydHkoX19fX0NsYXNzT19fX19LZXkpKSB7XG4gICAgICAgIFBvc3RbX19fX0NsYXNzT19fX19LZXldID0gX19fX0NsYXNzT1tfX19fQ2xhc3NPX19fX0tleV07XG4gICAgfVxufXZhciBfX19fU3VwZXJQcm90b09mX19fX0NsYXNzTyA9IF9fX19DbGFzc08gPT09IG51bGwgPyBudWxsIDogX19fX0NsYXNzTy5wcm90b3R5cGU7UG9zdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKF9fX19TdXBlclByb3RvT2ZfX19fQ2xhc3NPKTtQb3N0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBvc3Q7UG9zdC5fX3N1cGVyQ29uc3RydWN0b3JfXyA9IF9fX19DbGFzc087ZnVuY3Rpb24gUG9zdCgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtpZiAoX19fX0NsYXNzTyAhPT0gbnVsbCkge1xuICAgICAgICBfX19fQ2xhc3NPLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFBvc3QucHJvdG90eXBlLCBcInVwZGF0ZVZvdGVcIiwgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodm90ZXMpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciB1cGRhdGVkUG9zdCA9IFJlYWN0LmFkZG9ucy51cGRhdGUodGhpcy5wcm9wcy5wb3N0LCB7XG4gICAgICAgICAgICB2b3RlczogeyAkc2V0OiB2b3RlcyB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVBvc3QodXBkYXRlZFBvc3QpO1xuICAgIH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUG9zdC5wcm90b3R5cGUsIFwicmVuZGVyXCIsIHsgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImg1XCIsIG51bGwsIHRoaXMucHJvcHMucG9zdC50aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwiKFwiLCB0aGlzLnByb3BzLnBvc3Qudm90ZXMsIFwiIHZvdGVzKVwiKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgdGhpcy5wcm9wcy5wb3N0LmJvZHkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFZvdGUsIHsgdm90ZXM6IHRoaXMucHJvcHMucG9zdC52b3RlcywgdXBkYXRlVm90ZTogdGhpcy51cGRhdGVWb3RlLmJpbmQodGhpcykgfSkpKTtcbiAgICB9IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX19fQ2xhc3NQID0gUmVhY3QuQ29tcG9uZW50O2ZvciAodmFyIF9fX19DbGFzc1BfX19fS2V5IGluIF9fX19DbGFzc1ApIHtcbiAgICBpZiAoX19fX0NsYXNzUC5oYXNPd25Qcm9wZXJ0eShfX19fQ2xhc3NQX19fX0tleSkpIHtcbiAgICAgICAgVm90ZVtfX19fQ2xhc3NQX19fX0tleV0gPSBfX19fQ2xhc3NQW19fX19DbGFzc1BfX19fS2V5XTtcbiAgICB9XG59dmFyIF9fX19TdXBlclByb3RvT2ZfX19fQ2xhc3NQID0gX19fX0NsYXNzUCA9PT0gbnVsbCA/IG51bGwgOiBfX19fQ2xhc3NQLnByb3RvdHlwZTtWb3RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZl9fX19DbGFzc1ApO1ZvdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVm90ZTtWb3RlLl9fc3VwZXJDb25zdHJ1Y3Rvcl9fID0gX19fX0NsYXNzUDtmdW5jdGlvbiBWb3RlKCkge1xuICAgIFwidXNlIHN0cmljdFwiO2lmIChfX19fQ2xhc3NQICE9PSBudWxsKSB7XG4gICAgICAgIF9fX19DbGFzc1AuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVm90ZS5wcm90b3R5cGUsIFwiZG93blZvdGVcIiwgeyB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVZvdGUodGhpcy5wcm9wcy52b3RlcyAtIDEpO1xuICAgIH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVm90ZS5wcm90b3R5cGUsIFwidXBWb3RlXCIsIHsgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVWb3RlKHRoaXMucHJvcHMudm90ZXMgKyAxKTtcbiAgICB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZvdGUucHJvdG90eXBlLCBcInJlbmRlclwiLCB7IHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzTmFtZTogXCJidG4tZmxvYXRpbmcgd2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHJlZFwiLCBvbkNsaWNrOiB0aGlzLmRvd25Wb3RlLmJpbmQodGhpcykgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwibWRpLWFjdGlvbi10aHVtYi1kb3duXCIgfSkpLCBcIsKgXCIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImJ0bi1mbG9hdGluZyB3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgZ3JlZW5cIiwgb25DbGljazogdGhpcy51cFZvdGUuYmluZCh0aGlzKSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJtZGktYWN0aW9uLXRodW1iLXVwXCIgfSkpKTtcbiAgICB9IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZvdGU7Il19
