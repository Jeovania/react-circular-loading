# React Circular Loading

> Loading component for React

[![NPM](https://img.shields.io/npm/v/react-circular-loading.svg)](https://www.npmjs.com/package/react-circular-loading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save react-circular-loading
```

## Usage

```jsx
import Loading from 'react-circular-loading'

//..
<Loading />
//..
```

## API

```jsx
<Loading text={} size={} inverse={} wrapperClass={} />
```

### text [String | Optional]

A status text for the spinner

### size [String | Optional]

Custom sizes of the spinner. They are:

* medium (default)
* button (to use inside <button></button>)
* x-small
* small
* large

### invese [String | Optional]

If set to inverse="inverse" change the spinner to it's invervese color. Default: #ffffff

### wrapperClass [String | Optional]

Adds a class to the spinner's parent

## Styling with Sass

```scss
$loading-bgcolor:    #007bff !default; //Spinner's main background color
$loading-inverse-bgcolor:    #ffffff !default; //Spinner's inverse color

$loading-text-color:    #000000 !default; //Text main color
$loading-inverse-text-color:    #ffffff !default;//Text inverse color
$loading-font-family:   -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default; //Text font family

// Spinner sizes
$loading-size-button: 20px !default; //Button
$loading-font-size-button: 16px !default; //Button text
$loading-size-xsmall: 30px !default; //X-small
$loading-font-size-xsmall: 10px !default; //X-small text
$loading-size-small: 40px !default; //Small
$loading-font-size-small: 10px !default; //Small text
$loading-size-medium: 50px !default; //Medium (Default)
$loading-font-size-medium: 24px !default; //Medium text
$loading-size-large: 90px !default; //Large
$loading-font-size-large: 24px !default; //Large text
```

## License

MIT © [](https://github.com/)
