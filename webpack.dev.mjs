import { merge } from 'webpack-merge';
import webpackCommon from './webpack.common.mjs';
import {__dirname} from './helpers.mjs'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

 
 
export default merge(webpackCommon, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: process.env.WEBPACK_DEVELOPMENT_PORT,
    hot: true,
  },
});
