import path from 'path';
import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.mjs';
import TerserPlugin from 'terser-webpack-plugin';
import webpackCommonProd from './webpack.common.build.mjs';
import { __dirname } from './helpers.mjs';

export default merge(webpackCommon, webpackCommonProd, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
});
