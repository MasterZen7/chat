import React, { Component } from "react";

class UsernameInput extends Component {
    state = {
        username: "",
        avatar: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, avatar } = this.state;
        this.props.onSubmit(username, avatar);
    };

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ username: value });
    };

    handleavatarChange = (event) => {
        const { value } = event.target;
        this.setState({ avatar: value });
    };

    render() {
        const { username, avatar } = this.state;
        return (
            <>
                <h1>Chat</h1>
                <p>To join chat enter your username and choose your avatar</p>
                <form className="login" onSubmit={this.handleSubmit}>
                    <label>
                        Username
                        <input
                            type="text"
                            value={username}
                            onChange={this.handleChange}
                            placeholder="Enter your username"
                            maxLength={20}
                        />
                    </label>
                    <label>
                        Avatar
                        <select
                            value={avatar}
                            onChange={this.handleavatarChange}
                        >
                            <option value="">Choose your avatar</option>
                            <option value="&#x1F600;">😀</option>
                            <option value="&#x1F601;">😁</option>
                            <option value="&#x1F602;">😂</option>
                            <option value="&#x1F923;">🤣</option>
                            <option value="&#x1F603;">😃</option>
                            <option value="&#x1F604;">😄</option>
                            <option value="&#x1F605;">😅</option>
                            <option value="&#x1F606;">😆</option>
                            <option value="&#x1F609;">😉</option>
                            <option value="&#x1F60A;">😊</option>
                            <option value="&#x1F60B;">😋</option>
                            <option value="&#x1F60E;">😎</option>
                        </select>
                    </label>

                    <button type="submit">Enter</button>
                </form>
            </>
        );
    }
}

export default UsernameInput;
