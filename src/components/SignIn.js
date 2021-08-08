import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import styles from "./../styles/SignIn.module.css";
import axios from "axios";

export default function SignIn(props) {
  const { swap } = props;

  const history = useHistory();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const signin = () => {
    const data = {
      user,
      password,
    };
    axios
      .post("http://localhost:5000/users/signin", data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <h1>Sign In</h1>
        <div className={styles.row}>
          <img className={styles.icon} src="/img/signinuser.png" alt="" />
          <input
            name="user"
            type="text"
            value={user}
            placeholder="User Name"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <img className={styles.icon} src="/img/lock.png" alt="" />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={() => signin()}>Sign In</button>
        <p>
          Don't have account? <p onClick={() => swap()}>Sign Up</p>
        </p>
      </div>
    </div>
  );
}
