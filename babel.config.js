module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@types': './src/types',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@languages': './src/languages',
            '@redux': './src/redux',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@theme': './src/theme',
            '@tools': './src/tools',
            '@utils': './src/utils',
            '@validation': './src/validation',
          },
        },
      ],
    ],
  };
};
