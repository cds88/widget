import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: './src/index.tsx',
    resolve: {
        extensions: [ '.ts', '.tsx', '.jsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html',
        }),
     
      ],    
    module:{
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
              },
              {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
              },
              {
                test: /\.(css)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
              },
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
              },              
        ]
    }
}