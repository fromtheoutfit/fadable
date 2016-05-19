# Fadable
Fade in elements as they move into view.

![Fadable in action](https://thumbs.gfycat.com/SomberIllfatedDegus-size_restricted.gif)

## Demo
http://fromtheoutfit.github.io/fadable/html/

## How to Implement
1. Add a class of `.fadable` to any element that should fade in.
2. Add [this CSS](https://github.com/fromtheoutfit/fadable/blob/master/html/styles.css#L1-L9) to your stylesheet.
3. Import [the Fadable JavaScript](https://github.com/fromtheoutfit/fadable/blob/master/html/fadable.js) at the bottom of your web page(s), like so: `<script src="/path/to/fadable.js"></script>`.

## Options / Adjustments
**Fade in Point:** to change the point at which Fadable elements start to fade in after they pass the browser’s bottom edge, open [fadable.js](https://github.com/fromtheoutfit/fadable/blob/master/html/fadable.js#L3) and adjust the value assigned to `fadeDistance`. The default is `200` pixels.

**Fade in Speed:** to change the speed at which Fadable elements fade in, find the `transition-duration` property in the `.fadable` [CSS](https://github.com/fromtheoutfit/fadable/blob/master/html/styles.css#L4) and adjust it as you see fit. The default is `500ms` (milliseconds).

## Browser Support
* Internet Explorer 10+
* Edge 12+
* Firefox 6+
* Chrome 15+
* Safari 5.1+
* Opera 11.6+
* iOS Safari 5.1+
* Android Browser 4+
* IE Mobile 11+
