/*
 * @Author: 张伟伦
 * @Date: 2020-08-24 14:49:14
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-24 17:08:34
 * @FilePath: /remax-music/src/pages/tabbars/library/index.js
 */
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'remax/wechat';
import { View } from 'remax/one';
import Navbar from '../../../components/NavBar';
import { SystemInfoContext } from '../../../app';
import styles from './index.less';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import NewSongs from './components/NewSongs';
import SongList from './components/SongList';

const Library = () => {
  const [navH, setNavH] = useState(0);
  const { systemInfo } = useContext(SystemInfoContext);
  useEffect(() => {
    const getNavHeight = () => {
      const { navBarExtendHeight, navBarHeight } = systemInfo;
      setNavH(navBarExtendHeight + navBarHeight);
    }
    getNavHeight();
  }, [systemInfo]);
  return (
    <View className="app">
      <Navbar
        searchBar={true}
        searchText="大家都在搜"
        onSearch={() => console.log('点击了搜索框')}
      />
      <View
        style={{
          height: `calc(100% - ${navH}PX)`
        }}
      >
        <ScrollView
          className={styles.body}
          scrollY={true}
          scrollX={false}
        >
          <View className={styles.module}>
            <Carousel />
            <Menu />
          </View>
          <View className={styles.module}>
            <NewSongs />
          </View>
          <View className={styles.module}>
            <SongList />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Library;
