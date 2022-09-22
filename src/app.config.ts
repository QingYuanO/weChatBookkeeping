export default defineAppConfig({
  pages: ['pages/detailed/index', 'pages/statistics/index', 'pages/setup/index'],
  tabBar: {
    color: '#333333',
    selectedColor: '#3EB575', // 主题色
    list: [
      {
        // iconPath: './assets/iconpark/system.png',
        // selectedIconPath: './assets/iconpark/system_selected.png',
        pagePath: 'pages/detailed/index',
        text: '项目',
      },
      {
        // iconPath: './assets/iconpark/cycle.png',
        // selectedIconPath: './assets/iconpark/cycle_selected.png',
        pagePath: 'pages/statistics/index',
        text: '统计',
      },
      {
        // iconPath: './assets/iconpark/components.png',
        // selectedIconPath: './assets/iconpark/components_selected.png',
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
  // rn: {
  //   useNativeStack: true, // 使用 @react-navigation/native-stack
  // },
});
