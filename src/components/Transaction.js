import React, {useState} from 'react'
import styles from "./../styles/Transaction.module.css";
import Slider from 'react-slick'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';

export default function Transaction(props) {

    AOS.init({
        duration: 1000,
    });

    // const [accept, setAccept] = useState()
    const history = useHistory();

    const {
        trans, key, admin
    } = props

    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        arrows: false,
        speed : 400
    }

    const accept = () => {
        axios.post(`http://localhost:5000/transactions/approveTransaction/${trans._id}`).then(res => {

        }).catch(err => {
            console.log(err)
        })
        history.push("/admin")
    }

    const reject = () => {
        axios.post(`http://localhost:5000/transactions/delTransaction/${trans._id}`).then(res => {

        }).catch(err => {
            console.log(err)
        })
        history.push("/admin")
    }

    const img = trans ? trans.images : [];

    return (
        <>
            <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
            <div data-aos={key%2 === 0 ? "fade-right" : "fade-left"} className={styles.container}>
                <Slider className={styles.slider} {...sliderSettings}>
                    {img.map((item, i) => <img className={styles.images} src={item} key={`key${i}`} alt=""/>)}
                </Slider>
                {trans && (
                    <div className={styles.content}>
                        <div className={styles.col}>
                            <h1>Type</h1> 
                            <h1>Price Per Kg</h1>
                            <h1>Quantity</h1>
                            <h1>Total Cost</h1>
                        </div>
                        <div className={styles.col}>
                            <p>{trans.type}</p>
                            <p>{trans.costPerKG}</p>
                            <p>{trans.quantity}</p>
                            <p>{(+trans.costPerKG)*(+trans.quantity)}</p>
                        </div>
                    </div>
                )}
                {admin ?
                <div className={styles.admin}>
                    <button className={styles.accept} onClick={() => accept()}>Accept</button>
                    <button className={styles.reject} onClick={() => reject()}>Reject</button>
                </div>
                : 
                <>
                {trans.isApproved ? <img className={styles.approved} src="/img/approved.png" alt=""/> : <img className={styles.approved} src="/img/pending.png" alt=""/>}
                </>
                }
            </div>
        </>
    )
}
