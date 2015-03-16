var Vote = require("./Vote");

class Post extends React.Component {
    updateVote(votes) {
        var updatedPost = React.addons.update(this.props.post, {
            votes: {$set: votes}
        });
        this.props.updatePost(updatedPost);
    }
    render() {
        return (
            <div>
                <h5>{this.props.post.title}</h5>
                <span>({this.props.post.votes} votes)</span>
                <p>{this.props.post.body}</p>
                <span>
                    <Vote votes={this.props.post.votes} updateVote={this.updateVote.bind(this)} />
                </span>
            </div>
        );
    }
}

module.exports = Post;