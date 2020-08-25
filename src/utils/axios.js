/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 11:05:21
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 15:18:17
 * @FilePath: /remax-music/src/utils/axios.js
 */

import { request, showLoading, hideLoading, showModal } from 'remax/wechat';
const BaseURL = "http://api.music.zhangweilun.com";
const SUCCESSCODE = 200;

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
      if (result.data.code === SUCCESSCODE) {
        resolve(result.data);
      } else {
        const { message } = result.data;
        showModal({
          title: '提示',
          content: message,
          showCancel: false
        });
      }
    },
    fail: () => { },
    complete: () => {
      hideLoading();
    }
  })
})

export default axios;