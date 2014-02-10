// Compiled by ClojureScript 0.0-2156
goog.provide('select');
goog.require('cljs.core');
goog.require('domina.events');
goog.require('categories');
goog.require('domina');
goog.require('categories');
goog.require('domina.events');
goog.require('domina');
select.set_options_BANG_ = (function set_options_BANG_(ul_element,items,to_li,id_attr,selected_handler){domina.destroy_children_BANG_.call(null,ul_element);
var seq__7194 = cljs.core.seq.call(null,items);var chunk__7195 = null;var count__7196 = 0;var i__7197 = 0;while(true){
if((i__7197 < count__7196))
{var item = cljs.core._nth.call(null,chunk__7195,i__7197);domina.append_BANG_.call(null,ul_element,to_li.call(null,item));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,id_attr.call(null,item)),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__7194,chunk__7195,count__7196,i__7197,item){
return (function (){return selected_handler.call(null,item).call(null);
});})(seq__7194,chunk__7195,count__7196,i__7197,item))
);
{
var G__7198 = seq__7194;
var G__7199 = chunk__7195;
var G__7200 = count__7196;
var G__7201 = (i__7197 + 1);
seq__7194 = G__7198;
chunk__7195 = G__7199;
count__7196 = G__7200;
i__7197 = G__7201;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7194);if(temp__4092__auto__)
{var seq__7194__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7194__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__7194__$1);{
var G__7202 = cljs.core.chunk_rest.call(null,seq__7194__$1);
var G__7203 = c__4151__auto__;
var G__7204 = cljs.core.count.call(null,c__4151__auto__);
var G__7205 = 0;
seq__7194 = G__7202;
chunk__7195 = G__7203;
count__7196 = G__7204;
i__7197 = G__7205;
continue;
}
} else
{var item = cljs.core.first.call(null,seq__7194__$1);domina.append_BANG_.call(null,ul_element,to_li.call(null,item));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,id_attr.call(null,item)),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__7194,chunk__7195,count__7196,i__7197,item,seq__7194__$1,temp__4092__auto__){
return (function (){return selected_handler.call(null,item).call(null);
});})(seq__7194,chunk__7195,count__7196,i__7197,item,seq__7194__$1,temp__4092__auto__))
);
{
var G__7206 = cljs.core.next.call(null,seq__7194__$1);
var G__7207 = null;
var G__7208 = 0;
var G__7209 = 0;
seq__7194 = G__7206;
chunk__7195 = G__7207;
count__7196 = G__7208;
i__7197 = G__7209;
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
select.selected_provider = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
select.provider_id_attr = (function provider_id_attr(provider){return [cljs.core.str("prv-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(provider))].join('');
});
select.provider_to_li = (function provider_to_li(provider){return [cljs.core.str("<li><a href=\"#\" prv-id=\""),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(provider)),cljs.core.str("\" id=\""),cljs.core.str(select.provider_id_attr.call(null,provider)),cljs.core.str("\">"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(provider)),cljs.core.str("</a></li>")].join('');
});
select.provider_selected = (function provider_selected(provider){cljs.core.reset_BANG_.call(null,select.selected_provider,provider);
domina.remove_class_BANG_.call(null,domina.by_id.call(null,"qr-generate"),"disabled");
return domina.set_text_BANG_.call(null,domina.by_id.call(null,"provider-name"),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(provider));
});
select.selected_category = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
select.cat_id_attr = (function cat_id_attr(cat){return [cljs.core.str("cat-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cat))].join('');
});
select.cat_to_li = (function cat_to_li(cat){return [cljs.core.str("<li><a href=\"#\" cat-id=\""),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cat)),cljs.core.str("\" id=\""),cljs.core.str(select.cat_id_attr.call(null,cat)),cljs.core.str("\">"),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(cat)),cljs.core.str("</a></li>")].join('');
});
select.cat_selected = (function cat_selected(cat){cljs.core.reset_BANG_.call(null,select.selected_category,cat);
domina.set_text_BANG_.call(null,domina.by_id.call(null,"category-name"),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(cat));
domina.set_text_BANG_.call(null,domina.by_id.call(null,"provider-name"),"\u041F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440");
domina.add_class_BANG_.call(null,domina.by_id.call(null,"qr-generate"),"disabled");
return select.set_options_BANG_.call(null,domina.by_id.call(null,"providers-list"),new cljs.core.Keyword(null,"providers","providers",4761299988).cljs$core$IFn$_invoke$arity$1(cat),select.provider_to_li,select.provider_id_attr,select.provider_selected);
});
select.provider_string = (function provider_string(){return [cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,select.selected_category))),cljs.core.str("|"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,select.selected_provider))),cljs.core.str("|"),cljs.core.str(new cljs.core.Keyword(null,"clearing","clearing",1804211687).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,select.selected_provider))),cljs.core.str("|")].join('');
});
select.init = (function init(){if(cljs.core.truth_((function (){var and__3391__auto__ = document;if(cljs.core.truth_(and__3391__auto__))
{return document.getElementById;
} else
{return and__3391__auto__;
}
})()))
{return select.set_options_BANG_.call(null,domina.by_id.call(null,"categories-list"),categories.categories,select.cat_to_li,select.cat_id_attr,select.cat_selected);
} else
{return null;
}
});
