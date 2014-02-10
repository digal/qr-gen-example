// Compiled by ClojureScript 0.0-2156
goog.provide('qr');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('domina');
goog.require('fields');
goog.require('select');
goog.require('domina.events');
goog.require('domina');
qr.generate_qr_BANG_ = (function generate_qr_BANG_(){return domina.set_attr_BANG_.call(null,domina.by_id.call(null,"qr-img"),"src",[cljs.core.str("qr?text="),cljs.core.str(select.provider_string.call(null)),cljs.core.str(fields.fields_string.call(null))].join(''));
});
qr.init = (function init(){return domina.events.listen_BANG_.call(null,domina.by_id.call(null,"qr-generate"),new cljs.core.Keyword(null,"click","click",1108654330),qr.generate_qr_BANG_);
});
