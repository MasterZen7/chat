import { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import UsernameInput from "./UsernameInput";

class App extends Component {
    state = {
        messages: [],
        username: "",
        avatar: "",
    };

    handleUsernameSubmit = (username, avatar) => {
        if (!username || !avatar) {
            return;
        }

        const drone = new window.Scaledrone("WUcvarRJWNmzYSWE", {
            data: { name: username, avatar },
        });

        drone.on("open", (error) => {
            if (error) {
                return console.log(error);
            }
            const clientId = drone.clientId;
            const room = drone.subscribe("observable-room");
            room.on("data", (data, member) => {
                const messages = this.state.messages;
                messages.push({ member, text: data, timestamp: Date.now() });
                this.setState({ messages });
            });
            this.setState({ clientId, drone, username, avatar });
        });
    };

    onSendMessage = (message) => {
        this.state.drone.publish({
            room: "observable-room",
            message,
        });
    };

    render() {
        const { username, avatar, clientId } = this.state;
        if (!username || !avatar) {
            return (
                <div className="App">
                    <UsernameInput onSubmit={this.handleUsernameSubmit} />
                </div>
            );
        }
        return (
            <div className="App">
                <div className="header">
                    <h2>Chat room</h2>
                    <div className="username">
                        Username:
                        <span>{avatar}</span>
                        {username}
                    </div>
                </div>
                <Messages
                    messages={this.state.messages}
                    username={username}
                    currentMember={{ id: clientId }}
                />
                <Input onSendMessage={this.onSendMessage} />
            </div>
        );
    }
}

export default App;
