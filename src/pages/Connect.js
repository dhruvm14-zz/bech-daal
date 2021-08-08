import React, {useRef} from 'react'
import styles from './../styles/Connect.module.css'
import SignUp from './../components/SignUp'
import SignIn from './../components/SignIn'
import Slider from 'react-slick'

export default function Connect() {

    const slider = useRef()
    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        draggable: false,
        arrows: false,
        speed : 400
    }

    const swap = () => slider.current.slickPrev()

    return (
        <>
            <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
            <div className={styles.page}>
                <div className={styles.container}>
                    <img className={styles.bin} src="/img/greenBin.png" alt=""/>
                    <div className={styles.board}>
                        <Slider ref={slider} {...sliderSettings}>
                            <SignIn swap={swap}/>
                            <SignUp swap={swap}/>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
