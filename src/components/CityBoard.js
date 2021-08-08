import React from 'react'
import styles from '../styles/CityBoard.module.css';
import TableData from './TableData';

export default function CityBoard() {

    const first = [1, "Chirag Garg", "cgarg4923", 6, 3450];
    const second = [2, "Harsh Yadav", "yadavh", 5, 3000];
    const third = [3, "Tarush Rajawat", "trawat", 5, 2700];

    const data = [
        [4, "Jindal Agarwal", "robot123", 7, 2500],
        [5, "Mohd. Amaan", "mamaan", 7, 2030],
        [6, "Tarush Chauhan", "tarush123", 6, 1987],
        [7, "Harsh Jain", "jharsh", 5, 1678],
        [8, "Vineet Oli", "oliv", 5, 1567],
        [9, "Dhruv Mittal", "mittalji", 5, 1080],
        [10, "Dhruv Kumar", "KumarSaab", 5, 1020],
        [11, "Dikshant Raj", "PlushDessert",4 ,1004 ],
        [12, "Bhuvan Sachdeva", "Bhuvan001", 4, 1000],
        [13, "Aryan Jain", "Aryan002", 4, 998],
        [14, "Gautam Attry", "CGPA", 3, 990],
        [15, "Aryan Singhania", "AryanS003",3 , 972],
        [16, "Brijesh Shah", "Brijesh008", 3, 950],
        [17, "Aneesha Sharma", "Aneesha009", 3, 931],
        [18, "Ritika Tokas", "Ritika010", 3, 920],
        [19, "Mayank Mittal", "Mayank100", 3, 899],
        [20, "Garvit Gulati", "Garvit901", 2, 892],
        [21, "Sidharth Jain", "Sidharth098",2 , 881],
        [22, "Anima Jain", "Anima009", 2, 871],
        [23, "Daizy Metha", "Daizy981", 1, 865],
        [24, "Rahul Mahar", "Rahul087", 1, 853]
    ]

    const heading = ["Rank", "Name", "Username", "Level", "Score"];

    return (
        <div className={styles.CityBoardOuterContainer}>
            <p className={styles.CityBoardHeading}>City Leader Board</p>
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
