import React, { Component } from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

export type MessageDateType = {
  avatar: string;
  name: string;
  message: string;
  time: string | number;
};
export type AlternativeMessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string | number;
  expHandler: () => void;
  isExpanded: boolean;
};

const messageData: MessageDateType = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Alex",
  message: "Whats up man?",
  time: "22:00",
};
const newData = {
  ...messageData,
  name: "Piter",
  message: "Look! I got new skills!",
};

export default class HW1 extends Component {
  state = {
    isExpanded: false,
  };
  expandHandler = () => {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  };
  render() {
    return (
      <div>
        <hr />
        <Message
          avatar={messageData.avatar}
          name={messageData.name}
          message={messageData.message}
          time={messageData.time}
        />

        <hr />
        {/*для личного творчества, могу проверить*/}
        <AlternativeMessage
          avatar={messageData.avatar}
          name={newData.name}
          message={newData.message}
          time={messageData.time}
          expHandler={this.expandHandler}
          isExpanded={this.state.isExpanded}
        />
        <hr />
      </div>
    );
  }
}
