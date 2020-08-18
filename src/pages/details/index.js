/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 13:38:36
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-17 17:25:40
 * @FilePath: /netease_cloud_music/src/pages/details/index.js
 */
import React, { useState } from 'react';
import RecycleView from 'remax-recycle-view/lib/index';
import { usePageEvent } from 'remax/macro';
import { View } from 'remax/one';
import styles from './index.less';
import axios from '../../utils/axios';
import Header from './components/Header';
import Item from './components/Item';

export default ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [songsArray, setSongsArray] = useState([]);
  usePageEvent("onLoad", () => {
    const getDetails = async () => {
      const { id } = location.query;
      const res = await axios("/playlist/detail", { id });
      const { playlist } = res;
      const trackIds = playlist.trackIds.map(v => v.id);
      const trackIdsDetails = await axios("/song/detail", { ids: trackIds.join(",") });
      const { songs } = trackIdsDetails;
      songs.map(v => v.height = 120);
      setInfo(playlist);
      setSongsArray(songs);
      setLoading(false);
    }
    getDetails();
  })
  return (
    !loading ? (
      <View className={styles.app}>
        <RecycleView
          className={styles.recycleView}
          overscanCount={10}
          data={songsArray}
          headerHeight={320}
          renderHeader={() => (
            <Header info={info} />
          )}
          bottomHeight={40}
          renderBottom={() => (
            <View />
          )}
          renderItem={item => {
            const index = item["__index__"];
            return (
              <Item key={item.id} {...item} index={index + 1} />
            )
          }}
        />
      </View>
    ) : null
  );
};
