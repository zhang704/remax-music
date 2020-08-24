/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 16:50:16
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-24 16:54:11
 * @FilePath: /remax-music/src/components/ArrowCell/index.js
 */
import React from 'react';
import { View, Text } from 'remax/one';
import Icon from 'remax-iconfont-component';
import styles from './index.less';

const ArrowCell = ({ text, isArrow }) => {
  return (
    <View className={styles.cell}>
      <Text className={styles.text}>{text}</Text>
      {isArrow ? <Icon className={styles.icon} type="icon-right" /> : null}
    </View>
  )
}

ArrowCell.defaultProps = {
  isArrow: true
}

export default ArrowCell;
