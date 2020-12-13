import { Carousel } from 'antd-mobile';

import img1 from 'assets/images/s01.jpg'
import img2 from 'assets/images/s02.jpg'
import img3 from 'assets/images/s03.jpg'
import img4 from 'assets/images/s04.jpg'

import {
    SwiperWarp
} from "./StyledCookBook";

const Swiper = () => {
    return (
        <SwiperWarp>
            <Carousel
                autoplay={true}
                infinite
            >
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img3} alt=""/>
                <img src={img4} alt=""/>
            </Carousel>
        </SwiperWarp>
    );
};

export default Swiper;
