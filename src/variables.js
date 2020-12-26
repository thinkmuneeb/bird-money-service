
const variables = { 
    WEB3_PROVIDER_ADDRESS: "wss://kovan.infura.io/ws/API_KEY",
    //WEB3_PROVIDER_ADDRESS: "http://localhost:8545", 
    //CONTRACT_ADDRESS: "0x23879293a77A7509FB142efb4080A682Ea581597",
    CONTRACT_ADDRESS: "0x06bbA98D211C5edb2599a2625002E08c1CC11D47",
    ABI: '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"OffChainRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"url","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"string","name":"value","type":"string"}],"name":"UpdatedRequest","type":"event"},{"constant":false,"inputs":[{"internalType":"string","name":"_url","type":"string"},{"internalType":"string","name":"_key","type":"string"}],"name":"newChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_valueResponse","type":"string"}],"name":"updatedChainRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"_url","type":"string"}],"name":"getRating","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]',
    PRIVATE_KEYS: [

    ]
}

export default variables;