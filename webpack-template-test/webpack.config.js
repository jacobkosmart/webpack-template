// import path
const path = require('path') // node.js 에서 기본적으로 제공하는 전역 module 인 path

// import html-webpack-plugin
const HtmlPlugin = require('html-webpack-plugin')


// import copy-webpack-plugin
const CopyPlugin = require('copy-webpack-plugin')

// export

module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정(webpack 이 어디에서부터 파일을 불러들어 읽을 수 있는지를 설정하기)
  entry: './js/main.js',

  // 결과물 (번들)을 반환하는 설정
  output: {
    // path 는 complie 해서 저장되는 파일의 위치 지정 (단!! node.js 에서 필요한 절대 경로를 넣어 줘야 함)
    path: path.resolve(__dirname, 'dist'), // .resolve(a,b) 는  a 와 b를 합쳐주는 method, __dirname 은 현재 파일위치의 경로를 가리킴 (즉 webpack.config.js 가 root 경로에 있으니까 root 를 가리킨다고 보면 됨) 에다가 'dist' 라는 파일에 
    filename: 'main.js', // dist 폴더에 생성되는 파일 이름, entry 에서 들어오는 파일과 동일 이름 지정
    clean: true // 만약 filename 을 변경하면 이전에 build 했었던 file은 자동으로 지워 지는 옵션
  },

  module: {
    rules: [{
        test: /\.s?css$/, // 확장자명 .scss 로 끝나는 전체 파일을 대상으로함, 근데 정규식 ? 을 사용하여, s가 있어도 되는경우, 없어도 되는 경우를 다 설정해줘야됨 (왜냐면 .css 파일도 있을수 있으니까..)
        use: [ // 순서가 중요 (읽는 순서는 역순임..) style-loader 담에 css-loader 
          'style-loader', // 4번: css-loader 에서 해석된 내용을 index.html 에 삽입을 해주는 package
          'css-loader', // 3번: JS에서 CSS 를 읽을 수 있게 하는 package 
          'postcss-loader', // 2번: postcss loader
          'sass-loader' // 1번: css-loader 가 실행되기 전에 sass-loader 실행 package
        ]
      },
      {
        test: /\.js$/, // 확장자명 .js 로 끝나는 전체파일 대상으로
        use: [
          'babel-loader' // webpack에서 babel 을 해석하기 위한 loader package 연결
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [ // plugin 을 배열 데이터에
    new HtmlPlugin({ // htmlPlugin 을 생성자 함수로 실행 (index0 의 array data 로 return 되는것)
      template: './index.html' // template 으로 index.html 지정
    }),
    new CopyPlugin({ // build 시, static 폴더에 있는 파일들이 dist 폴더로 copy 되서 들어가게 해주는 플러그인
      patterns: [{
        from: 'static' // root 경로에 만들어 놓은 폴더 명
      }]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}