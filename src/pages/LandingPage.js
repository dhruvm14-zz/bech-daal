import React, { useState , useEffect} from "react";
import {useHistory} from "react-router-dom"
import { CanvasJSChart } from "canvasjs-react-charts";
import PriceCard from "../components/PriceCard";
import Sidebar from "../components/Sidebar";
import styles from "../styles/LandingPage.module.css";
import AOS from "aos";

export default function LandingPage() {
  
  const history = useHistory()

  useEffect(() => {
    if(!localStorage.getItem("user")){
      console.log(localStorage.getItem("user"))
      history.push('/login')
    }
  }, [history])


  AOS.init({
    duration: 1000,
  });

  const optionPlastic = {
    animationEnabled: true,
    backgroundColor: "#2a2d3e",
    height: 150,
    data: [
      {
        type: "doughnut",
        dataPoints: [{ y: 17 }, { y: 83 }],
      },
    ],
  };

  const optionAlu = {
    animationEnabled: true,
    backgroundColor: "#2a2d3e",
    height: 150,
    data: [
      {
        type: "doughnut",
        dataPoints: [{ y: 12 }, { y: 82 }],
      },
    ],
  };

  const optionWood = {
    animationEnabled: true,
    backgroundColor: "#2a2d3e",
    height: 150,
    data: [
      {
        type: "doughnut",
        dataPoints: [{ y: 20 }, { y: 80 }],
      },
    ],
  };

  const optionPaper = {
    animationEnabled: true,
    backgroundColor: "#2a2d3e",
    height: 150,
    data: [
      {
        type: "doughnut",
        dataPoints: [{ y: 40 }, { y: 60 }],
      },
    ],
  };

  const dataPointsPlastic = [
    { x: new Date(2017, 0, 0), y: 25 },
    { x: new Date(2017, 0, 1), y: 26 },
    { x: new Date(2017, 0, 2), y: 27 },
    { x: new Date(2017, 0, 3), y: 25 },
    { x: new Date(2017, 0, 4), y: 24 },
    { x: new Date(2017, 0, 5), y: 23 },
    { x: new Date(2017, 0, 6), y: 27 },
    { x: new Date(2017, 0, 7), y: 29 },
    { x: new Date(2017, 0, 8), y: 30 },
    { x: new Date(2017, 0, 9), y: 32 },
    { x: new Date(2017, 0, 10), y: 30 },
    { x: new Date(2017, 0, 11), y: 30 },
    { x: new Date(2017, 0, 12), y: 30 },
    { x: new Date(2017, 0, 13), y: 29 },
    { x: new Date(2017, 0, 14), y: 31 },
    { x: new Date(2017, 0, 15), y: 27 },
    { x: new Date(2017, 0, 16), y: 30 },
    { x: new Date(2017, 0, 17), y: 26 },
    { x: new Date(2017, 0, 18), y: 24 },
    { x: new Date(2017, 0, 19), y: 25 },
    { x: new Date(2017, 0, 20), y: 26 },
    { x: new Date(2017, 0, 21), y: 27 },
    { x: new Date(2017, 0, 22), y: 25 },
    { x: new Date(2017, 0, 23), y: 28 },
    { x: new Date(2017, 0, 24), y: 30 },
    { x: new Date(2017, 0, 25), y: 33 },
    { x: new Date(2017, 0, 26), y: 25 },
    { x: new Date(2017, 0, 27), y: 27 },
    { x: new Date(2017, 0, 28), y: 28 },
    { x: new Date(2017, 0, 29), y: 34 },
    { x: new Date(2017, 0, 30), y: 30 },
  ]

  const dataPointsAluminium = [
    { x: new Date(2017, 0, 0), y: 25060 },
    { x: new Date(2017, 0, 1), y: 27980 },
    { x: new Date(2017, 0, 2), y: 42800 },
    { x: new Date(2017, 0, 3), y: 32400 },
    { x: new Date(2017, 0, 4), y: 35260 },
    { x: new Date(2017, 0, 5), y: 33900 },
    { x: new Date(2017, 0, 6), y: 40000 },
    { x: new Date(2017, 0, 7), y: 52500 },
    { x: new Date(2017, 0, 8), y: 32300 },
    { x: new Date(2017, 0, 9), y: 42000 },
    { x: new Date(2017, 0, 10), y: 37160 },
    { x: new Date(2017, 0, 11), y: 25060 },
    { x: new Date(2017, 0, 12), y: 27980 },
    { x: new Date(2017, 0, 13), y: 42800 },
    { x: new Date(2017, 0, 14), y: 32400 },
    { x: new Date(2017, 0, 15), y: 35260 },
    { x: new Date(2017, 0, 16), y: 33900 },
    { x: new Date(2017, 0, 17), y: 40000 },
    { x: new Date(2017, 0, 18), y: 52500 },
    { x: new Date(2017, 0, 19), y: 32300 },
    { x: new Date(2017, 0, 20), y: 42000 },
    { x: new Date(2017, 0, 21), y: 37160 },
    { x: new Date(2017, 0, 22), y: 25060 },
    { x: new Date(2017, 0, 23), y: 27980 },
    { x: new Date(2017, 0, 24), y: 42800 },
    { x: new Date(2017, 0, 25), y: 32400 },
    { x: new Date(2017, 0, 26), y: 35260 },
    { x: new Date(2017, 0, 27), y: 33900 },
    { x: new Date(2017, 0, 28), y: 40000 },
    { x: new Date(2017, 0, 29), y: 52500 },
    { x: new Date(2017, 0, 30), y: 32300 },
  ]
  const dataPointsWood = [
    { x: new Date(2017, 0, 0), y: 25060 },
    { x: new Date(2017, 0, 1), y: 27980 },
    { x: new Date(2017, 0, 2), y: 42800 },
    { x: new Date(2017, 0, 3), y: 32400 },
    { x: new Date(2017, 0, 4), y: 35260 },
    { x: new Date(2017, 0, 5), y: 33900 },
    { x: new Date(2017, 0, 6), y: 40000 },
    { x: new Date(2017, 0, 7), y: 52500 },
    { x: new Date(2017, 0, 8), y: 32300 },
    { x: new Date(2017, 0, 9), y: 42000 },
    { x: new Date(2017, 0, 10), y: 37160 },
    { x: new Date(2017, 0, 11), y: 25060 },
    { x: new Date(2017, 0, 12), y: 27980 },
    { x: new Date(2017, 0, 13), y: 42800 },
    { x: new Date(2017, 0, 14), y: 32400 },
    { x: new Date(2017, 0, 15), y: 35260 },
    { x: new Date(2017, 0, 16), y: 33900 },
    { x: new Date(2017, 0, 17), y: 40000 },
    { x: new Date(2017, 0, 18), y: 52500 },
    { x: new Date(2017, 0, 19), y: 32300 },
    { x: new Date(2017, 0, 20), y: 42000 },
    { x: new Date(2017, 0, 21), y: 37160 },
    { x: new Date(2017, 0, 22), y: 25060 },
    { x: new Date(2017, 0, 23), y: 27980 },
    { x: new Date(2017, 0, 24), y: 42800 },
    { x: new Date(2017, 0, 25), y: 32400 },
    { x: new Date(2017, 0, 26), y: 35260 },
    { x: new Date(2017, 0, 27), y: 33900 },
    { x: new Date(2017, 0, 28), y: 40000 },
    { x: new Date(2017, 0, 29), y: 52500 },
    { x: new Date(2017, 0, 30), y: 32300 },
  ]
  const dataPointsPaper = [
    { x: new Date(2017, 0, 0), y: 25060 },
    { x: new Date(2017, 0, 1), y: 27980 },
    { x: new Date(2017, 0, 2), y: 42800 },
    { x: new Date(2017, 0, 3), y: 32400 },
    { x: new Date(2017, 0, 4), y: 35260 },
    { x: new Date(2017, 0, 5), y: 33900 },
    { x: new Date(2017, 0, 6), y: 40000 },
    { x: new Date(2017, 0, 7), y: 52500 },
    { x: new Date(2017, 0, 8), y: 32300 },
    { x: new Date(2017, 0, 9), y: 42000 },
    { x: new Date(2017, 0, 10), y: 37160 },
    { x: new Date(2017, 0, 11), y: 25060 },
    { x: new Date(2017, 0, 12), y: 27980 },
    { x: new Date(2017, 0, 13), y: 42800 },
    { x: new Date(2017, 0, 14), y: 32400 },
    { x: new Date(2017, 0, 15), y: 35260 },
    { x: new Date(2017, 0, 16), y: 33900 },
    { x: new Date(2017, 0, 17), y: 40000 },
    { x: new Date(2017, 0, 18), y: 52500 },
    { x: new Date(2017, 0, 19), y: 32300 },
    { x: new Date(2017, 0, 20), y: 42000 },
    { x: new Date(2017, 0, 21), y: 37160 },
    { x: new Date(2017, 0, 22), y: 25060 },
    { x: new Date(2017, 0, 23), y: 27980 },
    { x: new Date(2017, 0, 24), y: 42800 },
    { x: new Date(2017, 0, 25), y: 32400 },
    { x: new Date(2017, 0, 26), y: 35260 },
    { x: new Date(2017, 0, 27), y: 33900 },
    { x: new Date(2017, 0, 28), y: 40000 },
    { x: new Date(2017, 0, 29), y: 52500 },
    { x: new Date(2017, 0, 30), y: 32300 },
  ]

  const [dataP, setDataP] = useState(dataPointsPlastic);

  const options = {
    animationEnabled: true,
    backgroundColor: "#2a2d3e",
    height: 350,
    width: 1300,
    animationDuration: 3000,
    title: {
      text: "Daily Price",
      fontColor: "#4690d7",
    },
    axisX: {
      labelFontColor: "#737685",
      valueFormatString: "DDD",
    },
    axisY: {
      labelFontColor: "#737685",
      title: "Price (in rupees)",
      titleFontColor: "#737685",
      prefix: "₹",
    },
    data: [
      {
        yValueFormatString: "₹#,###",
        xValueFormatString: "DDDD",
        type: "line",
        dataPoints: dataP,
      },
    ],
  };

  return (
    <div className={styles.LandingPageOuterDiv}>
      <Sidebar></Sidebar>
      <div className={styles.LandingPageSecondHalf}>
        <div data-aos="fade-down" className={styles.LandingPagePriceDiv}>
          <PriceCard
            onClick={event => setDataP(dataPointsPlastic)}
            type="Plastic Bottles"
            price="₹30/kg"
            change="5"
            option={optionPlastic}
          ></PriceCard>
          <PriceCard
          onClick={event => setDataP(dataPointsAluminium)}
            type="Aluminium Sheets"
            price="₹50/kg"
            change="10"
            option={optionAlu}
          ></PriceCard>
          <PriceCard
          onClick={event => setDataP(dataPointsWood)}
            type="Wood Logs"
            price="₹60/kg"
            change="3"
            option={optionWood}
          ></PriceCard>
          <PriceCard
          onClick={event => setDataP(dataPointsPaper)}
            type="Paper Scrap"
            price="₹14/kg"
            change="-2"
            option={optionPaper}
          ></PriceCard>
        </div>
        <div data-aos="fade-up" className={styles.LandingPageGraph}>
          <CanvasJSChart options={options} />
        </div>
      </div>
    </div>
  );
}
