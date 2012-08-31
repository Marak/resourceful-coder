# Resourceful-coder

Converts resourceful resource back into the JavaScript code which created them.

## You should probably not be using this project

### The intended use of this project is for generating documentation code examples.

### If you use this as a scaffolding tool or as some wierd reflection solution I probably won't approve.

# Installation

     npm install resourceful-coder

# Usage

```js
var resourceful = require('resourceful');
var Creature = resourceful.define('creature');
var coder = require('resourceful-coder');
console.log(coder.code(Creature));
```

**See more complete example [here](https://github.com/Marak/resourceful-coder/blob/master/examples/simple.js)**

# Tests

No test suite. Should add basic resource fitness test. Check examples.