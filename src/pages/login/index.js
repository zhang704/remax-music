/*
 * @Author: 张伟伦
 * @Date: 2020-08-18 14:12:16
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 15:36:06
 * @FilePath: /remax-music/src/pages/login/index.js
 */
import React, { useState } from 'react';
import { View, Text, Image } from 'remax/one';
import { Input, setStorageSync, navigateBack } from 'remax/wechat';
import styles from './index.less';
import axios from '@utils/axios';
import LoginBg from '@images/login/bg.png';

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const loginClick = async () => {
    const res = await axios("/login/cellphone", { phone, password });
    const { id } = res.account;
    setStorageSync("uid", id);
    navigateBack({
      delta: 1
    });
  }
  return (
    <View className={styles.app}>
      <View className={styles.title}>

      </View>
      <View className={styles.form}>
        <View className={styles.input}>
          <Input
            placeholder="手机号"
            onInput={e => setPhone(e.detail.value)}
          />
        </View>
        <View className={[styles.input, styles.password]}>
          <Input
            placeholder="密码"
            password={true}
            onInput={e => setPassword(e.detail.value)}
          />
        </View>
        <View className={styles.forgot}>
          <Text>忘记密码?</Text>
        </View>
        <View className={styles.signIn} onClick={loginClick}>
          <Text>登 录</Text>
        </View>
        <View className={styles.register}>
          <Text>还没有帐号？</Text>
          <Text className={styles.text}>注册</Text>
        </View>
      </View>
      <Image className={styles.bg} src={LoginBg} />
    </View>
  )
}

export default Login;