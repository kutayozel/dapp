import React from 'react'
import { useGlobalContext } from './context'

export default function BuyToken() {
  const { balance, account } = useGlobalContext()
  return (
    <section className='buytoken'>
      <div className='balance'>
        Balance: {balance} ETH
      </div>
      <div className='acc'>
        Wallet Address: {account}
      </div>
    </section>
  )
}
