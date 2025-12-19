export const linking = {
  prefixes: ['appbank://'],
  config: {
    screens: {
      Login: 'login',
      Loading: 'loading',
      CoreBottomTab: {
        path: 'tabs',
        screens: {
          Home: 'home',
          Chat: 'chat',
          Configuration: 'configuration',
        },
      },
      Main: 'main',
      Tarjet: 'tarjet',
      Movements: 'movements',
    },
  },
};