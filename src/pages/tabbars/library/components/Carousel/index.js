/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 16:04:19
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-24 16:10:03
 * @FilePath: /remax-music/src/pages/tabbars/library/components/Carousel/index.js
 */
import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Swiper, SwiperItem } from 'remax/wechat';
import { View, Image } from 'remax/one';
import axios from '../../../../../utils/axios';
const BannerUrl = "/banner";

const Carousel = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    const getSwiper = async () => {
      const res = await axios(BannerUrl);
      setBanners(res.banners);
    }
    getSwiper();
  }, []);
  const renderBanners = () => banners.map(v => (
    <SwiperItem key={v.imageUrl} className={styles.item}>
      <Image src={v.imageUrl} />
    </SwiperItem>
  ))
  return (
    <View className={styles.swiper}>
      <Swiper
        indicatorDots={true}
        indicatorColor="#AAAAAA"
        indicatorActiveColor="#FFFFFF"
        autoplay={true}
        circular={true}
      >
        {renderBanners()}
      </Swiper>
    </View>
  )
}

export default Carousel;
