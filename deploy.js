const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const mnemonic = 'tool chunk sea exact idle improve settle coin artist device world where';
const network = 'https://rinkeby.infura.io/hAfGuBIc5HOySndzMPPU';
const provider = new HDWalletProvider(mnemonic, network);
const web3 = new Web3(provider);
const INITIAL_MESSAGE = 'Hello';

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  // Use one of those accounts to deploy the contract
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: `0x${bytecode}`, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: '500000' });

  console.log('Contract deployed', result.options.address);

  result.setProvider(provider);
};

deploy();
