# Mouse Press Counter
[EN-README](./README.md)

[DEMO](https://bm12.github.io/jQ-plugin-mousePressCounter/)

Mouse Press Counter это jQuery плагин для увеличения/уменьшения числа в input'е при нажатии и удержании левой кнопки мыши.

Протестированно в jQuery версии 1.7.0
## Использование
Вы можете просто подключить файл плагина после подключения jQuery:
```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/mousePressCounter.js"></script>
```
И инициализировать плагин одной строкой:
```javascript
$('.wrap_count').mousePressCounter();
```
## Опции
Вы также можете использовать параметры, которые позволят настроить плагин по своему усмотрению или оставить их в значении по умолчанию:
```javascript
$('.wrapper').mousePressCounter({
    inc: '.counter-inc', // элемент для увеличения числа
    dec: '.counter-dec', // элемент для уменьшения числа
    counter:'.counter-input', // input в который будет выводиться число
    min: 0, // минимально возможное число
    max: Infinity, // масимально возможное число
    timeOut: 100, // интервал между увеличением числа
    timeStep: 10 // на сколько уменьшить timeOut после каждых 5 итераций
});
```