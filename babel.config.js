// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // The react-native-reanimated plugin must be listed last (used for drawer navigation).
    plugins: ['react-native-reanimated/plugin']
  };
};
