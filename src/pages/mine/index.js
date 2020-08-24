/*
 * @Author: 张伟伦
 * @Date: 2020-08-18 13:50:07
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-18 16:40:30
 * @FilePath: /remax-netease-cloudmusic/src/pages/mine/index.js
 */
import React, { useState } from 'react';
import { View, Image, Text } from 'remax/one';
import { getStorageSync } from 'remax/wechat';
import Icon from 'remax-iconfont-component';
import styles from './index.less';

const Mine = () => {
  const uid = getStorageSync("uid");
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <View className={styles.avatar}>
          <Icon className={styles.default} type="icon-netease-cloud-music-fill" />
          <Text>登录</Text>
        </View>
      </View>
    </View>
  )
}

export default Mine;