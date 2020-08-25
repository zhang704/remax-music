/*
 * @Author: 张伟伦
 * @Date: 2020-08-25 10:41:11
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 16:33:20
 * @FilePath: /remax-music/src/pages/tabbars/mine/index.js
 */
import React, { useContext, useState } from 'react';
import { usePageEvent } from 'remax/macro';
import { View, Image, Text } from 'remax/one';
import { ScrollView, navigateTo, getStorageSync } from 'remax/wechat';
import Icon from 'remax-iconfont-component';
import { SystemInfoContext } from '@/app';
import HeaderBg from '@images/mine/header-bg.png';
import styles from './index.less';
import Menu from './components/Menu';
import ActionSheet from './components/ActionSheet';
import axios from '@utils/axios';
const UserInfoUrl = "/user/detail";

const Mine = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { systemInfo } = useContext(SystemInfoContext);
  const { navBarHeight, navBarExtendHeight } = systemInfo;
  usePageEvent("onShow", () => {
    const uid = getStorageSync("uid");
    const getUserInfo = async () => {
      const res = await axios(UserInfoUrl, { uid });
      setUserInfo(res);
      setLoading(false);
    }
    if (!userInfo.code && uid) {
      getUserInfo();
    } else {
      setLoading(false);
    }
  });
  const toLogin = () => {
    if (!userInfo.code) {
      navigateTo({
        url: '/pages/login/index'
      });
    }
  }
  return (
    <ScrollView
      scrollX={false}
      scrollY={true}
    >
      {!loading ? (
        <>
          <View className={styles.header}>
            <Image src={userInfo.code ? userInfo.profile.backgroundUrl : HeaderBg} mode="center" />
            <View className={styles.userInfo} style={{ paddingTop: `${navBarHeight + navBarExtendHeight + 25}px` }} onClick={toLogin}>
              {!userInfo.code ? (<Icon className={styles.avatar} type="icon-3209203-accountcieclepersonrounduser" />
              ) : <Image className={styles.avatar} src={userInfo.profile.avatarUrl} />}
              <Text className={styles.name}>{userInfo.code ? userInfo.profile.nickname : '请登录'}</Text>
            </View>
          </View>
          <Menu />
          <ActionSheet />
        </>
      ) : null}
    </ScrollView>
  )
}

export default Mine;
