import React, { useState } from 'react'
import { useGlobalContext } from './context'
import Web3 from 'web3'

export default function Profile() {
  const { account } = useGlobalContext()
  const [name, setName] = useState("")
  const [wallet, setWallet] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();
    const web3 = new Web3(window.ethereum)
    var message = [
      "Welcome " + name
    ].join("\n")
    const address = account
    const signature = await web3.eth.personal.sign(message, address)

    return signature
  }

  return (
    <section className="profile">
      <div className='wallet'>
        Wallet Address: {account}
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label'>
          Profile Name:

        </label>
        <input
          className='submitinp'
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        /><br />
        <label className='label'>
          Wallet Address:

        </label>
        <input
          className='submitinp'
          type="text"
          value={wallet}
          onChange={e => setWallet(e.target.value)}
          required
        /><br />
        <input className='submitbtn' type="submit" value="Save" />
      </form>
    </section>
  )
}
