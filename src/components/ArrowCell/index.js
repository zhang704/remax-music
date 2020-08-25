/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 16:50:16
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 13:42:53
 * @FilePath: /remax-music/src/components/ArrowCell/index.js
 */
import React from 'react';
import { View, Text, Image } from 'remax/one';
import Icon from 'remax-iconfont-component';
import styles from './index.less';

const ArrowCell = ({ className, icon, iconClass, text, isArrow }) => {
  return (
    <View className={[styles.cell, className ? className : '']}>
      <View className={styles.left}>
        {icon ? <Image className={iconClass ? iconClass : ''} src={icon} /> : null}
        <Text className={styles.text}>{text}</Text>
      </View>
      {isArrow ? <Icon className={styles.icon} type="icon-right" /> : null}
    </View>
  )
}

ArrowCell.defaultProps = {
  isArrow: true
}

export default ArrowCell;
