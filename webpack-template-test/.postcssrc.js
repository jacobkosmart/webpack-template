// ESM (ECMA modules) 에서는 import export 를 통해서 가져오기 내보내기를 함
// node.js 에서는 CommonJS 방식을 사용


// import autoprefixer from 'autoprefixer'

// const autoprefixer = require('autoprefixer')  JS 파일을 node 환경에서 외부에서 가져오는 명령어
// 따로 변수를 사용하지 않고 아래와 같이 붙여서 사용할 수 있음

/* export {
  plugins: [
    autoprefixer
  ]
} */

module.exports = { // JS 파일을 node 환경에서 외부에서 내보내는 명령어
  plugins: [
    require('autoprefixer')
  ]
};