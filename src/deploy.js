const { abi, evm } = require('./compile'); // Get the ABI and bytecode from compile.js
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider(
  "click name green churn student stable history culture pill refuse task load", // Your mnemonic
  "https://sepolia.infura.io/v3/22b694d3f7004e83bb58a7de2d8df8cf" // Your Infura URL
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object }) // Make sure to use the correct path to bytecode
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};

deploy();
