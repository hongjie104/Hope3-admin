webpackJsonp([32],{1151:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.detail=t.find=void 0;var r=a(182),u=n(r),l=a(302),s=n(l),o=(t.find=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.post)(i.SERVER_URL+"/api/admin/find_goods",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.detail=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.get)(i.SERVER_URL+"/api/admin/detail_goods/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,s.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.post)(i.SERVER_URL+"/api/admin/update_goods",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(303)),i=a(185)},715:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(15),u=n(r),l=a(304),s=n(l),o=a(182),i=n(o);a(305);var d=a(1151),c=a(313);t.default={namespace:"goods",state:{loading:!1,findFormValue:{name:null,number:null},listData:{list:[],pagination:{total:0,current:0}},detail:null,platform:[]},effects:{find:i.default.mark(function e(t,a){var n,r=t.payload,u=a.call,l=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l({type:"changeStyleListLoading",payload:!0});case 2:return e.next=4,l({type:"createFindFormValue",payload:{name:r.name,number:r.number}});case 4:if(!r.resetFormValue){e.next=7;break}return e.next=7,l({type:"resetedFormValue"});case 7:return e.next=9,u(d.find,r);case 9:if(n=e.sent,!n.success){e.next=13;break}return e.next=13,l({type:"setListData",payload:n.data});case 13:return e.next=15,l({type:"changeStyleListLoading",payload:!1});case 15:case"end":return e.stop()}},e,this)}),detail:i.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,l=a.call,o=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(d.detail,r);case 2:if(n=e.sent,!n.success){e.next=9;break}return e.next=6,o({type:"setDetail",payload:n.data});case 6:u&&u(),e.next=10;break;case 9:s.default.error(n.data);case 10:case"end":return e.stop()}},e,this)}),update:i.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,l=a.call;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(d.update,r);case 2:n=e.sent,n.success&&(s.default.success("\u4fdd\u5b58\u6210\u529f"),u&&u());case 4:case"end":return e.stop()}},e,this)}),clearDetail:i.default.mark(function e(t,a){var n=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:"setDetail",payload:null});case 2:case"end":return e.stop()}},e,this)})},reducers:{changeStyleListLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,{loading:a})},createFindFormValue:function(e,t){var a=t.payload;return(0,u.default)({},e,{findFormValue:(0,u.default)({},a)})},setListData:function(e,t){for(var a=t.payload,n=a.goodsTypeArr,r=a.list,l=a.pagination,s=null,o=0;o<r.length;o++)(s=(0,c.getItemFromArr)(n,"_id",r[o].goods_type_id))&&(r[o].goodsTypeName=s.name,r[o].goodsTypeImg=s.img);return(0,u.default)({},e,{listData:{list:r,pagination:l}})},resetedFormValue:function(e){return(0,u.default)({},e,{findFormValue:{name:null,number:null}})},setDetail:function(e,t){var a=t.payload;return a?(0,u.default)({},e,{detail:a.goods,platform:a.platform}):(0,u.default)({},e,{detail:null})}}},e.exports=t.default}});