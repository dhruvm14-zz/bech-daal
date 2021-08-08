import React from "react";
import styles from "../styles/TableData.module.css";

export default function TableData({ values, color }) {
  return (
    <div className={styles.TableDataMainDiv}>
      <tr className={styles.TableDataTable}>
        <td style={{color: color}} className={styles.TableDataValue}>{values[0]}</td>
        <td style={{color: color}} className={styles.TableDataValue}>{values[1]}</td>
        <td style={{color: color}} className={styles.TableDataValue}>{values[2]}</td>
        <td style={{color: color}} className={styles.TableDataValue}>{values[3]}</td>
        <td style={{color: color}} className={styles.TableDataValue}>{values[4]}</td>
      </tr>
      <hr className={styles.fade}></hr>
    </div>
  );
}
