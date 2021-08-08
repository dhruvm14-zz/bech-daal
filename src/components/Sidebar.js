import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [selected, setSelected] = useState("dash");
  let history = useHistory();

  const onClickHandler = (event, type, pushValue) => {
      event.preventDefault();
      setSelected(type);
      history.push(pushValue);
  }

  return (
    <div className={styles.SidebarOuterDiv}>
    {/* <img className={styles.logoDesign} src="/img/logo.png" alt=""/> */}
    <img className={styles.nameDesign} src="/img/nameloge.jpeg" alt=""/>
      <div className={styles.SidebarInnerDiv}>
        <p className={styles.SidebarListItem} onClick={event => {onClickHandler(event, "dash", "/")}}>
          <span className={selected === "dash" && styles.SidebarSelected}>
            Dashboard
          </span>
        </p>
        <p className={styles.SidebarListItem} onClick={event => {onClickHandler(event, "lead", "/leaderboard")}}>
          <span className={selected === "lead" && styles.SidebarSelected}>
            LeaderBoard
          </span>
        </p>
        <p className={styles.SidebarListItem} onClick={event => {onClickHandler(event, "sell", "/sell")}}>
          <span className={selected === "sell" && styles.SidebarSelected}>
            Sell Item
          </span>
        </p>
        <p className={styles.SidebarListItem} onClick={event => {onClickHandler(event, "profile", "/profile")}}>
          <span className={selected === "profile" && styles.SidebarSelected}>
            Profile
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
