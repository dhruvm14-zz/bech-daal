import React, { useEffect, useState } from 'react'
import styles from "./../styles/Admin.module.css";
import Transaction from './../components/Transaction'
import axios from 'axios';

export default function Admin() {

    const [prevTrans, setPrevTrans] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/transactions/admin`).then(res => {
                setPrevTrans(res.data);
            }).catch(err => {
                console.log(err)
            })
      }, [])

      console.log(prevTrans.length)
      console.log(prevTrans)

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Admin Dashboard</div>
            {prevTrans.length === 0 && (
                <img className={styles.blankImage} src="/img/nothing.jpg" alt="" />
              )}
            {prevTrans && prevTrans.map((trans, key) => (
                <>
                {trans && !trans.isApproved && <Transaction trans={trans} key={key} admin />}
                </>
            ))}
        </div>
    )
}
