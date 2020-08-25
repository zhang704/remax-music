/*
 * @Author: 张伟伦
 * @Date: 2020-08-25 13:30:06
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 14:06:37
 * @FilePath: /remax-music/src/pages/tabbars/mine/components/ActionSheet/index.js
 */
import React from 'react';
import { View } from 'remax/one';
import ArrowCell from '@components/ArrowCell';
import styles from './index.less';
import VipIcon from '@images/mine/vip-icon.png';
import SettingIcon from '@images/mine/setting-icon.png';
import CloseClockIcon from '@images/mine/close-clock-icon.png';
import CarIcon from '@images/mine/car-icon.png';
import ToneQualityIcon from '@images/mine/tone-quality-icon.png';
import ClockIcon from '@images/mine/clock-icon.png';
const List = [{
  id: 1, data: [
    { icon: VipIcon, text: '会员中心' },
    { icon: SettingIcon, text: '设置' },
  ]
}, {
  id: 2, data: [
    { icon: CloseClockIcon, text: '定时关闭' },
    { icon: CarIcon, text: '驾驶模式' },
    { icon: ToneQualityIcon, text: '音质选择' },
  ]
}, {
  id: 3, data: [
    { icon: ClockIcon, text: '音乐闹钟' },
  ]
}]


const ActionSheet = () => {
  return (
    <>
      {List.map(v => (
        <View key={v.id} className={styles.action}>
          {v.data.map(v => (
            <ArrowCell
              key={v.text}
              className={styles.item}
              iconClass={styles.icon}
              {...v}
            />
          ))}
        </View>
      ))}
    </>
  )
}

export default ActionSheet;