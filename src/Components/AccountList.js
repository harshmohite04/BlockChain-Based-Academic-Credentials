import React, { useEffect, useState } from 'react';
import web3 from './web3';  // Import initialized web3

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accountsList = await web3.eth.getAccounts();
      setAccounts(accountsList);
    };
    fetchAccounts();
  }, []);

  return (
    <div>
      <h2>Accounts</h2>
      {accounts.map((account, index) => (
        <p key={index}>{account}</p>
      ))}
    </div>
  );
};

export default AccountList;
