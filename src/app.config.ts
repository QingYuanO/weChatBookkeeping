let rnConfig = {};

if (process.env.TARO_ENV === 'rn') {
  rnConfig = {
    //deep Linking前缀,https://reactnavigation.org/docs/deep-linking
    linking: [],
    //tabBar页面的设置，https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar 对应options的配置，支持以下属性透传，不支持返回react.Node节点设置的方案
    options: {},
    tabBarOptions: {
      //tabbarOptions的配置，其他参考https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar tabBarOptions
      style: {
        borderTopColor: '#ffffff',
      },
    },
    screenOptions: {
      //全局screenOptions，作用于所有页面，注意不支持返回React.Node的属性，参考https://reactnavigation.org/docs/stack-navigator/#options
    },
  };
}

export default defineAppConfig({
  pages: ['pages/detailed/index', 'pages/statistics/index', 'pages/setup/index', 'pages/consumeDetail/index'],
  tabBar: {
    color: '#333333',
    selectedColor: '#3EB575', // 主题色
    list: [
      {
        iconPath: './assets/images/tabs/details.png',
        selectedIconPath: './assets/images/tabs/details_selected.png',
        pagePath: 'pages/detailed/index',
        text: '明细',
      },
      {
        iconPath: './assets/images/tabs/statistics.png',
        selectedIconPath: './assets/images/tabs/statistics_selected.png',
        pagePath: 'pages/statistics/index',
        text: '统计',
      },
      {
        iconPath: './assets/images/tabs/setting.png',
        selectedIconPath: './assets/images/tabs/setting_selected.png',
        pagePath: 'pages/setup/index',
        text: '设置',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '账单',
    navigationBarTextStyle: 'black',
  },
  //@ts-ignore
  rn: rnConfig,
});
