import { Component } from "react";

class Input extends Component {
    state = {
        text: "",
    };

    onChange(event) {
        this.setState({ text: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ text: "" });
        this.props.onSendMessage(this.state.text);
    }

    render() {
        return (
            <div className="input">
                <form onSubmit={(event) => this.onSubmit(event)}>
                    <input
                        onChange={(event) => this.onChange(event)}
                        value={this.state.text}
                        type="text"
                        placeholder="Type your message"
                        autoFocus={true}
                    />
                    <button className="inputBtn">Send</button>
                </form>
            </div>
        );
    }
}

export default Input;
