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
* button (to use inside a button or anchor tag)
* x-small
* small
* large

### invese [String | Optional]

If set to inverse="inverse" change the spinner to it's invervese color. Default: #ffffff

### wrapperClass [String | Optional]

Adds a class to the spinner's parent

## Styling with Sass

```scss
$loading-bgcolor:    #007bff; //Spinner's main background color
$loading-inverse-bgcolor:    #ffffff; //Spinner's inverse color

$loading-text-color:    #000000; //Text main color
$loading-inverse-text-color:    #ffffff;//Text inverse color
$loading-font-family:   -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; //Text font family

// Spinner sizes
$loading-size-button: 20px; //Button
$loading-font-size-button: 16px; //Button text
$loading-size-xsmall: 30px; //X-small
$loading-font-size-xsmall: 10px; //X-small text
$loading-size-small: 40px; //Small
$loading-font-size-small: 10px; //Small text
$loading-size-medium: 50px; //Medium (Default)
$loading-font-size-medium: 24px; //Medium text
$loading-size-large: 90px; //Large
$loading-font-size-large: 24px; //Large text
```

## License

MIT © [](https://github.com/)
