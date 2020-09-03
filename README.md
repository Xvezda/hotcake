# hotcake

[![Version](https://img.shields.io/npm/v/hotcake)](https://npm.im/hotcake)
[![License](https://img.shields.io/npm/l/hotcake)](https://npm.im/hotcake)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard)

Bring HMR-like auto refresh functionality without any server (e.g. `websocket`, `socket.io`, etc.) and keep it minimal, simple.

![Demo](https://gist.githubusercontent.com/Xvezda/926edfc7b961c31a17751a8c9f4351b6/raw/hotcake.gif)

## Installation

Add following tag to your html file.

```html
<script src="https://cdn.jsdelivr.net/npm/hotcake"></script>
```

Or Via GitHub. (Not recommended)

```html
<script src="https://raw.githack.com/Xvezda/hotcake/master/hotcake.js"></script>
```

Or even with npm... (Also not recommended)

```sh
npm install --save-dev hotcake
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

If hotcake not initialized explicitly, it will automatically initialize with default options when window loaded.

## Options

| name     | type       | description                                     | default  |
| -------- | ---------- | ----------------------------------------------- | -------  |
| observe  | `string[]` | Path of files to observe.                       | `['./']` |
| interval | `number`   | Millisecond value of interval between requests. | `3000`   |

## License

Copyright (C) 2020 Xvezda

[MIT License](LICENSE)
