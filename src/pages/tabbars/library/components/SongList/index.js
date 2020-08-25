/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 17:06:18
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 14:10:02
 * @FilePath: /remax-music/src/pages/tabbars/library/components/SongList/index.js
 */
import React, { useEffect, useState } from 'react';
import { View } from 'remax/one';
import { ScrollView } from 'remax/wechat';
import ArrowCell from '@components/ArrowCell';
import Item from '@components/SongSheetItem';
import axios from '@utils/axios';
import styles from './index.less';
const ListUrl = "/personalized";

const SongList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getSongs = async () => {
      const res = await axios(ListUrl);
      setList(res.result.splice(0, 6));
    }
    getSongs();
  }, []);
  return (
    <View className={styles.list}>
      <ArrowCell text="推荐歌单" />
      <ScrollView
        className={styles.scrollView}
        scrollY={false}
        scrollX={true}
      >
        <View className={styles.content}>
          {list.map(v => (
            <Item
              key={v.id}
              size="small"
              className={styles.item}
              {...v}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default SongList;
