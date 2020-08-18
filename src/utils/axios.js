/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 11:05:21
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-17 17:44:59
 * @FilePath: /netease_cloud_music/src/utils/axios.js
 */

import { request, showLoading, hideLoading } from 'remax/wechat';
const BaseURL = "http://api.music.zhangweilun.com";

const axios = (url, data = {}) => new Promise((resolve, reject) => {
  showLoading({
    title: '加载中...',
    mask: true
  });
  const timestamp = Date.parse(new Date());
  request({
    url: `${BaseURL}${url}?timestamp=${timestamp}`,
    data,
    header: {
      'content-type': 'application/json'
    },
    method: 'POST',
    dataType: 'json',
    success: (result) => {
      resolve(result.data);
    },
    fail: () => { },
    complete: () => {
      hideLoading();
    }
  })
})

export default axios;