parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"P11/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../mixins/interface"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}exports.default={mixins:[t.default]};
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"no-wrap"},[this._v(this._s(this.value))])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}],"gCyO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../mixins/interface"),t=i(e),u=require("./display.vue"),r=i(u);function i(e){return e&&e.__esModule?e:{default:e}}exports.default={mixins:[t.default],computed:{inputType:function(){return"string"===this.type?"text":"number"}},components:{VDisplay:r.default}};
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-input",{staticClass:"input",attrs:{maxlength:t.length,type:t.inputType,readonly:!t.newItem,value:t.value},on:{input:function(e){t.$emit("input",e)}}}),t._v(" "),t.newItem?t._e():n("span",{staticClass:"immutable"},[t._v(t._s(t.$t("interfaces-primary-key-immutable")))])],1)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-ff2e5c",functional:void 0});})();
},{"../../../mixins/interface":"QdEO","./display.vue":"P11/"}]},{},["gCyO"], "__DirectusExtension__")