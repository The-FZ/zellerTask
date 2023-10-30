module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: '',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
