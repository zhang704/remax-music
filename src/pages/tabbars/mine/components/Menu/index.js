/*
 * @Author: 张伟伦
 * @Date: 2020-08-25 11:36:38
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 14:08:41
 * @FilePath: /remax-music/src/pages/tabbars/mine/components/Menu/index.js
 */
import React from 'react';
import { View, Text, Image } from 'remax/one';
import HistoryIcon from '@images/mine/history-icon.png';
import LocalIcon from '@images/mine/local-icon.png';
import WorksIcon from '@images/mine/works-icon.png';
import SubscribeIcon from '@images/mine/subscribe-icon.png';
import styles from './index.less';
const List = [{
  icon: HistoryIcon,
  text: '最近播放'
}, {
  icon: LocalIcon,
  text: '本地音乐'
}, {
  icon: WorksIcon,
  text: '我的作品'
}, {
  icon: SubscribeIcon,
  text: '我的订阅'
}]
const Item = ({ icon, text }) => {
  return (
    <View className={styles.item}>
      <Image className={styles.icon} src={icon} />
      <Text className={styles.text}>{text}</Text>
    </View>
  )
}

const Menu = () => (
  <View className={styles.menu}>
    {List.map(v => (
      <Item key={v.text} {...v} />
    ))}
  </View>
)

export default Menu;
