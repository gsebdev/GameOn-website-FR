!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,a){for(var i=0;i<a.length;i++){var n=a[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,a){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,"string");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===e(r)?r:String(r)),n)}var r}var a=function(){function e(t,a,i){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.ObjectConstructor=a,this.parameters=i,this.modalId=t,document.querySelector("main").insertAdjacentHTML("afterbegin",'<div id="'+this.modalId+'" class="bground"><div class="content"><span class="close"></span><div class="modal-body"></div></div></div></div>'),this.modalEl=document.querySelector("#"+this.modalId),this.CloseEl=document.querySelector("#"+this.modalId+" .close"),this.OpenElements=document.querySelectorAll(".modal-btn[data-target="+this.modalId+"]"),this.OpenElements.forEach((function(e){return e.addEventListener("click",n.open.bind(n))})),this.CloseEl.addEventListener("click",this.close.bind(this))}var a,i;return a=e,(i=[{key:"init",value:function(){var e=this,t=new this.ObjectConstructor(this.parameters);t.make(this.modalEl.querySelector(".modal-body")),t.init().then((function(t){"close"===t&&e.close(e)}))}},{key:"open",value:function(){this.init(this),this.modalEl.setAttribute("data-opened",!0),window.scrollTo({top:0})}},{key:"close",value:function(){this.modalEl.setAttribute("data-opened",!1),this.reset(this)}},{key:"reset",value:function(){this.modalEl.querySelector(".modal-body").innerHTML=""}}])&&t(a.prototype,i),Object.defineProperty(a,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(r)?r:String(r)),n)}var r}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.sent=!1,this.errors=null,this.data={},this.formEl=null}var t,a;return t=e,a=[{key:"init",value:function(){var e=this;return new Promise((function(t){e.formEl.addEventListener("submit",(function(a){a.preventDefault(),!1===e.sent?e.handleSubmit(e):!0===e.sent&&t("close")}))}))}},{key:"handleSubmit",value:function(){var e=this;this.validateAllData(this)?this.send(this.data):(this.errors=!0,this.formEl.querySelectorAll("input:not([type=submit])").forEach((function(t){return t.addEventListener("input",(function(t){e.validateSingleData(t.target.parentElement)}))})))}},{key:"make",value:function(e){var t="";t+='<form id="'.concat(this.form.id,'" name="').concat(this.form.name,'" action="').concat(this.form.action,'" method="').concat(this.form.method,'" novalidate><div class="loader"></div><span class="success-msg"></span>'),this.form.data.forEach((function(e){e.before_html&&(t+=e.before_html),t+='<div class="formData">',e.inputs.forEach((function(a){e.label_after?t+='<input class="'.concat(!!e.input_class&&e.input_class,'" type="').concat(e.type,'" id="').concat(a.id,'" name="').concat(e.name,'" ').concat(!!a.required&&"required",' /><label class="').concat(!!e.label_class&&e.label_class,'" for="').concat(a.id,'">').concat(a.label,"</label>\n                    "):t+='<label class="'.concat(!!e.label_class&&e.label_class,'" for="').concat(a.id,'">').concat(a.label,'</label><br>\n                    <input class="').concat(!!e.input_class&&e.input_class,'" type="').concat(e.type,'" id="').concat(a.id,'" name="').concat(e.name,'" ').concat(!!a.required&&"required"," />")})),t+="</div>"})),t+='<input class="btn-submit" type="submit" class="button" value="'.concat(this.form.submit,'" /></form>'),e.innerHTML=t,this.formEl=document.querySelector("#"+this.form.id)}},{key:"validateAllData",value:function(){var e=this,t=this.formEl.querySelectorAll(".formData"),a=[];return t.forEach((function(t){e.validateSingleData(t)?a.push(0):a.push(1)})),a.length===t.length&&0===a.reduce((function(e,t){return e+t}),0)}},{key:"validateSingleData",value:function(e){var t,a=e.querySelectorAll("input");switch(a[0].type){case"text":return t="Veuillez entrer au minimum 2 caractères !",a[0].value.length<2?(this.displayError(e,t),!1):(this.hideError(e),this.data[a[0].name]=a[0].value,!0);case"email":return t="Adresse Email invalide, merci de modifier",a[0].value.match(/^([\w.-]+)@([\w-]+)((\.(\w){2,6})+)$/)?(this.hideError(e),this.data[a[0].name]=a[0].value,!0):(this.displayError(e,t),!1);case"number":return t="Merci d'entrer une valeur numérique",a[0].value.match(/^\d+$/)?(this.hideError(e),this.data[a[0].name]=a[0].value,!0):(this.displayError(e,t),!1);case"radio":t="Merci de sélectionner une localité";var i=a[0].parentElement.querySelectorAll(":checked");return 1!==i.length?(this.displayError(e,t),!1):(this.hideError(e),this.data[i[0].name]=i[0].value,!0);case"checkbox":t="Merci de cocher la case conditions générales";var n=0,r={};return a.forEach((function(e){!e.checked&&e.hasAttribute("required")?n+=1:r[e.id]=e.checked})),0!==n?(this.displayError(e,t),!1):(this.hideError(e),this.data[a[0].name]=r,!0);case"date":t="Veuillez saisir une date de naissance valide";var o=Date.parse(a[0].value),s=Date.now(),l=Date.parse("1920-01-01");return!isNaN(o)&&l<=o&&o<s?(this.hideError(e),this.data[a[0].name]=a[0].value,!0):(this.displayError(e,t),!1)}}},{key:"displayError",value:function(e,t){e.setAttribute("data-error",t),e.setAttribute("data-error-visible",!0)}},{key:"hideError",value:function(e){e.setAttribute("data-error-visible",!1)}},{key:"displayLoading",value:function(){var e=this.formEl.querySelector("input[type=submit]");this.formEl.className="sending",e.setAttribute("value","Envoi...")}},{key:"displaySuccessMsg",value:function(e){var t=this.formEl.offsetHeight,a=this.formEl.querySelector("input[type=submit]");this.sent=!0,this.formEl.querySelector(".success-msg").innerHTML=e,this.formEl.className="sending--success",this.formEl.style.height=t+"px",a.setAttribute("value","Fermer")}},{key:"send",value:function(e){var t=this;console.log(e),new Promise((function(e,a){t.displayLoading(),setTimeout((function(){return e("Success!")}),2e3)})).then((function(e){console.log(e),"Success!"===e&&t.displaySuccessMsg("Merci pour<br>votre inscription")})).catch((function(e){console.log(e),t.displaySuccessMsg("Une erreur est survenue<br>merci de rééssayer")}))}}],a&&n(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),o=document.getElementById("myTopnav"),s=document.querySelector(".main-navbar");new a("reservation-modal",r,{id:"reservation-form",name:"reserve",action:"index.html",method:"post",submit:"C'est parti",data:[{type:"text",name:"first",input_class:"text-control",inputs:[{label:"Prénom",id:"first"}]},{type:"text",name:"last",input_class:"text-control",inputs:[{label:"Nom",id:"last"}]},{type:"email",name:"email",input_class:"text-control",inputs:[{label:"E-mail",id:"email"}]},{type:"date",name:"birthdate",input_class:"text-control",inputs:[{label:"Date de naissance",id:"birthdate"}]},{type:"number",name:"quantity",input_class:"text-control",inputs:[{label:"À combien de tournois GameOn avez-vous déjà participé ?",id:"quantity"}]},{type:"radio",name:"location",label_after:!0,before_html:'<p class="text-label">A quel tournoi souhaitez-vous participer cette année ?</p>',label_class:"checkbox-label",input_class:"checkbox-input",inputs:[{label:'<span class="checkbox-icon"></span>New York',id:"location1"},{label:'<span class="checkbox-icon"></span>San Francisco',id:"location2"},{label:'<span class="checkbox-icon"></span>Seatle',id:"location3"},{label:'<span class="checkbox-icon"></span>Chicago',id:"location4"},{label:'<span class="checkbox-icon"></span>Boston',id:"location5"},{label:'<span class="checkbox-icon"></span>Portland',id:"location6"}]},{type:"checkbox",name:"user-approval",label_after:!0,label_class:"checkbox2-label",input_class:"checkbox-input",inputs:[{label:"<span class=\"checkbox-icon\"></span>J'ai lu et accepté les conditions d'utilisation.",id:"terms-of-use",required:!0},{label:'<span class="checkbox-icon"></span>Je souhaite être prévenu des prochains évènements.',id:"newsletter"}]}]}),window.onresize=function(){o.classList.remove("responsive"),s.style.removeProperty("height")},window.editNav=function(){"topnav"===o.className?(o.className+=" responsive",s.style.height=s.scrollHeight+"px"):(o.className="topnav",s.style.height="0px")}}();