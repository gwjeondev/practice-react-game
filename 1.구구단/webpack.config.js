const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    //entry 확장자(webpack이 찾을 entry.app 배열의 파일들의 확장자를 설정.)
    extensions: ['.js', '.jsx'],
  },
  entry: {
    //entry 파일(파일 내에서 import되는 모든 파일을 다 webpack이 찾아서 처리하므로 여러 파일명을 명시할 필요가 없다.)
    app: ['./client'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['>1% in KR'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    //출력 경로
    path: path.join(__dirname, 'dist'), //__dirname은 현재 디렉토리 경로를 의미한다. D://react-webgame/lecture
    filename: 'app.js',
  },
}
