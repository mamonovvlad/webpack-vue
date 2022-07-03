<div align="center">
  <img width="150" height="150" src="https://webpack.js.org/assets/icon-square-big.svg">
  <h1 style="margin: 0" >Basic configuration of Webpack.</h1>
</div>

## Build Setup:

```bash
# Install dependencies:
npm install

# Start local server:
npm run serve

# Output will be at dist
npm run build
```


## Technologies:
```bash
    "@babel/core": "^7.17.5",
    "@babel/preset-env": "^7.16.11",
    "babel-loader": "^8.2.3",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.5.3",
    "sass": "^1.53.0",
    "css-loader": "^6.6.0",
    "sass-loader": "^8.0.2",
    "vue": "^3.2.31",
    "vue-loader": "^17.0.0",
    "vue-style-loader": "^4.1.3",
    "vue-template-compiler": "^2.6.14",
    "webpack": "^5.69.1",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.7.4",
    "webpack-merge": "^5.8.0"
```
## Project Structure:
```bash
- src
    - assets
        - fonts
        - images
        - js
        - scss
    - components
    - static
    - views
    - index.js
```
- `src/assets/fonts` - put fonts here.
- `src/assets/images` - put images here.
- `src/assets/js` - put JavaScript here. Don't forget to import them in `index.js`.
- `src/assets/scss` - put custom app SCSS styles here. Don't forget to import them in `index.js`.


- `src/components` - folder with custom `.vue` components
- `src/static` - folder with extra static assets that will be copied into output folder
- `src/views` - folder with custom pages `.html`
- `src/index.js` - main app file where you include/import all required libs and init app


