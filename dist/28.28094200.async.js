webpackJsonp([28],{1170:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.detail=void 0;var n=a(187),u=r(n),s=a(308),c=r(s),l=(t.detail=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.get)(o.SERVER_URL+"/admin/detail_goods_color/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,c.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.post)(o.SERVER_URL+"/admin/update_goods_color",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(309)),o=a(190)},743:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(16),u=r(n),s=a(187),c=r(s),l=a(311),o=r(l);a(312);var d=a(1170);t.default={namespace:"goodsColor",state:{detail:null},effects:{detail:c.default.mark(function e(t,a){var r,n=t.payload,u=t.callback,s=a.call,l=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d.detail,n);case 2:if(r=e.sent,!r.success){e.next=9;break}return e.next=6,l({type:"setDetail",payload:r.data});case 6:u&&u(),e.next=10;break;case 9:o.default.error(r.data);case 10:case"end":return e.stop()}},e,this)}),update:c.default.mark(function e(t,a){var r,n=t.payload,u=t.callback,s=a.call;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d.update,n);case 2:r=e.sent,r.success&&(o.default.success("\u4fdd\u5b58\u6210\u529f"),u&&u());case 4:case"end":return e.stop()}},e,this)}),clearDetail:c.default.mark(function e(t,a){var r=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({type:"setDetail",payload:null});case 2:case"end":return e.stop()}},e,this)})},reducers:{setDetail:function(e,t){var a=t.payload;return a?(0,u.default)({},e,{detail:a.goodsColor}):(0,u.default)({},e,{detail:null})}}},e.exports=t.default}});