(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"146b":function(e,a,t){},"5e09":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"q-pa-md",staticStyle:{margin:"0 auto","max-width":"800px"}},[t("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmitPaciente}},[t("div",{staticClass:"row q-mb-md justify-around"},[t("q-btn",{staticClass:"btn_regclinico"},[t("img",{staticStyle:{width:"30px"},attrs:{src:"registro_small.svg"}}),t("div",{staticStyle:{"padding-left":"20px"}},[e._v("REGISTRO CLÍNICO")])])],1),t("q-input",{directives:[{name:"show",rawName:"v-show",value:e.mostrar,expression:"mostrar"}],attrs:{outlined:"",label:"Número de serie"},model:{value:e.paciente.NUMSERIE,callback:function(a){e.$set(e.paciente,"NUMSERIE",a)},expression:"paciente.NUMSERIE"}}),t("q-input",{attrs:{outlined:"",label:"Nombre/Alias del paciente","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor ingrese identificador del paciente"}]},model:{value:e.paciente.nombre,callback:function(a){e.$set(e.paciente,"nombre",a)},expression:"paciente.nombre"}}),t("q-select",{attrs:{outlined:"",options:e.opciones,label:"- Seleccione una -"},model:{value:e.paciente.institucion,callback:function(a){e.$set(e.paciente,"institucion",a)},expression:"paciente.institucion"}}),t("div",{staticClass:"row q-pt-none quitarPading"},[t("p",[e._v("Género")])]),t("div",{staticClass:"row justify-around q-pt-none"},[t("q-radio",{attrs:{dense:"",val:"Femenino",label:"Femenino","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor seleccione género del paciente"}]},model:{value:e.paciente.sexo,callback:function(a){e.$set(e.paciente,"sexo",a)},expression:"paciente.sexo"}}),t("q-radio",{attrs:{dense:"",val:"Masculino",label:"Masculino","azy-rules":"",rules:[function(e){return e&&e.length>0||"Por favor seleccione género del paciente"}]},model:{value:e.paciente.sexo,callback:function(a){e.$set(e.paciente,"sexo",a)},expression:"paciente.sexo"}})],1),t("div",[t("q-badge",{attrs:{color:"secondary"}},[e._v("\n        Edad (años): "+e._s(e.paciente.edad)+"\n      ")]),t("q-slider",{attrs:{min:0,max:100,step:1,label:"",color:"#707070","lazy-rules":"",rules:[function(e){return e&&e>18||"Por favor ingrese edad"}]},model:{value:e.paciente.edad,callback:function(a){e.$set(e.paciente,"edad",a)},expression:"paciente.edad"}})],1),t("div",[t("q-badge",{attrs:{color:"secondary"}},[e._v("\n        Peso (kg): "+e._s(e.paciente.peso)+"\n      ")]),t("q-slider",{attrs:{min:20,max:200,step:1,label:"",color:"#707070","lazy-rules":"",rules:[function(e){return e&&e>18||"Por favor ingrese peso"}]},model:{value:e.paciente.peso,callback:function(a){e.$set(e.paciente,"peso",a)},expression:"paciente.peso"}})],1),t("div",[t("q-badge",{attrs:{color:"secondary"}},[e._v("\n        Estatura (cm): "+e._s(e.paciente.estatura)+"\n      ")]),t("q-slider",{attrs:{min:120,max:200,step:5,label:"",color:"#707070","lazy-rules":"",rules:[function(e){return e&&e>119||"Por favor ingrese estatura"}]},model:{value:e.paciente.estatura,callback:function(a){e.$set(e.paciente,"estatura",a)},expression:"paciente.estatura"}})],1),t("div",{staticClass:"row justify-around"},[t("q-btn",{staticClass:"btnForm",attrs:{label:"Cancelar",rounded:"",color:"primary",to:"/"}}),t("q-btn",{staticClass:"btnForm cEnviar",attrs:{label:"Enviar",rounded:"",type:"submit"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("\n    "+e._s(e.init)+"\n  ")])],1)},i=[],o=(t("e6cf"),t("ddb0"),t("2b3d"),t("7424")),s={name:"Paciente",data(){return{loading:!1,mostrar:!1,edad:0,sexo:"",catSexo:["Femenino","Masculino"],paciente:{nombre:"",NUMSERIE:"",sexo:"",edad:0,peso:20,estatura:120,cama:"",area:"",fechaInicio:"",institucion:""},opciones:["IMSS","HENM","ISSSTE","Hospital H+","Hospital Angeles"],camera:"auto",result:null,showCamera:!1}},methods:{async onSubmitPaciente(){let e=new URLSearchParams(window.location.search);this.$q.loading.show();const a={NUMSERIE:e.get("id"),NOMBRE:this.paciente.nombre,SEXO:this.paciente.sexo,EDAD:this.paciente.edad,ESTATURA:this.paciente.estatura},t=await o["a"].vinculaVentilador(a);console.log(".....",t.data),t?(this.$q.loading.hide(),console.log("--",t),this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"EL usuario ha sido vinculado con el ventilador automático"}),setTimeout((()=>{this.$router.push("/"),console.log("Enviar a principal??? escaneo SPLASH")}),800)):(this.$q.loading.hide(),console.log(err),this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"Ocurrió un error al tratar de vincular"}))},home(){console.log("Metodo home"),this.$router.push("/")},init(){console.log("Quitar"),this.$q.loading.hide()}}},r=s,c=(t("f947"),t("2877")),l=t("0378"),u=t("9c40"),d=t("27f9"),p=t("ddd8"),m=t("3786"),v=t("58a81"),b=t("c1d0"),g=t("eebe"),h=t.n(g),f=Object(c["a"])(r,n,i,!1,null,"347b568c",null);a["default"]=f.exports;h()(f,"components",{QForm:l["a"],QBtn:u["a"],QInput:d["a"],QSelect:p["a"],QRadio:m["a"],QBadge:v["a"],QSlider:b["a"]})},7424:function(e,a,t){"use strict";t("e6cf");const n={url:"https://l89aqpjk44.execute-api.us-east-1.amazonaws.com",path:"/dev/"};var i=n,o=t("bc3a"),s=t.n(o);async function r(e,a){const t={headers:{"Content-Type":"application/json","x-api-key":'"'}},n=i.url+i.path+e;try{const e=await s.a.post(n,a,t);return e}catch(err){console.log(err)}}const c={revisaCodigo:e=>r("estatus-de-equipo",e),vinculaVentilador:e=>r("vincula-ventilador",e),desvinculaVentilador:e=>r("desvincula-ventilador",e),agregaReporte:e=>r("nueva-incidencia",e),obtieneTutoriales:e=>r("device-tutorials",e),pideToken:e=>r("get-signed-url",e)};a["a"]=c},f947:function(e,a,t){"use strict";t("146b")}}]);