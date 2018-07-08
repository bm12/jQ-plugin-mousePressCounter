# Mouse Press Counter
[RU-README](./README-ru.md)

[DEMO](https://bm12.github.io/jQ-plugin-mousePressCounter/)

Mouse Press Counter is a jQuery plugin to increase / decrease the number in the input when you press and hold the left mouse button.

Tested with jQuery versions 1.7.0
## Usage
You can simply include the plugin file after jQuery:
```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/mousePressCounter.js"></script>
```
and init Mouse Press Counter with one line:
```javascript
$('.wrap_count').mousePressCounter();
```
## Options
You're also able to use some of the options that let you customize it as you wish or keep them in the default value:
```javascript
$('.wrapper').mousePressCounter({
    inc: '.counter-inc', // element for increasing the number
    dec: '.counter-dec', // element for decreasing the number
    counter:'.counter-input', // input to which the number will be output
    min: 0, // min number value
    max: Infinity, // max number value
    timeOut: 100, // interval between increasing number
    timeStep: 10 // how much to decrease the timeOut after every 5 iterations
});
```