const alias = require('./alias.js')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias,
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js'
        ]
      }
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env'
      }
    ]
  ]
}
