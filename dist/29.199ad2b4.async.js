webpackJsonp([29],{1163:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.detail=t.find=void 0;var r=a(187),u=n(r),l=a(308),s=n(l),d=(t.find=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/admin/find_goods",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.detail=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/admin/detail_goods/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/admin/update_goods",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(309)),c=a(190)},742:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(16),u=n(r),l=a(311),s=n(l),d=a(187),c=n(d);a(312);var o=a(1163);t.default={namespace:"goods",state:{loading:!1,findFormValue:{name:null},listData:{list:[],pagination:{total:0,current:0}},detail:null,platform:[]},effects:{find:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,l=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"changeStyleListLoading",payload:!0});case 2:return e.next=4,l({type:"createFindFormValue",payload:{name:r.name}});case 4:if(!r.resetFormValue){e.next=7;break}return e.next=7,l({type:"resetedFormValue"});case 7:return e.next=9,u(o.find,r);case 9:if(n=e.sent,!n.success){e.next=13;break}return e.next=13,l({type:"setListData",payload:n.data});case 13:return e.next=15,l({type:"changeStyleListLoading",payload:!1});case 15:case"end":return e.stop()}},e,this)}),detail:c.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,l=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(o.detail,r);case 2:if(n=e.sent,!n.success){e.next=9;break}return e.next=6,d({type:"setDetail",payload:n.data});case 6:u&&u(),e.next=10;break;case 9:s.default.error(n.data);case 10:case"end":return e.stop()}},e,this)}),update:c.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,l=a.call;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(o.update,r);case 2:n=e.sent,n.success&&(s.default.success("\u4fdd\u5b58\u6210\u529f"),u&&u());case 4:case"end":return e.stop()}},e,this)}),clearDetail:c.default.mark(function e(t,a){var n=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:"setDetail",payload:null});case 2:case"end":return e.stop()}},e,this)})},reducers:{changeStyleListLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,{loading:a})},createFindFormValue:function(e,t){var a=t.payload;return(0,u.default)({},e,{findFormValue:(0,u.default)({},a)})},setListData:function(e,t){var a=t.payload;return(0,u.default)({},e,{listData:(0,u.default)({},a)})},resetedFormValue:function(e){return(0,u.default)({},e,{findFormValue:{name:null}})},setDetail:function(e,t){var a=t.payload;return a?(0,u.default)({},e,{detail:a.goods,platform:a.platform}):(0,u.default)({},e,{detail:null})}}},e.exports=t.default}});