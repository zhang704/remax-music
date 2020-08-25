/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 14:58:37
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 14:10:30
 * @FilePath: /remax-music/src/pages/details/components/Header/index.js
 */

import React from 'react';
import { View, Image, Text } from 'remax/one';
import Icon from 'remax-iconfont-component';
import styles from './index.less';
import SongCover from '@components/SongCover';

export default ({ info }) => {
  const { coverImgUrl, playCount, description = '', name, creator = {} } = info;
  const { avatarUrl, nickname } = creator;
  return (
    <View className={styles.header}>
      <SongCover size={260} picUrl={coverImgUrl} playCount={playCount} />
      <View className={styles.info}>
        <View className={styles.top}>
          <Text className={styles.name}>{name}</Text>
          <View className={styles.creator}>
            <Image className={styles.avatar} src={avatarUrl} />
            <Text className={styles.nickname}>{nickname}</Text>
            <Icon className={styles.iconRight} type="icon-right" />
          </View>
        </View>
        <View className={styles.desc}>
          <Text className={styles.text}>{description.replace(/[\r\n]/g, " ")}</Text>
          <Icon className={styles.iconRight} type="icon-right" />
        </View>
      </View>
    </View>
  );
};