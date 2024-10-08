import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
// import academicCredentialABI from '../abi/AcademicCredential.json'; // Adjust the path according to your project structure
import AcademicCredential from '../abi/AcademicCredential.json'
import '../App.css';
// const ganache = require('ganache-cli');

// // import Web3 from 'web3';
// import ganache from 'ganache-cli';

// const web3 = new Web3(ganache.provider());


const AcademicTable = () => {
  const [credentials, setCredentials] = useState([]);
  const [deployedRows, setDeployedRows] = useState([]); // Track which rows are deployed
  const [, setLoading] = useState(false);

  useEffect(() => {
    // Fetch stored credentials from MongoDB
    const fetchCredentials = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/get-academic-credentials');
        if (res.data.success) {
          setCredentials(res.data.data);
        }
      } catch (error) {
        console.error('Error fetching credentials:', error);
      }
    };
    fetchCredentials();
  }, []);


  
  // const deployToBlockchain = async (row) => {
  //   try {
  //       // Set the loading state for the current row
  //       setLoading(row.srn); // Use SRN to track which row is loading
  
  //       // Initialize Web3 and Contract
  //       const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  //       const accounts = await web3.eth.getAccounts();
  //       const contractAddress = '0xcAE520f337E2D3fD785A6A2ad9d390Fe8C60CDce'; // Ensure this is correct
  //       const abi = AcademicCredential.abi; // Use the imported ABI
  
  //       const contract = new web3.eth.Contract(abi, contractAddress);
  
  //       // Convert CGPA and SGPA to integers (for example, multiply by 10)
  //       const cgpa = Math.round(row.cgpa * 10);
  //       const sgpa = Math.round(row.sgpa * 10);
  
  //       // Get gas price
  //       const gasPrice = await web3.eth.getGasPrice();
  
  //       // Deploy data to blockchain
  //       const transaction = await contract.methods
  //           .storeCredential(
  //               row.srn,
  //               row.prn,
  //               row.hallTicketNo,
  //               cgpa,
  //               sgpa,
  //               row.studentName,
  //               row.collegeName
  //           )
  //           .send({
  //               from: accounts[0],
  //               gas: '1000000',
  //               gasPrice: gasPrice,
  //           });
  
  //       // Extract transaction hash and gas used
  //       const transactionHash = transaction.transactionHash;
  //       const gasUsed = transaction.gasUsed;
  
  //       // Calculate the cost of the transaction (in Ether)
  //       const transactionCost = web3.utils.fromWei((gasUsed * gasPrice).toString(), 'ether');
  
  //       // Save the transaction hash to the new MongoDB collection
  //       await axios.post('http://localhost:5000/api/save-transaction-hash', {
  //           srn: row.srn,
  //           transactionHash: transactionHash,
  //       });
  
  //       // Mark the row as deployed
  //       setDeployedRows([...deployedRows, row.srn]);
  
  //       // Display an alert with the transaction hash and cost
  //       alert(`Transaction successful!\nHash: ${transactionHash}\nCost: ${transactionCost} ETH`);
  
  //   } catch (error) {
  //       console.error('Error deploying to blockchain:', error);
  //   } finally {
  //       // Ensure the loading state is reset for the current row
  //       setLoading(null); // Reset to null when done
  //   }
  // };
  
// Create a new instance of Web3 using MetaMask's provider
const web3 = new Web3(window.ethereum);

// Request account access if needed
const enableMetaMask = async () => {
    try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("MetaMask connected");
    } catch (error) {
        console.error("User denied account access", error);
    }
};

// Call this function at the beginning of your DApp
enableMetaMask();

  const deployToBlockchain = async (row) => {
    setLoading(true);
    try {
        // Ensure MetaMask is connected and accounts are available
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        
        if (accounts.length === 0) {
            console.error("No accounts found. Please connect MetaMask.");
            return;
        }

        const contractAddress = '0x137017a8663c2bDad3D7B5BfeE4ACfdEB171066c';
        const abi = AcademicCredential.abi; // Use the imported ABI
        const contract = new web3.eth.Contract(abi, contractAddress);

        // Convert CGPA and SGPA to integers
        const cgpa = Math.round(row.cgpa * 10);
        const sgpa = Math.round(row.sgpa * 10);

        // Get gas price
        const gasPrice = await web3.eth.getGasPrice();

        // Deploy data to blockchain
        const transaction = await contract.methods
            .storeCredential(
                row.srn,
                row.prn,
                row.hallTicketNo,
                cgpa,
                sgpa,
                row.studentName,
                row.collegeName
            )
            .send({
                from: accounts[0],
                gas: '1000000',
                gasPrice: gasPrice
            });

        // Get the transaction hash
        const transactionHash = transaction.transactionHash;

        // Save transaction hash to MongoDB
        await axios.post('http://localhost:5000/api/save-transaction-hash', {
            srn: row.srn,
            transactionHash: transactionHash,
        });

        // Show alert with transaction hash and gas cost
        const gasUsed = transaction.gasUsed;
        const totalCost = gasUsed * gasPrice; // Cost in Wei
        alert(`Transaction successful! Hash: ${transactionHash}\nGas Used: ${gasUsed}\nTotal Cost: ${totalCost} Wei`);

        // Mark the row as deployed after successful transaction and storing the hash
        setDeployedRows([...deployedRows, row.srn]);
    } catch (error) {
        console.error('Error deploying to blockchain:', error);
    }
    setLoading(false);
};



  return (
    <div className="center">
    <MDBTable hover responsive className="mt-4">
      <MDBTableHead>
        <tr>
          <th>SRN</th>
          <th>PRN</th>
          <th>Hall Ticket No</th>
          <th>CGPA</th>
          <th>SGPA</th>
          <th>Student Name</th>
          <th>College Name</th>
          <th>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {credentials.map((row, index) => (
          <tr key={index}>
            <td>{row.srn}</td>
            <td>{row.prn}</td>
            <td>{row.hallTicketNo}</td>
            <td>{row.cgpa}</td>
            <td>{row.sgpa}</td>
            <td>{row.studentName}</td>
            <td>{row.collegeName}</td>
            <td>
              <MDBBtn
                color="primary"
                onClick={() => deployToBlockchain(row)}
                disabled={deployedRows.includes(row.srn)}
              >
                {deployedRows.includes(row.srn) ? 'Deployed' : 'Deploy to Blockchain'}
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
  );
};

export default AcademicTable;
