# hotcake

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard)

Bring HMR-like auto refresh functionality without any server (e.g. `websocket`, `socket.io`, etc.) and keep it minimal, simple.

![Demo](https://gist.githubusercontent.com/Xvezda/926edfc7b961c31a17751a8c9f4351b6/raw/hotcake.gif)

## Installation

Add following tag to your html file.

```html
<script src="https://cdn.jsdelivr.net/npm/hotcake"></script>
```

## Usage

After installation, you can explicitly initialize hotcake with options.

```html
<script>
new Hotcake({
    observe: ['./', './app.js'],
    interval: 5000
});
</script>
```

If hotcake not initialized explicitly, it will initialized automatically with default options when window loaded.

## Options

| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| observe | `string[]` | Path of files to observe. | `['./']` |
| interval | `number` | Millisecond value of interval between requests. | `3000` |
