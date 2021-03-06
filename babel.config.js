module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            Authentication: './src/Authentication',
            Config: './src/Config',
            Constants: './src/Constants',
            Themes: './src/Themes',
            Assets: './assets',
            Navigation: './src/Navigation',
            Components: './src/Components',
            Screens: './src/Screens',
            Mock: './src/Mock',
            FormikManager: './src/FormikManager',
            AuthFormComponents: './src/Authentication/components/Form',
            Home: './src/Home',
            Hooks: './src/Hooks',
          },
        },
      ],
      // 'react-native-reanimated/plugin'
    ],
  };
};
