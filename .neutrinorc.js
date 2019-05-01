module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'material-react'
        }
      }
    ],
    '@neutrinojs/karma'
  ]
};
