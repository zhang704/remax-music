/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 16:10:32
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-24 16:13:39
 * @FilePath: /remax-music/src/pages/tabbars/library/components/Menu/index.js
 */
import React from 'react';
import { View, Image, Text } from 'remax/one';
import styles from './index.less';
import FMIcon from '../../../../../images/menu/fm-icon.png';
import RankIcon from '../../../../../images/menu/rank-icon.png';
import CatsIcon from '../../../../../images/menu/cats-icon.png';
import SongerIcon from '../../../../../images/menu/songer-icon.png';
const List = [{
  icon: FMIcon,
  text: "隨心FM"
}, {
  icon: RankIcon,
  text: "排行榜"
}, {
  icon: CatsIcon,
  text: "分类歌单"
}, {
  icon: SongerIcon,
  text: "歌手"
}]
const Item = ({ icon, text }) => (
  <View className={styles.item}>
    <Image className={styles.icon} src={icon} />
    <Text className={styles.text}>{text}</Text>
  </View>
)

const Menu = () => {
  const renderMenus = () => List.map(v => (
    <Item key={v.text} {...v} />
  ))
  return (
    <View className={styles.menu}>
      {renderMenus()}
    </View>
  )
}

export default Menu;
