module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
