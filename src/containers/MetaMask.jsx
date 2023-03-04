import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';

function MetamaskLogin() {
  const [accounts, setAccounts] = useState([]);

  async function initWeb3() {
    const provider = await detectEthereumProvider();
    if (provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    initWeb3();
  }, []);

  return (
    <div>
      <h1>Metamask Login</h1>
      {accounts.length > 0 ? (
        <div>
          <p>Connected Account: {accounts[0]}</p>
        </div>
      ) : (
        <p>Please connect your Metamask account</p>
      )}
    </div>
  );
}

export default MetamaskLogin;
