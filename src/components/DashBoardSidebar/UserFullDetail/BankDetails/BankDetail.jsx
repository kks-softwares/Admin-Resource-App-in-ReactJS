import React from 'react'
import './Bank.css'
import BankCard from './BankCard'
export default function BankDetail() {
  return (
    <div>
         <div
        style={{ margin: "1vw 0.5vw", padding: "0" }}
        className="navoftableblogs"
      >
        List Of Bank Details
      </div>
        <div style={{ display: "flex", alignItems: "center" , flexWrap: "wrap" }}>
            <BankCard/>
            <BankCard/>
            <BankCard/>
            <BankCard/>
        </div>
    </div>
  )
}
