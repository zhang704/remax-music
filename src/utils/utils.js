/*
 * @Author: 张伟伦
 * @Date: 2020-08-17 13:51:02
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-18 14:09:25
 * @FilePath: /remax-netease-cloudmusic/src/utils/utils.js
 */

const unitTransformation = (count) => {
  const unit = 10000;
  if (count > (unit * unit)) return `${parseInt(count / (unit * unit))}亿`;
  else if (count > unit) return `${parseInt(count / unit)}万`;
  else return count;
}

export { unitTransformation };