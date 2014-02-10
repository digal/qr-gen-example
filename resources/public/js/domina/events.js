// Compiled by ClojureScript 0.0-2156
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj6046 = {};return obj6046;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.prevent_default[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.prevent_default["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.target[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.target["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.current_target[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.current_target["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.event_type[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.event_type["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3391__auto__ = evt;if(and__3391__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3391__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4030__auto__ = (((evt == null))?null:evt);return (function (){var or__3403__auto__ = (domina.events.raw_event[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.events.raw_event["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t6050 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t6050 = (function (evt,f,create_listener_function,meta6051){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta6051 = meta6051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t6050.cljs$lang$type = true;
domina.events.t6050.cljs$lang$ctorStr = "domina.events/t6050";
domina.events.t6050.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"domina.events/t6050");
});
domina.events.t6050.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t6050.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3403__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return not_found;
}
});
domina.events.t6050.prototype.domina$events$Event$ = true;
domina.events.t6050.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t6050.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t6050.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t6050.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t6050.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t6050.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t6050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6052){var self__ = this;
var _6052__$1 = this;return self__.meta6051;
});
domina.events.t6050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6052,meta6051__$1){var self__ = this;
var _6052__$1 = this;return (new domina.events.t6050(self__.evt,self__.f,self__.create_listener_function,meta6051__$1));
});
domina.events.__GT_t6050 = (function __GT_t6050(evt__$1,f__$1,create_listener_function__$1,meta6051){return (new domina.events.t6050(evt__$1,f__$1,create_listener_function__$1,meta6051));
});
}
return (new domina.events.t6050(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4120__auto__ = (function iter__6057(s__6058){return (new cljs.core.LazySeq(null,(function (){var s__6058__$1 = s__6058;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6058__$1);if(temp__4092__auto__)
{var s__6058__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6058__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__6058__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__6060 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__6059 = 0;while(true){
if((i__6059 < size__4119__auto__))
{var node = cljs.core._nth.call(null,c__4118__auto__,i__6059);cljs.core.chunk_append.call(null,b__6060,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__6061 = (i__6059 + 1);
i__6059 = G__6061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6060),iter__6057.call(null,cljs.core.chunk_rest.call(null,s__6058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6060),null);
}
} else
{var node = cljs.core.first.call(null,s__6058__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__6057.call(null,cljs.core.rest.call(null,s__6058__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__6070 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6071 = null;var count__6072 = 0;var i__6073 = 0;while(true){
if((i__6073 < count__6072))
{var node = cljs.core._nth.call(null,chunk__6071,i__6073);goog.events.removeAll(node);
{
var G__6078 = seq__6070;
var G__6079 = chunk__6071;
var G__6080 = count__6072;
var G__6081 = (i__6073 + 1);
seq__6070 = G__6078;
chunk__6071 = G__6079;
count__6072 = G__6080;
i__6073 = G__6081;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6070);if(temp__4092__auto__)
{var seq__6070__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6070__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__6070__$1);{
var G__6082 = cljs.core.chunk_rest.call(null,seq__6070__$1);
var G__6083 = c__4151__auto__;
var G__6084 = cljs.core.count.call(null,c__4151__auto__);
var G__6085 = 0;
seq__6070 = G__6082;
chunk__6071 = G__6083;
count__6072 = G__6084;
i__6073 = G__6085;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6070__$1);goog.events.removeAll(node);
{
var G__6086 = cljs.core.next.call(null,seq__6070__$1);
var G__6087 = null;
var G__6088 = 0;
var G__6089 = 0;
seq__6070 = G__6086;
chunk__6071 = G__6087;
count__6072 = G__6088;
i__6073 = G__6089;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__6074 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6075 = null;var count__6076 = 0;var i__6077 = 0;while(true){
if((i__6077 < count__6076))
{var node = cljs.core._nth.call(null,chunk__6075,i__6077);goog.events.removeAll(node,type__$1);
{
var G__6090 = seq__6074;
var G__6091 = chunk__6075;
var G__6092 = count__6076;
var G__6093 = (i__6077 + 1);
seq__6074 = G__6090;
chunk__6075 = G__6091;
count__6076 = G__6092;
i__6077 = G__6093;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6074);if(temp__4092__auto__)
{var seq__6074__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6074__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__6074__$1);{
var G__6094 = cljs.core.chunk_rest.call(null,seq__6074__$1);
var G__6095 = c__4151__auto__;
var G__6096 = cljs.core.count.call(null,c__4151__auto__);
var G__6097 = 0;
seq__6074 = G__6094;
chunk__6075 = G__6095;
count__6076 = G__6096;
i__6077 = G__6097;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6074__$1);goog.events.removeAll(node,type__$1);
{
var G__6098 = cljs.core.next.call(null,seq__6074__$1);
var G__6099 = null;
var G__6100 = 0;
var G__6101 = 0;
seq__6074 = G__6098;
chunk__6075 = G__6099;
count__6076 = G__6100;
i__6077 = G__6101;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__6102 = parent;
var G__6103 = cljs.core.cons.call(null,parent,so_far);
n = G__6102;
so_far = G__6103;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__6112_6120 = cljs.core.seq.call(null,ancestors);var chunk__6113_6121 = null;var count__6114_6122 = 0;var i__6115_6123 = 0;while(true){
if((i__6115_6123 < count__6114_6122))
{var n_6124 = cljs.core._nth.call(null,chunk__6113_6121,i__6115_6123);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6124;
goog.events.fireListeners(n_6124,evt.type,true,evt);
}
{
var G__6125 = seq__6112_6120;
var G__6126 = chunk__6113_6121;
var G__6127 = count__6114_6122;
var G__6128 = (i__6115_6123 + 1);
seq__6112_6120 = G__6125;
chunk__6113_6121 = G__6126;
count__6114_6122 = G__6127;
i__6115_6123 = G__6128;
continue;
}
} else
{var temp__4092__auto___6129 = cljs.core.seq.call(null,seq__6112_6120);if(temp__4092__auto___6129)
{var seq__6112_6130__$1 = temp__4092__auto___6129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6112_6130__$1))
{var c__4151__auto___6131 = cljs.core.chunk_first.call(null,seq__6112_6130__$1);{
var G__6132 = cljs.core.chunk_rest.call(null,seq__6112_6130__$1);
var G__6133 = c__4151__auto___6131;
var G__6134 = cljs.core.count.call(null,c__4151__auto___6131);
var G__6135 = 0;
seq__6112_6120 = G__6132;
chunk__6113_6121 = G__6133;
count__6114_6122 = G__6134;
i__6115_6123 = G__6135;
continue;
}
} else
{var n_6136 = cljs.core.first.call(null,seq__6112_6130__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6136;
goog.events.fireListeners(n_6136,evt.type,true,evt);
}
{
var G__6137 = cljs.core.next.call(null,seq__6112_6130__$1);
var G__6138 = null;
var G__6139 = 0;
var G__6140 = 0;
seq__6112_6120 = G__6137;
chunk__6113_6121 = G__6138;
count__6114_6122 = G__6139;
i__6115_6123 = G__6140;
continue;
}
}
} else
{}
}
break;
}
var seq__6116_6141 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__6117_6142 = null;var count__6118_6143 = 0;var i__6119_6144 = 0;while(true){
if((i__6119_6144 < count__6118_6143))
{var n_6145 = cljs.core._nth.call(null,chunk__6117_6142,i__6119_6144);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6145;
goog.events.fireListeners(n_6145,evt.type,false,evt);
}
{
var G__6146 = seq__6116_6141;
var G__6147 = chunk__6117_6142;
var G__6148 = count__6118_6143;
var G__6149 = (i__6119_6144 + 1);
seq__6116_6141 = G__6146;
chunk__6117_6142 = G__6147;
count__6118_6143 = G__6148;
i__6119_6144 = G__6149;
continue;
}
} else
{var temp__4092__auto___6150 = cljs.core.seq.call(null,seq__6116_6141);if(temp__4092__auto___6150)
{var seq__6116_6151__$1 = temp__4092__auto___6150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6116_6151__$1))
{var c__4151__auto___6152 = cljs.core.chunk_first.call(null,seq__6116_6151__$1);{
var G__6153 = cljs.core.chunk_rest.call(null,seq__6116_6151__$1);
var G__6154 = c__4151__auto___6152;
var G__6155 = cljs.core.count.call(null,c__4151__auto___6152);
var G__6156 = 0;
seq__6116_6141 = G__6153;
chunk__6117_6142 = G__6154;
count__6118_6143 = G__6155;
i__6119_6144 = G__6156;
continue;
}
} else
{var n_6157 = cljs.core.first.call(null,seq__6116_6151__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6157;
goog.events.fireListeners(n_6157,evt.type,false,evt);
}
{
var G__6158 = cljs.core.next.call(null,seq__6116_6151__$1);
var G__6159 = null;
var G__6160 = 0;
var G__6161 = 0;
seq__6116_6141 = G__6158;
chunk__6117_6142 = G__6159;
count__6118_6143 = G__6160;
i__6119_6144 = G__6161;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3391__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3391__auto__))
{return o.dispatchEvent;
} else
{return and__3391__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__6168_6174 = cljs.core.seq.call(null,evt_map);var chunk__6169_6175 = null;var count__6170_6176 = 0;var i__6171_6177 = 0;while(true){
if((i__6171_6177 < count__6170_6176))
{var vec__6172_6178 = cljs.core._nth.call(null,chunk__6169_6175,i__6171_6177);var k_6179 = cljs.core.nth.call(null,vec__6172_6178,0,null);var v_6180 = cljs.core.nth.call(null,vec__6172_6178,1,null);(evt[k_6179] = v_6180);
{
var G__6181 = seq__6168_6174;
var G__6182 = chunk__6169_6175;
var G__6183 = count__6170_6176;
var G__6184 = (i__6171_6177 + 1);
seq__6168_6174 = G__6181;
chunk__6169_6175 = G__6182;
count__6170_6176 = G__6183;
i__6171_6177 = G__6184;
continue;
}
} else
{var temp__4092__auto___6185 = cljs.core.seq.call(null,seq__6168_6174);if(temp__4092__auto___6185)
{var seq__6168_6186__$1 = temp__4092__auto___6185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6168_6186__$1))
{var c__4151__auto___6187 = cljs.core.chunk_first.call(null,seq__6168_6186__$1);{
var G__6188 = cljs.core.chunk_rest.call(null,seq__6168_6186__$1);
var G__6189 = c__4151__auto___6187;
var G__6190 = cljs.core.count.call(null,c__4151__auto___6187);
var G__6191 = 0;
seq__6168_6174 = G__6188;
chunk__6169_6175 = G__6189;
count__6170_6176 = G__6190;
i__6171_6177 = G__6191;
continue;
}
} else
{var vec__6173_6192 = cljs.core.first.call(null,seq__6168_6186__$1);var k_6193 = cljs.core.nth.call(null,vec__6173_6192,0,null);var v_6194 = cljs.core.nth.call(null,vec__6173_6192,1,null);(evt[k_6193] = v_6194);
{
var G__6195 = cljs.core.next.call(null,seq__6168_6186__$1);
var G__6196 = null;
var G__6197 = 0;
var G__6198 = 0;
seq__6168_6174 = G__6195;
chunk__6169_6175 = G__6196;
count__6170_6176 = G__6197;
i__6171_6177 = G__6198;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__6199_SHARP_){return goog.events.getListeners(p1__6199_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
