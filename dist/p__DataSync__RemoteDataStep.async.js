(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{qq5p:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var a,r,c,o=n("43Yg"),s=n.n(o),i=n("/tCh"),l=n.n(i),u=n("scpF"),p=n.n(u),d=n("O/V9"),m=n.n(d),S=n("8aBX"),y=n.n(S),f=(n("yPdm"),n("Al2M")),h=n("i9FB"),w=n.n(h),E=n("LneV"),R=n("0ZCk"),b=n.n(R),C=n("qj9E"),M=n("rGSz"),N=n("0jxS"),D=n("C48c"),k=(n("zHco"),f["a"].Step),v=(a=Object(E["connect"])(function(e){var t=e.dataSyncNewMission;return{dataSyncNewMission:t}}),a((c=function(e){function t(){var e;return s()(this,t),e=p()(this,m()(t).call(this)),e.onStepChange=function(t){var n=e.props,a=n.dataSyncNewMission,r=n.dispatch,c=a.remoteSelectedPlatform,o=a.remoteSelectedResource;switch(t){case 0:r({type:"dataSyncNewMission/setCurrentRemoteDataStepAction",currentRemoteDataStep:t});break;case 1:""!==c?r({type:"dataSyncNewMission/setCurrentRemoteDataStepAction",currentRemoteDataStep:t}):C["a"].prompt.error("\u8bf7\u9009\u62e9\u96c6\u7fa4\u5e73\u53f0\uff01");break;case 2:""!==o?r({type:"dataSyncNewMission/setCurrentRemoteDataStepAction",currentRemoteDataStep:t}):C["a"].prompt.error("\u8bf7\u9009\u62e9\u5e73\u53f0\u8d44\u6e90\uff01");break}},e.isEnabled=function(e,t){return!(e>=t-1&&e<=t+1)},e}return y()(t,e),l()(t,[{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"dataSyncNewMission/setCurrentRemoteDataStepAction",currentRemoteDataStep:0}),e({type:"dataSyncNewMission/setRemoteSelectedPlatformAction",remoteSelectedPlatformInfo:{}}),e({type:"dataSyncNewMission/setRemoteSelectedResourceAction",remoteSelectedResourceInfo:{}})}},{key:"render",value:function(){var e=this.props,t=(e.children,e.dataSyncNewMission),n=t.currentRemoteDataStep;return w.a.createElement(h["Fragment"],null,w.a.createElement(h["Fragment"],null,w.a.createElement(f["a"],{onChange:this.onStepChange,current:n,className:b.a.steps},w.a.createElement(k,{title:"\u9009\u62e9\u96c6\u7fa4\u5e73\u53f0",disabled:this.isEnabled(0,n)}),w.a.createElement(k,{title:"\u9009\u62e9\u5e73\u53f0\u8d44\u6e90",disabled:this.isEnabled(1,n)}),w.a.createElement(k,{title:"\u6fc0\u6d3b",disabled:this.isEnabled(2,n)}))),w.a.createElement(h["Fragment"],null,0===n?w.a.createElement(M["default"],null):1===n?w.a.createElement(N["default"],null):w.a.createElement(D["default"],null)))}}]),t}(h["PureComponent"]),r=c))||r)}}]);