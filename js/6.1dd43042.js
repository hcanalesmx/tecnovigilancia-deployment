(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{7424:function(e,t,a){"use strict";a("e6cf");const i={url:"https://l89aqpjk44.execute-api.us-east-1.amazonaws.com",path:"/dev/"};var o=i,n=a("bc3a"),s=a.n(n);async function r(e,t){const a={headers:{"Content-Type":"application/json","x-api-key":'"'}},i=o.url+o.path+e;try{const e=await s.a.post(i,t,a);return e}catch(n){console.log(n)}}const c={revisaCodigo:e=>r("estatus-de-equipo",e),vinculaVentilador:e=>r("vincula-ventilador",e),desvinculaVentilador:e=>r("desvincula-ventilador",e),agregaReporte:e=>r("nueva-incidencia",e),obtieneTutoriales:e=>r("device-tutorials",e),pideToken:e=>r("get-signed-url",e)};t["a"]=c},"8b24":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("\n    "+e._s(e.getId)+"\n  ")]),a("div",{staticClass:"q-pa-md",staticStyle:{bottom:"-20px",right:"0px",position:"absolute"}})])},o=[],n=(a("e6cf"),a("ddb0"),a("2b3d"),a("7424")),s={name:"PageIndex",components:{},data(){return{numserie:""}},computed:{async getId(){this.$q.loading.show(),localStorage.removeItem("infoQR");let e=new URLSearchParams(window.location.search);if(e.has("id")){const t={NUMSERIE:e.get("id")},a=await n["a"].revisaCodigo(t);console.log(".....",a.data),a?(localStorage.infoQR=JSON.stringify(a.data),"EQUIPO NO REGISTRADO"==a.data.NUMSERIE?(this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Este ventilador no esta registrado en el sistema."}),this.$q.loading.hide()):"NONE"==a.data.IDUSUARIO?(this.$q.loading.hide(),this.$router.push("paciente")):(this.$q.loading.hide(),this.$router.push("estatus"))):(this.$q.loading.hide(),console.log("Error",a))}else this.$q.loading.hide(),this.$router.push("estatus")}}},r=s,c=a("2877"),d=a("9c40"),l=a("0016"),u=a("eebe"),h=a.n(u),p=Object(c["a"])(r,i,o,!1,null,null,null);t["default"]=p.exports;h()(p,"components",{QBtn:d["a"],QIcon:l["a"]})}}]);