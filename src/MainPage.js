import React from "react";
import { Link } from 'react-router-dom'
import { useGlobalContext } from "./context";

export default function MainPage() {
  const { balance, account } = useGlobalContext()


  if (typeof window.ethereum == 'undefined') {
    alert('Please install Metamask!');
    return (
      <div className="checkmm">
        You need to install metamask to proceed. Link to <a href="https://metamask.io/download">download</a>
      </div>
    );
  }
  else {
    return (
      <div className="connect">
        <div className="conbtn">
          {balance > 0 ? <Link className="btntext" to="/profile">Connect Wallet</Link> : <Link className="btntext" to={`/buytoken/${account}`}>Connect Wallet</Link>}
        </div>

        <img className="walletimg" src="./imgs/wallet_img.png" alt="wallet" />
      </div>

    );
  }
}