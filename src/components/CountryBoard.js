import React from 'react'
import styles from '../styles/CityBoard.module.css';
import TableData from './TableData';

export default function CountryBoard() {

    const first = [1, "Harry Smith", "smithray", 9, 10023];
    const second = [2, "Aruna Bhatt", "arunb", 9, 9087];
    const third = [3, "Ekta Gupta", "egupta", 8, 8900];

    const data = [
        [4, "Raj Kundra", "KundraFilms", 9, 10543],
        [5, "Daniel Johnson", "DaniJohn", 8, 10500],
        [6, "Vicky Shah", "Vicky090", 8, 10439],
        [7, "Paul Walker", "Paul008", 8, 10378],
        [8, "Olivia James", "olive007", 8, 10367],
        [9, "Garvit Chaudary", "gymFreak009", 7, 10292],
        [10, "Riya Garg", "garg554", 7, 10223],
        [11, "Garvit Gaur", "garvit098", 7, 10173],
        [12, "Johnny Sins", "SinsOp007", 7, 10111],
        [13, "Darci Keelan", "dkeelan0",7 , 10001],
        [14, "Rod Marconi", "rmarconi1", 7, 9987],
        [15, "Maurie Lyard", "mlyard2", 6, 9949],
        [16, "Tom Hidleston", "tom0987", 6, 9891],
        [17, "Stephia Stones", "Stoner098",6 , 9881],
        [18, "Vaibhav Goyal", "vaibhavG876",6 , 9866],
        [19, "Eve Whitehouse", "eve098", 6, 9791],
        [20, "Hakim Chasmor", "hakim745", 5, 9731],
        [21, "Troy Leversha", "troyt0910", 5, 9700],
        [22, "Gretal Choak", "gretal09", 5, 9699],
        [23, "Gimmy Duke", "gimmy989", 5, 9650],
        [24, "Scarlet Johnson", "blackWidow09", 5, 9601]
    ]

    const heading = ["Rank", "Name", "Username", "Level", "Score"];

    return (
        <div className={styles.CityBoardOuterContainer}>
            <p className={styles.CityBoardHeading}>National Leader Board</p>
            <TableData values={heading} color="#ffffff" />
            <div className={styles.CityBoardTable}>
                <TableData values={first} color="#FFDF00" />
                <TableData values={second} color="#C0C0C0" />
                <TableData values={third} color="#CD7F32" />
                {data.map(user => (
                    <TableData values={user} color="#4690d7" />
                ))}
            </div>
        </div>
    )
}
