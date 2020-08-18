import React, { useState } from 'react';
import { usePageEvent } from 'remax/macro';
import { View } from 'remax/one';
import styles from './index.less';
import axios from '../../utils/axios';
import Item from '../../components/SongSheetItem';

export default () => {
  const [listArray, setListArray] = useState([]);
  usePageEvent("onLoad", () => {
    const getList = async () => {
      const res = await axios("/personalized");
      setListArray(res.result)
    }
    getList();
  })
  const renderSongSheetItems = () => listArray.map(v => (
    <Item
      key={v.id}
      {...v}
    />
  ))
  return (
    <View className={styles.app}>
      {renderSongSheetItems()}
    </View>
  );
};
