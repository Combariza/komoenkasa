
var path = require('path');

module.exports = {
    entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
 
  
    "env": {
        "es6": true,
        "node": true
    },
    
    "extends": "plugin:vue/essential",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};
