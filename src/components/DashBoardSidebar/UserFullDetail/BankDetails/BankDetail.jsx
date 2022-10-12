import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_HOST from '../../../../env';
import './Bank.css'
import BankCard from './BankCard'
export default function BankDetail({user}) {
    useEffect(() => {
        axios
          .get(
            `${API_HOST}/users/viewACCount?pageSize=1000&pageNumber=1&userName=${user?.userName}`
          )
          .then((res) => {
            setArrayofbankdetail(res.data?.success?.data);
          });
      }, [user]);
    
      const [arrayofbankdetail, setArrayofbankdetail] = useState([]);
  return (
    <div>
         <div
        style={{ margin: "1vw 0.5vw", padding: "0" }}
        className="navoftableblogs"
      >
        List Of Bank Details
      </div>
        <div className="flexbanakcards">
              {arrayofbankdetail?.map((data, index) => {
                return (
                  <BankCard
                    setArrayofbankdetail={setArrayofbankdetail}
                    data={data}
                 

                  />
                );
              })}
            </div>
    </div>
  )
}
