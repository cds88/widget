import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.mjs';
import {__dirname} from './helpers.mjs'
import path from 'path';
const WEBPACK_DEVELOPMENT_PORT = 3000;
 
export default merge(webpackCommon, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: WEBPACK_DEVELOPMENT_PORT,
    hot: true,
  },
});
