# Fadable
Fade in elements as they move into view, at both the bottom and top of the viewport.

## Demo
https://theoutfit-fadable.netlify.app/

## How to Implement
1. Install it: `npm i @theoutfit/fadable --save`
2. Call it: `fadable()`
3. Class it: add a class of `fadable` to any element

## Configuration
Property | Type | Default | Description
-------- | ---- | ------- | -----------
`initialScale` | number | 0.95 | Initial scale (from 0 - 1)
`transitionDuration` | number | 0.75 | Transition speed (in seconds)
`edgeDistance` | number | 40 | Distance from viewport edges, when transition runs (in pixels)

## License
Fadable is available under the [MIT license](https://github.com/fromtheoutfit/fadable/blob/master/LICENSE).