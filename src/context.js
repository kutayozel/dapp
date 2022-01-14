import React, { useState, useContext, useEffect } from 'react'
// import { useCallback } from 'react'
import Web3 from 'web3';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [balance, setBalance] = useState(0);

  async function load() {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000');
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
    const balances = await web3.eth.getBalance(accounts[0])
    // console.log('eth balance', balances)
    setBalance(balances)
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <AppContext.Provider value={{ balance, account }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }