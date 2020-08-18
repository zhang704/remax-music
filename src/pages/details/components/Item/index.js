/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 15:03:30
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-17 17:43:15
 * @FilePath: /netease_cloud_music/src/pages/details/components/Item/index.js
 */
import React from 'react';
import { View, Text, navigateTo } from 'remax/one';
import styles from './index.less';

const ListItem = ({ id, name, ar, al, index }) => {
  const artist = ar.map(v => v.name).join("/");
  const navigatorToPlay = () => {
    navigateTo({
      url: `/pages/play/index?id=${id}&name=${name}`
    });
  }
  return (
    <View className={styles.item} onClick={navigatorToPlay}>
      <Text className={styles.index}>{index}</Text>
      <View className={styles.info}>
        <Text className={styles.name}>{name}</Text>
        <Text className={styles.artist}>{`${artist} - ${al.name}`}</Text>
      </View>
    </View>
  )
}

export default ListItem;