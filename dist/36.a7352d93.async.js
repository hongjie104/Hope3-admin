webpackJsonp([36],{1154:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getTopSeries=t.setSeriesTop=t.setSeriesImg=t.fetchGoodsImgBySeriesId=t.remove=t.add=t.update=t.detail=t.find=void 0;var n=a(182),u=r(n),s=a(302),i=r(s),d=(t.find=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/api/admin/find_brand",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.detail=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/api/admin/detail_brand/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.update=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/api/admin/update_brand",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.add=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/api/admin/add_brand",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.remove=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/api/admin/remove_brand/"+t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.fetchGoodsImgBySeriesId=function(){var e=(0,i.default)(u.default.mark(function e(t,a,r){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/api/admin/fetch_goods_img_by_seriesId/"+t+"/"+a+"/"+r));case 1:case"end":return e.stop()}},e,this)}));return function(t,a,r){return e.apply(this,arguments)}}(),t.setSeriesImg=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/api/admin/set_seried_img",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.setSeriesTop=function(){var e=(0,i.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.post)(c.SERVER_URL+"/api/admin/set_series_top",t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTopSeries=function(){var e=(0,i.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.get)(c.SERVER_URL+"/api/admin/get_top_series"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a(303)),c=a(185)},712:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(298),u=r(n),s=a(15),i=r(s),d=a(306),c=r(d),o=a(182),f=r(o);a(307);var l=a(1154);t.default={namespace:"brand",state:{loading:!1,findFormValue:{name:null},listData:{list:[],pagination:{total:0,current:0}},detail:{},topSeriesArr:[]},effects:{find:f.default.mark(function e(t,a){var r,n=t.payload,u=a.call,s=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeStyleListLoading",payload:!0});case 2:return e.next=4,s({type:"createFindFormValue",payload:{name:n.name}});case 4:if(!n.resetFormValue){e.next=7;break}return e.next=7,s({type:"resetedFormValue"});case 7:return e.next=9,u(l.find,n);case 9:if(r=e.sent,!r.success){e.next=13;break}return e.next=13,s({type:"finded",payload:r.data});case 13:case"end":return e.stop()}},e,this)}),detail:f.default.mark(function e(t,a){var r,n=t.payload,u=a.call,s=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(l.detail,n);case 2:if(r=e.sent,!r.success){e.next=8;break}return e.next=6,s({type:"fetchDetail",payload:r.data});case 6:e.next=9;break;case 8:c.default.error(r.data);case 9:case"end":return e.stop()}},e,this)}),update:f.default.mark(function e(t,a){var r,n=t.payload,u=a.call,s=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(l.update,n);case 2:if(r=e.sent,!r.success){e.next=9;break}return e.next=6,s({type:"updated",payload:r.data});case 6:c.default.success("\u66f4\u65b0\u6210\u529f"),e.next=10;break;case 9:c.default.error(r.data);case 10:case"end":return e.stop()}},e,this)}),add:f.default.mark(function e(t,a){var r,n=t.payload,u=t.callback,s=a.call,i=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.add,n);case 2:if(r=e.sent,!r.success){e.next=9;break}return e.next=6,i({type:"added",payload:r.data});case 6:u&&u(),e.next=10;break;case 9:c.default.error(r.data);case 10:case"end":return e.stop()}},e,this)}),remove:f.default.mark(function e(t,a){var r,n=t.payload.id,u=a.call,s=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(l.remove,n);case 2:if(r=e.sent,!r.success){e.next=8;break}return e.next=6,s({type:"removed",payload:r.data});case 6:e.next=9;break;case 8:c.default.error(r.data);case 9:case"end":return e.stop()}},e,this)}),clearDetail:f.default.mark(function e(t,a){var r=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({type:"clearedDetail"});case 2:case"end":return e.stop()}},e,this)}),fetchGoodsImgBySeriesId:f.default.mark(function e(t,a){var r,n=t.payload,u=t.callback,s=a.call;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.fetchGoodsImgBySeriesId,n.seriesId,n.page,n.pageSize);case 2:r=e.sent,r.success?u&&u(r.data):c.default.error(r.data);case 4:case"end":return e.stop()}},e,this)}),setSeriesImg:f.default.mark(function e(t,a){var r,n=t.payload,u=t.callback,s=a.call,i=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.setSeriesImg,n);case 2:if(r=e.sent,!r.success){e.next=9;break}return e.next=6,i({type:"updateSeriedImg",payload:n});case 6:u&&u(),e.next=10;break;case 9:c.default.error(r.data);case 10:case"end":return e.stop()}},e,this)}),setSeriesTop:f.default.mark(function e(t,a){var r,n=t.payload,u=t.callback,s=a.call,i=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.setSeriesTop,n);case 2:if(r=e.sent,!r.success){e.next=14;break}if("topSeriesList"!==n.from){e.next=9;break}return e.next=7,i({type:"updatedTopSeries",payload:n});case 7:e.next=11;break;case 9:return e.next=11,i({type:"updated",payload:r.data});case 11:u&&u(),e.next=15;break;case 14:c.default.error(r.data);case 15:case"end":return e.stop()}},e,this)}),findTopSeries:f.default.mark(function e(t,a){var r,n=a.call,u=a.put;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(l.getTopSeries);case 2:if(r=e.sent,!r.success){e.next=8;break}return e.next=6,u({type:"setedSeriesTop",payload:r.data});case 6:e.next=9;break;case 8:c.default.error(r.data);case 9:case"end":return e.stop()}},e,this)})},reducers:{changeStyleListLoading:function(e,t){var a=t.payload;return(0,i.default)({},e,{loading:a})},createFindFormValue:function(e,t){var a=t.payload;return(0,i.default)({},e,{findFormValue:(0,i.default)({},a)})},finded:function(e,t){var a=t.payload;return(0,i.default)({},e,{loading:!1,listData:a})},resetedFormValue:function(e){return(0,i.default)({},e,{findFormValue:{name:null,onlyShowNoGoodsType:!1}})},fetchDetail:function(e,t){var a=t.payload;return a.series=a.series.map(function(e){return e.key=e._id,e}),(0,i.default)({},e,{detail:a})},updated:function(e,t){var a=t.payload;return(0,i.default)({},e,{detail:a})},clearedDetail:function(e){return(0,i.default)({},e,{detail:{}})},added:function(e,t){var a=t.payload;return(0,i.default)({},e,{listData:{list:[a].concat((0,u.default)(e.listData.list)),pagination:e.listData.pagination}})},removed:function(e,t){for(var a=t.payload,r=e.listData.list,n=0;n<r.length;n+=1)if(r[n]._id===a){r.splice(n,1);break}return(0,i.default)({},e,{listData:{list:[].concat((0,u.default)(r)),pagination:{total:e.listData.pagination.total-1,current:e.listData.pagination.current}}})},updateSeriedImg:function(e,t){for(var a=t.payload,r=[].concat((0,u.default)(e.detail.series)),n=0;n<r.length;n++)if(r[n]._id===a.seriesId){r[n].img=a.img;break}return(0,i.default)({},e,{detail:(0,i.default)({},e.detail,{series:r})})},setedSeriesTop:function(e,t){var a=t.payload;return(0,i.default)({},e,{topSeriesArr:a})},updatedTopSeries:function(e,t){for(var a=t.payload,r=[].concat((0,u.default)(e.topSeriesArr)),n=0;n<r.length;n++)if(r[n]._id===a.seriesId){r[n].is_top=a.isTop;break}return(0,i.default)({},e,{topSeriesArr:r})}}},e.exports=t.default}});