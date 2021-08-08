import React from 'react';
import styles from "../styles/PriceCard.module.css";
import {CanvasJSChart} from 'canvasjs-react-charts'

export default function PriceCard({type, price, change, option, isSelected}) {

    return (
        <div className={styles.PriceCardOuterDiv}>
            <h1 className={styles.PriceCardType}>{type}</h1>
            <p className={styles.PriceCardPrice}>{price}</p>
            {change > 0 && (
                <p className={styles.PriceCardPositive}>{`+${change}%`}</p>
            )}
            {change <= 0 && (
                <p className={styles.PriceCardNegative}>{`${change}%`}</p>
            )}
            <CanvasJSChart options = {option}/>
            <p>Total Purchase In Tons</p>
        </div>
    )
}
