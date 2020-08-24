/*
 * @Author: 张伟伦
 * @Date: 2020-08-18 14:12:16
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-18 15:29:02
 * @FilePath: /remax-netease-cloudmusic/src/pages/login/index.js
 */
import React, { useState } from 'react';
import { View, Text } from 'remax/one';
import { Input, setStorageSync } from 'remax/wechat';
import styles from './index.less';
import axios from '../../utils/axios';

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const loginClick = async () => {
    const res = await axios("/login/cellphone", { phone, password });
    const { id } = res.account;
    setStorageSync("uid", id);
  }
  return (
    <View className={styles.app}>
      <Input
        className={styles.input}
        placeholder="请输入手机号"
        type="number"
        value={phone}
        maxlength={11}
        focus={true}
        onInput={e => setPhone(e.detail.value)}
      />
      <Input
        className={[styles.input, styles.password]}
        placeholder="请输入密码"
        password={true}
        value={password}
        type="text"
        confirmType="done"
        onInput={e => setPassword(e.detail.value)}
      />
      <View className={styles.btn} onClick={loginClick}>
        <Text>登录</Text>
      </View>
    </View>
  )
}

export default Login;