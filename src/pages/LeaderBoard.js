import AOS from 'aos';
import React from 'react'
import CityBoard from '../components/CityBoard';
import CountryBoard from '../components/CountryBoard';
import Sidebar from '../components/Sidebar'
import styles from '../styles/LeaderBoard.module.css';

export default function LeaderBoard() {

    AOS.init({
        duration: 1000,
    });

    return (
        <div className={styles.LeaderBoardOuterDiv}>
            <Sidebar></Sidebar>
            <div className={styles.LeaderBoardSecondHalf}>
                <div data-aos="fade-right"><CityBoard></CityBoard></div>
                <div data-aos="fade-left"><CountryBoard></CountryBoard></div>
            </div>
        </div>
    )
}
