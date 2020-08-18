/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 14:02:49
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-17 14:51:25
 * @FilePath: /netease_cloud_music/src/components/SongCover/index.js
 */

import React from 'react';
import { View, Image, Text } from 'remax/wechat';
import Icon from 'remax-iconfont-component';
import styles from './index.less';
import { unitTransformation } from '../../utils/utils';

const SongSheetItem = ({ picUrl, playCount, size }) => {
  return (
    <View className={styles.item} style={{ width: size }}>
      <Image src={picUrl} className={styles.picUrl} style={{ height: size }} />
      <View className={styles.playCount}>
        <Icon className={styles.icon} type="icon-play" />
        <Text className={styles.count}>{unitTransformation(playCount)}</Text>
      </View>
    </View>
  )
}

export default SongSheetItem;