import React, { useEffect, useState } from "react";
import styles from "./../styles/Profile.module.css";
import Transaction from "./../components/Transaction";
import { CanvasJSChart } from "canvasjs-react-charts";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Profile() {

  const [prevTrans, setPrevTrans] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get(`http://localhost:5000/transactions/status/${user.user._id}`).then(res => {
            console.log(res.data);
            setPrevTrans(res.data);
            console.log(prevTrans.length);
        }).catch(err => {
            console.log(err)
        })
  }, [])

  const img = ["/img/greenBin.png", "/img/addImage.jpeg", "/img/logo.png"];
  const list = {
    type: "Plastic",
    rate: "30",
    quantity: "10 kg",
    date: "07-08-2021",
    time: "10:40 pm",
  };
  const graph = {
    animationEnabled: true,
    backgroundColor: "#2a2d3e",
    height: 150,
    data: [
      {
        type: "doughnut",
        dataPoints: [{ y: 10 }, { y: 90 }],
      },
    ],
  };

  return (
    <div className={styles.OuterContainer}>
      <Sidebar></Sidebar>
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <div className={styles.profile}>
            <h1>User Profile</h1>
            <div>
              <img src="/img/greenBin.png" alt="" />
              <div>
                <p>{user.user.name}</p>
                <p>{user.user.userName}</p>
                <p>{user.user.email}</p>
              </div>
            </div>
          </div>
          <div className={styles.score}>
            <h1>Score</h1>
            <div>
              <div className={styles.scoreText}>
                <p>Current level - 8</p>
                <p>City Rank - 1</p>
                <p>State Rank - 2</p>
                <p>Country Rank - 2</p>
              </div>
              <div className={styles.scoreGraph}>
                <CanvasJSChart options={graph} />
              </div>
            </div>
          </div>
        </div>
        <h1 style={{textAlign: "center"}}>Previous Transactions</h1>
        {prevTrans && prevTrans.map((trans, key) => (
          <Transaction trans={trans} key={key} />
        ))}
      </div>

    </div>
  );
}
