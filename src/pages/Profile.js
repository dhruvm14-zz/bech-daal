import React, { useEffect, useState } from "react";
import styles from "./../styles/Profile.module.css";
import Transaction from "./../components/Transaction";
import { CanvasJSChart } from "canvasjs-react-charts";
import Sidebar from "../components/Sidebar";
import axios from "axios";

export default function Profile() {
  const [prevTrans, setPrevTrans] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.user);
  useEffect(() => {
    axios
      .get(`https://still-dawn-30288.herokuapp.com/transactions/status/${user._id}`)
      .then((res) => {
        console.log(res.data);
        setPrevTrans(res.data);
        console.log(prevTrans.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const graph = {
    animationEnabled: true,
    backgroundColor: "#2a2d3e",
    height: 150,
    data: [
      {
        type: "doughnut",
        dataPoints: [{ y: 10982 }, { y: 1029 }],
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
              <img style={{ borderRadius: "50%" }} src="/img/user.png" alt="" />
              <div>
                <p>{user.name}</p>
                <p>{user.userName}</p>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
          <div className={styles.score}>
            <h1>Score</h1>
            <div>
              <div className={styles.scoreText}>
                <p>Current level - 4</p>
                <p>City Rank - 35</p>
                <p>State Rank - 235</p>
                <p>Country Rank - 7864</p>
              </div>
              <div className={styles.scoreGraph}>
                <CanvasJSChart options={graph} />
              </div>
            </div>
          </div>
        </div>
        <h1 style={{ textAlign: "center" }}>Previous Transactions</h1>
        {prevTrans &&
          prevTrans.map((trans, index) => (
            <Transaction trans={trans} key={index} />
          ))}
      </div>
    </div>
  );
}
