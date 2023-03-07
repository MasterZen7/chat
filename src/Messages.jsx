import { Component } from "react";
import ReactScrollableFeed from "react-scrollable-feed";

class Messages extends Component {
    render() {
        const { messages, username, currentMember } = this.props;
        return (
            <ReactScrollableFeed>
                <ul className="messagesList">
                    {messages.map((m, index) =>
                        this.renderMessage(m, index, username, currentMember)
                    )}
                </ul>
            </ReactScrollableFeed>
        );
    }

    renderMessage(message, index, username, currentMember) {
        const { member, text, timestamp } = message;
        const messageFromMe = member.id === currentMember.id;
        const className = messageFromMe
            ? "messagesMessage currentMember"
            : "messagesMessage";
        const justifyClass = messageFromMe ? "" : "justifyEnd";
        const userAvatar = member.clientData.avatar;
        const avatarContent = <span className="avatar">{userAvatar}</span>;
        const time = new Date(timestamp);
        const hours = time.getHours().toString().padStart(2, "0");
        const minutes = time.getMinutes().toString().padStart(2, "0");
        const timeStamp = hours + ":" + minutes;

        return (
            <li className={`${className} ${justifyClass}`} key={index}>
                <div className="messageContent">
                    <div className="username">
                        {avatarContent}
                        {messageFromMe
                            ? username
                            : member.clientData.name || username}
                    </div>
                    <div className="text">{text}</div>
                    <div className="timeStamp">{timeStamp}</div>
                </div>
            </li>
        );
    }
}

export default Messages;
