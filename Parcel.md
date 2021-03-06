# Parcel

## 1.Parcel bundler κ°λ

### πΆ Bunbler λ?

- λ€μν κΈ°λ₯μ κ°μ§κ³  μλ Package λ₯Ό ν΅ν΄μ μΉμ κ°λ°νλλ° μ μ, μΉ κ΅¬λμλ HTML, CSS, JS λ§ μ¬μ©μ΄ λ©λλ€.

- κ·Έλμ μ€κ°μμ Complie μ ν΄μΌλλλ° Package λ€μ λ¬Άμ΄μ νκΊΌλ²μ Complie μν€λ κ²μ΄ Bunlder μ μ£Όμ νΉμ§μλλ€.

- λ€μν Pacakge (μ: Vue, React, SASS, TS, Barbel λ±) μ ν΅ν΄μ μΉκ°λ° νλλ°, νμν μΈλΆ Complier λ₯Ό bunlder μ λ΄μμ μ°κ²°ν΄μ€μ νλ²μ complie μν΄λλ€.

### Parcel vs Webpack

![33](https://user-images.githubusercontent.com/28912774/118444013-92d56c00-b727-11eb-8d5e-85c19552b5f9.jpg)

## 2.Parcel bunder μ€μΉ

```bash
$ npm init -y # npm μ€μΉ
$ npm i -D parcel-bundler # κ°λ° μμ‘΄μ± parcel-bundler μ€μΉ
# package.json μμ μ€μΉ νμΈ
```

```json
// in package.json
  "scripts": {
    "dev": "parcel index.html", // localhost νκ²½ μ°κ²°
    "build": "parcel build index.html" // μ΅μ’ build νκ²½ μ°κ²°
  },
```

## 3.μ μ  νμΌ μ°κ²°

- μμ νμΌλ‘ [Jacob's Dev](https://jacobkosmart.github.io/) μ favicon μ μ°κ²°ν΄ λ³΄κ² μ΅λλ€.

![jacob's devlog](https://user-images.githubusercontent.com/28912774/118448185-9f0ff800-b72c-11eb-963e-b0cb71c3d068.png)

> PNG to ICO [online ICO converter](https://www.icoconverter.com/)

- Parcel bundler λ‘ complie νλ©΄ dist ν΄λμ complie λ νμΌλ€μ΄ μ μ₯ λλλ°, favicon μ μ§μ  dist ν΄λμ λ£μ΄μ€μ μ°κ²° νλκ²μ κΆμ₯ λμ§ μμ΅λλ€. (μλλ©΄.. dist ν΄λλ complie ν  λλ§λ€ νμΌμ΄ λ³κ²½λλ μμ ν΄λ μ±κ²©μ΄ μκΈ° λλ¬Έμ μλμΌλ‘ λ£μ΄ μ€μ μλ parcel-bundler package λ₯Ό μ¬μ©νλκ²μ΄ κΆμ₯λ¨)

> [parcel-plugin-static-files-copy](https://www.npmjs.com/package/parcel-plugin-static-files-copy)

```bash
# parcel-plugin-static-files-copy μ€μΉ
$ npm install -D parcel-plugin-static-files-copy
```

```json
// in package.json
"staticFiles": {
  "staticPath": "static"
}
```

- root κ²½λ‘μ static ν΄λλ₯Ό μμ±νκ³ , κ·Έμμ favicon.ico νμΌμ λ£μ΄ μ€λλ€.

- `$ npm run dev` νλ©΄ dis ν΄λ κ²½λ‘μ μλμΌλ‘ static ν΄λμ μλ νμΌλ€μ complie μ λ£μ΄ μ€λλ€.

## 4.autoprefixer

### π· Vendor Prefix λ?

- css3μ κΈ°λ₯μ μΉνμ€μ΄ μλμμ΅λλ€. λλ¬Έμ μ΄λ ν μμ±μ μ£Όμμ λμ, λΈλΌμ°μ λ§λ€ μνλ νλ©΄μ μΆλ ₯νλλ° μ νμ μλλ€.

- vender prefix λ μλ‘μ΄ κΈ°λ₯μ λͺ¨λ μ κ³΅ν΄μΌ ν  λ λ³ν ν¨κ³Όλ₯Ό μ μ©νλ μ€νμΌ μνΈ λΌκ³  μ΄ν΄νλκ² λΉ λ₯Ό μ μλ€

![image](https://user-images.githubusercontent.com/28912774/118452817-7b02e580-b731-11eb-8b80-39ba1674fa6a.png)

- CSS μ€νμΌ λΆλΆμ μμ λΆμ΄λ κ²μ κ³΅κΈ μμ²΄ μ λμ¬(Vender Prefix) κ°κ°μ μμ± λΆλΆμ μλμΌλ‘ λΆμ¬μ£Όλ κΈ°λ₯μ΄ autoprefixer μλλ€.

- postcss μ autoprefixer μ€μΉ

```bash
$ npm i -D postcss autoprefixer
```

- **browserslist** μ΅μμ νμ¬ NPM νλ‘μ νΈμμ μ§μν  λΈλΌμ°μ μ λ²μλ₯Ό λͺμνλ μ©λμλλ€. κ·Έ λͺμλ₯Ό Autoprefixer ν¨ν€μ§κ° νμ©νκ² λ©λλ€.

```json
// in package.json
  "browerslist" : [
    "> 1%",  // μ μΈκ³ 1νΌμΌνΈ μ΄μμ λΈλΌμ°μ  μ€μ
    "last 2 versions" // λ§μ§λ§ 2κ° λ²μ  κΉμ§λ μ§μμ νκ² λ€λ μλ―Έ μ
  ]
```

- μ¦, vendor prefixer λ₯Ό κ° λΈλΌμ°μ  κ³΅κΈμμ²΄μ λ²μλ₯Ό μ ν΄μ€μΌ μ¬μ©μ΄ κ°λ₯ν©λλ€.

- root κ²½λ‘μ `.postcssrc.js` λΌλ νμΌμ μμ± ν΄ μ€λλ€. (λ€μ rcλ Runtime Configuration μ μ½μ΄ - λΆμ νμΌμ κ΅¬μ± νμΌμ μλ―Έν©λλ€)

```js
// in .postcssrc.js

// ESM (ECMA modules) μμλ import export λ₯Ό ν΅ν΄μ κ°μ Έμ€κΈ° λ΄λ³΄λ΄κΈ°λ₯Ό ν¨
// node.js μμλ CommonJS λ°©μμ μ¬μ©

// import autoprefixer from 'autoprefixer'

// const autoprefixer = require('autoprefixer')  JS νμΌμ node νκ²½μμ μΈλΆμμ κ°μ Έμ€λ λͺλ Ήμ΄
// λ°λ‘ λ³μλ₯Ό μ¬μ©νμ§ μκ³  μλμ κ°μ΄ λΆμ¬μ μ¬μ©ν  μ μμ

/* export {
  plugins: [
    autoprefixer
  ]
} */

module.exports = {
  // JS νμΌμ node νκ²½μμ μΈλΆμμ λ΄λ³΄λ΄λ λͺλ Ήμ΄
  plugins: [require("autoprefixer")],
};
```

- μμ±νμ `npm run dev` νλ©΄ error λ°μ -> `PostCSS plugin autoprefixer requires PostCSS 8.`

- `postcss` μ `autoprefixer` μ λ²μ μ΄ μλ§μ μΆ©λνλ νμμλλ€. `autoprefixer` μ λ²μ μ `downgrade` ν΄μ `postcss` μ λ§μΆ°μ μ¬μ©ν©λλ€.

```bash
$ npm i -D autoprefixer@9 # 9λ²μ μΌλ‘ λ€μ΄κ·Έλμ΄λ
```

- μμλ‘ μ΅μ  κΈ°μ λ‘ `display:flex;` μ μ©νλ©΄ μλμΌλ‘ vendor prefixer κ° λΆλκ²μ νμΈ ν μ μμ΅λλ€.

## 5.Babel

> [babel official site](https://babeljs.io/)

- Babelμ ECMA Script2015 (EC6) μ΄ν λ²μ μ μ½λλ₯Ό μ΄μ  JS μμ§μμ μ€νν  μ μκ² μ΄μ  λ²μ μΌλ‘ λ³ννλλ° μ£Όλ‘ μ¬μ©λλ JS trans complier μλλ€.

- μ) EC6 μ΄νμμ μ§μλλ arrow function μ babel μ ν΅ν΄μ EC5 μ΄ν λ²μ μμ ν΄μν  μ μκ² function type μΌλ‘ λ³ν λ©λλ€.

![image](https://user-images.githubusercontent.com/28912774/118481297-49e4de00-b74e-11eb-8524-dc65b675e961.png)

### babel μ€μΉ

- babel core, babel preset-env 2κ°μ package μ€μΉ (κ°λ° μμ‘΄μ± λ²μ )

```bash
$ npm i -D @babel/core @babel/preset-env
```

- root κ²½λ‘μ `.babelrc.js` νμΌ μμ± ν©λλ€.

```js
// in .babelrc.js

module.exports = {
  // preset-env module λ΄λ³΄λ΄κΈ°
  presets: ["@babel/preset-env"],
};
```

- μμ μ€μ μ νκ² λλ©΄ μμΌλ‘ μμ±λλ JS νμΌμ ES5λ‘ μλ λ³κ²½λμ΄μ λΈλΌμ°μ μμ λμ νκ² λ©λλ€.

- π λ§μ§λ§ μλ μ μ νμΈμ¬ν­!! : `package.json` μ `browerslist` κ° μΈν λμ΄μμ΄μΌ babel μ΄ μλ ν©λλ€. (`autoprefixer`, `postcss` κ° μ΄λ―Έ μ€μΉ λμ΄ μμ κ²½μ° browerslist κ° μμ±λμ΄ μμΌλ νμΈλ§ νκ³  λμ΄κ°λ λ©λλ€.)

### babel async λΉλκΈ° ν¨μ μ μ©

- bable core κΈ°λ³Έ μ¬ν­λ§μΌλ‘ λΉλκΈ° ν¨μλ μ§μνμ§ μμ΅λλ€. (μΆκ°λ‘ plugin-tansform-runtime)

- μ)

```js
async function test() {
  // EC6 μμ λΆν° μ§μλλ λΉλκΈ° ν¨μ
  const promise = Promise.resolve(123);
  console.log(await promise);
}

test();
```

- λ°νμ μ€λ₯ λ°μ

![image](https://user-images.githubusercontent.com/28912774/118483693-499a1200-b751-11eb-886a-b312d3d0e319.png)

- plugin-tansform-runtime ν¨ν€μ§ μ€μΉ

```bash
$ npm i -D @babel/plugin-transform-runtime
```

```js
// in .babelrc.js μμ module export μΈν

module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [["@babel/plugin-transform-runtime"]],
};
```

- async μ μ μλ νμΈ
  ![image](https://user-images.githubusercontent.com/28912774/118484044-bdd4b580-b751-11eb-8d01-1c663e1ad89f.png)

## 6.CLI

> [Parcel CLI](https://ko.parceljs.org/cli.html) - Command line interface

- μ μ©ν λͺκ°μ§ CLI λͺλ Ήμ΄

  - κ°λ°μ© μλ² λΉλ - `parcel index.html`

  - μ νμ© μμ λΉλ - `parcel build index.html`

  - complie files output λ³κ²½ (default λ dist ν΄λ) - `parcel build entry.js --out-dir build/output`

  - ν¬νΈ λ²νΈ λ³κ²½ (κΈ°λ³Έκ°: 1234) -` parcel serve entry.js --port 1111`

  - λΈλΌμ°μ μμ μ΄κΈ° (complie νκ³ λμ λ°λ‘ λΈλΌμ°μ μμ μ΄μ΄μ νμΈ κ°λ₯ν μ΅μ - default λ λΉνμ± λμ΄ μμ) - `parcel entry.js --open`

  - λΉ λ₯Έ λͺ¨λ κ΅μ²΄ λΉνμ±ν (defalut: HMR νμ± - Hot Module Replacement λ λ°νμμ νμ΄μ§ μλ‘κ³ μΉ¨ μμ΄ μμ λ λ΄μ©μΌ γΉμλμΌλ‘ κ°±μ νλ λ°©μμ λ§ν©λλ€.) - `parcel entry.js --no-hmr`

  - νμΌμμ€ν μΊμ λΉνμ±ν (defalut: μΊμ νμ± - μΊμκ° μ μ₯λμ΄ μμ΄μ load μκ°μ΄ λΉ λ₯΄μ§λ§ κ°λ cash λλ¬Έμ error κ° λ°μλκΈ° λ νκΈ° λλ¬Έμ λΉνμ± μν¬ μ μμ) - `parcel build entry.js --no-cache`

### μ μ© μ) Port number λ³κ²½

```json
// in package.json

  "scripts": {
    "dev": "parcel index.html --port 8800",
    "build": "parcel build index.html"
  },
```

πΆ π· π π

## Reference

- Parcel Official site - [https://parceljs.org/](https://parceljs.org/)

- HERORY Tech - [https://heropy.blog/2018/01/20/parcel-1-start/](https://heropy.blog/2018/01/20/parcel-1-start/)

- nm817 - [css λ²€λ νλ¦¬ν½μ€](<https://nm817.tistory.com/38#:~:text=%EB%B2%A4%EB%8D%94%20%ED%94%84%EB%A6%AC%ED%94%BD%EC%8A%A4(vendor%20prefix)%EB%9E%80%3F&text=%EB%B3%80%ED%99%98%20%ED%9A%A8%EA%B3%BC%EB%A5%BC%20%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94,%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94%EA%B2%8C%20%EB%B9%A0%EB%A5%BC%20%EC%88%98%20%EC%9E%88%EB%8B%A4.&text=%ED%91%9C%EC%A4%80%EC%9C%BC%EB%A1%9C%20%EC%A0%95%EC%9D%98%EB%90%98%EB%A9%B4%EC%84%9C%20vendor,vendor%20prefix%EA%B0%80%20%EC%82%AC%EC%9A%A9%EB%90%9C%EB%8B%A4.>)
