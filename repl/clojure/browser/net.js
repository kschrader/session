goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__15077){
var vec__15078__15079 = p__15077;
var k__15080 = cljs.core.nth.call(null,vec__15078__15079,0,null);
var v__15081 = cljs.core.nth.call(null,vec__15078__15079,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__15080.toLowerCase()),v__15081], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
void 0;clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__1 = (function (this$){
if((function (){var and__3822__auto____15094 = this$;
if(and__3822__auto____15094)
{return this$.clojure$browser$net$IConnection$connect$arity$1;
} else
{return and__3822__auto____15094;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else
{return (function (){var or__3824__auto____15095 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____15095)
{return or__3824__auto____15095;
} else
{var or__3824__auto____15096 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15096)
{return or__3824__auto____15096;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__2 = (function (this$,opt1){
if((function (){var and__3822__auto____15097 = this$;
if(and__3822__auto____15097)
{return this$.clojure$browser$net$IConnection$connect$arity$2;
} else
{return and__3822__auto____15097;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else
{return (function (){var or__3824__auto____15098 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____15098)
{return or__3824__auto____15098;
} else
{var or__3824__auto____15099 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15099)
{return or__3824__auto____15099;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__3 = (function (this$,opt1,opt2){
if((function (){var and__3822__auto____15100 = this$;
if(and__3822__auto____15100)
{return this$.clojure$browser$net$IConnection$connect$arity$3;
} else
{return and__3822__auto____15100;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else
{return (function (){var or__3824__auto____15101 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____15101)
{return or__3824__auto____15101;
} else
{var or__3824__auto____15102 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15102)
{return or__3824__auto____15102;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__3822__auto____15103 = this$;
if(and__3822__auto____15103)
{return this$.clojure$browser$net$IConnection$connect$arity$4;
} else
{return and__3822__auto____15103;
}
})())
{return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3824__auto____15104 = (clojure.browser.net.connect[goog.typeOf(this$)]);
if(or__3824__auto____15104)
{return or__3824__auto____15104;
} else
{var or__3824__auto____15105 = (clojure.browser.net.connect["_"]);
if(or__3824__auto____15105)
{return or__3824__auto____15105;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return connect__1.call(this,this$);
case 2:
return connect__2.call(this,this$,opt1);
case 3:
return connect__3.call(this,this$,opt1,opt2);
case 4:
return connect__4.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
connect.cljs$lang$arity$1 = connect__1;
connect.cljs$lang$arity$2 = connect__2;
connect.cljs$lang$arity$3 = connect__3;
connect.cljs$lang$arity$4 = connect__4;
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__2 = (function (this$,opt){
if((function (){var and__3822__auto____15121 = this$;
if(and__3822__auto____15121)
{return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else
{return and__3822__auto____15121;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else
{return (function (){var or__3824__auto____15122 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____15122)
{return or__3824__auto____15122;
} else
{var or__3824__auto____15123 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15123)
{return or__3824__auto____15123;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__3 = (function (this$,opt,opt2){
if((function (){var and__3822__auto____15124 = this$;
if(and__3822__auto____15124)
{return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else
{return and__3822__auto____15124;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else
{return (function (){var or__3824__auto____15125 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____15125)
{return or__3824__auto____15125;
} else
{var or__3824__auto____15126 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15126)
{return or__3824__auto____15126;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__3822__auto____15127 = this$;
if(and__3822__auto____15127)
{return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else
{return and__3822__auto____15127;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else
{return (function (){var or__3824__auto____15128 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____15128)
{return or__3824__auto____15128;
} else
{var or__3824__auto____15129 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15129)
{return or__3824__auto____15129;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__3822__auto____15130 = this$;
if(and__3822__auto____15130)
{return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else
{return and__3822__auto____15130;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3824__auto____15131 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____15131)
{return or__3824__auto____15131;
} else
{var or__3824__auto____15132 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15132)
{return or__3824__auto____15132;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__3822__auto____15133 = this$;
if(and__3822__auto____15133)
{return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else
{return and__3822__auto____15133;
}
})())
{return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3824__auto____15134 = (clojure.browser.net.transmit[goog.typeOf(this$)]);
if(or__3824__auto____15134)
{return or__3824__auto____15134;
} else
{var or__3824__auto____15135 = (clojure.browser.net.transmit["_"]);
if(or__3824__auto____15135)
{return or__3824__auto____15135;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return transmit__2.call(this,this$,opt);
case 3:
return transmit__3.call(this,this$,opt,opt2);
case 4:
return transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
transmit.cljs$lang$arity$2 = transmit__2;
transmit.cljs$lang$arity$3 = transmit__3;
transmit.cljs$lang$arity$4 = transmit__4;
transmit.cljs$lang$arity$5 = transmit__5;
transmit.cljs$lang$arity$6 = transmit__6;
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if((function (){var and__3822__auto____15139 = this$;
if(and__3822__auto____15139)
{return this$.clojure$browser$net$IConnection$close$arity$1;
} else
{return and__3822__auto____15139;
}
})())
{return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else
{return (function (){var or__3824__auto____15140 = (clojure.browser.net.close[goog.typeOf(this$)]);
if(or__3824__auto____15140)
{return or__3824__auto____15140;
} else
{var or__3824__auto____15141 = (clojure.browser.net.close["_"]);
if(or__3824__auto____15141)
{return or__3824__auto____15141;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
void 0;goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__15142){
var vec__15143__15144 = p__15142;
var k__15145 = cljs.core.nth.call(null,vec__15143__15144,0,null);
var v__15146 = cljs.core.nth.call(null,vec__15143__15144,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__15145.toLowerCase()),v__15146], true);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,(function (p__15147){
var vec__15148__15149 = p__15147;
var k__15150 = cljs.core.nth.call(null,vec__15148__15149,0,null);
var v__15151 = cljs.core.nth.call(null,vec__15148__15149,1,null);
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,k__15150.toLowerCase()),v__15151], true);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
void 0;clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__3 = (function (this$,service_name,fn){
if((function (){var and__3822__auto____15158 = this$;
if(and__3822__auto____15158)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else
{return and__3822__auto____15158;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else
{return (function (){var or__3824__auto____15159 = (clojure.browser.net.register_service[goog.typeOf(this$)]);
if(or__3824__auto____15159)
{return or__3824__auto____15159;
} else
{var or__3824__auto____15160 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____15160)
{return or__3824__auto____15160;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__3822__auto____15161 = this$;
if(and__3822__auto____15161)
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else
{return and__3822__auto____15161;
}
})())
{return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3824__auto____15162 = (clojure.browser.net.register_service[goog.typeOf(this$)]);
if(or__3824__auto____15162)
{return or__3824__auto____15162;
} else
{var or__3824__auto____15163 = (clojure.browser.net.register_service["_"]);
if(or__3824__auto____15163)
{return or__3824__auto____15163;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return register_service__3.call(this,this$,service_name,fn);
case 4:
return register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
register_service.cljs$lang$arity$3 = register_service__3;
register_service.cljs$lang$arity$4 = register_service__4;
return register_service;
})()
;
void 0;goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__0 = (function (){
var temp__3974__auto____15175 = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__3974__auto____15175))
{var config__15176 = temp__3974__auto____15175;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config__15176)));
} else
{return null;
}
});
var xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__15177){
var vec__15178__15179 = p__15177;
var k__15180 = cljs.core.nth.call(null,vec__15178__15179,0,null);
var v__15181 = cljs.core.nth.call(null,vec__15178__15179,1,null);
var temp__3971__auto____15182 = cljs.core._lookup.call(null,clojure.browser.net.xpc_config_fields,k__15180,null);
if(cljs.core.truth_(temp__3971__auto____15182))
{var field__15183 = temp__3971__auto____15182;
var G__15184__15185 = sum;
(G__15184__15185[field__15183] = v__15181);
return G__15184__15185;
} else
{return sum;
}
}),{},config)));
});
xpc_connection = function(config){
switch(arguments.length){
case 0:
return xpc_connection__0.call(this);
case 1:
return xpc_connection__1.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
xpc_connection.cljs$lang$arity$0 = xpc_connection__0;
xpc_connection.cljs$lang$arity$1 = xpc_connection__1;
return xpc_connection;
})()
;
