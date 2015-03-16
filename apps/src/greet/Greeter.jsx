const DEFAULT_DISPLAY_NAME = "there";

class Greeter extends React.Component {
    constructor() {
        this.state = {
            name: DEFAULT_DISPLAY_NAME
        };
    }
    
    nameChanged(evt) {
        this.setState({
            name: evt.target.value || DEFAULT_DISPLAY_NAME
        });
    }
    
    render() {
        return (
            <div>
                <input ref="text" onChange={this.nameChanged.bind(this)} placeholder="What is your name?" />
                <h4>Hello {this.state.name}!!!</h4>
            </div>
        );
    }
}

module.exports = Greeter;