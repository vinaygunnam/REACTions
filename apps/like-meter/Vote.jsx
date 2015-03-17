class Vote extends React.Component {
    downVote() {
        this.props.updateVote(this.props.votes-1);
    }
    upVote() {
        this.props.updateVote(this.props.votes+1);
    }
    render() {
        return (
            <span>
                <a className="btn-floating waves-effect waves-light red" onClick={this.downVote.bind(this)}>
                    <i className="mdi-action-thumb-down"></i>
                </a>
                &nbsp;
                <a className="btn-floating waves-effect waves-light green" onClick={this.upVote.bind(this)}>
                    <i className="mdi-action-thumb-up"></i>
                </a>
            </span>
        );
    }
}

module.exports = Vote;