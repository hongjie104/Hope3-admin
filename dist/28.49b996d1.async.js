webpackJsonp([28],{1156:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.removeGoodsColor=t.mergeGoodsColor=t.merge=t.fetchSubCategory=t.update=t.detail=t.find=void 0;var n=r(187),o=a(n),u=r(308),s=a(u),d=(t.find=function(){var e=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/admin/find_goods_type",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.detail=function(){var e=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/admin/detail_goods_type/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/admin/update_goods_type",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.fetchSubCategory=function(){var e=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/admin/fetch_sub_category/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.merge=function(){var e=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/admin/merge_goods_type",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.mergeGoodsColor=function(){var e=(0,s.default)(o.default.mark(function e(t){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/admin/merge_goods_color",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.removeGoodsColor=function(){var e=(0,s.default)(o.default.mark(function e(t,r){return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/admin/remove_goods_color/"+t+"/"+r));case 1:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),r(309)),c=r(190)},744:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(305),o=a(n),u=r(16),s=a(u),d=r(311),c=a(d),l=r(187),i=a(l);r(312);var f=r(189),p=r(1156);t.default={namespace:"goodsType",state:{loading:!1,findFormValue:{name:null,gender:-1,category:-1,subCategory:-1,brand:-1,series:-1},listData:{list:[],pagination:{total:0,current:0}},goodsColorArr:[],detail:null,brands:[],category:[],subCategory:[]},effects:{find:i.default.mark(function e(t,r){var a,n=t.payload,o=r.call,u=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeStyleListLoading",payload:!0});case 2:return e.next=4,u({type:"createFindFormValue",payload:{name:n.name,gender:n.gender,category:n.category,subCategory:n.subCategory,brand:n.brand,series:n.series}});case 4:if(!n.resetFormValue){e.next=7;break}return e.next=7,u({type:"resetedFormValue"});case 7:return e.next=9,o(p.find,n);case 9:if(a=e.sent,!a.success){e.next=13;break}return e.next=13,u({type:"setListData",payload:a.data});case 13:return e.next=15,u({type:"changeStyleListLoading",payload:!1});case 15:case"end":return e.stop()}},e,this)}),detail:i.default.mark(function e(t,r){var a,n=t.payload,o=t.callback,u=r.call,s=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(p.detail,n);case 2:if(a=e.sent,!a.success){e.next=9;break}return e.next=6,s({type:"setDetail",payload:a.data});case 6:o&&o(),e.next=10;break;case 9:c.default.error(a.data);case 10:case"end":return e.stop()}},e,this)}),fetchSubCategory:i.default.mark(function e(t,r){var a,n=t.payload,o=t.callback,u=r.call,s=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(p.fetchSubCategory,n);case 2:if(a=e.sent,!a.success){e.next=9;break}return e.next=6,s({type:"setSubCategory",payload:a.data});case 6:o&&o(),e.next=10;break;case 9:c.default.error(a.data);case 10:case"end":return e.stop()}},e,this)}),update:i.default.mark(function e(t,r){var a,n=t.payload,o=t.callback,u=r.call;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(p.update,n);case 2:a=e.sent,a.success&&(c.default.success("\u4fdd\u5b58\u6210\u529f"),o&&o());case 4:case"end":return e.stop()}},e,this)}),updateGoodsColor:i.default.mark(function e(t,r){var a=t.payload,n=t.callback,o=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({type:"updateGoodsColorById",payload:a});case 2:n&&n();case 3:case"end":return e.stop()}},e,this)}),clearDetail:i.default.mark(function e(t,r){var a=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({type:"setDetail",payload:null});case 2:case"end":return e.stop()}},e,this)}),merge:i.default.mark(function e(t,r){var a,n=t.payload,o=t.callback,u=r.call,s=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(p.merge,n);case 2:if(a=e.sent,!a.success){e.next=9;break}return e.next=6,s({type:"mergeGoodsType",payload:n});case 6:o&&o(),e.next=10;break;case 9:c.default.error(a.data);case 10:case"end":return e.stop()}},e,this)}),mergeGoodsColor:i.default.mark(function e(t,r){var a,n=t.payload,o=t.callback,u=r.call,s=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(p.mergeGoodsColor,n);case 2:if(a=e.sent,!a.success){e.next=9;break}return e.next=6,s({type:"mergeGoodsColor",payload:n});case 6:o&&o(),e.next=10;break;case 9:c.default.error(a.data);case 10:case"end":return e.stop()}},e,this)}),navToGoodsColor:i.default.mark(function e(t,r){var a=t.payload,n=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(f.routerRedux.push("/goods/goods-color-editor/"+a));case 2:case"end":return e.stop()}},e,this)}),removeGoodsColor:i.default.mark(function e(t,r){var a,n=t.payload,o=t.callback,u=r.call,s=r.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(p.removeGoodsColor,n.id,n.goodsColorId);case 2:if(a=e.sent,!a.success){e.next=10;break}return e.next=6,s({type:"removeGoodsColorById",payload:n.goodsColorId});case 6:c.default.success("\u5220\u9664\u6210\u529f"),o&&o(),e.next=11;break;case 10:c.default.error(a.data);case 11:case"end":return e.stop()}},e,this)})},reducers:{changeStyleListLoading:function(e,t){var r=t.payload;return(0,s.default)({},e,{loading:r})},createFindFormValue:function(e,t){var r=t.payload;return(0,s.default)({},e,{findFormValue:(0,s.default)({},r)})},setListData:function(e,t){var r=t.payload;return(0,s.default)({},e,{listData:(0,s.default)({},r.listData),category:r.category,brands:r.brands})},resetedFormValue:function(e){return(0,s.default)({},e,{findFormValue:{name:null,gender:-1,category:-1,subCategory:-1,brand:-1,series:-1}})},setDetail:function(e,t){var r=t.payload;return r?(0,s.default)({},e,{detail:r.goodsType,goodsColorArr:r.goodsColorArr,brands:r.brands,category:r.category}):(0,s.default)({},e,{goodsColorArr:[],detail:null,brands:[],category:[],subCategory:[]})},setSubCategory:function(e,t){var r=t.payload;return(0,s.default)({},e,{subCategory:r})},updateGoodsColorById:function(e,t){for(var r=t.payload,a=[].concat((0,o.default)(e.goodsColorArr)),n=0;n<a.length;n+=1)if(a[n]._id===r._id){a[n]=r;break}return(0,s.default)({},e,{goodsColorArr:a})},mergeGoodsType:function(e,t){for(var r=t.payload,a=r.mergeTargetGoodsType,n=r.goodsTypeArr,u=[].concat((0,o.default)(e.listData.list)),d=u.length;--d>-1;)u[d]._id!==a&&n.includes(u[d]._id)&&u.splice(d,1);return(0,s.default)({},e,{listData:(0,s.default)({},e.listData,{list:u})})},mergeGoodsColor:function(e,t){for(var r=t.payload,a=r.mergeTargetGoodsColor,n=r.goodsColorArr,u=[].concat((0,o.default)(e.goodsColorArr)),d=u.length;--d>-1;)u[d]._id!==a&&n.includes(u[d]._id)&&u.splice(d,1);return(0,s.default)({},e,{goodsColorArr:u})},removeGoodsColorById:function(e,t){for(var r=t.payload,a=[].concat((0,o.default)(e.goodsColorArr)),n=0;n<a.length;n++)if(a[n]._id===r){a.splice(n,1);break}return(0,s.default)({},e,{goodsColorArr:a})}}},e.exports=t.default}});