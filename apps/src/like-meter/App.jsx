var Post = require("./Post");

var post = {
    title: "Some title",
    body: "A long story about another story.",
    votes: 0
};

class App extends React.Component {
    constructor() {
        this.state = {
            posts: [post]
        };
    }
    
    updatePost(index, post) {
        var posts = this.state.posts;
        posts[index] = post;
        this.setState({
            posts: posts
        });
    }
    
    render() {
        var posts = this.state.posts.map((post, index) => {
            return <Post post={post} updatePost={this.updatePost.bind(this, index)} key={index} />
        });
        
        return (
            <div>{posts}</div>
        );
    }
}

React.render(
    <App />,
    document.getElementById("app")
);