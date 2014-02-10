// Compiled by ClojureScript 0.0-2156
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_6200 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_6201 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_6202 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_6201,table_section_wrapper_6201,opt_wrapper_6200,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_6202,table_section_wrapper_6201,cell_wrapper_6202,opt_wrapper_6200,table_section_wrapper_6201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_6201]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3391__auto__ = div.firstChild;if(cljs.core.truth_(and__3391__auto__))
{return div.firstChild.childNodes;
} else
{return and__3391__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__6207 = cljs.core.seq.call(null,tbody);var chunk__6208 = null;var count__6209 = 0;var i__6210 = 0;while(true){
if((i__6210 < count__6209))
{var child = cljs.core._nth.call(null,chunk__6208,i__6210);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6211 = seq__6207;
var G__6212 = chunk__6208;
var G__6213 = count__6209;
var G__6214 = (i__6210 + 1);
seq__6207 = G__6211;
chunk__6208 = G__6212;
count__6209 = G__6213;
i__6210 = G__6214;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6207);if(temp__4092__auto__)
{var seq__6207__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6207__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__6207__$1);{
var G__6215 = cljs.core.chunk_rest.call(null,seq__6207__$1);
var G__6216 = c__4151__auto__;
var G__6217 = cljs.core.count.call(null,c__4151__auto__);
var G__6218 = 0;
seq__6207 = G__6215;
chunk__6208 = G__6216;
count__6209 = G__6217;
i__6210 = G__6218;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__6207__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6219 = cljs.core.next.call(null,seq__6207__$1);
var G__6220 = null;
var G__6221 = 0;
var G__6222 = 0;
seq__6207 = G__6219;
chunk__6208 = G__6220;
count__6209 = G__6221;
i__6210 = G__6222;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__6224 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__6224,0,null);var start_wrap = cljs.core.nth.call(null,vec__6224,1,null);var end_wrap = cljs.core.nth.call(null,vec__6224,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__6225 = wrapper.lastChild;
var G__6226 = (level - 1);
wrapper = G__6225;
level = G__6226;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3391__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3391__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj6228 = {};return obj6228;
})();
domina.nodes = (function nodes(content){if((function (){var and__3391__auto__ = content;if(and__3391__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3391__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4030__auto__ = (((content == null))?null:content);return (function (){var or__3403__auto__ = (domina.nodes[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.nodes["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3391__auto__ = nodeseq;if(and__3391__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3391__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4030__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3403__auto__ = (domina.single_node[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (domina.single_node["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3391__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3391__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3391__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__6229){
var mesg = cljs.core.seq(arglist__6229);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6230){
var mesg = cljs.core.seq(arglist__6230);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__6231){
var contents = cljs.core.seq(arglist__6231);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__6232_SHARP_){return p1__6232_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__6233_SHARP_,p2__6234_SHARP_){return goog.dom.insertChildAt(p1__6233_SHARP_,p2__6234_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6236_SHARP_,p2__6235_SHARP_){return goog.dom.insertSiblingBefore(p2__6235_SHARP_,p1__6236_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6238_SHARP_,p2__6237_SHARP_){return goog.dom.insertSiblingAfter(p2__6237_SHARP_,p1__6238_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__6240_SHARP_,p2__6239_SHARP_){return goog.dom.replaceNode(p2__6239_SHARP_,p1__6240_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__6245_6249 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6246_6250 = null;var count__6247_6251 = 0;var i__6248_6252 = 0;while(true){
if((i__6248_6252 < count__6247_6251))
{var n_6253 = cljs.core._nth.call(null,chunk__6246_6250,i__6248_6252);goog.style.setStyle(n_6253,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6254 = seq__6245_6249;
var G__6255 = chunk__6246_6250;
var G__6256 = count__6247_6251;
var G__6257 = (i__6248_6252 + 1);
seq__6245_6249 = G__6254;
chunk__6246_6250 = G__6255;
count__6247_6251 = G__6256;
i__6248_6252 = G__6257;
continue;
}
} else
{var temp__4092__auto___6258 = cljs.core.seq.call(null,seq__6245_6249);if(temp__4092__auto___6258)
{var seq__6245_6259__$1 = temp__4092__auto___6258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6245_6259__$1))
{var c__4151__auto___6260 = cljs.core.chunk_first.call(null,seq__6245_6259__$1);{
var G__6261 = cljs.core.chunk_rest.call(null,seq__6245_6259__$1);
var G__6262 = c__4151__auto___6260;
var G__6263 = cljs.core.count.call(null,c__4151__auto___6260);
var G__6264 = 0;
seq__6245_6249 = G__6261;
chunk__6246_6250 = G__6262;
count__6247_6251 = G__6263;
i__6248_6252 = G__6264;
continue;
}
} else
{var n_6265 = cljs.core.first.call(null,seq__6245_6259__$1);goog.style.setStyle(n_6265,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6266 = cljs.core.next.call(null,seq__6245_6259__$1);
var G__6267 = null;
var G__6268 = 0;
var G__6269 = 0;
seq__6245_6249 = G__6266;
chunk__6246_6250 = G__6267;
count__6247_6251 = G__6268;
i__6248_6252 = G__6269;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6270){
var content = cljs.core.first(arglist__6270);
arglist__6270 = cljs.core.next(arglist__6270);
var name = cljs.core.first(arglist__6270);
var value = cljs.core.rest(arglist__6270);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__6275_6279 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6276_6280 = null;var count__6277_6281 = 0;var i__6278_6282 = 0;while(true){
if((i__6278_6282 < count__6277_6281))
{var n_6283 = cljs.core._nth.call(null,chunk__6276_6280,i__6278_6282);n_6283.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6284 = seq__6275_6279;
var G__6285 = chunk__6276_6280;
var G__6286 = count__6277_6281;
var G__6287 = (i__6278_6282 + 1);
seq__6275_6279 = G__6284;
chunk__6276_6280 = G__6285;
count__6277_6281 = G__6286;
i__6278_6282 = G__6287;
continue;
}
} else
{var temp__4092__auto___6288 = cljs.core.seq.call(null,seq__6275_6279);if(temp__4092__auto___6288)
{var seq__6275_6289__$1 = temp__4092__auto___6288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6275_6289__$1))
{var c__4151__auto___6290 = cljs.core.chunk_first.call(null,seq__6275_6289__$1);{
var G__6291 = cljs.core.chunk_rest.call(null,seq__6275_6289__$1);
var G__6292 = c__4151__auto___6290;
var G__6293 = cljs.core.count.call(null,c__4151__auto___6290);
var G__6294 = 0;
seq__6275_6279 = G__6291;
chunk__6276_6280 = G__6292;
count__6277_6281 = G__6293;
i__6278_6282 = G__6294;
continue;
}
} else
{var n_6295 = cljs.core.first.call(null,seq__6275_6289__$1);n_6295.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6296 = cljs.core.next.call(null,seq__6275_6289__$1);
var G__6297 = null;
var G__6298 = 0;
var G__6299 = 0;
seq__6275_6279 = G__6296;
chunk__6276_6280 = G__6297;
count__6277_6281 = G__6298;
i__6278_6282 = G__6299;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__6300){
var content = cljs.core.first(arglist__6300);
arglist__6300 = cljs.core.next(arglist__6300);
var name = cljs.core.first(arglist__6300);
var value = cljs.core.rest(arglist__6300);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__6305_6309 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6306_6310 = null;var count__6307_6311 = 0;var i__6308_6312 = 0;while(true){
if((i__6308_6312 < count__6307_6311))
{var n_6313 = cljs.core._nth.call(null,chunk__6306_6310,i__6308_6312);n_6313.removeAttribute(cljs.core.name.call(null,name));
{
var G__6314 = seq__6305_6309;
var G__6315 = chunk__6306_6310;
var G__6316 = count__6307_6311;
var G__6317 = (i__6308_6312 + 1);
seq__6305_6309 = G__6314;
chunk__6306_6310 = G__6315;
count__6307_6311 = G__6316;
i__6308_6312 = G__6317;
continue;
}
} else
{var temp__4092__auto___6318 = cljs.core.seq.call(null,seq__6305_6309);if(temp__4092__auto___6318)
{var seq__6305_6319__$1 = temp__4092__auto___6318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6305_6319__$1))
{var c__4151__auto___6320 = cljs.core.chunk_first.call(null,seq__6305_6319__$1);{
var G__6321 = cljs.core.chunk_rest.call(null,seq__6305_6319__$1);
var G__6322 = c__4151__auto___6320;
var G__6323 = cljs.core.count.call(null,c__4151__auto___6320);
var G__6324 = 0;
seq__6305_6309 = G__6321;
chunk__6306_6310 = G__6322;
count__6307_6311 = G__6323;
i__6308_6312 = G__6324;
continue;
}
} else
{var n_6325 = cljs.core.first.call(null,seq__6305_6319__$1);n_6325.removeAttribute(cljs.core.name.call(null,name));
{
var G__6326 = cljs.core.next.call(null,seq__6305_6319__$1);
var G__6327 = null;
var G__6328 = 0;
var G__6329 = 0;
seq__6305_6309 = G__6326;
chunk__6306_6310 = G__6327;
count__6307_6311 = G__6328;
i__6308_6312 = G__6329;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__6331 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__6331,0,null);var v = cljs.core.nth.call(null,vec__6331,1,null);if(cljs.core.truth_((function (){var and__3391__auto__ = k;if(cljs.core.truth_(and__3391__auto__))
{return v;
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__6332_SHARP_){var attr = attrs__$1.item(p1__6332_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__6339_6345 = cljs.core.seq.call(null,styles);var chunk__6340_6346 = null;var count__6341_6347 = 0;var i__6342_6348 = 0;while(true){
if((i__6342_6348 < count__6341_6347))
{var vec__6343_6349 = cljs.core._nth.call(null,chunk__6340_6346,i__6342_6348);var name_6350 = cljs.core.nth.call(null,vec__6343_6349,0,null);var value_6351 = cljs.core.nth.call(null,vec__6343_6349,1,null);domina.set_style_BANG_.call(null,content,name_6350,value_6351);
{
var G__6352 = seq__6339_6345;
var G__6353 = chunk__6340_6346;
var G__6354 = count__6341_6347;
var G__6355 = (i__6342_6348 + 1);
seq__6339_6345 = G__6352;
chunk__6340_6346 = G__6353;
count__6341_6347 = G__6354;
i__6342_6348 = G__6355;
continue;
}
} else
{var temp__4092__auto___6356 = cljs.core.seq.call(null,seq__6339_6345);if(temp__4092__auto___6356)
{var seq__6339_6357__$1 = temp__4092__auto___6356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6339_6357__$1))
{var c__4151__auto___6358 = cljs.core.chunk_first.call(null,seq__6339_6357__$1);{
var G__6359 = cljs.core.chunk_rest.call(null,seq__6339_6357__$1);
var G__6360 = c__4151__auto___6358;
var G__6361 = cljs.core.count.call(null,c__4151__auto___6358);
var G__6362 = 0;
seq__6339_6345 = G__6359;
chunk__6340_6346 = G__6360;
count__6341_6347 = G__6361;
i__6342_6348 = G__6362;
continue;
}
} else
{var vec__6344_6363 = cljs.core.first.call(null,seq__6339_6357__$1);var name_6364 = cljs.core.nth.call(null,vec__6344_6363,0,null);var value_6365 = cljs.core.nth.call(null,vec__6344_6363,1,null);domina.set_style_BANG_.call(null,content,name_6364,value_6365);
{
var G__6366 = cljs.core.next.call(null,seq__6339_6357__$1);
var G__6367 = null;
var G__6368 = 0;
var G__6369 = 0;
seq__6339_6345 = G__6366;
chunk__6340_6346 = G__6367;
count__6341_6347 = G__6368;
i__6342_6348 = G__6369;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__6376_6382 = cljs.core.seq.call(null,attrs);var chunk__6377_6383 = null;var count__6378_6384 = 0;var i__6379_6385 = 0;while(true){
if((i__6379_6385 < count__6378_6384))
{var vec__6380_6386 = cljs.core._nth.call(null,chunk__6377_6383,i__6379_6385);var name_6387 = cljs.core.nth.call(null,vec__6380_6386,0,null);var value_6388 = cljs.core.nth.call(null,vec__6380_6386,1,null);domina.set_attr_BANG_.call(null,content,name_6387,value_6388);
{
var G__6389 = seq__6376_6382;
var G__6390 = chunk__6377_6383;
var G__6391 = count__6378_6384;
var G__6392 = (i__6379_6385 + 1);
seq__6376_6382 = G__6389;
chunk__6377_6383 = G__6390;
count__6378_6384 = G__6391;
i__6379_6385 = G__6392;
continue;
}
} else
{var temp__4092__auto___6393 = cljs.core.seq.call(null,seq__6376_6382);if(temp__4092__auto___6393)
{var seq__6376_6394__$1 = temp__4092__auto___6393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6376_6394__$1))
{var c__4151__auto___6395 = cljs.core.chunk_first.call(null,seq__6376_6394__$1);{
var G__6396 = cljs.core.chunk_rest.call(null,seq__6376_6394__$1);
var G__6397 = c__4151__auto___6395;
var G__6398 = cljs.core.count.call(null,c__4151__auto___6395);
var G__6399 = 0;
seq__6376_6382 = G__6396;
chunk__6377_6383 = G__6397;
count__6378_6384 = G__6398;
i__6379_6385 = G__6399;
continue;
}
} else
{var vec__6381_6400 = cljs.core.first.call(null,seq__6376_6394__$1);var name_6401 = cljs.core.nth.call(null,vec__6381_6400,0,null);var value_6402 = cljs.core.nth.call(null,vec__6381_6400,1,null);domina.set_attr_BANG_.call(null,content,name_6401,value_6402);
{
var G__6403 = cljs.core.next.call(null,seq__6376_6394__$1);
var G__6404 = null;
var G__6405 = 0;
var G__6406 = 0;
seq__6376_6382 = G__6403;
chunk__6377_6383 = G__6404;
count__6378_6384 = G__6405;
i__6379_6385 = G__6406;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__6411_6415 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6412_6416 = null;var count__6413_6417 = 0;var i__6414_6418 = 0;while(true){
if((i__6414_6418 < count__6413_6417))
{var node_6419 = cljs.core._nth.call(null,chunk__6412_6416,i__6414_6418);goog.dom.classes.add(node_6419,class$);
{
var G__6420 = seq__6411_6415;
var G__6421 = chunk__6412_6416;
var G__6422 = count__6413_6417;
var G__6423 = (i__6414_6418 + 1);
seq__6411_6415 = G__6420;
chunk__6412_6416 = G__6421;
count__6413_6417 = G__6422;
i__6414_6418 = G__6423;
continue;
}
} else
{var temp__4092__auto___6424 = cljs.core.seq.call(null,seq__6411_6415);if(temp__4092__auto___6424)
{var seq__6411_6425__$1 = temp__4092__auto___6424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6411_6425__$1))
{var c__4151__auto___6426 = cljs.core.chunk_first.call(null,seq__6411_6425__$1);{
var G__6427 = cljs.core.chunk_rest.call(null,seq__6411_6425__$1);
var G__6428 = c__4151__auto___6426;
var G__6429 = cljs.core.count.call(null,c__4151__auto___6426);
var G__6430 = 0;
seq__6411_6415 = G__6427;
chunk__6412_6416 = G__6428;
count__6413_6417 = G__6429;
i__6414_6418 = G__6430;
continue;
}
} else
{var node_6431 = cljs.core.first.call(null,seq__6411_6425__$1);goog.dom.classes.add(node_6431,class$);
{
var G__6432 = cljs.core.next.call(null,seq__6411_6425__$1);
var G__6433 = null;
var G__6434 = 0;
var G__6435 = 0;
seq__6411_6415 = G__6432;
chunk__6412_6416 = G__6433;
count__6413_6417 = G__6434;
i__6414_6418 = G__6435;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__6440_6444 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6441_6445 = null;var count__6442_6446 = 0;var i__6443_6447 = 0;while(true){
if((i__6443_6447 < count__6442_6446))
{var node_6448 = cljs.core._nth.call(null,chunk__6441_6445,i__6443_6447);goog.dom.classes.remove(node_6448,class$);
{
var G__6449 = seq__6440_6444;
var G__6450 = chunk__6441_6445;
var G__6451 = count__6442_6446;
var G__6452 = (i__6443_6447 + 1);
seq__6440_6444 = G__6449;
chunk__6441_6445 = G__6450;
count__6442_6446 = G__6451;
i__6443_6447 = G__6452;
continue;
}
} else
{var temp__4092__auto___6453 = cljs.core.seq.call(null,seq__6440_6444);if(temp__4092__auto___6453)
{var seq__6440_6454__$1 = temp__4092__auto___6453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6440_6454__$1))
{var c__4151__auto___6455 = cljs.core.chunk_first.call(null,seq__6440_6454__$1);{
var G__6456 = cljs.core.chunk_rest.call(null,seq__6440_6454__$1);
var G__6457 = c__4151__auto___6455;
var G__6458 = cljs.core.count.call(null,c__4151__auto___6455);
var G__6459 = 0;
seq__6440_6444 = G__6456;
chunk__6441_6445 = G__6457;
count__6442_6446 = G__6458;
i__6443_6447 = G__6459;
continue;
}
} else
{var node_6460 = cljs.core.first.call(null,seq__6440_6454__$1);goog.dom.classes.remove(node_6460,class$);
{
var G__6461 = cljs.core.next.call(null,seq__6440_6454__$1);
var G__6462 = null;
var G__6463 = 0;
var G__6464 = 0;
seq__6440_6444 = G__6461;
chunk__6441_6445 = G__6462;
count__6442_6446 = G__6463;
i__6443_6447 = G__6464;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__6469_6473 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6470_6474 = null;var count__6471_6475 = 0;var i__6472_6476 = 0;while(true){
if((i__6472_6476 < count__6471_6475))
{var node_6477 = cljs.core._nth.call(null,chunk__6470_6474,i__6472_6476);goog.dom.classes.toggle(node_6477,class$);
{
var G__6478 = seq__6469_6473;
var G__6479 = chunk__6470_6474;
var G__6480 = count__6471_6475;
var G__6481 = (i__6472_6476 + 1);
seq__6469_6473 = G__6478;
chunk__6470_6474 = G__6479;
count__6471_6475 = G__6480;
i__6472_6476 = G__6481;
continue;
}
} else
{var temp__4092__auto___6482 = cljs.core.seq.call(null,seq__6469_6473);if(temp__4092__auto___6482)
{var seq__6469_6483__$1 = temp__4092__auto___6482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6469_6483__$1))
{var c__4151__auto___6484 = cljs.core.chunk_first.call(null,seq__6469_6483__$1);{
var G__6485 = cljs.core.chunk_rest.call(null,seq__6469_6483__$1);
var G__6486 = c__4151__auto___6484;
var G__6487 = cljs.core.count.call(null,c__4151__auto___6484);
var G__6488 = 0;
seq__6469_6473 = G__6485;
chunk__6470_6474 = G__6486;
count__6471_6475 = G__6487;
i__6472_6476 = G__6488;
continue;
}
} else
{var node_6489 = cljs.core.first.call(null,seq__6469_6483__$1);goog.dom.classes.toggle(node_6489,class$);
{
var G__6490 = cljs.core.next.call(null,seq__6469_6483__$1);
var G__6491 = null;
var G__6492 = 0;
var G__6493 = 0;
seq__6469_6473 = G__6490;
chunk__6470_6474 = G__6491;
count__6471_6475 = G__6492;
i__6472_6476 = G__6493;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_6502__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__6498_6503 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6499_6504 = null;var count__6500_6505 = 0;var i__6501_6506 = 0;while(true){
if((i__6501_6506 < count__6500_6505))
{var node_6507 = cljs.core._nth.call(null,chunk__6499_6504,i__6501_6506);goog.dom.classes.set(node_6507,classes_6502__$1);
{
var G__6508 = seq__6498_6503;
var G__6509 = chunk__6499_6504;
var G__6510 = count__6500_6505;
var G__6511 = (i__6501_6506 + 1);
seq__6498_6503 = G__6508;
chunk__6499_6504 = G__6509;
count__6500_6505 = G__6510;
i__6501_6506 = G__6511;
continue;
}
} else
{var temp__4092__auto___6512 = cljs.core.seq.call(null,seq__6498_6503);if(temp__4092__auto___6512)
{var seq__6498_6513__$1 = temp__4092__auto___6512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6498_6513__$1))
{var c__4151__auto___6514 = cljs.core.chunk_first.call(null,seq__6498_6513__$1);{
var G__6515 = cljs.core.chunk_rest.call(null,seq__6498_6513__$1);
var G__6516 = c__4151__auto___6514;
var G__6517 = cljs.core.count.call(null,c__4151__auto___6514);
var G__6518 = 0;
seq__6498_6503 = G__6515;
chunk__6499_6504 = G__6516;
count__6500_6505 = G__6517;
i__6501_6506 = G__6518;
continue;
}
} else
{var node_6519 = cljs.core.first.call(null,seq__6498_6513__$1);goog.dom.classes.set(node_6519,classes_6502__$1);
{
var G__6520 = cljs.core.next.call(null,seq__6498_6513__$1);
var G__6521 = null;
var G__6522 = 0;
var G__6523 = 0;
seq__6498_6503 = G__6520;
chunk__6499_6504 = G__6521;
count__6500_6505 = G__6522;
i__6501_6506 = G__6523;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__6528_6532 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6529_6533 = null;var count__6530_6534 = 0;var i__6531_6535 = 0;while(true){
if((i__6531_6535 < count__6530_6534))
{var node_6536 = cljs.core._nth.call(null,chunk__6529_6533,i__6531_6535);goog.dom.setTextContent(node_6536,value);
{
var G__6537 = seq__6528_6532;
var G__6538 = chunk__6529_6533;
var G__6539 = count__6530_6534;
var G__6540 = (i__6531_6535 + 1);
seq__6528_6532 = G__6537;
chunk__6529_6533 = G__6538;
count__6530_6534 = G__6539;
i__6531_6535 = G__6540;
continue;
}
} else
{var temp__4092__auto___6541 = cljs.core.seq.call(null,seq__6528_6532);if(temp__4092__auto___6541)
{var seq__6528_6542__$1 = temp__4092__auto___6541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6528_6542__$1))
{var c__4151__auto___6543 = cljs.core.chunk_first.call(null,seq__6528_6542__$1);{
var G__6544 = cljs.core.chunk_rest.call(null,seq__6528_6542__$1);
var G__6545 = c__4151__auto___6543;
var G__6546 = cljs.core.count.call(null,c__4151__auto___6543);
var G__6547 = 0;
seq__6528_6532 = G__6544;
chunk__6529_6533 = G__6545;
count__6530_6534 = G__6546;
i__6531_6535 = G__6547;
continue;
}
} else
{var node_6548 = cljs.core.first.call(null,seq__6528_6542__$1);goog.dom.setTextContent(node_6548,value);
{
var G__6549 = cljs.core.next.call(null,seq__6528_6542__$1);
var G__6550 = null;
var G__6551 = 0;
var G__6552 = 0;
seq__6528_6532 = G__6549;
chunk__6529_6533 = G__6550;
count__6530_6534 = G__6551;
i__6531_6535 = G__6552;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__6557_6561 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6558_6562 = null;var count__6559_6563 = 0;var i__6560_6564 = 0;while(true){
if((i__6560_6564 < count__6559_6563))
{var node_6565 = cljs.core._nth.call(null,chunk__6558_6562,i__6560_6564);goog.dom.forms.setValue(node_6565,value);
{
var G__6566 = seq__6557_6561;
var G__6567 = chunk__6558_6562;
var G__6568 = count__6559_6563;
var G__6569 = (i__6560_6564 + 1);
seq__6557_6561 = G__6566;
chunk__6558_6562 = G__6567;
count__6559_6563 = G__6568;
i__6560_6564 = G__6569;
continue;
}
} else
{var temp__4092__auto___6570 = cljs.core.seq.call(null,seq__6557_6561);if(temp__4092__auto___6570)
{var seq__6557_6571__$1 = temp__4092__auto___6570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6557_6571__$1))
{var c__4151__auto___6572 = cljs.core.chunk_first.call(null,seq__6557_6571__$1);{
var G__6573 = cljs.core.chunk_rest.call(null,seq__6557_6571__$1);
var G__6574 = c__4151__auto___6572;
var G__6575 = cljs.core.count.call(null,c__4151__auto___6572);
var G__6576 = 0;
seq__6557_6561 = G__6573;
chunk__6558_6562 = G__6574;
count__6559_6563 = G__6575;
i__6560_6564 = G__6576;
continue;
}
} else
{var node_6577 = cljs.core.first.call(null,seq__6557_6571__$1);goog.dom.forms.setValue(node_6577,value);
{
var G__6578 = cljs.core.next.call(null,seq__6557_6571__$1);
var G__6579 = null;
var G__6580 = 0;
var G__6581 = 0;
seq__6557_6561 = G__6578;
chunk__6558_6562 = G__6579;
count__6559_6563 = G__6580;
i__6560_6564 = G__6581;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3391__auto__ = allows_inner_html_QMARK_;if(and__3391__auto__)
{var and__3391__auto____$1 = (function (){var or__3403__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3391__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
})()))
{var value_6592 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__6588_6593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6589_6594 = null;var count__6590_6595 = 0;var i__6591_6596 = 0;while(true){
if((i__6591_6596 < count__6590_6595))
{var node_6597 = cljs.core._nth.call(null,chunk__6589_6594,i__6591_6596);node_6597.innerHTML = value_6592;
{
var G__6598 = seq__6588_6593;
var G__6599 = chunk__6589_6594;
var G__6600 = count__6590_6595;
var G__6601 = (i__6591_6596 + 1);
seq__6588_6593 = G__6598;
chunk__6589_6594 = G__6599;
count__6590_6595 = G__6600;
i__6591_6596 = G__6601;
continue;
}
} else
{var temp__4092__auto___6602 = cljs.core.seq.call(null,seq__6588_6593);if(temp__4092__auto___6602)
{var seq__6588_6603__$1 = temp__4092__auto___6602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6588_6603__$1))
{var c__4151__auto___6604 = cljs.core.chunk_first.call(null,seq__6588_6603__$1);{
var G__6605 = cljs.core.chunk_rest.call(null,seq__6588_6603__$1);
var G__6606 = c__4151__auto___6604;
var G__6607 = cljs.core.count.call(null,c__4151__auto___6604);
var G__6608 = 0;
seq__6588_6593 = G__6605;
chunk__6589_6594 = G__6606;
count__6590_6595 = G__6607;
i__6591_6596 = G__6608;
continue;
}
} else
{var node_6609 = cljs.core.first.call(null,seq__6588_6603__$1);node_6609.innerHTML = value_6592;
{
var G__6610 = cljs.core.next.call(null,seq__6588_6603__$1);
var G__6611 = null;
var G__6612 = 0;
var G__6613 = 0;
seq__6588_6593 = G__6610;
chunk__6589_6594 = G__6611;
count__6590_6595 = G__6612;
i__6591_6596 = G__6613;
continue;
}
}
} else
{}
}
break;
}
}catch (e6587){if((e6587 instanceof Error))
{var e_6614 = e6587;domina.replace_children_BANG_.call(null,content,value_6592);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6587;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3391__auto__ = bubble;if(cljs.core.truth_(and__3391__auto__))
{return (value == null);
} else
{return and__3391__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3403__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__6621_6625 = cljs.core.seq.call(null,children);var chunk__6622_6626 = null;var count__6623_6627 = 0;var i__6624_6628 = 0;while(true){
if((i__6624_6628 < count__6623_6627))
{var child_6629 = cljs.core._nth.call(null,chunk__6622_6626,i__6624_6628);frag.appendChild(child_6629);
{
var G__6630 = seq__6621_6625;
var G__6631 = chunk__6622_6626;
var G__6632 = count__6623_6627;
var G__6633 = (i__6624_6628 + 1);
seq__6621_6625 = G__6630;
chunk__6622_6626 = G__6631;
count__6623_6627 = G__6632;
i__6624_6628 = G__6633;
continue;
}
} else
{var temp__4092__auto___6634 = cljs.core.seq.call(null,seq__6621_6625);if(temp__4092__auto___6634)
{var seq__6621_6635__$1 = temp__4092__auto___6634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6621_6635__$1))
{var c__4151__auto___6636 = cljs.core.chunk_first.call(null,seq__6621_6635__$1);{
var G__6637 = cljs.core.chunk_rest.call(null,seq__6621_6635__$1);
var G__6638 = c__4151__auto___6636;
var G__6639 = cljs.core.count.call(null,c__4151__auto___6636);
var G__6640 = 0;
seq__6621_6625 = G__6637;
chunk__6622_6626 = G__6638;
count__6623_6627 = G__6639;
i__6624_6628 = G__6640;
continue;
}
} else
{var child_6641 = cljs.core.first.call(null,seq__6621_6635__$1);frag.appendChild(child_6641);
{
var G__6642 = cljs.core.next.call(null,seq__6621_6635__$1);
var G__6643 = null;
var G__6644 = 0;
var G__6645 = 0;
seq__6621_6625 = G__6642;
chunk__6622_6626 = G__6643;
count__6623_6627 = G__6644;
i__6624_6628 = G__6645;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6615_SHARP_,p2__6616_SHARP_){return f.call(null,p1__6615_SHARP_,p2__6616_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3391__auto__ = obj;if(cljs.core.truth_(and__3391__auto__))
{var and__3391__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3391__auto____$1)
{return obj.length;
} else
{return and__3391__auto____$1;
}
} else
{return and__3391__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6647 = list_thing;if(G__6647)
{var bit__4053__auto__ = (G__6647.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__6647.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6647.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6647);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6647);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6648 = content;if(G__6648)
{var bit__4053__auto__ = (G__6648.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__6648.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6648.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6648);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6648);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__6649 = content;if(G__6649)
{var bit__4053__auto__ = (G__6649.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4053__auto__) || (G__6649.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6649.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6649);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6649);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
