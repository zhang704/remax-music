/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 17:28:58
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-18 10:07:06
 * @FilePath: /netease_cloud_music/src/pages/play/index.js
 */
import React, { useState } from 'react';
import Icon from 'remax-iconfont-component';
import { usePageEvent } from 'remax/macro';
import { View, Image } from 'remax/one';
import { getBackgroundAudioManager } from 'remax/wechat';
import { setNavigationBarTitle } from 'remax/wechat';
import styles from './index.less';
import axios from '../../utils/axios';

const backAudioManager = getBackgroundAudioManager();
const Play = ({ location }) => {
  const [status, setStatus] = useState(false);
  const [songDetailArray, setSongDetailArray] = useState([]);
  const [songPlayUrlArray, setSongPlayUrlArray] = useState([]);
  usePageEvent("onShow", () => {
    const { name } = location.query;
    setNavigationBarTitle({
      title: name
    });
  })
  usePageEvent("onLoad", () => {
    const getSongDetail = async () => {
      const { id, name } = location.query;
      const songDetails = await axios("/song/detail", { ids: id });
      const songUrl = await axios("/song/url", { id });
      setSongDetailArray(songDetails.songs);
      setSongPlayUrlArray(songUrl.data);
      backAudioManager.src = songUrl.data[0].url;
      backAudioManager.title = name;
    }
    const getAddListenOnPlay = () => {
      backAudioManager.onPlay(() => {
        // console.log('我被播放了');
        setStatus(true);
      });
    }
    const getAddListenOnPause = () => {
      backAudioManager.onPause(() => {
        // console.log('我被暂停了');
        setStatus(false);
      });
    }
    getSongDetail();
    getAddListenOnPlay();
    getAddListenOnPause();
  });
  const playOrPause = () => {
    if (status) {
      // 播放状态 -> 暂停音乐
      backAudioManager.pause();
    } else {
      // 暂停状态 -> 播放音乐
      backAudioManager.play();
    }
    // 根据播放和暂停的状态，来更改当前的状态
    setStatus(prevStatus => !prevStatus);
  }
  const { picUrl } = songDetailArray[0] ? songDetailArray[0].al : {};
  return (
    <View className={styles.app}>
      <Image className={`${styles.cover} ${status ? '' : styles.stop}`} src={picUrl} />
      <View className={styles.controls}>
        <Icon className={styles.prev} type="icon-24gl-previous" />
        <Icon className={styles.play} type={status ? 'icon-pause' : 'icon-playing'} onClick={playOrPause} />
        <Icon className={styles.next} type="icon-24gl-next" />
      </View>
    </View>
  )
}

export default Play;