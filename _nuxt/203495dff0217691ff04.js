(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("790a7675",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r=n(306);n.n(r).a},309:function(t,e,n){(e=n(14)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},310:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(308),n(5)),l=n(39),c=n.n(l),d=n(299),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;c()(component,{VIcon:d.a})},319:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2110844c",content,!0,{sourceMap:!1})},320:function(t,e,n){var content=n(360);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0f0f4320",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";var r=n(319);n.n(r).a},358:function(t,e,n){(e=n(14)(!1)).push([t.i,".alert{padding:8px;color:red;font-size:12px}.alert a:link,.alert a:visited,.alert a:hover,.alert a:active{color:red}.WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},359:function(t,e,n){"use strict";var r=n(320);n.n(r).a},360:function(t,e,n){(e=n(14)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#008830;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},377:function(t,e,n){var content=n(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("f4c3005e",content,!0,{sourceMap:!1})},378:function(t,e,n){var content=n(577);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("e9512022",content,!0,{sourceMap:!1})},379:function(t,e,n){var content=n(580);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7c16c3e2",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(582);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7a93a90e",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";var r=n(1).a.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},computed:{linkTag:function(){return this.isInternalLink?"nuxt-link":"a"},linkAttrs:function(){return this.isInternalLink?{to:this.url,class:"StaticInfo"}:{href:this.url,class:"StaticInfo"}},isInternalLink:function(){return!/^https?:\/\//.test(this.url)}}}),o=(n(359),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.linkTag,t._b({tag:"component"},"component",t.linkAttrs,!1),[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},402:function(t,e,n){"use strict";var r=n(1),o=n(108),l=r.a.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(o.a)(t)}}}),c=(n(357),n(5)),d=n(39),f=n.n(d),h=n(299),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n    "),t._m(0)],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"alert"},[this._v("※\n      "),e("a",{attrs:{href:"https://twitter.com/ngs_ken_iryou",target:"_blank"}},[this._v("長崎県医療政策課のTwitter情報を表示しています。")])])}],!1,null,null,null);e.a=component.exports;f()(component,{VIcon:h.a})},571:function(t,e,n){"use strict";n(24),n(11);var r=n(3),o=(n(62),n(178),n(37),n(7),n(6),n(16),n(36),n(40),n(180),n(1)),l=n(133),c=n(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(c.z)(r)]=e(),n}),{})}var v=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:v}})),_=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},y=m("justify",(function(){return{type:String,default:null,validator:_}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},C=m("alignContent",(function(){return{type:String,default:null,validator:w}})),k={align:Object.keys(x),justify:Object.keys(y),alignContent:Object.keys(C)},$={align:"align",justify:"justify",alignContent:"align-content"};function D(t,e,n){var r=$[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var j=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},x,{justify:{type:String,default:null,validator:_}},y,{alignContent:{type:String,default:null,validator:w}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,c="";for(var d in n)c+=String(n[d]);var f=j.get(c);return f||function(){var t,e;for(e in f=[],k)k[e].forEach((function(t){var r=n[t],o=D(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),j.set(c,f)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},572:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/07","url":"https://twitter.com/ngs_ken_iryou/status/1247368091253608449","text":"令和2年4月7日（火）9時現在、長崎県内の新型コロナウイルス感染症の状況についてお知らせします。PCR等検査陽性者　12人（前日比±0人）PCR等検査実施人数　702人（+54人）"},{"date":"2020/04/06","url":"https://www.pref.nagasaki.jp/bunrui/hukushi-hoken/kansensho/corona_message/","text":"感染された方々は日常生活の中で意図せず感染されたものであり、現在入院して治療を行っておられます。感染者及びその家族のプライバシーには十分、ご配慮をいただき、人権について尊重をしていただきますよう、あわせてお願いいたします。"},{"date":"2020/04/05","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1586073510.pdf","text":"本県12例目の感染者が確認されました。積極的疫学調査を確実に行い、感染拡大防止に努めてまいります。県民の皆さまには、感染予防の取組をお願いするとともに、感染者、その家族のプライバシーには十分ご配慮をお願いします。"},{"date":"2020/04/04","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1586001476.pdf","text":"本県11例目の感染者が確認されました。積極的疫学調査を確実に行い、感染拡大防止に努めてまいります。県民の皆さまには、感染予防の取組をお願いするとともに、感染者、その家族のプライバシーには十分ご配慮をお願いします。"},{"date":"2020/04/04","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1585980258.pdf","text":"本県10例目の感染者が確認されました。積極的疫学調査を確実に行い、感染拡大防止に努めてまいります。県民の皆さまには、感染予防の取組をお願いするとともに、感染者、その家族ののプライバシーには十分ご配慮をお願いします。"},{"date":"2020/04/02","url":"https://www.pref.nagasaki.jp/shared/uploads/2020/04/1585869756.pdf","text":"佐世保市において、本県7,8例目となる新型コロナウイルス感染症の患者が発生しました。"}]}')},573:function(t){t.exports=JSON.parse('{"contacts":{"date":"","data":[]},"querents":{"date":"","data":[]},"patients":{"date":"","data":[]},"patients_summary":{"date":"","data":[]},"discharges_summary":{"date":"","data":[]},"inspections":{"date":"","data":[]},"inspections_summary":{"date":"","data":{},"labels":[]},"lastUpdate":"2020/04/07 12:40","main_summary":{"attr":"検査実施人数","value":0,"children":[{"attr":"陽性患者数","value":0,"children":[{"attr":"入院中","value":0,"children":[{"attr":"軽症・中等症","value":0},{"attr":"重症","value":0}]},{"attr":"退院","value":0},{"attr":"死亡","value":0}]}]}}')},574:function(t,e,n){"use strict";var r=n(377),o=n.n(r);e.default=o.a},575:function(t,e,n){(e=n(14)(!1)).push([t.i,".note_2FWg4{margin-top:10px;margin-bottom:0;font-size:12px;color:#707070}",""]),e.locals={note:"note_2FWg4"},t.exports=e},576:function(t,e,n){"use strict";var r=n(378),o=n.n(r);e.default=o.a},577:function(t,e,n){(e=n(14)(!1)).push([t.i,".GraphDesc_2ov-E{width:100%;margin:0;margin-bottom:0 !important;padding-left:0 !important;font-size:12px;color:#707070;list-style:none}.DataViewDesc_BOyA_{margin-top:10px;margin-bottom:0 !important;font-size:12px;line-height:15px;color:#707070}",""]),e.locals={GraphDesc:"GraphDesc_2ov-E",DataViewDesc:"DataViewDesc_BOyA_"},t.exports=e},578:function(t){t.exports=JSON.parse('{"healthCenters":{"date":"2020/03/25 09:00","data":[{"保健所名":"長崎県相談センター","担当部署":"地域保健課","電話番号":"070-4223-4371","開設時間":"平日　9時から17時45分","夜間":"土日祝日の9時から17時30分まで 070-2667-3211","管轄":"長崎市、佐世保市を除く県内","所在地":""},{"保健所名":"西彼保健所","担当部署":"地域保健課","電話番号":"095-856-5059","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"西海市、長与町、時津町","所在地":"長崎市滑石1-9-5"},{"保健所名":"県央保健所","担当部署":"地域保健課","電話番号":"0957-26-9870","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"諫早市、大村市、東彼杵町、川棚町、波佐見町","所在地":"諫早市栄田町26-49"},{"保健所名":"県南保健所","担当部署":"地域保健課","電話番号":"0957-62-3289","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"島原市、雲仙市、南島原市","所在地":"島原市新田町347-9"},{"保健所名":"県北保健所","担当部署":"地域保健課","電話番号":"0950-57-3933","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"平戸市、松浦市、佐々町","所在地":"平戸市田平町里免1126-1"},{"保健所名":"五島保健所","担当部署":"企画保健課","電話番号":"0959-72-3125","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"五島市","所在地":"五島市福江町7-2"},{"保健所名":"上五島保健所","担当部署":"企画保健課","電話番号":"0959-42-1121","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"新上五島町、小値賀町","所在地":"南松浦郡新上五島町有川郷2254-17"},{"保健所名":"壱岐保健所","担当部署":"企画保健課","電話番号":"0920-47-0260","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"壱岐市","所在地":"壱岐市郷ノ浦町本村触620-5"},{"保健所名":"対馬保健所","担当部署":"企画保健課","電話番号":"0920-52-0166","開設時間":"平日　9時から17時45分","夜間":"closed","管轄":"対馬市","所在地":"対馬市厳原町宮谷224"},{"保健所名":"長崎市保健所","担当部署":"長崎市帰国者・接触者相談センター","電話番号":"095-801-1712","開設時間":"平日　9時から17時30分","夜間":"closed","管轄":"長崎市","所在地":"長崎市桜町6番3号"},{"保健所名":"佐世保市保健所","担当部署":"健康づくり課","電話番号":"0956-25-9646","開設時間":"平日　9時から17時30分","夜間":"closed","管轄":"佐世保市","所在地":"佐世保市高砂町5番1号"}]}}')},579:function(t,e,n){"use strict";var r=n(379),o=n.n(r);e.default=o.a},580:function(t,e,n){(e=n(14)(!1)).push([t.i,".cardTable_1FUN-.v-data-table_1o_Cb th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable_1FUN-.v-data-table_1o_Cb th.text-center_3a8pD{text-align:center}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr{color:#333}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr td.text-center_3a8pD{text-align:center}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable_1FUN-.v-data-table_1o_Cb tbody tr:not(:last-child) td:not(.v-data-table__mobile-row_Plxq3){border:none}.alert_fJKeM{padding:8px;font-size:12px;color:red}",""]),e.locals={cardTable:"cardTable_1FUN-","v-data-table":"v-data-table_1o_Cb","text-center":"text-center_3a8pD","v-data-table__mobile-row":"v-data-table__mobile-row_Plxq3",alert:"alert_fJKeM"},t.exports=e},581:function(t,e,n){"use strict";var r=n(380),o=n.n(r);e.default=o.a},582:function(t,e,n){(e=n(14)(!1)).push([t.i,".MainPage_10iuZ .Header_27KFz[data-v-375e1252]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage_10iuZ .Header_27KFz[data-v-375e1252]{flex-direction:column;align-items:baseline}}.MainPage_10iuZ .UpdatedAt_1RX0H[data-v-375e1252]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage_10iuZ .Annotation_13r3n[data-v-375e1252]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage_10iuZ .Annotation_13r3n[data-v-375e1252]{margin:0 0 0 auto}}.MainPage_10iuZ .DataBlock_2JEUC[data-v-375e1252]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage_10iuZ .DataBlock_2JEUC .DataCard_2Ypz_[data-v-375e1252]{padding:10px}}@media screen and (max-width: 600px){.MainPage_10iuZ .DataBlock_2JEUC .DataCard_2Ypz_[data-v-375e1252]{padding:4px 8px}}.alert_q6SiQ[data-v-375e1252]{padding:8px;color:red}",""]),e.locals={MainPage:"MainPage_10iuZ",Header:"Header_27KFz",UpdatedAt:"UpdatedAt_1RX0H",Annotation:"Annotation_13r3n",DataBlock:"DataBlock_2JEUC",DataCard:"DataCard_2Ypz_",alert:"alert_q6SiQ"},t.exports=e},632:function(t,e,n){"use strict";n.r(e);n(34);var r=n(4),o=n(1),l=n(310),c=n(402),d=n(401),f=n(107),h=n(572),m=n(573),v=n(417),x=n(314),_=n(436),y={components:{DataView:x.a,ConfirmedCasesDetailsTable:_.a},computed:{lastUpdate:function(){return this.$store.state.lastUpdate},confirmedCases:function(){var t=this.$store.state.bodik2,e=this.$store.state.allCount,n=t.length,r=this.$store.state.bodik2.filter((function(t){return"1"===t.退院済フラグ})).length,o=this.$store.state.bodik2.filter((function(t){return"1"===t.死亡フラグ})).length,summary=m.main_summary;summary.value=e,summary.children[0].value=n,summary.children[0].children[0].value=n-r,summary.children[0].children[0].children[0].value=0,summary.children[0].children[0].children[1].value=0,summary.children[0].children[1].value=r,summary.children[0].children[2].value=o;var l=Object(v.a)(summary);return l}},methods:{}},w=n(574),C=n(5),k=n(39),$=n.n(k),D=n(627);var component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.lastUpdate},scopedSlots:t._u([{key:"button",fn:function(){return[n("p",{class:t.$style.note},[t._v("\n        "+t._s(t.$t("（注）チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n      ")])]},proxy:!0}])},[t._v(" "),n("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1))],1)],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null),j=component.exports;$()(component,{VCol:D.a});n(61);var S=n(323),O={components:{TimeBarChart:n(326).a},computed:{lastUpdate:function(){return this.$store.state.lastUpdate},data:function(){var t=this.$store.state.lastUpdate2,e=this.$store.state.groups,n=this.$store.state.kensaDates.map((function(t){return t}));null==n.find((function(element){return element===t}))&&n.push(t);var r=n.map((function(t){return{"日付":t,"小計":e[t]?e[t].length:0}})),o=Object(S.a)(r),data={lastUpdate:t,patientsGraph:o};return data}}},T=Object(C.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.data.patientsGraph,date:this.lastUpdate,unit:this.$t("人"),url:"https://data.bodik.jp/dataset/420000_covidpatients/resource/de7ce61e-1849-47a1-b758-bca3f809cdf8"}})],1)}),[],!1,null,null,null),N=T.exports;$()(T,{VCol:D.a});n(50),n(11),n(7);var I=n(423),W={components:{DataTable:n(437).a},computed:{data:function(){var t=this.$store.state.lastUpdate,e=this.$store.state.attributes.map((function(t){return t})),n=Object(I.a)(e),r={lText:e.length.toLocaleString(),sText:this.$t("{date}の累計",{date:t}),unit:this.$t("人")},o=!0,l=!1,c=void 0;try{for(var d,f=n.headers[Symbol.iterator]();!(o=(d=f.next()).done);o=!0){var header=d.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){l=!0,c=t}finally{try{o||null==f.return||f.return()}finally{if(l)throw c}}var h=!0,m=!1,v=void 0;try{for(var x,_=n.datasets[Symbol.iterator]();!(h=(x=_.next()).done);h=!0){var y=x.value;if(y["居住地"]=this.getTranslatedWording(y["居住地"]),y["性別"]=this.getTranslatedWording(y["性別"]),y["退院"]=this.getTranslatedWording(y["退院"]),"10歳未満"===y["年代"])y["年代"]=this.$t("10歳未満");else if("不明"===y["年代"])y["年代"]=this.$t("不明");else{var w=y["年代"].substring(0,2);y["年代"]=this.$t("{age}代",{age:w})}}}catch(t){m=!0,v=t}finally{try{h||null==_.return||_.return()}finally{if(m)throw v}}var data={attributes:e,patientsTable:n,sumInfoOfPatients:r};return data}},methods:{getTranslatedWording:function(t){return"-"===t||"‐"===t||null==t?t:this.$t(t)}}},z=Object(C.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.data.patientsTable,"chart-option":{},date:this.data.attributes,info:this.data.sumInfoOfPatients,url:"https://data.bodik.jp/dataset/420000_covidpatients/resource/de7ce61e-1849-47a1-b758-bca3f809cdf8",source:this.$t("オープンデータを入手")}})],1)}),[],!1,null,null,null),U=z.exports;$()(z,{VCol:D.a});n(76);var A=n(8),L=n.n(A),M=(n(31),n(3)),P=n(132),E=n(403),B=n(330),V=n(324),F={created:function(){this.canvas=!0},components:{DataView:x.a,DataSelector:E.a,DataViewBasicInfoPanel:B.a},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,default:function(){return[]}},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},unit:{type:String,default:""}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayInfo:function(){return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:this.labels[this.labels.length-1]})),unit:this.unit}:{lText:this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の全体累計",{date:this.labels[this.labels.length-1]})),unit:this.unit}},displayData:function(){var t=this,e=Object(V.a)(this.chartData.length);return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:n,backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}:{labels:this.labels,datasets:this.chartData.map((function(n,r){return{label:t.items[r],data:t.cumulative(n),backgroundColor:e[r].fillColor,borderColor:e[r].strokeColor,borderWidth:1}}))}},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"}].concat(Object(P.a)(this.items.map((function(text,t){return{text:text,value:String(t)}}))))},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign.apply(Object,[{text:t.labels[i]}].concat(Object(P.a)(t.items.map((function(e,n){return Object(M.a)({},n,t.displayData.datasets[n].data[i])})))))}))},options:function(){var t=this,e=this.unit,n=this.eachArraySum(this.chartData),data=this.chartData,r=this.chartData.map((function(e){return t.cumulative(e)})),o=this.eachArraySum(r),l={tooltips:{displayColors:!1,callbacks:{label:function(l){var c,d;return"transition"===t.dataKind?(c=n[l.index].toLocaleString(),d=data[l.datasetIndex][l.index].toLocaleString()):(c=o[l.index].toLocaleString(),d=r[l.datasetIndex][l.index].toLocaleString()),"".concat(t.dataLabels[l.datasetIndex],": ").concat(d," ").concat(e," (").concat(t.$t("合計"),": ").concat(c," ").concat(e,")")},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}};return"true"===this.$route.query.ogp&&Object.assign(l,{animation:{duration:0}}),l}},methods:{cumulative:function(t){var e=[],n=0;return t.forEach((function(t){n+=t,e.push(n)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]);return e}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},H=o.a.extend(F),K=n(576),J=n(630);var R=Object(C.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.GraphDesc},[n("li",[t._v("\n        "+t._s(t.$t("（注）医療機関が保険適用で行った検査は含まれていない"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）同一の対象者について複数の検体を検査する場合あり"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（注）速報値として公開するものであり、後日確定データとして修正される場合あり"))+"\n      ")])]),t._v(" "),n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("bar",{ref:"barChart",style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.options,height:240}}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}}),t._v(" "),n("p",{class:t.$style.DataViewDesc},[t._t("additionalNotes")],2)],1)}),[],!1,(function(t){this.$style=K.default.locals||K.default}),null,null),G=R.exports;$()(R,{VDataTable:J.a});var Z={components:{TimeStackedBarChart:G},computed:{lastUpdate:function(){return this.$store.state.lastUpdate},data:function(){var t=this.$store.state.bodik1,e=t.map((function(t){return L()(t.年月日).format("MM/DD")})),data={inspectionsGraph:[t.map((function(t){return t.件数?Number(t.件数):0})),t.map((function(t){return t.件数-t.件数}))],inspectionsItems:[this.$t("県内発生（※1）"),this.$t("")],inspectionsLabels:e,inspectionsDataLabels:[this.$t("県内"),this.$t("その他.graph")]};return data}}},Y=Object(C.a)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-stacked-bar-chart",{attrs:{title:t.$t("検査実施件数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":t.data.inspectionsGraph,date:t.lastUpdate,items:t.data.inspectionsItems,labels:t.data.inspectionsLabels,unit:t.$t("件.tested"),"data-labels":t.data.inspectionsDataLabels},scopedSlots:t._u(["ja-basic"!==t.$i18n.locale?{key:"additionalNotes",fn:function(){return[t._v("\n      "+t._s(t.$t("※1: 疑い例・接触者調査"))+"\n    ")]},proxy:!0}:null],null,!0)})],1)}),[],!1,null,null,null),Q=Y.exports;$()(Y,{VCol:D.a});var X=n(578),tt=[{text:"保健所名",value:"保健所名"},{text:"担当部署",value:"担当部署"},{text:"電話番号",value:"電話番号"},{text:"開設時間",value:"開設時間"},{text:"夜間",value:"夜間"},{text:"管轄",value:"管轄"},{text:"所在地",value:"所在地"}],et=o.a.extend({components:{DataView:x.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))}}),at=n(579);var nt=Object(C.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span",[n("p",{class:[t.$style.alert]},[t._v("\n        ※\n        相談センター開所時間以外の緊急対応は、最寄の保健所までお電話ください。\n      ")])])]},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:700,"fixed-header":!0,"mobile-breakpoint":0}})],1)}),[],!1,(function(t){this.$style=at.default.locals||at.default}),null,null),it=nt.exports;$()(nt,{VDataTable:J.a});var st={components:{DataTableHealthCenter:it},data:function(){var data={patientsTable:function(data){var t={headers:tt,datasets:[]};return data.forEach((function(e){var n,r,o,l,c,d,f,h={"保健所名":null!==(n=e["保健所名"])&&void 0!==n?n:"不明","担当部署":null!==(r=e["担当部署"])&&void 0!==r?r:"不明","電話番号":null!==(o=e["電話番号"])&&void 0!==o?o:"不明","開設時間":null!==(l=e["開設時間"])&&void 0!==l?l:"不明","夜間":null!==(c=e["夜間"])&&void 0!==c?c:"不明","管轄":null!==(d=e["管轄"])&&void 0!==d?d:"不明","所在地":null!==(f=e["所在地"])&&void 0!==f?f:"不明"};t.datasets.push(h)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}(X.healthCenters.data)};return data}},ot=Object(C.a)(st,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[e("data-table-health-center",{attrs:{title:"帰国者接触者相談センター","title-id":"health-center","chart-data":this.patientsTable,"chart-option":{}}})],1)}),[],!1,null,null,null),lt=ot.exports;$()(ot,{VCol:D.a});var ct=n(108),ut="https://data.bodik.jp/api/action/datastore_search?resource_id=",pt=o.a.extend({components:{PageHeader:l.a,WhatsNew:c.a,StaticInfo:d.a,ConfirmedCasesDetailsCard:j,ConfirmedCasesNumberCard:N,ConfirmedCasesAttributesCard:U,TestedNumberCard:Q,HealthCenterCard:lt},fetch:function(t){var e=t.store,n=t.app.$axios;return Object(r.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.get(ut+"71e83845-2648-4cb3-a69d-9f5f5412feb2");case 3:return r=t.sent,e.commit("setBodicData1",r.data.result.records),t.next=7,n.get(ut+"de7ce61e-1849-47a1-b758-bca3f809cdf8");case 7:o=t.sent,e.commit("setBodicData2",o.data.result.records),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0,"error");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},data:function(){var t=this.$store.state.lastUpdate,data={Data:f,lastUpdate:t,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("県内の最新感染動向")},newsItems:h.newsItems};return data},computed:{updatedAt:function(){return Object(ct.c)(this.$data.Data.lastUpdate)}},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{},head:function(){return{title:this.$t("県内の最新感染動向")}}}),ft=n(581),ht=n(422),mt=n(571);var vt=Object(C.a)(pt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.lastUpdate))]),t._v(" "),n("span",{class:[t.$style.alert]},[t._v("※ データの更新は平日（県庁稼働日）のお昼頃になります。")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("tested-number-card")],1),t._v(" "),n("v-row",[n("health-center-card")],1),t._v(" "),n("v-divider")],1)}),[],!1,(function(t){this.$style=ft.default.locals||ft.default}),"375e1252",null);e.default=vt.exports;$()(vt,{VDivider:ht.a,VRow:mt.a})}}]);