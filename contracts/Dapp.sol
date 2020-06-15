pragma solidity ^0.5.8;

contract Dapp{
    address public sender;

    mapping(address => uint) public senderValue;
    
    constructor() public {
        sender = msg.sender;
        senderValue[sender] = 123;
    }

    function getSender()
        public
        view
        returns(address)
    {
        return sender;
    }
}
