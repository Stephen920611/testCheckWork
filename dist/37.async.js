(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"20K/":function(e,a,t){"use strict";t.r(a);t("jDyY");for(var s=t("q6Oz"),l=(t("Q1Fi"),t("7NCv")),n=(t("Hq/V"),t("fAnr")),r=(t("PX3s"),t("SXFb")),i=(t("I4dy"),t("+qVy")),m=t("i9FB"),c=t.n(m),d=t("1Haz"),o=t("BS6i"),g=t.n(o),E=t("lVjH"),u=t.n(E),p=t("KTCi"),k=i["a"].RangePicker,y=r["a"].TabPane,f=[],N=0;N<7;N+=1)f.push({title:Object(d["formatMessage"])({id:"app.analysis.test"},{no:N}),total:323234});var M=Object(m["memo"])(function(e){var a=e.rangePickerValue,t=e.salesData,i=e.isActive,m=e.handleRangePickerChange,o=e.loading,E=e.selectDate;return c.a.createElement(s["a"],{loading:o,bordered:!1,bodyStyle:{padding:0}},c.a.createElement("div",{className:u.a.salesCard},c.a.createElement(r["a"],{tabBarExtraContent:c.a.createElement("div",{className:u.a.salesExtraWrap},c.a.createElement("div",{className:u.a.salesExtra},c.a.createElement("a",{className:i("today"),onClick:function(){return E("today")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-day",defaultMessage:"All Day"})),c.a.createElement("a",{className:i("week"),onClick:function(){return E("week")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-week",defaultMessage:"All Week"})),c.a.createElement("a",{className:i("month"),onClick:function(){return E("month")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-month",defaultMessage:"All Month"})),c.a.createElement("a",{className:i("year"),onClick:function(){return E("year")}},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.all-year",defaultMessage:"All Year"}))),c.a.createElement(k,{value:a,onChange:m,style:{width:256}})),size:"large",tabBarStyle:{marginBottom:24}},c.a.createElement(y,{tab:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.sales",defaultMessage:"Sales"}),key:"sales"},c.a.createElement(l["a"],null,c.a.createElement(n["a"],{xl:16,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:u.a.salesBar},c.a.createElement(p["a"],{height:295,title:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.sales-trend",defaultMessage:"Sales Trend"}),data:t}))),c.a.createElement(n["a"],{xl:8,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:u.a.salesRank},c.a.createElement("h4",{className:u.a.rankingTitle},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.sales-ranking",defaultMessage:"Sales Ranking"})),c.a.createElement("ul",{className:u.a.rankingList},f.map(function(e,a){return c.a.createElement("li",{key:e.title},c.a.createElement("span",{className:"".concat(u.a.rankingItemNumber," ").concat(a<3?u.a.active:"")},a+1),c.a.createElement("span",{className:u.a.rankingItemTitle,title:e.title},e.title),c.a.createElement("span",{className:u.a.rankingItemValue},g()(e.total).format("0,0")))})))))),c.a.createElement(y,{tab:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.visits",defaultMessage:"Visits"}),key:"views"},c.a.createElement(l["a"],null,c.a.createElement(n["a"],{xl:16,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:u.a.salesBar},c.a.createElement(p["a"],{height:292,title:c.a.createElement(d["FormattedMessage"],{id:"app.analysis.visits-trend",defaultMessage:"Visits Trend"}),data:t}))),c.a.createElement(n["a"],{xl:8,lg:12,md:12,sm:24,xs:24},c.a.createElement("div",{className:u.a.salesRank},c.a.createElement("h4",{className:u.a.rankingTitle},c.a.createElement(d["FormattedMessage"],{id:"app.analysis.visits-ranking",defaultMessage:"Visits Ranking"})),c.a.createElement("ul",{className:u.a.rankingList},f.map(function(e,a){return c.a.createElement("li",{key:e.title},c.a.createElement("span",{className:"".concat(u.a.rankingItemNumber," ").concat(a<3?u.a.active:"")},a+1),c.a.createElement("span",{className:u.a.rankingItemTitle,title:e.title},e.title),c.a.createElement("span",null,g()(e.total).format("0,0")))})))))))))});a["default"]=M}}]);