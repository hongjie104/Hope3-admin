webpackJsonp([45],{1295:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.detail=t.find=void 0;var r=a(120),u=n(r),d=a(295),s=n(d),i=(t.find=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.post)(c.SERVER_URL+"/admin/find_shop",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.detail=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.get)(c.SERVER_URL+"/admin/detail_shop/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.post)(c.SERVER_URL+"/admin/update_shop",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(296)),c=a(183)},1348:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.add=t.update=t.detail=t.find=void 0;var r=a(120),u=n(r),d=a(295),s=n(d),i=(t.find=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.post)(c.SERVER_URL+"/admin/find_platform",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.detail=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.get)(c.SERVER_URL+"/admin/detail_platform/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.post)(c.SERVER_URL+"/admin/update_platform",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.add=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.post)(c.SERVER_URL+"/admin/add_platform",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(296)),c=a(183)},703:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(11),u=n(r),d=a(291),s=n(d),i=a(120),c=n(i);a(292);var o=(a(180),a(1348)),f=a(1295);t.default={namespace:"platform",state:{loading:!1,findFormValue:{name:null},listData:{list:[],pagination:{total:0,current:0}},detail:{},shopListData:{list:[],pagination:{total:0,current:0}},modalVisible:!1},effects:{find:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({type:"changeStyleListLoading",payload:!0});case 2:return e.next=4,d({type:"createFindFormValue",payload:{name:r.name}});case 4:if(!r.resetFormValue){e.next=7;break}return e.next=7,d({type:"resetedFormValue"});case 7:return e.next=9,u(o.find,r);case 9:if(n=e.sent,!n.success){e.next=13;break}return e.next=13,d({type:"finded",payload:n.data});case 13:return e.next=15,d({type:"changeStyleListLoading",payload:!1});case 15:case"end":return e.stop()}},e,this)}),detail:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.detail,r);case 2:if(n=e.sent,!n.success){e.next=8;break}return e.next=6,d({type:"fetchDetail",payload:n.data});case 6:e.next=9;break;case 8:s.default.error(n.data);case 9:case"end":return e.stop()}},e,this)}),update:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.update,r);case 2:n=e.sent,n.success&&s.default.success("\u4fdd\u5b58\u6210\u529f");case 4:case"end":return e.stop()}},e,this)}),findShop:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f.find,r);case 2:if(n=e.sent,!n.success){e.next=6;break}return e.next=6,d({type:"findedShop",payload:n.data});case 6:case"end":return e.stop()}},e,this)}),add:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,d=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(o.add,r);case 2:if(n=e.sent,!n.success){e.next=9;break}return s.default.success("\u6dfb\u52a0\u6210\u529f"),e.next=7,d({type:"added"});case 7:e.next=10;break;case 9:s.default.error(n.data);case 10:case"end":return e.stop()}},e,this)}),changeModalVisible:c.default.mark(function e(t,a){var n=t.payload,r=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({type:"changedModalVisible",payload:n});case 2:case"end":return e.stop()}},e,this)})},reducers:{changeStyleListLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,{loading:a})},createFindFormValue:function(e,t){var a=t.payload;return(0,u.default)({},e,{findFormValue:(0,u.default)({},a)})},finded:function(e,t){var a=t.payload;return(0,u.default)({},e,{listData:(0,u.default)({},a)})},resetedFormValue:function(e){return(0,u.default)({},e,{findFormValue:{name:null}})},fetchDetail:function(e,t){var a=t.payload;return(0,u.default)({},e,{detail:a})},findedShop:function(e,t){var a=t.payload;return(0,u.default)({},e,{shopListData:(0,u.default)({},a)})},added:function(e){return(0,u.default)({},e,{modalVisible:!1})},changedModalVisible:function(e,t){var a=t.payload;return(0,u.default)({},e,{modalVisible:a})}}},e.exports=t.default}});