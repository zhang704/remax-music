/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 11:36:05
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-17 14:51:44
 * @FilePath: /netease_cloud_music/src/components/SongSheetItem/index.js
 */

import React from 'react';
import { View, Text } from 'remax/wechat';
import { navigateTo } from 'remax/one';
import styles from './index.less';
import SongCover from '../SongCover';

const SongSheetItem = ({ id, name, picUrl, playCount }) => {
  const navigatorToDetails = () => {
    navigateTo({
      url: `/pages/details/index?id=${id}`
    });
  }
  return (
    <View className={styles.item} onClick={navigatorToDetails}>
      <SongCover
        size={216}
        picUrl={picUrl}
        playCount={playCount}
      />
      <Text className={styles.name}>{name}</Text>
    </View>
  )
}

export default SongSheetItem;