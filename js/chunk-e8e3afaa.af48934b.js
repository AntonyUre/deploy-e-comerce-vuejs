(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8e3afaa"],{"21eb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-credit-card"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"box-runway"},[t._m(0),a("div",{staticClass:"nav_button"},[a("p",{staticClass:"sub-title"},[t._v("Selecciona tu método de pago")]),a("div",{staticClass:"box-tabs"},[a("button",{staticClass:"btn_animate on",on:{click:t.creditCard}},[t._v(" Tarjeta de crédito ")]),a("button",{staticClass:"btn_animate",on:{click:t.tarjetaDebito}},[t._v(" Tarjeta de débito ")]),a("button",{staticClass:"btn_animate",on:{click:t.pagoEfectivo}},[t._v(" Depósito Pago Efectivo ")])])]),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"container_on_of"},[a("p",{staticClass:"sub-title"},[t._v("Solicitar factura")]),a("ButtonOnOffComponent")],1),t._m(4)]),a("div",{staticClass:"box-list"},[a("div",{staticClass:"list-items"},[a("div",t._l(t.totalProducts,(function(e){return a("CardList",{key:e.id,attrs:{imagen:e.imagen,nombre:e.nombre,precio:e.precio,id:e.id},on:{remove:function(a){return t.remove(e)}}})})),1),a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"Agrega un código de descuento"}}),a("hr"),t._m(5)])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title_inline"},[s("img",{attrs:{src:a("27e4"),alt:""}}),s("h2",[t._v("Pasarela de pagos")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container_pay"},[a("p",{staticClass:"sub-title"},[t._v("Depósito Pago Efectivo")]),a("div",{staticClass:"box-inputs"},[a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"Documento de indentidad"}}),a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"Correo electrónico"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container_credit_card"},[a("p",{staticClass:"sub-title"},[t._v("Ingresa la información de tu tarjeta")]),a("div",{staticClass:"container-left-right"},[a("div",{staticClass:"container-left"},[a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"Franco Torres"}}),a("div",{staticClass:"box-inputs-tres"},[a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"Mes"}}),a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"Año"}}),a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"cvc/cvv"}})])]),a("div",{staticClass:"box-inputs"},[a("input",{staticClass:"input-n",attrs:{type:"text",placeholder:"Correo electrónico"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-dues"},[a("p",{staticClass:"sub-title"},[t._v("Nº de cuotas")]),a("div",{staticClass:"box-inputs-dues"},[a("button",[t._v("01")]),a("button",[t._v("02")]),a("button",[t._v("03")]),a("button",[t._v("04")]),a("button",[t._v("05")]),a("button",[t._v("06")]),a("button",[t._v("12")]),a("button",[t._v("24")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-button"},[a("button",{staticClass:"btn_static center"},[t._v("Finalizar compra")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-pay"},[a("span",[t._v("Precio final")]),a("span",[t._v("S/ 600.00")])])}],n=a("5530"),c=a("2f62"),o=a("6521"),r=a("c4ba"),l={name:"CreditCard",components:{ButtonOnOffComponent:o["a"],CardList:r["a"]},computed:Object(n["a"])({},Object(c["c"])({totalProducts:function(t){return t.HomeStore.totalProducts}})),methods:Object(n["a"])(Object(n["a"])({creditCard:function(){this.$router.push({path:"/pago/tarjeta-de-credito"})},tarjetaDebito:function(){this.$router.push({path:"/pago/tarjeta-de-debito"})},pagoEfectivo:function(){this.$router.push({path:"/pago/efectivo"})}},Object(c["b"])({removeProduct:"HomeStore/removeProduct"})),{},{remove:function(t){this.removeProduct(t)}})},u=l,d=a("2877"),p=Object(d["a"])(u,s,i,!1,null,null,null);e["default"]=p.exports},"27e4":function(t,e,a){t.exports=a.p+"img/arrow.ff9e5dc9.svg"},6521:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn_on_off"},[a("ul",{staticClass:"tg-list"},[a("li",{staticClass:"tg-list-item"},[a("input",{staticClass:"tgl tgl-light",attrs:{id:"cb1",type:"checkbox"}}),a("label",{staticClass:"tgl-btn",attrs:{for:"cb1"}})])])])}],n={name:"ButtonOnOff"},c=n,o=a("2877"),r=Object(o["a"])(c,s,i,!1,null,"42f65498",null);e["a"]=r.exports},c4ba:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"firt-section"},[a("div",{staticClass:"checkout-card"},[a("figure",[a("img",{staticClass:"cardList-img",attrs:{src:t.imagen}})]),a("div",{staticClass:"checkout-align"},[a("h2",[t._v(t._s(t.nombre))]),a("h3",[t._v("Dto. 25%")]),a("div",{staticClass:"amount-card"},[a("button",{on:{click:t.remove}},[t._v("Eliminar")]),a("div",{staticClass:"amount-second"},[t._v("S/"+t._s(t.precio))])])])]),a("div",{staticClass:"amount"},[t._v("S/"+t._s(t.precio))])])},i=[],n={name:"CardList",props:["nombre","precio","imagen","id"],methods:{remove:function(){this.$emit("remove")}}},c=n,o=(a("efbc"),a("2877")),r=Object(o["a"])(c,s,i,!1,null,null,null);e["a"]=r.exports},df87:function(t,e,a){},efbc:function(t,e,a){"use strict";a("df87")}}]);
//# sourceMappingURL=chunk-e8e3afaa.af48934b.js.map