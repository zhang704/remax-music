/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 16:20:56
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 14:09:51
 * @FilePath: /remax-music/src/pages/tabbars/library/components/NewSongs/index.js
 */
import React, { useEffect, useState } from 'react';
import { View } from 'remax/one';
import axios from '@utils/axios';
import styles from './index.less';
import Item from '@components/SongItem';
import ArrowCell from '@components/ArrowCell';
const SongsUrl = "/top/song";

const NewSongs = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const getSongs = async () => {
      const res = await axios(SongsUrl, { type: 0 });
      setSongs(res.data.splice(0, 6));
    }
    getSongs();
  }, []);
  return (
    <View className={styles.list}>
      <ArrowCell
        text="新歌速递"
      />
      <View className={styles.songs}>
        {songs.map(v => (
          <Item
            key={v.id}
            className={styles.item}
            picUrl={v.album.blurPicUrl}
            name={v.name}
            singer={v.artists.map(v => v.name).join("/")}
          />
        ))}
      </View>
    </View>
  )
}

export default NewSongs;
