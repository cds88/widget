import { merge } from 'webpack-merge';
import common from './webpack.common.mjs';
import path from 'path';
import webpackCommonProd from './webpack.common.build.mjs';
import {__dirname} from './helpers.mjs'


 

export default merge(common, webpackCommonProd, {
  mode: 'production', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js',  
    library: 'MyLibrary',  
    libraryTarget: 'umd',  
    globalObject: 'this',  
  },
  externals: {   
    react: 'react',
    'react-dom': 'react-dom',
  },
});
