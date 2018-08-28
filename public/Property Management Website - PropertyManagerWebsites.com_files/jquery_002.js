/**
 * jQuery.scrollfire()
 *
 * (a) Wil Neeley, Trestle Media, LLC.
 * Code may be freely distributed under the MIT license.
 */
(function(d,h,j,b){var k="scrollfire",i=null,c={onTopIn:function(){},onTopOut:function(){},onBottomIn:function(){},onBottomOut:function(){},onTopHidden:function(){},onBottomVisible:function(){},onBottomHidden:function(){},onTopVisible:function(){},onScroll:function(){},onScrollDown:function(){},onScrollUp:function(){},onScrollAlways:function(){},onScrollDownAlways:function(){},onScrollUpAlways:function(){},offset:0,topOffset:0,bottomOffset:0,parallax:{active:false,parent:null,bound:false,speed:10,easing:"linear",invert:false,scalar:1}},e={registry:{},guid:0,last_scroll_pos:0,scroll_handler:null};function l(n,m){this.element=n;this.options=d.extend(true,{},c,m);this._defaults=c;this._name=k;this.init()}l.prototype.init=function(){var o=this;var m={_element:o.element,_guid:e.guid,_on_top_in:o.options.onTopIn,_on_top_in_once:true,_on_top_out:o.options.onTopOut,_on_top_out_once:true,_on_bottom_in:o.options.onBottomIn,_on_bottom_in_once:true,_on_bottom_out:o.options.onBottomOut,_on_bottom_out_once:true,_on_top_hidden:o.options.onTopHidden,_on_top_hidden_once:true,_on_bottom_visible:o.options.onBottomVisible,_on_bottom_visible_once:true,_on_bottom_hidden:o.options.onBottomHidden,_on_bottom_hidden_once:true,_on_top_visible:o.options.onTopVisible,_on_top_visible_once:true,_on_scroll:o.options.onScroll,_on_scroll_down:o.options.onScrollDown,_on_scroll_up:o.options.onScrollUp,_on_scroll_always:o.options.onScrollAlways,_on_scroll_down_always:o.options.onScrollDownAlways,_on_scroll_up_always:o.options.onScrollUpAlways,_offset:o.options.offset,_top_offset:o.options.topOffset,_bottom_offset:o.options.bottomOffset,_parallax:o.options.parallax};var p=function(s){var q=d(h).scrollTop();var r=(q>e.last_scroll_pos)?"down":"up";var t=Math.abs(e.last_scroll_pos-q);d.each(e.registry,function(z,G){var x=(d.isFunction(G._offset))?G._offset():G._offset;var I=(d.isFunction(G._top_offset))?G._top_offset():G._top_offset;var v=(d.isFunction(G._bottom_offset))?G._bottom_offset():G._bottom_offset;var y=d(G._element);if(G._parallax.active){y=G._parallax.parent||y.parent()}var R=d(h).height();var F=y.outerHeight();var E=y.offset().top;var C=y.offset().top+F;G._on_scroll_always(G._element,t,G);if(r=="down"){x=(I)?I:x;var N=q<=(E+F-x);var A=(q+R)>=(E+x);var M=q<=(E-x);var u=(q+R)>=(E+F+x);var H=(N&&A);var O=(M&&u);var K=q>=(E-x);var J=(q+R)>=(E+x);if(K&&G._on_top_out_once){G._on_top_in_once=true;G._on_top_visible_once=true;G._on_top_out_once=false;G._on_top_out(G._element,t,G)}if(J&&G._on_bottom_in_once){G._on_bottom_out_once=true;G._on_bottom_hidden_once=true;G._on_bottom_in_once=false;G._on_bottom_in(G._element,t,G)}G._on_scroll_down_always(G._element,t,G);if(H){G._on_scroll(G._element,t,G);G._on_scroll_down(G._element,t,G)}var Q=(E+F)-q;var L=((Q+x)/R);L=(L>1)?1:L.toFixed(2);var D=(E+F)-q;var B=((D-x)/R);B=(B>1)?1:B.toFixed(2);if(L<1&&B<=0&&G._on_bottom_visible_once){G._on_bottom_visible_once=false;G._on_bottom_visible(G._element,t,G)}if(B<=0&&L<1&&G._on_top_hidden_once){G._on_top_hidden_once=false;G._on_top_hidden(G._element,t,G)}if(G._parallax.active){g(G._parallax,d(G._element),x,q,R)}}else{x=(v)?v:x;var N=q<=(E+F-x);var A=(q+R)>=(E+x);var M=q<=(E-x);var u=(q+R)>=(E+F+x);var H=(N&&A);var O=(M&&u);var w=q<=(C-x);var P=(q+R)<=(C+x);if(w&&G._on_top_in_once){G._on_top_out_once=true;G._on_top_hidden_once=true;G._on_top_in_once=false;G._on_top_in(G._element,t,G)}if(P&&G._on_bottom_out_once){G._on_bottom_in_once=true;G._on_bottom_visible_once=true;G._on_bottom_out_once=false;G._on_bottom_out(G._element,t,G)}G._on_scroll_up_always(G._element,t,G);if(H){G._on_scroll(G._element,t,G);G._on_scroll_up(G._element,t,G)}var Q=(E+F)-(q+F+x);var L=(Q/R);L=(L>1)?1:L.toFixed(2);var D=(E+F)-(q+F-x);var B=(D/R);B=(B>1)?1:B.toFixed(2);if(L>=0&&B>=1&&G._on_top_visible_once){G._on_top_visible_once=false;G._on_top_visible(G._element,t,G)}if(B>=1&&L>=0&&G._on_bottom_hidden_once){G._on_bottom_hidden_once=false;G._on_bottom_hidden(G._element,t,G)}if(G._parallax.active){g(G._parallax,d(G._element),x,q,R)}}});e.last_scroll_pos=q};m._scroll_handler=p;e.registry[e.guid]=m;if(!d.data(o.element,"uids")){d.data(o.element,"uids",[e.guid])}else{var n=d.data(o.element,"uids");n.push(e.guid);d.data(o.element,"uids",n)}e.guid++;if(!e.scroll_handler){e.scroll_handler=p;d(h).bind("scroll resize load",p)}};var f=function(n,m){return parseInt(n.css("margin-"+m).replace(/px|em|%|auto|inherit/g,""))};var g=function(s,t,r,u,m){var o=s.parent||t.parent();var v=o.outerHeight();var q=o.offset().top;var y=f(t,"top");var w=(q)-u;var p=((w-r)/(m-v))*s.scalar;if(s.invert){p=((p-1)*-1)*s.scalar}var n=(v-t.outerHeight(s.bound))*p;var x=0;if(p>=0&&p<=1){x=(n-(s.bound?0:y))}else{if(p<0&&s.scalar==1){x=(s.bound?0:-y)}else{if(p>1&&s.scalar==1){x=v-(s.bound?0:y)-t.outerHeight()-(s.bound?(y*2):0)}}}t.stop().animate({top:x},{duration:s.speed,easing:s.easing})};var a={remove:function(m){m.each(function(n,p){var o=d(p).data("uids");if(o){delete e.registry[o]}});return i}};d.fn[k]=function(n){i=this;if(typeof n=="string"){var o=n;var m=d(arguments).toArray();m.shift();m.unshift(this);return a[o].apply(this,m)}else{return this.each(function(){d.data(this,"plugin_"+k,new l(this,n))})}}})(jQuery,window,document);