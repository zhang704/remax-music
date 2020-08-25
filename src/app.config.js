const pages = [
  "pages/tabbars/library/index",
  "pages/tabbars/mine/index",
  "pages/details/index",
  "pages/login/index",
  "pages/play/index"
];

module.exports.ali = {
  pages,
  window: {
    defaultTitle: 'Remax Ali Template',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: '',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#FFFFFF',
  },
  tabBar: {
    color: '#AAAAAA',
    selectedColor: "#333333",
    backgroundColor: "#FFFFFF",
    list: [{
      pagePath: "pages/tabbars/library/index",
      text: "热门歌单",
      iconPath: "/images/tabbar/list-unselect-icon.png",
      selectedIconPath: "/images/tabbar/list-selected-icon.png"
    }, {
      pagePath: "pages/tabbars/mine/index",
      text: "我的",
      iconPath: "/images/tabbar/mine-unselect-icon.png",
      selectedIconPath: "/images/tabbar/mine-selected-icon.png"
    }]
  },
  requiredBackgroundModes: ["audio"]
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: 'Remax Toutiao Template',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: 'Remax Web Template',
};
