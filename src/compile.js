const path = require("path");
const fs = require("fs");
const solc = require("solc");

// Get the path to the Solidity contract
const AcademicCredentialpath = path.resolve(__dirname, "../src/contracts", "AcademicCredential.sol");

// Read the source code from the .sol file
const source = fs.readFileSync(AcademicCredentialpath, "utf8");

// Input structure for solc
const input = {
  language: 'Solidity',
  sources: {
    'AcademicCredential.sol': {
      content: source
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode']
      }
    }
  }
};

// Compile the contract
const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Export the compiled contract (ABI and bytecode)
module.exports = output.contracts['AcademicCredential'];
