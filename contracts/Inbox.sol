pragma solidity ^0.4.17;

contract Inbox {
    string public message;

    constructor(string initialmessage) public {
        message = initialmessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
