/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 16:40:10
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-24 16:48:50
 * @FilePath: /remax-music/src/components/SongItem/index.js
 */
import React from 'react';
import { View, Image, Text } from 'remax/one';
import styles from './index.less';

const SongItem = ({ className, picUrl, name, singer }) => {
  return (
    <View className={[styles.item, className ? className : '']}>
      <Image className={styles.picUrl} src={picUrl} />
      <Text className={styles.name}>{name}</Text>
      <Text className={styles.singer}>{singer}</Text>
    </View>
  )
}

export default SongItem;
