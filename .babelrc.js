module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: {
          version: '3.6',
          proposals: true
        }
      }
    ]
  ]
};
