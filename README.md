# rollup-plugin-cp

Simple plugin to copy source files to new destination.

## Installation

You can use following npm command to install plugin:

```
npm install --save-dev rollup-plugin-cp
```

## Usage

Add the following lines to your `rollup.config.js`:

```javascript
import cp from 'rollup-plugin-cp';

export default {
    ...
    plugins: [
        cp({
            "src/main.css": "dist/main.css",
            "img/logo.svg": "dist/img/logo.svg",
            ...
        })
        ...
    ]
    ...
}
```
