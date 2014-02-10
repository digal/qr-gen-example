// Compiled by ClojureScript 0.0-2156
goog.provide('pay');
goog.require('cljs.core');
goog.require('qr');
goog.require('fields');
goog.require('select');
pay.greet = (function greet(n){return [cljs.core.str("Hello from cljs, "),cljs.core.str(n)].join('');
});
goog.exportSymbol('pay.greet', pay.greet);
pay.init = (function init(){select.init.call(null);
fields.init.call(null);
return qr.init.call(null);
});
window.onload = pay.init;
