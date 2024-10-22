import path from 'path';
import { mergeWithRules } from 'webpack-merge';
import { __dirname } from './helpers.mjs';
import webpackCommonProd from './webpack.common.build.mjs';
import common from './webpack.common.mjs';

const result = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: {
        loader: 'match',
        options: 'replace',
      },
    },
  },
})(common, webpackCommonProd,{
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js',
    library: 'WidgetLibrary',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.library.json',
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
});

 
export default result;
